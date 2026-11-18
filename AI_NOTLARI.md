# Yapay Zekâ Kullanım ve Kod İnceleme Notları

**Öğrenci:** MUHAMMET ALİ GÖKSEL
**Öğrenci numarası:** 25015221027
**Proje:** Zeya Travel Guide

Bu belge, bu oturumda elde edilen gerçek Copilot/Copilot SDK işlemlerini ve öğrencinin inceleme kararlarını kaydetmek içindir. Gerçekleştirilmemiş işlem, başarı veya test sonucu uydurulmayacaktır.

## Gerçek prompt kayıtları

### Prompt 1 - Kapsam incelemesi
**Amaç:** Mevcut Zeya Travel Guide dosya yapısını ve BPR201 proje gereksinimlerini incelemek; henüz dosya değiştirmeden eksikleri dosya adlarıyla raporlama.

**Kullanılan araç:** Copilot SDK / VS Code
**Gerçek öneri:** Üç sayfanın, altı kartın, arama/boş mesaj/temizleme davranışının ve teslim belgelerinin kod üzerinden incelenmesi.

**Değerlendirme:** Dosya yapısını koruma ve hataların dosya adıyla raporlanması önerisi kabul edildi. Değişiklik yapılmadan önce bütün ilgili dosyalar incelendi.

### Prompt 2 - Arama sisteminin doğrulanması
**Amaç:** Aramanın yalnızca `h2` başlıklarını kullanmasını, Türkçe büyük/küçük harf farkını, boşluk temizleme, sayaç, boş mesaj ve temizleme davranışını incelemek.

**Kullanılan araç:** Copilot SDK / VS Code
**Gerçek öneri:** Boş sonuç mesajının `aria-live="polite"` ile duyurulması ve arama kutusunun tarayıcı yerleşik temizleme olayının `search` listener'ıyla eşleştirilmesi.

**Değerlendirme:** Bu iki erişilebilirlik ve kullanım iyileştirmesi kabul edildi ve ilgili HTML/JavaScript dosyalarında uygulandı.

### Prompt 3 - Eksiksiz proje geliştirme
**Amaç:** Kullanıcının yeni yönergesine göre Hakkında sayfasını proje odaklı hâle getirmek; ülke rehberlerini kaldırmak; kartları İçerikler sayfasına bağlamak; üç sayfa ve teslim belgelerini tamamlamak.

**Kullanılan araç:** Copilot SDK / VS Code
**Gerçek öneri:** Mevcut mimariyi koruyan HTML/CSS/JavaScript düzenlemeleri, Hakkında sayfasında yalnızca proje açıklamasını tutan sade yapı ve gerçek test sonuçlarının ayrı tutulması.

**Değerlendirme:** Kapsamlı düzenlemeler mevcut dosya yapısını bozmadan uygulandı. Gerçek tarayıcı testleri henüz yapılmadığı için test notları başarılı olarak işaretlenmedi. Arama normalizasyonuna büyük/küçük harf yanında Türkçe I/İ farkını da kapsayan düzenleme eklenmesi kabul edildi.

## Kod açıklamaları

### Event listener nedir?
`addEventListener`, bir HTML öğesinde klavye, fare veya tarayıcı tarafından tetiklenen bir olayı dinler. Bu projede `input` yazı değiştiğinde aramayı, `search` tarayıcı temizleme işleminden sonra aramayı, `click` temizleme düğmesini ve `keydown` Escape tuşunu işler.

### Filtreleme koşulu nasıl çalışır?
Kullanıcının arama metni `trim()` ile başındaki/sonundaki boşluklardan, `toLocaleLowerCase("tr-TR")` ile büyük/küçük harf farkından arındırılır. Her kartın yalnızca `h2` başlığı aynı dönüşümden geçer. `title.includes(searchTerm)` doğruysa kart görünür ve sayaç artar; yanlışsa `card.hidden = true` yapılır. Boş metin tüm başlıklarda eşleştiği için tüm kartlar görünür.

## Kabul/red kararı
- Kabul edilen: Arama kutusu için `search` olayı, boş mesaj için canlı bölge, İçerikler kartlarına sayfa içi bağlantılar, Escape tuşuyla mobil menü kapatma ve görsel yedekleri.
- Henüz gerçek ortamda doğrulanmayan: 390 px taşma testi, Tab ile gezinme, dış görsellerin gerçek tarayıcı yüklenmesi ve manuel altı test.
