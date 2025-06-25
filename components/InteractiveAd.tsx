import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight, Clock, Thermometer, Users, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function InteractiveAd() {
  const galleryImages = [
  {
    id: 0,
    src: "https://i.imgur.com/3kCmaYp.jpg/",
    // src: "0.jpg",
    alt: "Chicago Skyline",
    title: "ICONIC_SKYLINE",
    description: "MAGNIFICENT_MILE_VIEWS",
    height: 300,
    width: 400,
  },
  {
    id: 1,
    src: "https://i.imgur.com/zmrbOjc.jpg/",
    // src: "2.jpg",
    alt: "The World Famous El",
    title: "THE_WORLD_FAMOUS_EL",
    description: "NOT_TO_BE_MISSED",
    height: 300,
    width: 400,
  },
  {
    id: 2,
    src: "https://i.imgur.com/2oHJfij.jpg/",
    // src: "2.jpg",
    alt: "Home of the Goat",
    title: "HOME_OF_THE_GOAT",
    description: "REPEAT_THE_THREEPEAT",
    height: 300,
    width: 400,
  },
  {
    id: 3,
    src: "https://i.imgur.com/Hpq2kE9.jpg/",
    // src: "3.jpg",
    alt: "Chicago Fire Department",
    title: "CHICAGO_FIRE_DEPARTMENT",
    description: "CHICAGO_FIRE_DEPARTMENT",
    height: 300,
    width: 400,
  },
  {
    id: 4,
    src: "https://i.imgur.com/ypo4Iry.jpg/",
    // src: "4.jpg",
    alt: "The Bean",
    title: "THE_BEAN",
    description: "THE_BEAN",
    height: 300,
    width: 400,
  },
  {
    id: 5,
    src: "https://i.imgur.com/Sy5YNW7.jpg/",
    // src: "5.jpg",
    alt: "The Hancock Tower",
    title: "THE_HANCOCK_TOWER",
    description: "THE_HANCOCK_TOWER",
    height: 300,
    width: 400,
  },
  {
    id: 6,
    src: "https://i.imgur.com/cTPmiQg.jpg/",
    // src: "6.jpg",
    alt: "Chicago at Night",
    title: "CHICAGO_AT_NIGHT",
    description: "CHICAGO_AT_NIGHT",
    height: 300,
    width: 400,
  },
  {
    id: 7,
    src: "https://i.imgur.com/by9SBer.jpg/",
    // src: "7.jpg",
    alt: "Chicago from the lakefront",
    title: "CHICAGO_FROM_THE_LAKEFRONT",
    description: "CHICAGO_FROM_THE_LAKEFRONT",
    height: 300,
    width: 400,
  },
  {
    id: 8,
    src: "https://i.imgur.com/kfR6kjp.jpg/",
    // src: "8.jpg",
    alt: "Millennium Park",
    title: "MILLENNIUM_PARK",
    description: "MILLENNIUM_PARK",
    height: 300,
    width: 400,
  },
]


  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 rounded-3xl overflow-hidden mb-16 relative">
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          width={galleryImages[0].width}
          height={galleryImages[0].height}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="p-8 lg:p-12 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-semibold tracking-wide">FEATURED DESTINATION</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                DISCOVER
                <br />
                <span className="text-blue-400">CHICAGO</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                Experience the Windy City's iconic architecture, world-class culture, legendary deep-dish pizza, and
                stunning lakefront views.
              </p>

              <Link href="/experience/chicago">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <MapPin className="mr-3 h-5 w-5" />
                  EXPLORE CHICAGO NOW
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm border-y border-slate-700/50">
        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">4.8</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Rating</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3D</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Min Stay</div>
            </div>
            <div className="text-center">
              <Thermometer className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">22°C</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Avg Temp</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2.7M</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Visitors</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            CHICAGO <span className="text-blue-400">HIGHLIGHTS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From towering skyscrapers to cultural landmarks, discover what makes Chicago unforgettable
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-80 lg:h-full" : "h-48"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1 tracking-wide">{image.title.replace(/_/g, " ")}</h3>
                  <p className="text-blue-200 text-sm">{image.description.replace(/_/g, " ")}</p>
                </div>

                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-slate-700/50">
        <div className="p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Experience Chicago?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Book your Chicago adventure today and discover why millions of visitors fall in love with the Windy City
            every year.
          </p>

          <Link href="/experience/chicago">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              START PLANNING
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
