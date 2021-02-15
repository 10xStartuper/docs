<p align="center"><a href="https://xinux.uz" target="_blank"><img height="300" width="300" src="./src/.vuepress/public/xinux.png"/></a></p>
<h2 align="center">Xinux</h2>
<p align="center"><b><a href="https://xinux.uz" target="_blank">Xinux Jamiyati</a> tomonidan yasalgan Linux qo'llanmasi.</b></p>
<p align="center"><a href="https://app.netlify.com/sites/xinux/deploys"><img src="https://api.netlify.com/api/v1/badges/07f4eca8-3b27-4b8c-9ec1-bd86567f8613/deploy-status"></a></p>

## Eslatmalar

**Xinux Qo'llanmasi** Node.js ning freymworki bo'lmish _Vue JS_ da yozilgan.
Vebsayt Linux ga endi kirib kelayotgan yoki tajribasi bor odamlar uchun ma'lumot
manbayi bo'lib xizmat qiladi. Hozirda vebsayt Netlify hosting servisi yormida
host qilingan va dastur ta'minot ostida. Agarda siz ham bu proyektga ma'lumot
qo'shmoqchi bo'lsangiz, contributor statusini qo'lga kiriting, buning uchun esa
GitHub organizatsiyamizga qo'shilishingiz shartdir. Qo'shilish uchun esa, Xinux
Telegram gruppasida o'zingizning github laqabingizni qoldirishingiz kerak.

## Test va Deploy

Proyektni o'zingizni qurilmangizda test rejimida ishga tushirish uchun
qurilmangizda NodeJS va Yarn paket menejerlarining eng oxirgi versiyalari
o'rnatilganligiga ishonch hosil qiling. NPM ni ham ishlatishingiz mumkin, ammo
Yarn ni ishlatish afzalroqdir. Proyektni ko'chirib bo'lgach quyidagi
kommandalarni ishga tushiring:

```bash
# Proyektni klon qiling
git clone https://github.com/xinuxuz/docs.git ./xinux

# Proyektni ichiga kiring
cd xinux

# Kerakli modullarni o\'rnatib oling
yarn install

# Test rejimida ishga tushiring
yarn run dev

# Butun saytni render qilib oling
yarn run build && mv src/.vuepress/dist ./dist
```

> Bu proyekt hozirda faol rivojlantirilmoqda. Agarda bironta xatolikka duchor
> bo'lsangiz, xatolik haqida [e'lon](https://github.com/xinuxuz/docs/issues/new)
> qoldirishni unutmang.

---

> **Muhim eslatma:** GNU Lesser General Public License v3.0 litsenziyasi tarkibi
> bo'yicha, agar siz o'zingizga proyekt ko'chirib qo'yib ishlatmoqchi
> bo'lsangiz, shu [(proyektga)](/) ssilka qoldirishingiz shartdir. Agar siz shu
> manbaga o'zgartirish kiritsangiz va o'zingizniki qilib olsangiz, manbaning
> bosh manbasiga ssilka qoldirishingiz GNU Lesser General Public License v3.0
> litzensiyasi bo'yicha darmoqdir. Ko'proq ma'lumotga ega bo'lish uchun
> [LICENSE](LICENSE) ni ko'zdan kechiring.

<p align="center">Barcha huquqlar himoyalangan &copy; 2021 <a href="https://xinux.uz" target="_blank">Xinux Jamiyati</a></p>

<p align="center"><a href="https://github.com/xinuxuz/docs/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=Litsenziya&message=GPL-3.0&logoColor=eceff4&logo=github&colorA=000000&colorB=ffffff"/></a></p>
