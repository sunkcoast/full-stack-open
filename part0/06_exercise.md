```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User writes a note and clicks the Save button
    Note right of browser: JavaScript intercepts the submit event, appends the new note to the local list, and redraws the DOM instantly.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over server: Server receives the JSON data and saves it to the notes array
    server-->>browser: HTTP Status 201 (Created)
    deactivate server

    Note right of browser: The browser receives the success response. No further requests or page reloads occur.