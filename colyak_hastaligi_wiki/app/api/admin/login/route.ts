import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  const { username, password } = await req.json()

  const client = await clientPromise
  const db = client.db()

  const admin = await db.collection("admins").findOne({ username })

  if (!admin || admin.password !== password) {
    return NextResponse.json({ message: "Kullanıcı adı veya şifre yanlış" }, { status: 401 })
  }

  return NextResponse.json({ message: "Giriş başarılı" })
}
