"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Event } from "@/hooks/use-events"

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<Event | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const savedEvents = localStorage.getItem("events")
    if (savedEvents) {
      const events: Event[] = JSON.parse(savedEvents)
      const foundEvent = events.find(e => e.id === params.id)
      if (foundEvent) {
        setEvent(foundEvent)
      } else {
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }, [params.id, router])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const nextImage = () => {
    if (event && event.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === event.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (event && event.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? event.images.length - 1 : prev - 1
      )
    }
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Geri Dön
            </Button>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Event Title */}
          <div className="text-center">
            <Badge className="mb-4 bg-amber-500 hover:bg-amber-600 text-white">
              {formatDate(event.date)}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {event.title}
            </h1>
          </div>

          {/* Event Description */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </CardContent>
          </Card>

          {/* Event Images */}
          {event.images.length > 0 && (
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                  Etkinlik Görselleri
                </h2>
                
                {/* Main Image */}
                <div className="relative mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <Image
                    src={event.images[currentImageIndex]}
                    alt={event.title}
                    width={800}
                    height={500}
                    className="w-full h-64 md:h-80 object-contain rounded-lg"
                  />
                  
                  {/* Image Navigation */}
                  {event.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-lg"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-lg"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-white/90 text-gray-800 font-medium">
                          {currentImageIndex + 1} / {event.images.length}
                        </Badge>
                      </div>
                    </>
                  )}
                </div>

                {/* Image Gallery */}
                {event.images.length > 1 && (
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xl">
                      {event.images.map((image, index) => (
                        <div 
                          key={index} 
                          className="relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <Image
                            src={image}
                            alt={`${event.title} - Görsel ${index + 1}`}
                            width={300}
                            height={200}
                            className={`w-full h-24 object-contain transition-all duration-300 ${
                              currentImageIndex === index 
                                ? 'ring-2 ring-amber-500 scale-105' 
                                : 'group-hover:scale-110'
                            }`}
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-amber-500/30 flex items-center justify-center">
                              <Badge className="bg-white/90 text-amber-600 font-medium text-xs">
                                Seçili
                              </Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
} 