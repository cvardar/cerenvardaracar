# Ceren Vardar Acar — Academic Website

Bu klasör, **GitHub Pages'e doğrudan yüklenebilen**, ek kurulum gerektirmeyen statik bir akademik web sitesidir. HTML + CSS + çok küçük bir JavaScript dosyasından oluşur. Jekyll, npm, tema kurulumu veya terminal gerekmez.

## İçerik

- `index.html` — sitenin metni ve sayfa yapısı
- `styles.css` — renkler, yazı biçimi, telefon/tablet görünümü
- `script.js` — mobil menü ve otomatik yıl
- `assets/` — fotoğraflar ve favicon
- `EDIT-ME.md` — siteyi sonradan nasıl düzenleyeceğinizi anlatır
- `.nojekyll` — GitHub Pages'in dosyaları olduğu gibi yayınlamasını kolaylaştırır

## 1) GitHub hesabı açın

`https://github.com` adresine gidin ve ücretsiz hesap oluşturun. Kullanıcı adınız sitenizin adresinde görüneceği için kısa ve profesyonel bir ad seçmeniz iyi olur. Örnek: `cerenvardaracar`.

## 2) Yeni repository oluşturun

GitHub ana sayfasında sağ üstte `+` → **New repository**.

Repository adı **tam olarak** şu biçimde olmalı:

`KULLANICIADINIZ.github.io`

Örnek kullanıcı adınız `cerenvardaracar` ise repository:

`cerenvardaracar.github.io`

Repository'yi **Public** seçin. Bu paket zaten `README.md` içerdiği için **Add a README file** seçeneğini işaretlemeyin. Sonra **Create repository** deyin.

## 3) Bu site dosyalarını yükleyin

Repository açılınca:

1. **Add file** → **Upload files**
2. Bu paketin içindeki dosya ve klasörleri yükleyin. `index.html` repository'nin en üst seviyesinde kalmalı.
3. Altta **Commit changes** düğmesine basın.

> Not: GitHub arayüzü klasör yüklemeyi tarayıcıya göre farklı gösterebilir. ZIP dosyasını tek parça yüklemek yerine ZIP'i bilgisayarınızda açıp içindeki dosyaları yükleyin.

## 4) GitHub Pages'i açın

Repository içinde:

1. **Settings**
2. Sol menü → **Pages**
3. `Build and deployment` altında **Source → Deploy from a branch**
4. Branch: **main**
5. Folder: **/(root)**
6. **Save**

Birkaç dakika sonra siteniz:

`https://KULLANICIADINIZ.github.io`

adresinde açılır.

## 5) Daha sonra yazıları nasıl değiştireceksiniz?

En kolay yol:

1. Repository'de `index.html` dosyasını açın.
2. Sağ üstte kalem simgesi → **Edit this file**.
3. Düzelteceğiniz yazıyı bulun ve değiştirin.
4. **Commit changes** deyin.
5. GitHub Pages birkaç dakika içinde yeni sürümü yayınlar.

Daha rahat bir editör isterseniz repository açıkken klavyeden **`.` (nokta)** tuşuna basın. GitHub, tarayıcı içinde VS Code benzeri `github.dev` editörünü açar. Burada soldan dosyaları seçip çok daha rahat düzenleyebilirsiniz.

Ayrıntılı düzenleme notları için **`EDIT-ME.md`** dosyasına bakın.

## 6) CV PDF eklemek

CV'nizi örneğin `CV_Ceren_Vardar_Acar.pdf` adıyla `assets/` klasörüne yükleyin. Sonra `index.html` dosyasındaki CV bölümüne şu bağlantıyı ekleyebilirsiniz:

```html
<a href="assets/CV_Ceren_Vardar_Acar.pdf" target="_blank">Download CV</a>
```

## 7) Özel alan adı isterseniz

İlk aşamada buna gerek yok. Ücretsiz `github.io` adresi yeterli. Daha sonra `cerenvardaracar.com` gibi bir alan adı satın alırsanız GitHub Pages'e bağlanabilir.

## Mevcut içerik notları

Site bu sürümde Lévy süreçleri ve fractional Brownian motion araştırmaları, seçilmiş yayınlar, seçilmiş grants/projeler, STAT 467 Multivariate Analysis dahil teaching bilgileri, EAJ 2026 İstanbul, EcoSta 2026 Kyoto ve 2024 Isaac Newton Institute davetli sunumunu içerir. Kişisel fotoğraflar `assets/` klasöründe web için optimize edilmiştir.

## Gizlilik notu

GitHub Pages ile yayınladığınız site ve içine koyduğunuz fotoğraflar internette herkese açık olur. Aile fotoğraflarından herhangi birini yayınlamak istemezseniz ilgili dosyayı `assets/` klasöründen silip `index.html` içindeki o fotoğraf satırını kaldırabilirsiniz.
