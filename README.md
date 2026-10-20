\# Praktikum gRPC Polyglot



\## 1. Deskripsi Proyek



Praktikum ini membahas komunikasi antara server dan client menggunakan gRPC dengan bahasa pemrograman yang berbeda.



Server dibuat menggunakan Go, sedangkan client dibuat menggunakan Python dan Node.js. File `user.proto` digunakan sebagai definisi data dan layanan yang dipakai bersama oleh server dan client.



\## 2. Tujuan Praktikum



1\. Memahami penggunaan Protocol Buffers.

2\. Membuat server gRPC menggunakan Go.

3\. Membuat client gRPC menggunakan Python.

4\. Membuat client gRPC menggunakan Node.js.

5\. Menguji komunikasi antara server dan client.

6\. Memahami perbedaan static code generation dan dynamic runtime loading.



\## 3. Teknologi yang Digunakan



1\. Go untuk membuat server.

2\. Python untuk membuat client.

3\. Node.js untuk membuat client.

4\. gRPC untuk komunikasi antara server dan client.

5\. Protocol Buffers untuk mendefinisikan data dan layanan.

6\. Git dan GitHub untuk mengelola serta menyimpan kode program.



\## 4. Struktur Proyek



Nama folder utama: `grpc-polyglot-lab`



\*\*File utama\*\*



\- `user.proto` berisi definisi data dan layanan gRPC.

\- `README.md` berisi penjelasan proyek dan petunjuk penggunaan.

\- `.gitignore` menentukan file yang tidak perlu dimasukkan ke repositori.



\*\*Folder go-server\*\*



\- `main.go` merupakan program utama server.

\- `go.mod` berisi informasi modul dan dependensi Go.

\- `pb/user.pb.go` merupakan kode hasil generate Protocol Buffers.

\- `pb/user\_grpc.pb.go` merupakan kode hasil generate layanan gRPC.



\*\*Folder python-client\*\*



\- `client.py` merupakan program client Python.

\- `user\_pb2.py` berisi kode hasil generate pesan Protocol Buffers.

\- `user\_pb2\_grpc.py` berisi kode hasil generate layanan gRPC.



\*\*Folder node-client\*\*



\- `client.js` merupakan program client Node.js.

\- `package.json` berisi informasi proyek dan dependensi.

\- `package-lock.json` mencatat versi dependensi yang terpasang.



\## 5. Cara Menjalankan Program



\### A. Menjalankan Server Go



Buka terminal PowerShell pada folder utama proyek, kemudian jalankan:



```powershell

cd go-server

go run main.go

```



Jika berhasil, server akan berjalan pada port `50051`. Biarkan terminal tetap terbuka.



\### B. Menjalankan Client Python



Buka terminal kedua pada folder utama proyek, kemudian jalankan:



```powershell

cd python-client

python client.py

```



Client Python mengirim permintaan kepada server untuk mendapatkan data pengguna.



\### C. Menjalankan Client Node.js



Buka terminal ketiga pada folder utama proyek, kemudian jalankan:



```powershell

cd node-client

node client.js

```



Client Node.js membaca definisi layanan dari `user.proto` saat program dijalankan, kemudian mengirim permintaan kepada server.



\## 6. Hasil Pengujian



Server Go berhasil menerima permintaan dari client Python dan Node.js.



Data pengguna yang diterima adalah:



\- ID pengguna: `1`

\- Nama: Budi Santoso

\- Email: budi@universitas.ac.id



Hasil tersebut menunjukkan bahwa kedua client dapat berkomunikasi dengan server menggunakan gRPC.



\## 7. Analisis Static Code Generation dan Dynamic Runtime Loading



Go dan Python menggunakan static code generation. Kode pendukung gRPC dibuat terlebih dahulu berdasarkan file `user.proto`. Kode tersebut kemudian digunakan oleh program server dan client. Jika definisi protokol berubah, kode hasil generate yang terkait perlu diperbarui.



Node.js menggunakan dynamic runtime loading melalui library `@grpc/proto-loader`. Definisi layanan dibaca saat program dijalankan sehingga tidak perlu membuat file kode JavaScript hasil generate secara terpisah.



Menurut saya, static code generation memudahkan penggunaan kode yang sudah dibuat sebelumnya, sedangkan dynamic runtime loading lebih praktis karena definisi protokol dibaca saat program berjalan. Keduanya dapat digunakan untuk berkomunikasi dengan server yang sama selama definisi layanan sesuai.



\## 8. Pengembangan Program



Pengembangan yang diminta pada evaluasi praktikum adalah menambahkan field `phone` pada pesan `UserResponse`.



Perubahan ini memerlukan pembaruan file `user.proto`, pembuatan ulang kode untuk bahasa yang menggunakan static code generation, serta penyesuaian server Go dan kedua client agar nomor telepon dapat ditampilkan.



Setelah perubahan selesai, program perlu diuji kembali untuk memastikan data nomor telepon diterima dengan benar.



\## 9. Kesimpulan



Praktikum ini memberikan pemahaman tentang komunikasi client-server menggunakan gRPC dengan bahasa pemrograman yang berbeda. Server Go dapat diakses oleh client Python dan Node.js melalui definisi bersama pada file `user.proto`.



Praktikum ini juga membantu memahami perbedaan static code generation dan dynamic runtime loading dalam pengembangan aplikasi gRPC.



\## 10. GitHub



Repositori proyek akan digunakan untuk menyimpan kode program praktikum agar dapat diperiksa dan dikembangkan kembali.



Tautan repositori: isi dengan URL GitHub proyek setelah diunggah.

