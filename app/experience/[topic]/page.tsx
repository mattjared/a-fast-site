import type React from "react"
import { notFound } from "next/navigation"
import { MAJOR_CITIES } from "@/lib/cities"
// import { WeatherServer } from "@/components/WeatherServer"
import { CityData } from "@/types/types"
import { ISS } from "@/components/ISS"
import { getISSData, getWeather } from "@/lib/actions"
// import { WikiCard } from "@/components/WikiCard"
import { WikiCardServer } from "@/components/WikiCardServer"
// import { WeatherClient } from "@/components/WeatherClient"
import { WeatherServer } from "@/components/WeatherServer"
import { ISSClient } from "@/components/ISSClient"

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ topic: string }>
}) {
  const { topic } = await params

  // get the city! 
  const cityInfo = MAJOR_CITIES.find((c) => c.slug === topic.toLowerCase())
  if (!cityInfo) notFound()

  // get the city wiki, iss, and weather
  // const [cityWiki, iss, weather] = await Promise.all([getCityWiki(cityInfo.name), getISSData(), getWeather(cityInfo.name)])
  
  // just get ISS and weather
  // const [iss, weather] = await Promise.all([getISSData(), getWeather(cityInfo.name)])

  // jsut get iss
  // const [iss] = await Promise.all([getISSData()])

  // get the city data
  const cityData: CityData = {
    title: cityInfo.name,
    extract: `${cityInfo.name} – dynamic demo city.`,
    coordinates: { lat: cityInfo.lat, lon: cityInfo.lon }
  }
    return (
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-6 py-12 max-w-5xl">
          <h1 className="text-center text-5xl md:text-7xl font-bold mb-12 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {cityData.title.toUpperCase()}
            </span>
          </h1>

          {/* Wiki Card */}
          {/* <WikiCard cityData={cityData} /> */}
          {cityInfo.name && <WikiCardServer cityWiki={cityInfo.name} />}

          {/* Weather Section - Server Component */}
          {cityInfo.name && <WeatherServer city={cityInfo.name} unit="C" />}
          {/* {weather && <WeatherClient weather={weather} />} */}

          {/* ISS Card */}
          {cityInfo.name && <ISSClient city={cityData} />}
          
        </main>
      </div>
    )
}

