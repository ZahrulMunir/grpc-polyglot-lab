# Praktikum gRPC Polyglot

## 1. Deskripsi Proyek

Praktikum ini membahas komunikasi antara server dan client menggunakan gRPC dengan bahasa pemrograman yang berbeda. Server dibuat menggunakan Go, sedangkan client dibuat menggunakan Python dan Node.js.

File `user.proto` digunakan untuk mendefinisikan struktur data dan layanan yang digunakan bersama oleh server dan client. Dengan menggunakan gRPC, client yang dibuat dengan bahasa pemrograman berbeda dapat meminta data dari server yang sama.

Pada praktikum ini, server menyediakan layanan `GetUserProfile` untuk mengambil data profil pengguna berdasarkan ID.

## 2. Tujuan Praktikum

Tujuan dari praktikum ini adalah:

1. Memahami penggunaan Protocol Buffers.
2. Membuat server gRPC menggunakan Go.
3. Membuat client gRPC menggunakan Python.
4. Membuat client gRPC menggunakan Node.js.
5. Menguji komunikasi antara server dan client.
6. Memahami perbedaan static code generation dan dynamic runtime loading.
7. Memahami penggunaan Git dan GitHub untuk menyimpan kode program.

## 3. Teknologi yang Digunakan

Teknologi yang digunakan dalam praktikum ini adalah:

1. Go sebagai bahasa pemrograman server.
2. Python sebagai bahasa pemrograman client.
3. Node.js sebagai bahasa pemrograman client.
4. gRPC sebagai sistem komunikasi antara server dan client.
5. Protocol Buffers untuk mendefinisikan data dan layanan.
6. `protoc` untuk memproses file Protocol Buffers.
7. Git untuk mengelola perubahan kode.
8. GitHub untuk menyimpan repositori proyek.

## 4. Struktur Proyek

Folder utama proyek bernama `grpc-polyglot-lab`.

### A. File utama

- `user.proto` berisi definisi data dan layanan gRPC.
- `README.md` berisi penjelasan proyek dan petunjuk menjalankan program.
- `.gitignore` berisi daftar file atau folder yang tidak perlu dimasukkan ke repositori Git.

### B. Folder go-server

Folder ini berisi program server yang dibuat menggunakan Go.

- `main.go` merupakan program utama server.
- `go.mod` berisi informasi modul dan dependensi Go.
- `go.sum` berisi informasi pemeriksaan dependensi Go.
- `pb/user.pb.go` merupakan kode hasil generate Protocol Buffers.
- `pb/user_grpc.pb.go` merupakan kode hasil generate layanan gRPC.

### C. Folder python-client

Folder ini berisi program client yang dibuat menggunakan Python.

- `client.py` digunakan untuk mengirim permintaan kepada server dan menampilkan respons.
- `user_pb2.py` berisi kode hasil generate pesan Protocol Buffers.
- `user_pb2_grpc.py` berisi kode hasil generate layanan gRPC.

### D. Folder node-client

Folder ini berisi program client yang dibuat menggunakan Node.js.

- `client.js` digunakan untuk mengirim permintaan kepada server.
- `package.json` berisi informasi proyek dan dependensi Node.js.
- `package-lock.json` mencatat versi dependensi yang terpasang.

## 5. Cara Kerja Program

Cara kerja program dalam praktikum ini adalah sebagai berikut:

1. File `user.proto` mendefinisikan pesan permintaan, pesan respons, dan layanan gRPC.
2. Server Go dijalankan pada port `50051`.
3. Client Python atau Node.js mengirim permintaan dengan ID pengguna.
4. Server memeriksa ID pengguna yang diterima.
5. Jika ID pengguna adalah `1`, server mengirimkan data profil Budi Santoso.
6. Client menerima respons dan menampilkan nama, email, serta nomor telepon.

Kedua client menggunakan layanan server yang sama meskipun dibuat menggunakan bahasa pemrograman berbeda.

## 6. Cara Menjalankan Program

