```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: Dokumen HTML dasar untuk SPA
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: File CSS utama
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: File JavaScript khusus SPA (spa.js)
    deactivate server

    Note right of browser: Browser mengeksekusi spa.js yang langsung meminta raw data dari server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Kumpulan data catatan berbentuk JSON
    deactivate server

    Note right of browser: Browser menjalankan fungsi callback untuk membuat elemen HTML dan memanipulasi DOM tanpa me-reload halaman