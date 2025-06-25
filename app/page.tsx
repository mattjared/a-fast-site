import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, MapPin, Satellite, Globe, ArrowRight, Zap, Terminal } from "lucide-react"
import Link from "next/link"
import { MAJOR_CITIES } from "@/lib/cities"
import { ExternalLink } from "lucide-react"
import Header from "@/components/Header"
import { InteractiveAd } from "@/components/InteractiveAd"
// import Image from "next/image"

export default function HomePage() {
  // Generate a random city experience from our actual city list
  const generateRandomCity = () => {
    const citySlug = MAJOR_CITIES[Math.floor(Math.random() * MAJOR_CITIES.length)].slug
    return citySlug
  }
  const generateRandomColor = () => {
    const colors = ["blue", "cyan", "green", "purple", "pink", "orange", "red", "yellow"]
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
      <div>
        <main className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-300 tracking-wider">LIVE_DEMO</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight headline">
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  EXPLORE
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  ANY_CITY
                </span>
              </h2>

              <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8 tracking-wide">
                JUST TYPE ANY CITY NAME IN THE URL AND DISCOVER IT WITH LIVE ISS TRACKING.
              </p>

              {/* GitHub Repository Link */}
              <div className="mb-8">
                <Link
                  href="https://github.com/mattjared/a-fast-site"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 hover:bg-zinc-800/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold tracking-wider">VIEW_SOURCE_CODE</div>
                    <div className="text-xs text-zinc-400 tracking-wider">GITHUB.COM/MATTJARED/A-FAST-SITE</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
                </Link>
              </div>

              {/* URL Demo */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-bold text-white tracking-wider">LAUNCH YOUR OWN CITY EXPERIENCE</span>
                  <span className="text-sm font-bold text-white tracking-tighter block">CLONE THE REPO, LAUNCH TO VERCEL</span>
                </div>
                <div className="bg-black/50 border border-zinc-700 rounded-lg p-4 mb-4">
                  <code className="text-lg text-green-400 tracking-widest">
                    YOURSITE.COM/EXPERIENCE/<span className="text-cyan-400">[CITY-NAME]</span>
                  </code>
                </div>
                <p className="text-sm text-zinc-500 tracking-wide">
                  EXAMPLES: /TOKYO, /NEW-YORK, /SAO-PAULO, /LOS-ANGELES
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href={`/experience/${generateRandomCity()}`}>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:scale-105 group tracking-wider"
                  >
                    <MapPin className="mr-3 h-5 w-5" />
                    RANDOM_CITY
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="/experience/new-york-city">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 tracking-wider"
                  >
                    <Satellite className="mr-3 h-5 w-5" />
                    TRY_/NEW-YORK-CITY
                  </Button>
                </a>
              </div>
            </div>

            {/* Chicago Interactive Ad */}
            <InteractiveAd />
        

            {/* Quick Access Cities */}
            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wider">QUICK_ACCESS_CITIES</h3>
                <p className="text-zinc-400 tracking-wide">CLICK ANY CITY OR GUESS YOUR OWN IN THE URL</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {MAJOR_CITIES.map((city) => (
                  <Link key={city.slug} href={`/experience/${city.slug}`} className="group hover:opacity-80">
                    <div className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 rounded-lg p-3 text-center transition-all duration-200 group-hover:scale-105">
                      <span
                        className={`text-sm font-mono font-bold tracking-widest text-${generateRandomColor()}-400`}
                      >
                        {city.name}
                      </span>
                      <div className="text-xs text-zinc-500 mt-1 tracking-wider">/{city.slug}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-zinc-500 tracking-wide mb-4">CAN'T FIND YOUR CITY? JUST GUESS THE URL!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-3">
                    <code className="text-zinc-400 tracking-widest">
                      /EXPERIENCE/<span className="text-blue-400">LOS-ANGELES</span>
                    </code>
                  </div>
                  <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-3">
                    <code className="text-zinc-400 tracking-widest">
                      /EXPERIENCE/<span className="text-purple-400">SAO-PAULO</span>
                    </code>
                  </div>
                  <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-3">
                    <code className="text-zinc-400 tracking-widest">
                      /EXPERIENCE/<span className="text-green-400">CAPE-TOWN</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wider">GUESSABLE_URLS</h3>
                      <p className="text-zinc-400 leading-relaxed mb-4 tracking-wide">
                        NO COMPLEX IDS OR RANDOM STRINGS. JUST TYPE THE CITY NAME WITH DASHES FOR SPACES.
                        /EXPERIENCE/NEW-YORK, /EXPERIENCE/LOS-ANGELES, /EXPERIENCE/HO-CHI-MINH-CITY
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded tracking-wider">
                          INTUITIVE
                        </span>
                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded tracking-wider">
                          MEMORABLE
                        </span>
                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded tracking-wider">
                          SHAREABLE
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Satellite className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wider">LIVE_ISS_TRACKING</h3>
                      <p className="text-zinc-400 leading-relaxed mb-4 tracking-wide">
                        EVERY CITY PAGE SHOWS THE REAL-TIME DISTANCE TO THE INTERNATIONAL SPACE STATION. GET EXCITED
                        ALERTS WHEN THE ISS FLIES WITHIN 500KM OF YOUR CHOSEN CITY!
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 tracking-widest">408KM_ALTITUDE • 27,600_KM/H</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Features */}
            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wider">PERFECT_FOR_DEMOS</h3>
                <p className="text-zinc-400 tracking-wide">SHOWCASE DYNAMIC ROUTING AND REAL-TIME DATA</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Terminal className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2 tracking-wider">TYPE_&_GO</h4>
                  <p className="text-sm text-zinc-400 mb-3 tracking-wide">JUST TYPE ANY CITY NAME IN THE URL BAR</p>
                  <code className="text-xs bg-zinc-800 text-green-400 px-2 py-1 rounded tracking-widest">
                    /EXPERIENCE/PARIS
                  </code>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2 tracking-wider">INSTANT_DATA</h4>
                  <p className="text-sm text-zinc-400 mb-3 tracking-wide">WIKIPEDIA + ISS POSITION IN REAL-TIME</p>
                  <code className="text-xs bg-zinc-800 text-blue-400 px-2 py-1 rounded tracking-widest">93MIN_ORBIT</code>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2 tracking-wider">SURPRISE_ALERTS</h4>
                  <p className="text-sm text-zinc-400 mb-3 tracking-wide">EXCITING NOTIFICATIONS WHEN ISS IS NEARBY</p>
                  <code className="text-xs bg-zinc-800 text-purple-400 px-2 py-1 rounded tracking-widest">
                    &lt;500KM = 🚀
                  </code>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform tracking-wider">
                  {MAJOR_CITIES.length}
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">CITIES</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform tracking-wider">
                  ∞
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">GUESSABLE</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform tracking-wider">
                  0
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">CONFIG</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform tracking-wider">
                  100%
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">DYNAMIC</div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}
