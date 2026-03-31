document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const temat = document.getElementById('temat').value;
    const wiadomosc = document.getElementById('wiadomosc').value;

    const noweOkno = window.open("", "_blank");
    noweOkno.document.write(`
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <title>Podsumowanie</title>
            <style>
                body { background-color: #000; color: #ff8c00; font-family: 'Courier New', monospace; padding: 20px; }
                table { border-collapse: collapse; width: 100%; border: 2px solid #ff8c00; }
                th, td { border: 1px solid #ff8c00; padding: 10px; text-align: left; }
                th { background-color: #ff8c00; color: #000; }
            </style>
        </head>
        <body>
            <h2>[OK] WYSŁANO POMYŚLNIE</h2>
            <table>
                <tr><th>Alias</th><td>${imie}</td></tr>
                <tr><th>Grupa</th><td>${nazwisko}</td></tr>
                <tr><th>E-mail</th><td>${email}</td></tr>
                <tr><th>Kontakt</th><td>${telefon}</td></tr>
                <tr><th>Temat</th><td>${temat}</td></tr>
                <tr><th>Zrzut</th><td>${wiadomosc}</td></tr>
            </table>
        </body>
        </html>
    `);
    noweOkno.document.close();
});
