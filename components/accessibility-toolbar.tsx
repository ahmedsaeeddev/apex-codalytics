"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Settings, Type, Eye, Volume2, X, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

type FontSize = "base" | "lg" | "xl"

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>("base")
  const [highContrast, setHighContrast] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is mounted before running client-side code
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleToolbar = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const increaseFontSize = useCallback(() => {
    setFontSize((prev) => {
      if (prev === "base") return "lg"
      if (prev === "lg") return "xl"
      return "xl" // Max size
    })
  }, [])

  const decreaseFontSize = useCallback(() => {
    setFontSize((prev) => {
      if (prev === "xl") return "lg"
      if (prev === "lg") return "base"
      return "base" // Min size
    })
  }, [])

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => !prev)
  }, [])

  const speakText = useCallback(() => {
    // Add safety checks for browser compatibility
    if (typeof window === "undefined") return

    try {
      if (!window.speechSynthesis) {
        console.warn("Speech synthesis not supported in this browser.")
        return
      }

      const mainContent = document.getElementById("main-content")
      if (!mainContent) {
        console.warn("Main content area not found for text-to-speech.")
        return
      }

      const textToSpeak = mainContent.innerText || mainContent.textContent || ""
      if (!textToSpeak.trim()) {
        console.warn("No text content found to read.")
        return
      }

      // Stop any ongoing speech
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(textToSpeak.slice(0, 1000)) // Limit text length
      utterance.lang = document.documentElement.lang || "en-US"
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8

      window.speechSynthesis.speak(utterance)
    } catch (error) {
      console.error("Error with text-to-speech:", error)
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return

    try {
      const html = document.documentElement
      if (!html) return

      // Apply font size class
      html.classList.remove("font-size-lg", "font-size-xl")
      if (fontSize !== "base") {
        html.classList.add(`font-size-${fontSize}`)
      }

      // Apply high contrast class
      if (highContrast) {
        html.classList.add("high-contrast")
      } else {
        html.classList.remove("high-contrast")
      }
    } catch (error) {
      console.error("Error applying accessibility settings:", error)
    }
  }, [fontSize, highContrast, isMounted])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <>
       
    </>
  )
}
