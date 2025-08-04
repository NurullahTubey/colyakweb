import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Hakkımızda
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Kütahya Çölyak Derneği
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              2018 yılından bu yana Kütahya&apos;da çölyak hastalığı ile yaşayan bireyler ve aileler için güvenli bir
              topluluk oluşturuyor, farkındalık yaratıyor ve destek sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Misyonumuz</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Çölyak hastalığı ile yaşayan bireyler ve ailelerine doğru bilgi, güvenli kaynak rehberi ve topluluk
                desteği sağlayarak, Kütahya&apos;da glutensiz yaşamı kolaylaştırmak ve hastalık hakkında farkındalık
                yaratmak.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Çölyak hastalığının toplumda doğru anlaşıldığı, glutensiz ürünlere kolay erişimin sağlandığı ve
                hastalık ile yaşayan bireylerin sosyal yaşamda hiçbir kısıtlama yaşamadığı bir Kütahya oluşturmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-3">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Çalışmalarımızı yönlendiren temel değerler
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <Card className="text-center border-2 hover:border-green-200 dark:hover:border-green-800 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Topluluk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Birlikte güçlü, birlikte destekleyici bir topluluk oluşturuyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Güvenilirlik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Doğru, güncel ve bilimsel temelli bilgi paylaşımı önceliğimiz.
                </p>
              </CardContent>
            </Card>


            <Card className="text-center border-2 hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg">Empati</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Her bireyin deneyimini anlıyor ve destekliyoruz.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tarihçemiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Kuruluşumuzdan bugüne önemli kilometre taşları</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="mr-3">
                      2018
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dernek Kuruluşu</h3>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="mr-3">
                      2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Yeni Web Sitesi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-green-50 dark:bg-green-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Yönetim Kurulumuz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Derneğimizi gönüllü olarak yöneten değerli ekibimiz
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Başkan"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Nuray SAYINER</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">Başkan</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">Çölyak ve PKU Yaşam Derneği Başkanı</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      </div>
  )
}
