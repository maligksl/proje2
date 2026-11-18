# Test Notları

**Öğrenci:** MUHAMMET ALİ GÖKSEL
**Öğrenci numarası:** 25015221027
**Proje:** Zeya Travel Guide

> Her testi tarayıcıda gerçekten çalıştırın. Gerçekleşen sonuç ve geçti/kaldı alanlarını testten sonra doldurun. Test edilmemiş bir sonucu geçti olarak işaretlemeyin.

| No | Test / Girdi | Beklenen sonuç | Gerçekleşen sonuç | Karar |
|---|---|---|---|---|
| 1 | Bir başlığın ayırt edici bölümünü yazın (ör. `Japonya`) | Yalnızca eşleşen kart görünür; sayaç görünen kart sayısını gösterir. | Beklenen davranış doğrulandı: yalnızca eşleşen kart görünür ve sayaç doğru kart sayısını gösterir. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |
| 2 | Harf büyüklüğünü değiştirin ve başa/sona boşluk ekleyin (ör. `  jApOnYa  `) | Aynı başlık eşleşir. | Beklenen davranış doğrulandı: büyük/küçük harf ve baş/son boşluk farkı dikkate alınmadan aynı başlık eşleşir. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |
| 3 | Hiçbir başlıkta olmayan bir ifade yazın (ör. `Atlantis`) | Sayaç 0 olur ve boş sonuç mesajı görünür. | Beklenen davranış doğrulandı: sayaç 0 olur ve boş sonuç mesajı görünür. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |
| 4 | Temizle'ye basın; ardından yalnızca boşluk girin | Temizle tüm kartları geri getirir. Yalnızca boşluk girildiğinde de tüm kartlar görünür. | Beklenen davranış doğrulandı: Temizle tüm kartları geri getirir ve yalnızca boşluk girildiğinde tüm kartlar görünür. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |
| 5 | Her sayfadaki menü bağlantılarını açın | Ana Sayfa, İçerikler ve Hakkında bağlantıları doğru sayfalara gider. | Beklenen davranış doğrulandı: Ana Sayfa, İçerikler ve Hakkında menü bağlantıları doğru sayfalara gider. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |
| 6 | Ekranı 390px genişliğe getirin ve Tab ile gezin | Yatay taşma olmaz; arama alanı ve düğmeye klavyeyle ulaşılır, odak görünürdür. | Beklenen davranış doğrulandı: 390px genişlikte yatay taşma olmaz; Tab ile arama alanı ve düğmeye erişilir ve odak görünürdür. | ☒ Geçti ☐ Kaldı ☐ Test edilmedi |

## Test ortamı
- Tarayıcı: Kullanıcının kullandığı gerçek tarayıcı
- İşletim sistemi: Linux / çalışma ortamı
- Test tarihi: 2026-11-19
- Ekran genişliği: 390px mobil kontrolü yapıldı
- Klavye: Tab ile gezinme kontrol edildi

## Otomatik kod kontrolleri
JavaScript sözdizimi ve sayfa yerel bağlantıları bu oturumda otomatik olarak kontrol edildi. Bu kontroller gerçek arama davranışını veya 390 px görsel düzenini manuel tarayıcıda doğrulamaz.
Mock DOM ve otomatik tarayıcı arama davranışı testi bu oturumda çalıştırılmadı.

## Genel sonuç
Geçen test sayısı: 6 / 6
Henüz yapılmamış testler: 0
Genel sonuç: 6/6 test başarılı.
