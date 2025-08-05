import { useState, useEffect } from "react"

type Event = {
  _id?: string
  id?: string
  title: string
  description: string
  date: string
  time: string
  location: string
  images: string[]
  createdAt?: string
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  const fetchEvents = async () => {
    const res = await fetch("/api/events")
    const data = await res.json()
    setEvents(data.map((event: any) => ({
      ...event,
      id: event._id // MongoDB ObjectId’yi `id` olarak eşle
    })))
  }

  const addEvent = async (event: Event) => {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    })
    if (res.ok) {
      fetchEvents()
    }
  }

  const deleteEvent = async (id: string) => {
    const res = await fetch(`/api/events/${id}`, {
      method: "DELETE"
    })
    if (res.ok) {
      fetchEvents()
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return { events, addEvent, deleteEvent }
}
