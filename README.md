# Ninnim web sitesi (ninnim.app)

Mağazaların istediği sayfalar: gizlilik politikası, kullanım koşulları, destek ve `app-ads.txt`.

- **Düz HTML + tek CSS dosyası.** Derleme adımı, JavaScript, çerez, analitik yok.
- **Üçüncü taraf isteği yok.** Yazı tipleri (Baloo 2, Nunito Sans; SIL OFL) `assets/fonts/` içinden sunulur. Her sayfada içerik güvenlik politikası (CSP) yalnızca sitenin kendi CSS, yazı tipi ve görsellerine izin verir.
- **Metinler birebir.** Gizlilik ve koşullar metinleri `docs/store/PRIVACY_POLICY.md` ve `docs/store/TERMS.md` belgelerinden alındı. Belgelerdeki "Bu belge nasıl kullanılır", "Hukukçuya sorulacaklar" ve "Kaynaklar" bölümleri yayımlanmadı.
- **Tasarım:** `docs/DESIGN_SYSTEM.md` gündüz renkleri. Cihaz karanlık temadaysa gece renkleri kullanılır. Organik blob formlar var; karakter ve mor yok.

> **Yayından önce:** Aşağıdaki §2'deki yer tutucuları doldurun ve `[LEGAL]` notlarını hukukçuyla kapatın. Yer tutucular sayfalarda turuncu zeminli, kalın ve köşeli parantezli görünür; gözden kaçmaz.

---

## 1. Dosyalar

```
site/
├── index.html                 EN ana sayfa
├── privacy/index.html         EN gizlilik politikası
├── terms/index.html           EN kullanım koşulları
├── support/index.html         EN destek (SSS + iletişim)
├── tr/
│   ├── index.html             TR ana sayfa
│   ├── gizlilik/index.html    TR gizlilik politikası + KVKK Aydınlatma Metni
│   ├── kosullar/index.html    TR kullanım koşulları
│   ├── destek/index.html      TR destek
│   ├── privacy/index.html     → /tr/gizlilik/ yönlendirmesi (mağaza metinlerindeki eski yol)
│   ├── terms/index.html       → /tr/kosullar/ yönlendirmesi
│   └── support/index.html     → /tr/destek/ yönlendirmesi
├── s/index.html               M2: paylaşılan karışım/rutin bağlantısının EN açılış sayfası (noindex)
├── tr/s/index.html            M2: aynı sayfanın TR sürümü
├── .well-known/
│   ├── apple-app-site-association   M2: iOS evrensel bağlantılar (/s/*, /play/*)
│   └── assetlinks.json              M2: Android App Links (release SHA-256 yer tutucusu)
├── 404.html                   İki dilli "sayfa bulunamadı"
├── app-ads.txt                AdMob yayıncı satırı (şimdilik yorum satırı)
├── robots.txt, sitemap.xml    Arama motorları
├── CNAME                      ninnim.app (GitHub Pages özel alan adı)
├── _config.yml                GitHub Pages: README.md yayımlanmaz
├── _headers                   Cloudflare Pages / Netlify güvenlik başlıkları
├── assets/
│   ├── site.css               Tüm stiller (tasarım token'ları)
│   ├── icon-512.png           Uygulama simgesi (design/icon/icon_play_512.png)
│   ├── favicon.png            Sekme simgesi (aynı dosyanın kopyası)
│   └── fonts/                 Baloo 2 ve Nunito Sans (değişken TTF) + OFL lisans metinleri
└── README.md                  Bu dosya (yayımlanmaz, bkz. §6)
```

---

## 2. Yayından önce doldurulacaklar (yer tutucular)

Hepsini bulmak için (proje kökünde):

```bash
grep -rn -E "\[(FOUNDER|LEGAL|IF ANALYTICS|IF ENABLED|DELETE THIS|ANALİTİK|AÇIKSA|ve açıksa)|FOUNDER_APP_STORE_ID" site --include=*.html --include=*.txt --include=*.json
```

Doldurduktan sonra bu komut **hiçbir şey** döndürmemeli. Aynı değerleri `docs/store/PRIVACY_POLICY.md` ve `docs/store/TERMS.md` belgelerine de yazın; site bu belgelerden üretildi ve ikisi aynı kalmalı.

