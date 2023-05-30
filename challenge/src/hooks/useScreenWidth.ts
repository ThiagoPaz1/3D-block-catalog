import { useState, useEffect } from "react"

type ScreenWidth = {
  isMatch: boolean
}

export function useScreenWidth(query: string): ScreenWidth {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    checkMediaQuery()
  }, [isMatch, query]);

  function checkMediaQuery() {
    const media = window.matchMedia(query)
    
    if (media.matches !== isMatch) {
      setIsMatch(media.matches)
    }

    const listener = () => setIsMatch(media.matches)
    
    window.addEventListener("resize", listener)
    
    return () => window.removeEventListener("resize", listener)
  }

  return { isMatch }
}