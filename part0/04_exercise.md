```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Pengguna mengetik catatan dan mengeklik tombol 'Save'

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note over server: Server membaca data form, menambahkannya ke array 'notes',<br/>lalu menyiapkan instruksi URL redirect.
    server-->>browser: HTTP Status 302 (Redirect ke /notes)
    deactivate server

    Note over browser: Terjadi interupsi redirect: Browser otomatis melakukan reload halaman ke rute baru

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Dokumen HTML dasar
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: File CSS utama
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: File JavaScript utama
    deactivate server

    Note right of browser: Browser mengeksekusi main.js yang berisi perintah AJAX untuk mengambil data JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Data JSON terbaru (termasuk catatan baru yang tadi dibuat)
    deactivate server

    Note right of browser: Browser mengeksekusi callback function yang menggunakan DOM API untuk merender data ke layar