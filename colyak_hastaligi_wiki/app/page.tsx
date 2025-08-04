"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEvents, type Event } from "@/hooks/use-events"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const { events } = useEvents()
  const router = useRouter()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
    })
  }

  const handleEventClick = (eventItem: Event) => {
    router.push(`/etkinlik/${eventItem.id}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950 dark:to-amber-950 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Kütahya&apos;da Çölyak Hastalığı Desteği
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Kütahya Çölyak Derneği
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Çölyak hastalığı ile yaşayan bireyler ve aileler için güvenli bir topluluk. Bilgi, destek ve
                  farkındalık ile birlikte daha sağlıklı bir yaşam.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/celyak-nedir">
                    Çölyak Nedir? <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/guluten_free_family.webp"
                alt="Çölyak hastalığı ile yaşayan mutlu bir aile"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events and Announcements */}
      <section className="py-20 bg-amber-50 dark:bg-amber-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Etkinlikler ve Duyurular
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Dernek etkinliklerimiz ve önemli duyurularımız hakkında bilgi alın
              </p>
            </div>
          </div>

          <div className="relative">
            {events.length === 0 ? (
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Şu an için duyurulmuş bir etkinlik bulunmamaktadır. Yakında yeni etkinlikler eklenecektir.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 gap-4">
                  {events.map((event) => (
                    <CarouselItem key={event.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card
                        className="transition-all duration-300 cursor-pointer group overflow-hidden h-full hover:shadow-lg"
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="relative">
                          {event.images.length > 0 ? (
                            <Image
                              src={event.images[0] || "/placeholder.svg"}
                              alt={event.title}
                              width={400}
                              height={250}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center">
                              <Calendar className="h-16 w-16 text-amber-400 dark:text-amber-300" />
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <Badge
                              variant="secondary"
                              className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200"
                            >
                              {formatDate(event.date)}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {event.title}
                          </CardTitle>
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {event.description}
                            </p>
                            <div className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                              Detayları görmek için tıklayın →
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-200" />
                <CarouselNext className="right-2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-200" />
              </Carousel>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}