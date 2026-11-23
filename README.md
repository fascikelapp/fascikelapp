# Fascikel

Poštový klient pre Windows, ktorý poštu netriedi do zložiek, ale do **prípadov**.
Nástěnka ukáže, čo horí, na čo čakáš ty a čo je len na vedomie. Všetko beží
lokálne, databáza aj fulltextový index sú šifrované.

- Web: <https://fascikelapp.github.io/fascikelapp/>
- Releases: <https://github.com/fascikelapp/fascikelapp/releases>
- Aktuálna verzia: **0.6.7** (Windows 10/11, x64)

## Čo vie

| Oblasť | Funkcie |
|---|---|
| Nástěnka | stavy Hoří / Čaká na teba / Otázka / Čakáš na nich / Rieši sa / Informácie, tri štýly (Dnes, Zoznam, Stĺpce), okná 90 / 30 / 14 dní / Všetko, pripnuté konverzácie, odosielatelia a domény |
| Účty | Gmail a Office 365 cez prihlásenie v prehliadači (OAuth), IMAP/SMTP s heslom alebo app password, POP3, viac účtov naraz |
| Bezpečnosť | šifrovaná databáza (SQLCipher), šifrovaný fulltextový index, tokeny v systémovom úložišti, žiadny cloud |
| Hľadanie | offline fulltext cez Tantivy, filtre, vlákna, štítky |
| Pošta | vlákna, prílohy, koncepty, plánované odoslanie, pravidlá, podpisy |
| Triedenie | rozpoznanie newsletterov, oznámení a spamu s vysvetlením dôvodu, pravidlá adresa/doména/predmet, fronta „K posouzení“, osobná poistka |
| Jazyky | slovenčina, čeština, angličtina |

## Inštalácia

1. Stiahni `Fascikel-<verzia>-x64-setup.exe` z [Releases](https://github.com/fascikelapp/fascikelapp/releases/latest).
2. Spusti inštalátor. Build zatiaľ nie je podpísaný certifikátom, takže
   Windows SmartScreen môže zobraziť „Neznámy vydavateľ" — zvoľ
   **Viac informácií → Predsa spustiť**.
3. Pridaj účet: **Přidat účet** → *Sign in with Microsoft* / *Sign in with Google*,
   alebo vyplň IMAP/SMTP ručne.

Dáta sú uložené v `%APPDATA%\app.fascikel.desktop` (šifrované) a logy v
`%APPDATA%\app.fascikel.desktop\logs`.

## Stav vývoja

| Verzia | Obsah |
|---|---|
| 0.3.1 | prihlásenie Gmail/Office 365, XOAUTH2, čitateľné chyby prihlásenia, tooltipy na Nástěnke |
| 0.3.0 | OAuth prihlásenie, triedenie pošty (backend), odstránené SOCKS5 polia |
| 0.2.x | Nástěnka, prípady, šifrovaná databáza a index, údržba úložiska |

Podrobný zoznam zmien je v [CHANGELOG-u súkromného repozitára](https://github.com/fascikelapp/fascikel)
(pre verejnosť zhrnuté v každom release).

## Technológie

Tauri 2 + Rust (logika v Ruste, tenká React vrstva). Fulltext Tantivy so
šifrovaným adresárom, SQLCipher, IMAP/SMTP s IDLE a CONDSTORE, Gmail API a
Microsoft Graph. Windows-only.

## Licencia

Fascikel vychádza z open-source klienta [Pebble](https://github.com/QingJ01/Pebble)
(AGPL-3.0). Podmienky licencie a dostupnosť zdrojového kódu riešime pred
verejným šírením; dohodnuté podmienky budú doplnené sem.