Sebelum menjalankan client, pastikan server Go sudah berjalan. Gunakan tiga terminal PowerShell yang berbeda untuk menguji server dan kedua client.

### A. Menjalankan Server Go

Buka terminal pertama pada folder utama proyek, kemudian jalankan:

```powershell
cd go-server
go run main.go
```

Jika berhasil, terminal menampilkan pesan bahwa server berjalan pada port `50051`.

Biarkan terminal server tetap terbuka selama pengujian.

### B. Menjalankan Client Python

Buka terminal kedua pada folder utama proyek, kemudian jalankan:

```powershell
cd python-client
python client.py
```

Client Python akan mengirim permintaan kepada server dan menampilkan data profil pengguna yang diterima.

### C. Menjalankan Client Node.js

Buka terminal ketiga pada folder utama proyek, kemudian jalankan:

```powershell
cd node-client
node client.js
```

Client Node.js membaca definisi layanan dari file `user.proto` menggunakan library `@grpc/proto-loader`, kemudian mengirim permintaan kepada server.

## 7. Hasil Pengujian

Pengujian dilakukan dengan menjalankan server Go, kemudian menghubungkannya menggunakan client Python dan Node.js.

Kedua client berhasil menerima data profil pengguna dari server.

Data yang dikirimkan adalah:

- ID pengguna: `1`
- Nama: Budi Santoso
- Email: budi@universitas.ac.id
- Nomor telepon: 081234567890

Hasil pengujian menunjukkan bahwa server Go berhasil melayani permintaan dari kedua client menggunakan gRPC.

## 8. Analisis Static Code Generation dan Dynamic Runtime Loading

Pada proyek ini, Go dan Python menggunakan static code generation. Kode pendukung gRPC dibuat terlebih dahulu berdasarkan file `user.proto` menggunakan compiler Protocol Buffers. Kode hasil generate kemudian digunakan oleh server dan client.

Jika definisi pada file `user.proto` berubah, kode hasil generate untuk Go dan Python perlu diperbarui agar sesuai dengan definisi terbaru.

Sementara itu, Node.js menggunakan dynamic runtime loading melalui library `@grpc/proto-loader`. Definisi layanan dibaca saat program dijalankan sehingga kode JavaScript hasil generate tidak perlu dibuat secara terpisah.

Menurut saya, static code generation memudahkan penggunaan kode yang sudah dihasilkan sebelumnya, sedangkan dynamic runtime loading lebih praktis karena definisi protokol dibaca saat program berjalan. Kedua pendekatan dapat digunakan untuk berkomunikasi dengan server gRPC yang sama selama definisi layanan sesuai.

## 9. Pengembangan Program

Pada evaluasi praktikum, field `phone` ditambahkan ke pesan `UserResponse` pada file `user.proto`.

Setelah perubahan dilakukan, kode gRPC untuk Go dan Python dibuat ulang. Program server Go, client Python, dan client Node.js kemudian diperbarui agar nomor telepon dapat dikirim dan ditampilkan.

Pengujian ulang menunjukkan bahwa kedua client dapat menerima dan menampilkan nomor telepon yang diberikan oleh server.

Perubahan ini menunjukkan bahwa struktur data pada Protocol Buffers dapat dikembangkan sesuai kebutuhan aplikasi.

## 10. Kesimpulan

Melalui praktikum ini, saya mempelajari cara membangun server gRPC menggunakan Go serta menghubungkannya dengan client Python dan Node.js.

Saya juga memahami fungsi Protocol Buffers sebagai definisi bersama, proses pembuatan kode pendukung gRPC, serta perbedaan static code generation dan dynamic runtime loading.

Berdasarkan pengujian, client Python dan Node.js berhasil berkomunikasi dengan server Go dan menampilkan data profil pengguna, termasuk nomor telepon.

## 11. Repositori GitHub

Proyek praktikum ini disimpan di GitHub agar kode program dapat dilihat, diperiksa, dan dikembangkan kembali.

Tautan repositori:

https://github.com/ZahrulMunir/grpc-polyglot-lab