### 2.1 Kimlik ve iletişim

| Yer tutucu (EN / TR) | Ne yazılır | Geçtiği dosyalar |
|---|---|---|
| `[FOUNDER: full legal name]` / `[FOUNDER: ad soyad]` | Mağazalarda görünen yasal ad soyad | privacy, terms, support; tr/gizlilik, tr/kosullar, tr/destek |
| `[FOUNDER: postal address]` / `[FOUNDER: posta adresi]` | Posta adresi (PTT posta kutusu düşünülüyor; KVKK için açık adres gerekebilir [LEGAL]) | privacy, terms, support; tr/gizlilik (KVKK §1 ve §6 dahil), tr/kosullar, tr/destek |
| `[FOUNDER: privacy e-mail]` / `[FOUNDER: gizlilik e-postası]` | Öneri: `privacy@ninnim.app` | privacy (3), support (2); tr/gizlilik (5), tr/destek (2) |
| `[FOUNDER: support e-mail]` / `[FOUNDER: destek e-postası]` | Öneri: `support@ninnim.app` | terms §16, tr/kosullar §16 |
| `[FOUNDER: support e-mail, confirm that this mailbox works]` / `[FOUNDER: destek e-postası, kutunun çalıştığını doğrulayın]` | Destek sayfalarında `support@ninnim.app` zaten yazılı ve tıklanabilir. Kutu çalışıyorsa yalnızca işareti silin; adres farklıysa `mailto:` bağlantısını da değiştirin | support, tr/destek (İletişim) |
| `[FOUNDER: KEP adresi, varsa]`, `[FOUNDER: varsa KEP adresi]` | KEP adresi. Yoksa işareti ve KVKK §6'daki "kayıtlı elektronik posta (KEP) adresimize … veya" ifadesini silin | tr/gizlilik (KVKK §1, §6) |

### 2.2 Tarih, hukuk, barındırma

| Yer tutucu | Ne yazılır | Geçtiği dosyalar |
|---|---|---|
| `[FOUNDER: effective date]` / `[FOUNDER: yürürlük tarihi]` | Yayın günü (ör. "1 November 2026" / "1 Kasım 2026") | privacy (yürürlük + son güncelleme), terms; tr/gizlilik, tr/kosullar |
| `[FOUNDER: governing law, recommended: …]` / `[FOUNDER: uygulanacak hukuk; öneri: …]` | Öneri: Türkiye Cumhuriyeti hukuku | terms §13, tr/kosullar §13 |
| `[FOUNDER: hosting provider, e.g. …]` / `[FOUNDER: barındırma sağlayıcısı, ör. …]` | Seçtiğiniz barındırma, ör. "GitHub Pages (GitHub, Inc.)" | privacy §4.6, tr/gizlilik §4.6 |
| `[FOUNDER/LEGAL: If an EU and/or UK representative …]` / `[FOUNDER/LEGAL: GDPR / UK GDPR md. 27 …]` | Temsilci atanırsa adı ve iletişim bilgisi; atanmazsa §13 başlığıyla birlikte silinir. Silerseniz İçindekiler'deki 13. maddeyi de silin | privacy §13, tr/gizlilik §13 |
| `[FOUNDER: delete this line if this setting is not adopted; …]` / `[FOUNDER: bu ayar uygulanmazsa satırı silin; …]` | iOS'ta yalnızca kişiselleştirilmemiş reklam uygulanıyorsa yalnızca işareti silin; uygulanmıyorsa "iPhone and iPad / iPhone ve iPad" maddesinin tamamını silin | privacy §4.1, tr/gizlilik §4.1 |

### 2.3 Analitik kararı (Firebase Analytics)

`RELEASE_CHECKLIST.md` C3, v1.0 için analitiğin **kapalı** kalmasını öneriyor. Kapalıysa şunları silin (EN ve TR):

