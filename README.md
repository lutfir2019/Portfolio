# Deskripsi Website

Website ini adalah sebuah portofolio yang digunakan untuk menampilkan proyek-proyek yang telah dilakukan. Pengguna dapat mengirimkan pesan melalui formulir kontak untuk memberikan masukan atau pertanyaan.

## Teknologi yang Digunakan

- **Express**: Framework backend untuk membuat server HTTP yang digunakan untuk menangani permintaan dan respon.
- **Nodemailer**: Modul Node.js untuk mengirim email.
- **Cors**: Middleware untuk mengaktifkan _Cross-Origin Resource Sharing_ (CORS) pada server, yang memungkinkan akses dari sumber daya di domain yang berbeda.
- **React**: Library JavaScript untuk membangun antarmuka pengguna (frontend).
- **Axios**: Library JavaScript untuk melakukan permintaan HTTP dari frontend ke backend.
- **SweetAlert2**: Library JavaScript untuk menampilkan pesan interaktif yang lebih menarik kepada pengguna.
- \*\*framer-motion: Library animasi untuk React yang memungkinkan animasi komponen dengan mudah.

## Instalasi

1. Clone repositori ini.
2. Buka terminal dan pindah ke direktori proyek.
3. Install dependensi dengan menjalankan perintah `npm install`.
4. Jalankan server backend dengan perintah `node server.js`.
5. Pada terminal yang berbeda, jalankan aplikasi frontend dengan perintah `npm start`.
6. Buka browser web Anda dan kunjungi http://localhost:3000 untuk melihat web portfolio.

Pastikan Anda telah menginstal Node.js dan memiliki koneksi internet untuk menjalankan aplikasi ini.

## Konfigurasi

Untuk mengirim email, pastikan Anda melakukan konfigurasi SMTP pada file `server.js` dengan menggunakan informasi akun email yang valid.

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi saya di lutfirrahman2019@gmail.com

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});
```
