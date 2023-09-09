# Slowkolot.pl Data

Słówkolot.pl to minimalistyczna strona internetowa, która zaprasza Cię do fascynującej przygody pośród ciekawostek słowniczych w języku polskim.

## Instrukcje instalacji i uruchamiania

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

### Instalacja zależności

Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/) na swoim komputerze.

1. Sklonuj repozytorium do swojego lokalnego środowiska:

```bash
git clone https://github.com/iamkacperwasik/Slowkolot.pl-Data
```

2. Przejdź do katalogu projektu:

```bash
cd Slowkolot.pl-Data
```

3. Zainstaluj zależności przy użyciu menedżera pakietów npm:

```bash
npm install
```

4. Utwórz plik `.env` w głównym katalogu projektu i dodaj w nim następujące zmienne:

```js
SUPABASE_URL = twój_adres_supabase_url;
SUPABASE_SERVICE_ROLE = twój_service_role;
```

**Uwaga**: Zastąp `twój_adres_supabase_url` i `twój_service_role` odpowiednimi danymi dostępowymi do Twojej bazy danych Supabase.

### Dostępne skrypty

Projekt dostarcza zestaw przydatnych skryptów, które można uruchomić za pomocą polecenia `npm run` w celu zarządzania bazą danych. Oto krótka prezentacja tych dostępnych skryptów:

- **feed_database**: Ten skrypt pozwala na łatwe zasilanie bazy danych.
- **find_duplicates**: Skrypt find_duplicates służy do identyfikowania duplikatów danych w bazie.
- **clear_database**: Jeśli potrzebujesz wyczyścić całą bazę danych, skrypt clear_database pozwala na to.

## Rozwój projektu

Jeśli masz pomysły na rozwinięcie projektu Słówkolot.pl lub chcesz zgłosić błędy, zapraszam do kontaktu poprzez adres email: [kacper@wasik.me](mailto:kacper@wasik.me).
Czekam na Twoje sugestie i opinie!

## Licencja

Ten projekt jest dostępny na licencji [MIT](./LICENSE).
