# Bu siteyi nereden düzenleyeceğim?

En önemli dosya **`index.html`**. Metinlerin neredeyse tamamı burada.

GitHub'da `index.html` dosyasını açıp sağ üstteki **kalem (Edit this file)** simgesine basabilirsiniz. Kod içinde şu başlıkları arayın:

- `EDIT HERE: HERO / INTRO TEXT`
- `EDIT HERE: RESEARCH INTERESTS`
- `EDIT HERE: PUBLICATIONS / CURRENT WORK`
- `EDIT HERE: TALKS & CONFERENCES`
- `EDIT HERE: TEACHING`
- `EDIT HERE: CV / BIO`
- `EDIT HERE: PERSONAL PHOTO GALLERY`
- `EDIT HERE: CONTACT & LINKS`

Bu yorum satırlarının altındaki normal görünen İngilizce cümleleri değiştirmek güvenlidir. `<...>` ile başlayan HTML etiketlerine dokunmadan yalnızca metni değiştirmeniz yeterli.

## Fotoğraf değiştirmek

Fotoğraflar `assets/` klasöründedir. En kolay yöntem:

1. Yeni fotoğrafınızı örneğin `new-photo.jpg` adıyla `assets/` klasörüne yükleyin.
2. `index.html` içinde eski dosya adını bulun; örneğin `assets/lake-portrait.webp`.
3. Bunu `assets/new-photo.jpg` olarak değiştirin.
4. **Commit changes** deyin.

Hero fotoğrafı CSS içinden çağrılıyor. Onu değiştirmek için `styles.css` dosyasında `assets/hero-sunset.webp` ifadesini arayın ve yeni dosya adıyla değiştirin.

## Yeni yayın eklemek

`index.html` içinde `publication-list` bölümüne gidin. Aşağıdaki bloğu kopyalayıp başlık/yıl/dergi bilgisini değiştirin:

```html
<article class="publication">
  <div class="pub-year">2026</div>
  <div>
    <h3>Makale başlığı</h3>
    <p><em>Dergi adı</em>.</p>
  </div>
</article>
```

## Yeni konferans / sunum eklemek

`timeline` bölümünde mevcut konferans kartlarından birini kopyalayın. Tarih, konferans, başlık ve açıklamayı değiştirin.

## İletişim bilgisi değiştirmek

`CONTACT & LINKS` yorumunu bulun. E-posta, ORCID ve profil linklerini doğrudan oradan değiştirebilirsiniz.

## Görünüm / renk değiştirmek

`styles.css` dosyasının en başındaki `:root` bölümünde renkler vardır. Örneğin:

- `--teal`: ana vurgu rengi
- `--teal-dark`: koyu vurgu rengi
- `--soft`: açık bölüm arka planı

İlk aşamada CSS'e dokunmanız gerekmiyor.
