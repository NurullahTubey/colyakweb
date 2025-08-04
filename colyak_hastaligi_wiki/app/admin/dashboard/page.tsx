"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Upload, 
  Calendar, 
  MapPin, 
  LogOut, 
  AlertTriangle,
  CheckCircle,
  X
} from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEvents } from "@/hooks/use-events"

export default function AdminDashboard() {
  const { events, addEvent, deleteEvent } = useEvents()
  const [isAddingEvent, setIsAddingEvent] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: ""
  })
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [imagePreview, setImagePreview] = useState<string[]>([])
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Admin kontrolü
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn")
    if (!isLoggedIn) {
      router.push("/admin")
      return
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn")
    router.push("/admin")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    if (uploadedImages.length + files.length > 3) {
      setMessage({ type: 'error', text: 'En fazla 3 resim yükleyebilirsiniz!' })
      return
    }

    setUploadedImages(prev => [...prev, ...files])

    // Preview oluştur
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(prev => [...prev, e.target?.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
    setImagePreview(prev => prev.filter((_, i) => i !== index))
  }

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.description || !newEvent.date || !newEvent.time || !newEvent.location) {
      setMessage({ type: 'error', text: 'Lütfen tüm alanları doldurun!' })
      return
    }

    addEvent({
      ...newEvent,
      images: imagePreview
    })

    // Formu temizle
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: ""
    })
    setUploadedImages([])
    setImagePreview([])
    setIsAddingEvent(false)
    setMessage({ type: 'success', text: 'Etkinlik başarıyla eklendi!' })

    // 3 saniye sonra mesajı temizle
    setTimeout(() => setMessage(null), 3000)
  }

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id)
    setMessage({ type: 'success', text: 'Etkinlik silindi!' })
    setTimeout(() => setMessage(null), 3000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Kütahya Çölyak Derneği Yönetim Paneli
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {message && (
          <Alert className={`mb-6 ${message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            {message.type === 'success' ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        {/* Add Event Button */}
        <div className="mb-8">
          <Button 
            onClick={() => setIsAddingEvent(true)} 
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Yeni Etkinlik Ekle
          </Button>
        </div>

        {/* Add Event Form */}
        {isAddingEvent && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Yeni Etkinlik Ekle</CardTitle>
              <CardDescription>
                Etkinlik bilgilerini ve resimlerini girin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Etkinlik Başlığı</Label>
                  <Input
                    id="title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Etkinlik başlığını girin"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Konum</Label>
                  <Input
                    id="location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Etkinlik konumunu girin"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Tarih</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Saat</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Açıklama</Label>
                <Textarea
                  id="description"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Etkinlik açıklamasını girin"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Resimler (En fazla 3 adet)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Resim yüklemek için tıklayın veya sürükleyin
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    Resim Seç
                  </Button>
                </div>

                {/* Image Previews */}
                {imagePreview.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {imagePreview.map((preview, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          width={200}
                          height={150}
                          className="rounded-lg object-cover w-full h-32"
                        />
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-2 right-2 h-6 w-6 p-0"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button onClick={handleAddEvent} className="bg-green-600 hover:bg-green-700">
                  Etkinlik Ekle
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsAddingEvent(false)
                    setNewEvent({
                      title: "",
                      description: "",
                      date: "",
                      time: "",
                      location: ""
                    })
                    setUploadedImages([])
                    setImagePreview([])
                  }}
                >
                  İptal
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Events List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Mevcut Etkinlikler ({events.length})
          </h2>

          {events.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Henüz etkinlik eklenmemiş. İlk etkinliği eklemek için yukarıdaki butonu kullanın.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(event.date)} - {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                                             <Button
                         variant="destructive"
                         size="sm"
                         onClick={() => handleDeleteEvent(event.id)}
                       >
                         Sil
                       </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    
                    {event.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-4">
                        {event.images.map((image, index) => (
                          <Image
                            key={index}
                            src={image}
                            alt={`Event image ${index + 1}`}
                            width={200}
                            height={150}
                            className="rounded-lg object-cover w-full h-32"
                          />
                        ))}
                      </div>
                    )}

                    <div className="mt-4">
                      <Badge variant="secondary">
                        Eklenme: {formatDate(event.createdAt)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 