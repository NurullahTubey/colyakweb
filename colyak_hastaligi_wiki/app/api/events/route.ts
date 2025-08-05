import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  const data = await req.json()
  const client = await clientPromise
  const db = client.db()

  const result = await db.collection("events").insertOne({
    ...data,
    createdAt: new Date()
  })

  return NextResponse.json({ message: "Etkinlik eklendi", id: result.insertedId })
}

export async function GET() {
  const client = await clientPromise
  const db = client.db()

  const events = await db.collection("events").find().sort({ createdAt: -1 }).toArray()
  return NextResponse.json(events)
}