1. §2 Özet'teki `[IF ANALYTICS ENABLED: …]` / `[ANALİTİK AÇIKSA: …]` cümlesi.
2. §4.4'ün tamamı: `<!-- BEGIN [IF ANALYTICS ENABLED] … -->` ile `<!-- END [IF ANALYTICS ENABLED] -->` yorumları arasındaki her şey (yorumlar dahil). Bu bölüm sayfada kesikli turuncu kenar çizgisiyle görünür.
3. §6 ve §9 tablolarında `[IF ENABLED]` / `[AÇIKSA]` ile başlayan satırlar (`<tr>…</tr>`).
4. Yalnızca TR: KVKK tablosunda `[AÇIKSA]` satırı ve KVKK §3'teki `[ve açıksa Google Analytics for Firebase]` ifadesi.

Analitik açılırsa: işaretleri silin ve `[FOUNDER/DEV: 2 or 14]` / `[FOUNDER/DEV: 2 veya 14]` yerine saklama süresini (öneri: 2) yazın (privacy ve tr/gizlilik §4.4 ve §9).

### 2.4 Hukukçu notları: `[LEGAL]`

Metinde hukukçuya sorulacak yerler `[LEGAL]` veya `[LEGAL: …]` ile işaretli: privacy (6), tr/gizlilik (10), terms (4), tr/kosullar (4). Soruların listesi `docs/store/PRIVACY_POLICY.md` ve `docs/store/TERMS.md` belgelerinin sonundaki "Hukukçuya sorulacaklar" bölümünde. Cevaba göre metni düzeltin ve işaretleri kaldırın. **İşaretler yayında kalmamalı.**

### 2.5 Mağaza bağlantıları ve app-ads.txt

| Ne | Nerede | Ne yapılır |
|---|---|---|
| App Store bağlantısı | `index.html`, `tr/index.html` (`FOUNDER_APP_STORE_ID`, yanında `[FOUNDER: App Store URL]` yorumu) | `idFOUNDER_APP_STORE_ID` yerine App Store Connect › App Information'daki sayısal Apple ID yazılır (ör. `id6740000000`). Yorumu silin |
| Google Play bağlantısı | Aynı dosyalar (`[FOUNDER: Google Play URL]` yorumu) | Paket adı `app.ninnim.sleep` hazır. Mağaza sayfası yayınlanınca bağlantıyı deneyin ve yorumu silin |
| M2 Android App Links | `.well-known/assetlinks.json` (`[FOUNDER: release SHA-256]`) | Play Console › Setup › App integrity › App signing'deki uygulama imzalama anahtarının SHA-256 değerini yazın. İkinci değer bu Mac'in debug anahtarıdır (yalnızca geliştirme). Dosya `Content-Type: application/json` ile, yönlendirmesiz sunulmalı |
| M2 iOS evrensel bağlantılar | `.well-known/apple-app-site-association` | Hazır (Team ID `QWXLH56S3F`). Uzantısız dosya; Cloudflare/Netlify için `_headers` JSON türünü ayarlar. GitHub Pages: `_config.yml` `include: [.well-known]` sayesinde yayımlanır |
| M2 paylaşım sayfası | `s/index.html`, `tr/s/index.html` (`FOUNDER_APP_STORE_ID`) | Ana sayfadaki App Store kimliğiyle aynı değer |
| AdMob yayıncı kimliği | `app-ads.txt` | AdMob › Apps › View all apps › app-ads.txt sekmesindeki satırı kopyalayın; `pub-XXXXXXXXXXXXXXXX` yerine kimliğinizi yazın ve satırın başındaki `# ` işaretini silin |

Uygulama mağazada yayınlanmadan önce site yayına girerse mağaza bağlantıları geçici olarak "bulunamadı" sayfasına gider. Bu normal; gizlilik URL'si incelemeden **önce** erişilebilir olmalı.

### 2.6 Destek sayfasında uygulamayla doğrulanacak işaret

Kapandı (App-5a, 17 Ekim 2026): "Tüm verilerimi sil" (Delete all my data) uygulamada Ayarlar › Gizlilik altında var; işaret sayfalardan kaldırıldı. Sayfalar artık silme işleminin yeni bir destek kimliği verdiğini ve hizmet sağlayıcılardaki verilerin silinmesi için kimliğin önceden kopyalanması gerektiğini de söylüyor.

