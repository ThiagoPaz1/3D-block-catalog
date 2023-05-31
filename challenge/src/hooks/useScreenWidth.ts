import { useState, useEffect } from "react"

type ScreenWidth = {
  isMatch: boolean
}

export function useScreenWidth(screenWidth: number): ScreenWidth {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    checkMediaQuery()
  }, [isMatch, screenWidth]);

  function checkMediaQuery() {
    const media = window.matchMedia(`(max-width: ${screenWidth}px)`)
    
    if (media.matches !== isMatch) {
      setIsMatch(media.matches)
    }

    const listener = () => setIsMatch(media.matches)
    
    window.addEventListener("resize", listener)
    
    return () => window.removeEventListener("resize", listener)
  }

  return { isMatch }
}