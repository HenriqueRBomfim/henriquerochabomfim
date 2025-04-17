import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 0) {
        axios.get(`/api/search?name=${query}`) // Usando a URL relativa
          .then(res => setResults(res.data))
          .catch(() => setResults([]))
      } else {
        setResults([])
      }
    }, 300)
    return () => clearTimeout(delayDebounce)
  }, [query])

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Buscar jogador..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full max-w-md p-2 border rounded shadow-sm"
      />
      {results.length > 0 && (
        <ul className="bg-white border rounded shadow mt-2 max-w-md">
          {results.map(player => (
            <li key={player.id} className="p-2 border-b">
              <strong>{player.name}</strong> — {player.score} pts — {player.time_survived}s
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
