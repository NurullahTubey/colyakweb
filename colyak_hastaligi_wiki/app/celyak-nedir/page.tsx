import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Stethoscope, Heart, BookOpen } from "lucide-react"
import Image from "next/image"

export default function CeliacInfoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Sağlık Bilgisi
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Çölyak Hastalığı Nedir?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Çölyak hastalığı hakkında bilmeniz gereken her şey: semptomlar, tanı, tedavi ve yaşam kalitesi.
            </p>
          </div>
        </div>
      </section>

      {/* Important Alert */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Önemli:</strong> Bu bilgiler genel bilgilendirme amaçlıdır. Kesin tanı ve tedavi için mutlaka bir
              gastroenteroloji uzmanına başvurun.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="genel" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="genel">Genel Bilgi</TabsTrigger>
                <TabsTrigger value="semptomlar">Semptomlar</TabsTrigger>
              </TabsList>

              <TabsContent value="genel" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Çölyak Hastalığı Nedir?</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Çölyak hastalığı, genetik yatkınlığı olan kişilerde gluten alımı sonucu ince bağırsak mukozasında
                      hasar oluşturan otoimmün bir hastalıktır. Gluten, buğday, arpa, çavdar ve yulaf gibi tahıllarda
                      bulunan bir protein karışımıdır.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Hastalık her yaşta ortaya çıkabilir ve yaşam boyu sürer. Tek tedavisi yaşam boyu glutensiz diyet
                      uygulamaktır.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">%1</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Toplumda görülme sıklığı</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Glutensiz diyetle iyileşme</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/colyak-hastaligi.jpg"
                      alt="Çölyak hastalığı ince bağırsak görünümü"
                      width={900}
                      height={900}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Stethoscope className="h-5 w-5 mr-2 text-blue-500" />
                        Otoimmün Hastalık
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Bağışıklık sistemi gluten karşısında kendi dokularına saldırır.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-green-500" />
                        Genetik Yatkınlık
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        HLA-DQ2 ve HLA-DQ8 genleri hastalık riskini artırır.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-amber-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-amber-500" />
                        Yaşam Boyu
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Hastalık yaşam boyu sürer, glutensiz diyet şarttır.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="semptomlar" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Çölyak Hastalığı Semptomları
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Semptomlar kişiden kişiye değişiklik gösterebilir ve her yaş grubunda farklı şekillerde ortaya
                    çıkabilir.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      Çocuklarda Görülen Semptomlar
                    </h3>
                    <div className="space-y-4">
                      <Card className="border-l-4 border-l-red-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Sindirim Sistemi</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Kronik ishal</li>
                            <li>• Karın şişkinliği</li>
                            <li>• Karın ağrısı</li>
                            <li>• Gaz sorunu</li>
                            <li>• Kötü kokulu dışkı</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-orange-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Büyüme ve Gelişim</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Boy kısalığı</li>
                            <li>• Kilo alamama</li>
                            <li>• Gelişme geriliği</li>
                            <li>• Diş mine defektleri</li>
                            <li>• Geç puberte</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-purple-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Davranışsal</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Huzursuzluk</li>
                            <li>• Sinirlilik</li>
                            <li>• Konsantrasyon güçlüğü</li>
                            <li>• Uyku bozuklukları</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      Yetişkinlerde Görülen Semptomlar
                    </h3>
                    <div className="space-y-4">
                      <Card className="border-l-4 border-l-blue-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Sindirim Sistemi</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Kronik ishal veya kabızlık</li>
                            <li>• Karın ağrısı ve şişkinlik</li>
                            <li>• Bulantı ve kusma</li>
                            <li>• Reflü</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-green-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Genel Semptomlar</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Yorgunluk ve halsizlik</li>
                            <li>• Anemi (demir eksikliği)</li>
                            <li>• Kemik ağrıları</li>
                            <li>• Kilo kaybı</li>
                            <li>• Cilt döküntüleri</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-pink-400">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Kadınlarda</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <li>• Adet düzensizlikleri</li>
                            <li>• İnfertilite</li>
                            <li>• Tekrarlayan düşükler</li>
                            <li>• Erken menopoz</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Sessiz Çölyak:</strong> Bazı hastalarda hiç semptom görülmeyebilir. Bu duruma &ldquo;sessiz
                    çölyak&rdquo; denir ve kan testleri ile tespit edilebilir.
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}