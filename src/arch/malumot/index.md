# Arch Linux

## Tushunchasi

ArchLinux mustaqil ravishda ishlab chiqilgan x86-64 umumiy maqsadli GNU/Linux
distributiv hisoblanadi. Har qanday sharoitga yetarlicha moslashuvchan.
Rivojlanish jarayoni kodning soddaligi, minimalizmi va nafisligiga qaratilgan.
Arch minimal asosiy tizim sifatida o'rnatiladi, foydalanuvchi faqat kerakli
komponentlarni o'rnatish bilan noyob muhitni yaratib, o'z ehtiyojlari uchun
moslashtiriladi. Grafik ta'minot bilan xususiylashtirish vositalari rasmiy
ravishda taqdim etilmaydi va tizim sozlamalarining aksariyati oddiy matnli
fayllarni tahrirlash orqali konsoldan amalga oshiriladi. Suzuvchi releflar
modeliga asoslangan holda, Arch distributi juda dolzarb bo'lib qolishga intiladi
va ko'pchilik paketlarning eng barqaror versiyalarini taqdim etadi.

-   ### Tarixi

Arch Linux kanadalik dasturchi Judd Vinet (Judd Vinet) tomonidan tashkil
etilgan. Birinchi versiya, arch Linux 0.1, 2002 yil 11 martda chop etildi. Arch
butunlay mustaqil distributiv bo'lsa-da, Slackware, CRUX va BSD kabi boshqa
distributlarning soddaligidan ilhomlanadi. 2007da Judd Vinet loyiha rahbari
lavozimidan iste'foga chiqdi, uning o'rniga Aaron Griffin (Aaron Griffin)
o'rnini egalladi.

-   ### Oddiylik

Arch falsafasiga ko'ra, Arch Linux yengil, moslashuvchan, sodda va imkon qadar
UNIX kabi bo'lib qolmoqda. O'rnatishdan so'ng minimal muhit (grafik ta'minot
yo'q holatda) taqdim etiladi. Keraksiz paketlarni olib tashlash o'rniga,
foydalanuvchiga oldindan tanlangan shablonlarsiz minimal bazadan boshlab tizimni
yaratish imkoniyati taklif etiladi. Arch Linux dizayni va amalga oshirish
falsafasi minimal konsol tizimidan zamonaviy murakkab va funktsional ish stoli
muhitiga qadar kerakli imkoniyatlarni olish uchun tizimni kengaytirishni
osonlashtiradi. Arch-ga asoslangan tizim qanday bo'lishiga qaror qilgan
foydalanuvchi hisoblanadi.

-   ### Zamonaviylik

Arch Linux dasturiy ta'minotning so'nggi barqaror versiyalarini o'rnatishni
qo'llab-quvvatlashga harakat qiladi. Butun tizimni qayta tiklash yoki
yangilanishni bir versiyadan ikkinchisiga ishga tushirmasdan, bir martalik
o'rnatish va uzluksiz yangilanishlarni ta'minlaydigan suzuvchi relizlar tizimiga
asoslangan. Bir buyruqni bajarish bilan siz Arch Linux-ga asoslangan tizimni
dolzarb saqlashingiz mumkin.

Arch GNU/Linux foydalanuvchilari uchun mavjud bo'lgan ko'plab yangi
xususiyatlarni o'z ichiga oladi, jumladan, zamonaviy fayl tizimlari (Ext2/3/4,
Reiser, XFS, JFS, btrfs), LVM2, dasturiy RAID, udev va initcpio (mkinitcpio
bilan), shuningdek, so'nggi Linux yadrolari.

-   ### Paketlarni boshqarish

Arch pacman - ga asoslangan bo'lib, u bir guruh tomonidan to'liq tizimni
yangilash imkonini beruvchi qulay paket menejeri. Pacman C tilida yozilgan va
ixcham, sodda va juda tezdir. Arch Linux shuningdek, Arch Build System - \*BSD
portlariga o'xshash tizim bilan ta'minlaydi va manbalardan paketlarni yig'ish va
o'rnatishni ta'minlaydi. Paketlar bitta buyruq bilan sinxronlashtirilishi mumkin
va hatto butun tizimni bitta buyruq bilan qayta tuzishingiz mumkin.

Rasmiy ArchLinux omborlari dasturiy ta'minot ehtiyojlarini qondirish uchun bir
necha ming paketga kirishni ta'minlaydi. Arch shuningdek, foydalanuvchi jamiyati
o'sishini va maxsus omborni (AUR - CPR) taklif qilish orqali jamiyatning
hissasini oshirishni rag'batlantiradi. makepkg yordamchi dasturidan foydalanib,
manba kodlaridan o'rnatish paketlarini yig'ish uchun minglab foydalanuvchilar
tomonidan qo'llab-quvvatlanadigan pkgbuild skriptlarini o'z ichiga oladi. Bundan
tashqari, foydalanuvchilarga o'z omborlarini tashkil etishga hech narsa
to'sqinlik qilmaydi.

### Ochiq manbaning yaxlitligi

Arch dasturiy ta'minotni original shaklda, qo'shimcha yamalarsiz taqdim etadi.
Paketlar asl manbalaridan, muallif tomonidan ishlab chiqilgan shaklda
to'planadi. Yamoq'larni joylashtirish juda kam hollarda, suzuvchi releflar
modelini qo'llash bilan bog'liq bo'lishi mumkin bo'lgan paket versiyalarining
nomuvofiqligi sababli jiddiy xatolar paydo bo'lishining oldini olish maqsadida
amalga oshiriladi.

### Jamiyat

Arch jamiyati juda ishonchli va do'stona: har bir kishi asosiy dasturiy
ta'minotni ishlab chiqish, paketlarni qo'llab-quvvatlash, xatolik yoki ularni
tuzatishga yordam berish, ArchWiki hujjatlarini takomillashtirish, muammolarni
hal qilishda boshqa foydalanuvchilarga yordam berish yoki forumlarda, pochta
jo'natmalarida, IRC kanallarida fikr almashishda faol ishtirok etishadi. Jamiyat
a'zolari har doim bilim yoki mustaqil ravishda ishlab chiqilgan ilovalar bilan
bo'lishishga tayyor. Arch Linux distributi butun dunyodagi ko'plab odamlar
tanlovidir va turli tillarda yordam va hujjatlarni taqdim etadigan bir qancha
xalqaro jamiyatlariga mavjud. Shuningdek Xinux O'zbek xalqi uchun yaratilgan
Arch Linux jamiyatidan biridir.

### i686 yo'nalishining to'xtatilishi

2017-01-25 i686 arxitekturasini qo'llab-quvvatlash ishlab chiquvchilar va
jamoalar orasida zaif mashhurligi tufayli to'xtatilishi haqida e'lon qilindi.
2017 yilning noyabr oyi oxiriga kelib barcha i686 paketlari manbalardan olib
tashlandi.

### Xulosa

Natijalar: Arch Linux - tajribali linux foydalanuvchilarining ehtiyojlarini
qondirish uchun mo'ljallangan moslashuvchan va oddiy distributiv. Bu serverlar
va ish stantsiyalari uchun ideal distributivdir, ham kuchli va boshqarish oson.
Arch-ga asoslangan tizimni istalgan yo'nalishda ishlab chiqing: agar siz ushbu
ko'rinishni GNU/Linux distributiv qanday bo'lishi kerakligi bilan baham
ko'rsangiz, Arch Linux jamoasiga xush kelibsiz!
