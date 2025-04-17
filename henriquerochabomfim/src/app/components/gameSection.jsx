import { useEffect, useState } from 'react'
import SearchBar from './searchBar'
import axios from 'axios'

export default function GameSection() {
  const [topPlayer, setTopPlayer] = useState(null)

  useEffect(() => {
    // Usando a URL relativa para fazer a requisição
    axios.get('/api/top') // O Vercel redireciona para o backend no Render
      .then(res => setTopPlayer(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Criei um jogo de zumbis do zero para te entreter neste site, você pode jogá-lo abaixo:</h2>
      <h3 className="text-xl font mt-6">Obs: Só funciona em notebook e computador. Abaixe o volume do seu dispositivo caso fique muito alto</h3>

      {/* {topPlayer && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          🏆 <strong>Top 1:</strong> {topPlayer.name} — {topPlayer.score} pontos — {topPlayer.time_survived}s sobrevivido
        </div>
      )} */}

      {/* <SearchBar /> */}

      <div className="flex justify-center mt-4">
        <iframe
          allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
          id="game_drop"
          src="https://html-classic.itch.zone/html/13347305/index.html"
          className="w-full max-w-5xl h-[700px] border-0"
        ></iframe>
      </div>
    </div>
  )
}
