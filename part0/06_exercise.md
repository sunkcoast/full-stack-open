sequenceDiagram
    participant browser
    participant server

    Note over browser: Pengguna menulis catatan dan menekan tombol 'Save'
    Note right of browser: Event handler menangkap submit, menjalankan e.preventDefault(),<br/>menambahkan catatan baru langsung ke array lokal, dan merender ulang UI via DOM.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (Aplikasi mengirim JSON payload)
    activate server
    Note over server: Server menerima objek JSON, langsung memasukkannya ke array 'notes' di backend.
    server-->>browser: HTTP Status 201 (Created)
    deactivate server

    Note right of browser: Browser menerima respons sukses. Tidak ada request tambahan ataupun reload halaman karena UI sudah diupdate secara lokal.