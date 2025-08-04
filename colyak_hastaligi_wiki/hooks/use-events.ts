import { useState, useEffect } from 'react'

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  images: string[]
  createdAt: string
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Local storage'dan etkinlikleri yükle
    const savedEvents = localStorage.getItem("events")
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents))
    }

    // Local storage değişikliklerini dinle
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "events") {
        if (e.newValue) {
          setEvents(JSON.parse(e.newValue))
        } else {
          setEvents([])
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const addEvent = (event: Omit<Event, 'id' | 'createdAt'>) => {
    const newEvent: Event = {
      ...event,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    
    const updatedEvents = [newEvent, ...events]
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
    
    // Diğer sekmelerde de güncelleme için storage event tetikle
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'events',
      newValue: JSON.stringify(updatedEvents)
    }))
  }

  const deleteEvent = (id: string) => {
    const updatedEvents = events.filter(event => event.id !== id)
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
    
    // Diğer sekmelerde de güncelleme için storage event tetikle
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'events',
      newValue: JSON.stringify(updatedEvents)
    }))
  }

  return { events, addEvent, deleteEvent }
} 