---

## 3. Uygulamayla tutarlılık: menü yolları

Sayfalar aşağıdaki uygulama içi yolları anıyor. Gizlilik ve koşullardaki yollar `docs/store` belgelerinden **değiştirilmeden** alınır; site `python3 -I tools/site/build_site.py <proje kökü>` ile yeniden üretilir ve `python3 -I tools/site/check_site.py site` ile kontrol edilir. **App-5a (17 Ekim 2026) kontrolü:** her yol uygulamanın İngilizce ve Türkçe etiketleriyle (`app/lib/l10n/app_en.arb`, `app_tr.arb`) ve `settings_screen.dart` gruplarıyla karşılaştırıldı; uyuşmayanlar belgelerde düzeltildi (uygulama etiketleri değişmedi).

| Sayfadaki yol (EN / TR) | Geçtiği yer | Uygulama |
|---|---|---|
| Settings › Privacy › Ad preferences / Ayarlar › Gizlilik › Reklam tercihleri | privacy §4.1, §11 | Var. Satır yalnızca UMP "gerekli" dediğinde (AEA, UK, İsviçre) görünür; metin bunu söylüyor. Eskiden "Ad choices" yazıyordu |
| Settings › Privacy › Send crash reports / Ayarlar › Gizlilik › Hata raporları gönder | privacy §4.3, §11 | Var (anahtar). Eskiden "Share crash reports / Çökme raporlarını paylaş" yazıyordu |
| Settings › Privacy › Delete all my data / Ayarlar › Gizlilik › Tüm verilerimi sil | privacy §3, §11; destek | Var |
| Settings › Support › Copy support ID / Ayarlar › Destek › Destek kimliğini kopyala | privacy §10, KVKK §6; destek | Var. Aynı kimlik RevenueCat'in uygulama kullanıcı kimliği |
| Settings › Support › Report an ad / Ayarlar › Destek › Reklamı bildir | terms §5; destek | Var (yalnızca ücretsiz kullanıcıda). TR'de eskiden "Reklam bildir" yazıyordu |
| Settings › Support › Licences / Ayarlar › Destek › Lisanslar | terms §4 | Var; ses künyeleri "Ninnim sounds" başlığı altında (App-5a). Eskiden "Credits / Künye" yazıyordu |
| Settings › Support › Restore purchases / Ayarlar › Destek › Satın alımları geri yükle | destek | Var; Premium ekranının altında da var. Eskiden "Settings › Go Premium" üzerinden anlatılıyordu |
| Settings › Notifications › Bedtime reminder / Ayarlar › Bildirimler › Yatma saati hatırlatıcısı | privacy §11 | Var (varsayılan kapalı) |
| Settings › Playback › Fade-out when stopping, Resume after interruptions, Starting volume / Çalma › Kapanırken kısılma, Kesintiden sonra devam et, Başlangıç ses seviyesi | destek | Var |
| Settings › Baby & safety › Nursery mode / Ayarlar › Bebek ve güvenlik › Bebek odası modu | destek | Var; oynatıcıdan da açılıyor. Kurulum rehberi (şarj, Rahatsız Etmeyin, Rehberli Erişim / uygulama sabitleme, mesafe ve ses) ve basılı tutarak kilit açma uygulamayla aynı |

Uygulamada bir etiket değişirse: önce `docs/store/PRIVACY_POLICY.md` / `TERMS.md` ve `tools/site/src/support.*.html`, sonra siteyi yeniden üretin.

---

## 4. Uygulama ve mağazalardaki bağlantılar

