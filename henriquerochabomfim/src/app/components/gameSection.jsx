import { useEffect, useState } from 'react'
import axios from 'axios'
import { Trophy, Clock, User } from 'lucide-react'
import { motion } from "framer-motion"
import SearchBar from './searchBar'

export default function GameSection() {
  const [topPlayers, setTopPlayers] = useState([])

  useEffect(() => {
    axios.get('/api/top')
      .then(res => setTopPlayers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="mt-6">
      <div className="mt-6 max-w-screen-md mx-auto px-4">
        <h4 className="text-m font mt-6">
          Obs: Só funciona em notebook e computador. Esses jogos fazem parte da minha campanha de intercâmbio! Então, se curtir a experiência, considere fazer uma doação de qualquer valor via PIX: henriquerochaintercambio@hotmail.com. Toda contribuição faz diferença!
        </h4>
      </div>

      {/* {topPlayers.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">🏆 Ranking Top 5</h4>
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-4 min-w-[300px] sm:min-w-[400px]">
              {topPlayers.map((player, index) => {
                const medalEmojis = ["🥇", "🥈", "🥉", "🎖️", "🎖️"]
                const positionColors = [
                  {
                    bg: "bg-yellow-100",
                    border: "border-yellow-400",
                    text: "text-yellow-700",
                  },
                  {
                    bg: "bg-gray-100",
                    border: "border-gray-400",
                    text: "text-gray-700",
                  },
                  {
                    bg: "bg-orange-100",
                    border: "border-orange-400",
                    text: "text-orange-700",
                  },
                  {
                    bg: "bg-blue-50",
                    border: "border-blue-300",
                    text: "text-blue-700",
                  },
                  {
                    bg: "bg-blue-50",
                    border: "border-blue-300",
                    text: "text-blue-700",
                  },
                ]

                const { bg, border, text } = positionColors[index] || positionColors[4]
                const emoji = medalEmojis[index] || "🎖️"

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className={`flex items-center gap-4 min-w-[300px] ${bg} ${border} border p-3 rounded shadow-sm`}
                  >
                    <span className={`text-xl w-6 ${text}`}>{emoji}</span>
                    <span className={`text-xl font-bold w-6 ${text}`}>
                      #{index + 1}
                    </span>
                    <User className="w-5 h-5 text-gray-700" />
                    <span className="font-medium">{player.name}</span>
                    <Trophy className="w-5 h-5 text-green-600 ml-4" />
                    <span className="text-green-700">{player.score} pts</span>
                    <Clock className="w-5 h-5 text-blue-600 ml-4" />
                    <span className="text-blue-700">{player.time_survived}s</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <SearchBar /> */}

      <div className="flex flex-col items-center gap-8 mt-8">
        {/* Jogo 1 */}
        <div className="w-full flex justify-center">
          <iframe
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            id="game_drop"
            src="https://html-classic.itch.zone/html/13454905/index.html"
            className="w-full max-w-5xl h-[700px] border-0"
          ></iframe>
        </div>

        {/* Jogo 2 */}
        <div className="w-full flex justify-center">
          <iframe
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            id="grave_digger"
            src="https://html-classic.itch.zone/html/13868390/GraveDiggerV1.0.2/index.html"
            className="w-full max-w-5xl h-[700px] border-0"
          ></iframe>
        </div>
      </div>

      <h4 className="text-m font mt-6">
        Curtiu os jogos? Toda contribuição me ajuda a financiar meu intercâmbio – compartilhe também para apoiar essa jornada! ✈️🌍
      </h4>
    </div>
  )
}
