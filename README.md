# Tugas 12 PaaS

Project ini berisi aplikasi web sederhana bernama **Catatan Tugas Kuliah**.

## Penyedia PaaS

Penyedia PaaS yang digunakan adalah **Vercel**.

Vercel digunakan untuk menjalankan aplikasi secara online tanpa perlu mengelola server sendiri. Project aplikasi disimpan di GitHub, kemudian repository GitHub tersebut dihubungkan ke Vercel untuk proses deployment.

## Link Repository GitHub

Repository GitHub project ini dapat diakses melalui link berikut:

https://github.com/nailasalmavita/tugas-komputasi-awan-paas.git

Link repository tersebut juga dapat digunakan saat melakukan import project di Vercel.

## Deskripsi Aplikasi

Aplikasi ini digunakan untuk mencatat daftar tugas kuliah. Pengguna dapat:

* Menambah tugas baru
* Menandai tugas yang sudah selesai
* Menghapus tugas
* Membersihkan tugas yang sudah selesai

Data tugas disimpan sementara di browser menggunakan localStorage.

## Cara Deploy di Vercel Menggunakan Link GitHub

1. Buka Vercel.

2. Pilih **Add New Project**.

3. Masukkan link repository GitHub berikut:

   https://github.com/nailasalmavita/tugas-komputasi-awan-paas.git

4. Import repository tersebut ke Vercel.

5. Gunakan pengaturan berikut:

   * Framework Preset: Other atau No Framework
   * Root Directory: ./
   * Build Command: kosongkan
   * Output Directory: public
   * Install Command: kosongkan

6. Klik **Deploy**.

7. Setelah proses deploy selesai, Vercel akan memberikan link aplikasi yang dapat dibuka melalui browser.
