# React Native Firebase: To-Do App

Sebuah aplikasi pencatat tugas harian berbasis *mobile* yang mengimplementasikan arsitektur Cloud Firestore untuk penyimpanan dan sinkronisasi data secara *real-time*. Proyek ini dikembangkan sebagai pemenuhan tugas mata kuliah **Mobile Programming**.

## Informasi Pengembang
- **Nama:** Yovi Nurwijaya Kusumah
- **NPM:** 41155050240025
- **Program Studi:** Informatika, Universitas Langlangbuana

---

## Sorotan Fitur (Operasi CRUD)
Aplikasi ini mendemonstrasikan empat pilar utama operasi basis data:
1. **Tulis (Create):** Penambahan entri tugas baru melalui antarmuka utama yang langsung disinkronisasi ke *cloud*.
2. **Baca (Read):** Pengambilan koleksi dokumen dari Firestore menggunakan metode *listener* `onSnapshot`, sehingga data selalu ter-*update* secara instan.
3. **Perbarui (Update):** Modifikasi teks tugas melalui rute navigasi terpisah, yang secara spesifik memperbarui dokumen ID terkait di database.
4. **Hapus (Delete):** Penghapusan dokumen secara permanen dari sistem hanya dengan menekan ikon aksi (tempat sampah).

## Tech Stack & Modul
- **Framework Utama:** React Native & Expo
- **Layanan Backend:** Firebase Cloud Firestore
- **Sistem Navigasi:** `@react-navigation/native` & `createStackNavigator`

---

## Alur Arsitektur Aplikasi
Sistem menggunakan pola navigasi dua arah (Stack Navigation):
- **`Dashboard / Home`**: Antarmuka utama. Menggunakan komponen `FlatList` untuk melakukan *render* data dari *collection* `todos`. Pengguna dapat menambah atau menghapus data langsung dari layar ini.
- **`Editor / Detail`**: Layar spesifik yang menerima lemparan data dari Home untuk menangani pembaruan (*update*) string teks pada dokumen Firestore.

---

## Dokumentasi Visual

| Halaman Utama (Daftar Todo) | Halaman Edit (Update) | Tampilan Pasca-Edit |
| :---: | :---: | :---: |
| <img width="413" height="923" alt="image" src="https://github.com/user-attachments/assets/1e503f52-9ed0-4c61-9fea-c45dcf92334a" /> | <img width="412" height="918" alt="Screenshot 2026-11-06 180010" src="https://github.com/user-attachments/assets/9843db31-8a5e-478d-9b3c-386bfb254cf8" /> | <img width="413" height="926" alt="image" src="https://github.com/user-attachments/assets/6e816f80-511f-4c82-ae9f-1acb153d629d" /> |

| Notifikasi Data Dihapus | Panel Database Firestore |
| :---: | :---: |
| <img width="556" height="177" alt="image" src="https://github.com/user-attachments/assets/fce6345e-21f1-4f0d-9dd9-8e43eb799c57" /> | <img width="1451" height="300" alt="image" src="https://github.com/user-attachments/assets/d8a17ac6-371c-4eb6-9a78-f8f96656ee90" /> |

---

## Panduan Instalasi & Eksekusi Lokal
Jika Anda ingin menjalankan atau memodifikasi kode sumber ini di mesin lokal, ikuti tahapan berikut:

1. **Persiapan Direktori** <br>
   *Clone repository* ini dan masuk ke dalam foldernya:
   ```bash
   git clone https://github.com/ynrwy/TodoApp.git
   cd <TodoApp>
2. **Instalasi Dependencies** <br>
   Unduh semua modul yang dibutuhkan oleh sistem:
   ```bash
   npm install
3. **Konfigurasi Database** <br>
   - Buat proyek baru di Firebase Console.
   - Aktifkan layanan Firestore Database dalam mode Test Mode.
   - Salin blok firebaseConfig dari pengaturan proyek Anda dan tempelkan ke dalam file config.js.
4. **Inisialisasi Server Expo** <br>
   Jalankan perintah ini di terminal:
   ```bash
   npx expo start
