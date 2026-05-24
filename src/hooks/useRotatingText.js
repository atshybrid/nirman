import { useEffect, useState } from 'react'

export function useRotatingText(words, interval = 2800) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setVisible(true)
      }, 350)
    }, interval)
    return () => clearInterval(timer)
  }, [words, interval])

  return { word: words[index], visible }
}
