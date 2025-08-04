import Link from "next/link"
import { Heart, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-3 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-400" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Kütahya</span>
                <span className="text-sm text-gray-400 leading-none">Çölyak Derneği</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Çölyak hastalığı ile yaşayan bireyler ve aileler için güvenli bir topluluk. Bilgi, destek ve farkındalık
              ile birlikte.
            </p>
            <div className="flex space-x-2">
            <Link href="https://www.facebook.com/groups/167792610607397" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="https://www.instagram.com/explore/locations/2138100432963544/kutahya-colyak-ve-pku-metabolik-hastalklar-dernegi/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
            </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-16">
            <h3 className="font-semibold text-lg">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/celyak-nedir" className="text-gray-300 hover:text-white transition-colors">
                  Çölyak Nedir?
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Kütahya Merkez</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@kutahyacelyak.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Kütahya Çölyak Derneği. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                Hakkımızda
              </Link>
              <Link href="/celyak-nedir" className="text-gray-400 hover:text-white transition-colors">
                Çölyak Nedir?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