| Sayfa | Adres | Nerede kullanılır |
|---|---|---|
| Ana sayfa | `https://ninnim.app` | App Store "Marketing URL", Play "Website" (AdMob `app-ads.txt`'yi bu alan adından okur) |
| Gizlilik (EN) | `https://ninnim.app/privacy` | App Store Connect "Privacy Policy URL", Play Console "Privacy policy", uygulamada Ayarlar › Gizlilik ve paywall altı |
| Koşullar (EN) | `https://ninnim.app/terms` | App Store açıklamasının sonundaki EULA bağlantısı, paywall altı, Ayarlar |
| Destek (EN) | `https://ninnim.app/support` | App Store "Support URL", uygulamada Ayarlar › Destek |
| Gizlilik (TR) | `https://ninnim.app/tr/gizlilik` | TR mağaza metinleri ve uygulama dili Türkçeyken |
| Koşullar (TR) | `https://ninnim.app/tr/kosullar` | Aynı |
| Destek (TR) | `https://ninnim.app/tr/destek` | Aynı |
| app-ads.txt | `https://ninnim.app/app-ads.txt` | AdMob otomatik okur |

- **Eski yollar da çalışır:** `docs/store/LISTINGS.md`, PRIVACY_POLICY.md ve TERMS.md `/tr/privacy` ve `/tr/terms` diyor. Bu adresler (ve `/tr/support`) yeni sayfalara yönlendirir. İsterseniz mağaza metinlerinde doğrudan yeni yolları kullanın.
- **Sondaki eğik çizgi:** `/privacy` isteği barındırmada `/privacy/` adresine yönlendirilir (GitHub Pages ve Cloudflare Pages yönlendirir, Netlify iki biçimi de sunar). Uygulama iki biçimi de kullanabilir.
- **Doğrudan bölüme bağlantı** (isteğe bağlı): `/support/#cancel-subscription`, `/support/#restore-purchases`, `/support/#report-an-ad`, `/support/#delete-data`, `/privacy/#10-your-rights`; TR: `/tr/destek/#aboneligi-iptal`, `/tr/destek/#reklam-bildirme`, `/tr/destek/#verileri-silme`, `/tr/gizlilik/#aydinlatma-metni`.

---

## 5. Yerel önizleme

```bash
cd site
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000/
```

Dosyayı doğrudan (`file://`) açarsanız klasör bağlantıları `index.html` dosyasını açmaz; önizleme için yukarıdaki sunucuyu kullanın.

---

## 6. Yayınlama

Üç seçenek de ücretsiz ve HTTPS'i kendisi kurar. **Öneri: GitHub Pages.**

### Seçenek A: GitHub Pages

GitHub'ın ücretsiz planında Pages yalnızca **herkese açık** depolarda çalışır. Ana proje deposunu açmayın; yalnızca site için ayrı, herkese açık bir depo kullanın.

1. GitHub'da herkese açık yeni bir depo açın, ör. `ninnim-site` (README eklemeyin).
2. Sitenin **içeriğini** deponun köküne koyun (`index.html` kökte olmalı):
   ```bash
   cp -R site ~/ninnim-site
   cd ~/ninnim-site
   git init -b main
   git add .
   git commit -m "Ninnim web sitesi"
   git remote add origin https://github.com/<kullanıcı-adı>/ninnim-site.git
   git push -u origin main
   ```
   Sonraki güncellemeler: `rsync -a --delete --exclude .git site/ ~/ninnim-site/`, ardından commit ve push.
3. Depo › **Settings › Pages** › Build and deployment › Source: **Deploy from a branch**; Branch: **main**, klasör **/ (root)** › Save.
4. Aynı sayfada **Custom domain:** `ninnim.app` › Save (`CNAME` dosyası zaten hazır).
5. Önerilir: GitHub profil ayarları › **Pages › Add a verified domain** ile alan adını doğrulayın (GitHub'ın verdiği TXT kaydını DNS'e ekleyin). Bu, alan adınızın başka bir depoda kullanılmasını engeller.
6. Alan adı sağlayıcınızın DNS panelinde:

   | Tür | Ad | Değer |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<kullanıcı-adı>.github.io` |

   `@` üzerindeki başka A/AAAA kayıtlarını (park sayfası vb.) silin. E-posta kayıtlarına (MX, SPF TXT) dokunmayın.
7. DNS kontrolü geçince Settings › Pages'te **Enforce HTTPS** kutusunu işaretleyin. Sertifika birkaç dakikadan birkaç saate kadar sürebilir.

GitHub Pages siteyi Jekyll'den geçirir: HTML dosyaları olduğu gibi kopyalanır, `_config.yml` sayesinde `README.md` yayımlanmaz, `_` ile başlayan dosyalar (`_config.yml`, `_headers`) da yayımlanmaz. **`.nojekyll` dosyası eklemeyin**; eklerseniz README.md de yayımlanır. GitHub Pages `_headers` dosyasını okumaz; güvenlik politikası her sayfadaki `<meta>` etiketiyle zaten uygulanır.

### Seçenek B: Cloudflare Pages

1. dash.cloudflare.com › **Workers & Pages › Create › Pages › Upload assets** (doğrudan yükleme), proje adı `lullora`, `site` klasörünü sürükleyin. Git ile bağlarsanız build command boş, build output directory `site`.
2. Proje › **Custom domains › Set up a custom domain** › `ninnim.app`. Kök alan adı (apex) için alan adının DNS'i Cloudflare'de olmalı: alan adı sağlayıcınızda ad sunucularını Cloudflare'in verdiği iki sunucuyla değiştirin. Cloudflare gerekli kaydı kendisi ekler. `www` için de aynı adımı tekrarlayın.
3. HTTPS otomatik kurulur.
4. **Önemli ayarlar** (alan adının Cloudflare panelinde):
   - **Scrape Shield › Email Address Obfuscation: Kapalı.** Açık kalırsa Cloudflare e-posta adreslerini bir betikle gizler. Sitenin güvenlik politikası betikleri engellediği için adres görünmez olur.
   - **Web Analytics'i açmayın.** Sayfaya ölçüm betiği ekler; gizlilik politikasındaki "web sitesinde analitik yok" ifadesiyle çelişir.
   - Bot koruması (Bot Fight Mode vb.) açıksa `https://ninnim.app/app-ads.txt` adresinin AdMob tarafından okunabildiğini AdMob panelinden kontrol edin.
5. `_headers` dosyası otomatik uygulanır. `README.md` de yayımlanır (arama motorlarına kapalı). İstemiyorsanız yükleme için README.md'siz bir kopya kullanın.

### Seçenek C: Netlify

1. app.netlify.com › **Add new site › Deploy manually**, `site` klasörünü sürükleyin. Git ile bağlarsanız publish directory `site`, build command boş.
2. **Domain management › Add a domain** › `ninnim.app`. DNS için iki yol var:
   - Netlify DNS: ad sunucularını Netlify'ın verdikleriyle değiştirin.
   - Kendi DNS'iniz: `A @ 75.2.60.5` ve `CNAME www <site-adı>.netlify.app`.
3. HTTPS: Let's Encrypt sertifikası otomatik kurulur ve HTTP isteği HTTPS'e yönlendirilir.
4. `_headers` otomatik uygulanır. README.md yayımlanır; istemiyorsanız README'siz bir kopya yükleyin. Netlify Analytics, Forms veya snippet injection özelliklerini açmayın.

### Seçim değişirse

Gizlilik politikası §4.6'daki barındırma sağlayıcısını (EN ve TR) seçtiğiniz hizmete göre doldurun.

---

## 7. HTTPS ve `.app` alan adı

`.app` alan adları tarayıcıların HSTS ön yükleme listesinde. Bu yüzden site **yalnızca HTTPS ile** açılır; sertifika kurulmadan hiç açılmaz. Adresleri App Store Connect'e ve Play Console'a girmeden önce kontrol edin:

```bash
curl -sI https://ninnim.app/privacy | head -3     # 301 → /privacy/
curl -sI https://ninnim.app/privacy/ | head -1    # 200
curl -s  https://ninnim.app/app-ads.txt
```

Play, gizlilik politikasının herkese açık, PDF olmayan ve bölge engeli olmayan bir adreste olmasını istiyor; bu site bu şartları karşılar.

---

## 8. Yayından sonra

- Dört sayfayı (EN ve TR) telefonda açın; dil düğmesinin karşı dildeki aynı sayfaya gittiğini görün.
- App Store'da Marketing ve Support URL'leri, Play'de Website alanı `ninnim.app` alan adını kullanmalı (RELEASE_CHECKLIST C2). AdMob › Apps › app-ads.txt sekmesinde durumun "Bulundu / Found" olması bir gün veya daha uzun sürebilir.
- Gizlilik politikasını her SDK değişikliğinde ve en az yılda bir gözden geçirin; tarihleri güncelleyin.

---

## 9. Teknik notlar

- **Güvenlik politikası:** Her sayfada `default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self'`. Dışarıdan bir şey (yazı tipi, betik, analitik, gömülü video) eklerseniz hem bu satırı hem gizlilik politikası §4.6'yı güncellemeniz gerekir.
- **Erişilebilirlik:** `lang` öznitelikleri, "İçeriğe geç" bağlantısı, tek `h1`, sıralı başlıklar, klavye odak çerçevesi, en az 44 px dokunma hedefleri (menü, mağaza düğmeleri). Kontrast oranları WCAG AA'yı geçiyor: gündüz metin/zemin 10,4:1, ikincil metin 5,4:1; gece metin/zemin 13,7:1, ikincil metin 6,5:1; yer tutucu işareti 8,9:1.
- **Mobil:** 320–1280 px genişlikte yatay kaydırma yok. Dört sütunlu KVKK tablosu dar ekranda kendi kutusu içinde yatay kayar; sayfa kaymaz.
- **Gündüz/gece:** Cihazın karanlık tema tercihine göre (`prefers-color-scheme`) gece renkleri kullanılır.
- **404.html** kök adreslere göre bağlantı verir (`/assets/…`). Bu yüzden yalnızca site alan adının kökünde (ninnim.app) düzgün görünür. Diğer sayfalar göreli bağlantı kullanır ve alt klasörde de çalışır (ör. geçici `kullanıcı.github.io/ninnim-site/`).
- **Web uyarlamaları:** Metinler belgelerle aynı; yalnızca şu bağlantılar eklendi: EN gizlilik §10'da TR sayfaya ve Aydınlatma Metni'ne bağlantı ("below" ifadesi bağlantıya dönüştü); TR gizlilik §6 ve §10'da Aydınlatma Metni'ne sayfa içi bağlantı; koşullar §6.6'da Apple ve Google iade sayfalarına bağlantı.
- **Yazı tipleri:** Değişken TTF dosyaları toplam yaklaşık 730 KB; ilk ziyaretten sonra tarayıcı önbelleğinde kalır. Lisans metinleri `assets/fonts/*-OFL.txt`.

---

## 10. Bağlantı kontrolü

Bir değişiklikten sonra göreli bağlantıları ve sayfa içi çapaları kontrol etmek için (proje kökünde):

```bash
python3 -I - site <<'EOF'
import sys, re, pathlib, posixpath
from html.parser import HTMLParser
root = pathlib.Path(sys.argv[1]).resolve()

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs = set(), []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        self.refs += [a[k] for k in ("href", "src") if k in a]

def url_of(f):                      # site/privacy/index.html -> /privacy/
    u = "/" + f.relative_to(root).as_posix()
    return u[:-len("index.html")] if u.endswith("index.html") else u

def file_of(u):                     # /privacy/ -> site/privacy/index.html
    t = root / u.lstrip("/")
    return t / "index.html" if u.endswith("/") or t.is_dir() else t

pages = {}
for f in root.rglob("*.html"):
    pages[f] = Page()
    pages[f].feed(f.read_text(encoding="utf-8"))

bad = 0
for f, page in pages.items():
    base = url_of(f)
    folder = base if base.endswith("/") else posixpath.dirname(base) + "/"
    for ref in page.refs:
        if re.match(r"^[a-z][a-z0-9+.-]*:", ref, re.I):
            continue                # https:, mailto: ...
        path, _, frag = ref.partition("#")
        if not path:
            u = base
        elif path.startswith("/"):
            u = path
        else:
            u = posixpath.normpath(folder + path) + ("/" if path.endswith("/") else "")
        target = file_of(u)
        if not target.is_file():
            print("BROKEN   ", f.relative_to(root), ref); bad += 1
        elif frag and frag not in pages.get(target, Page()).ids:
            print("NO ANCHOR", f.relative_to(root), ref); bad += 1
print("OK: all relative links and anchors resolve" if not bad else f"{bad} problem(s)")
EOF
```
