"use server"
import { CityData, ISSData, WeatherData } from "@/types/types"


export async function getCityWiki(cityName: string): Promise<CityData | null> {
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cityName)}`, {
      next: { 
        revalidate: 60 * 60 * 24 * 30 // 30 days
      }
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getISSData(): Promise<ISSData> {
  try {
    const res = await fetch("http://api.open-notify.org/iss-now.json", {
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error("ISS API failed")
    const data = await res.json()
    return {
      iss_position: {
        latitude: Number.parseFloat(data.iss_position.latitude).toFixed(4),
        longitude: Number.parseFloat(data.iss_position.longitude).toFixed(4),
      },
      timestamp: data.timestamp,
    }
  } catch {
    // Fallback to simulated data if API fails
    const p = ((Date.now() / 1000) % 5580) / 5580
    const lat = Math.sin(p * Math.PI * 2) * 51.6
    const lon = ((p * 360 - 180) % 360) - 180
    return {
      iss_position: { latitude: lat.toFixed(4), longitude: lon.toFixed(4) },
      timestamp: Math.floor(Date.now() / 1000),
    }
  }
}

export async function getWeather(city: string): Promise<WeatherData | null> {
  try {
    const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`, {
      headers: { "User-Agent": "CityExplorer/1.0" },
      next: { revalidate: 60 * 30 }, // 30 minutes
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

