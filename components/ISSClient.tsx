"use client"

import { haversine } from "@/lib/utils"
import { MapPin, Satellite, Zap } from "lucide-react"
import { Metric } from "./Metric"
import { CityData, ISSData } from "@/types/types"
import { useEffect, useState } from "react"

export function ISSClient({ city }: { city: CityData }) {
  const [issData, setIssData] = useState<ISSData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        setError(null)
        const data = await fetch("http://api.open-notify.org/iss-now.json");
        const json = await data.json()
        console.log(json);
        setIssData(json)
      } catch (err) {
        setError("Failed to fetch ISS data")
        console.error("ISS fetch error:", err)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately
    fetchISSData()

    // Then fetch every 30 seconds (ISS moves quickly)
    const interval = setInterval(fetchISSData, 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Satellite className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl tracking-wider text-white font-bold">INTERNATIONAL_SPACE_STATION</h2>
        </div>
        <div className="text-center text-blue-400">Loading ISS data...</div>
      </div>
    )
  }

  if (error || !issData) {
    return (
      <div className="bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Satellite className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl tracking-wider text-white font-bold">INTERNATIONAL_SPACE_STATION</h2>
        </div>
        <div className="text-center text-red-400">{error || "No ISS data available"}</div>
      </div>
    )
  }

  // Safely convert ISS coordinates to numbers
  const issLat = Number(issData.iss_position.latitude)
  const issLon = Number(issData.iss_position.longitude)
  const cityLat = Number(city.coordinates.lat)
  const cityLon = Number(city.coordinates.lon)
  const distanceKm = haversine(issLat, issLon, cityLat, cityLon)
  const issNearby = !isNaN(distanceKm) && distanceKm < 1000

  return (
    <div className="bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
          <Satellite className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl tracking-wider text-white font-bold">INTERNATIONAL_SPACE_STATION</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Metric
          icon={<Zap className="h-4 w-4 text-blue-400" />}
          bg="blue-500"
          label="LATITUDE"
          value={issData.iss_position.latitude + "°"}
        />
        <Metric
          icon={<Zap className="h-4 w-4 text-purple-400" />}
          bg="purple-500"
          label="LONGITUDE"
          value={issData.iss_position.longitude + "°"}
        />
        <Metric
          icon={<MapPin className="h-4 w-4 text-green-400" />}
          bg="green-500"
          label="DISTANCE_TO_CITY"
          value={distanceKm ? Math.round(distanceKm).toLocaleString() + " KM" : "UNAVAILABLE"}
          sub={issNearby ? "🚀 OVERHEAD!" : undefined}
        />
      </div>
      
      <div className="mt-4 text-xs text-blue-400/70 text-center">
        Last updated: {new Date(issData.timestamp * 1000).toLocaleTimeString()}
      </div>
    </div>
  )
} 