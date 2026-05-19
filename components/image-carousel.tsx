"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  alt: string
  autoPlayInterval?: number
  className?: string
}

export function ImageCarousel({ 
  images, 
  alt, 
  autoPlayInterval = 3000,
  className 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isHovered || images.length <= 1) return

    const interval = setInterval(nextImage, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isHovered, images.length, autoPlayInterval, nextImage])

  if (images.length === 0) return null

  return (
    <div 
      className={cn("relative overflow-hidden group/carousel", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            )}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              prevImage()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/70 hover:border-cyan-500/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              nextImage()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/70 hover:border-cyan-500/50"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(index)
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "w-6 bg-gradient-to-r from-cyan-400 to-purple-500" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-xs text-white/80 border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
