# Nuxt 3 E-Commerce App

## Overview

This repo built with Nuxt3 & Vue3 and Pinia.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Docker Setup

### Build Docker Image

```bash
docker build -t nuxt-e-commerce .
```

### Run Docker Image

```bash
docker run -p 3000:3000 -d nuxt-e-commerce
```

## Questions & Answers

### 1) Tercih ettiğiniz geliştirme ortamları nelerdir?

Güncel olarak Webstorm, VSCode, Goland, PyCharm kullanıyorum.

### 2) DOM manipülasyonu nedir? Önemini açıklayınız?

DOM: HTML için kullanılan döküman nesne modelidir (document object model). Yani kısacak özetleyecek olursak;
DOM, HTML, XML gibi belgelerin diğer programlama dilleri veya script dilleriyle iletişim kurabilmesini sağlamak için
geliştirilmiş bir arabirimdir. DOM manipülasyonu ile htmldeki öğelerimize etki edebiliriz.

### 3) Reactive frameworklerdeki SSR yapısının en önemli noktaları nelerdir?

Sunucu tarafından oluşturmanın en büyük etki sağladığı konulardan bir tanesi Arama Motoru Optimizasyonu SEO’dur.
Sayfalar kusursuz bir şekilde taranır ve dizine eklenilir.
Sayfaların daha hızlı indexlenmesine, hızına direk etki ettiği için yapığımız web sayfaları arama sıralarında öncelik
kazanır.

### 4) JavaScript’te this ifadesi nasıl çalışıyor ve neyi ifade ediyor?

Javascript this kelimesi ait olduğu nesneyi ifade eder. Nerede kullanıldığına bağlı olarak farklı değerler alabilir.
Örneğin:

- Bir metot içerisinde kullanıldığı zaman ait olduğu nesneyi temsil eder.
- Tek başına kullanıldığı zaman global bir nesneyi temsil eder.
- Bir fonksiyon içerisinde kullanılırsa global bir nesneyi ifade eder.
- Eğer katı modda bir fonksiyonun içerisinde kullanılırsa undefined yani tanımsız değerini döndürür.
- Bir olayda (tıklama, çift tıklama gibi) olayın gerçekleştiği elementi temsil eder.

### 5) Modern framework neden kullanmalıyız?

Günümüz frameworkleri birçok konuda bizlere avantajlar sağlamaktadır. Örneğin SSR ya da universal rendering, daha
optimize kod, performans, kod kalabalığının azaltılması gibi.

### 6) Component yapısını açıklayınız.

Günümüzde kullandığımız websiteleri ya da mobil uygulamalar birden fazla parçadan oluşmaktadır. Componentlar ise burada
devreye girmektedir. Bizi kod kalabalığından kurtarmaktadır. Örneğin sitede kullanacağımız navigation bar için 
NavBar.vue diye bir component oluşturabilirim. Ve bu componentı websitemin her yerinde kullanabilirim.

### 7)  Langırt deneyiminiz var mı,ne kadar iyisiniz ve deneyiminiz varsa langırtta altın kural nedir?

Basit de olsa langırt deneyimim var. Langırtın altın kuralı fırfır yasak diyip **fırfır yapmaktır**.

### 8) Happy hour’da tercih edeceğiniz içecek nedir?

Menüde neler olduğunu bilmediğim için şu anlık seçmek doğru olmaz diye düşünüyorum.

### 9) Spotify beğeni listenizdeki son üç şarkıyı bizimle paylaşır mısınız?

1) **Rage Talk - Eru**
2) **4X4 - Maho G**
3) **Dark Knight Dummo - Trippie Red, Travis Scott**

### Bonus Soru: Herhangi bir sebepten dolayı yazılım sektörü sona erseydi, hangi mesleği yapmak isterdiniz?

Eğer yazılımcı olmasaydım girişimci olmak isterdim. Gerçi hala olabilirim. Kim bilir, belki de gelecekte...
