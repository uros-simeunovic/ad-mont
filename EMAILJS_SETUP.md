# EmailJS Setup za Kontakt Formu

## Šta je EmailJS?

EmailJS je servis koji omogućava slanje emailova direktno iz frontend aplikacije bez potrebe za backend serverom. Ovo je idealno rešenje za React aplikacije koje su hostovane kao statični fajlovi.

## Koraci za Podešavanje

### 1. Kreiranje EmailJS Naloga

1. Idite na [https://www.emailjs.com/](https://www.emailjs.com/)
2. Kliknite "Sign Up" i napravite nalog
3. Potvrdite email adresu

### 2. Kreiranje Email Service-a

1. Nakon logovanja, idite na "Email Services" u levom meniju
2. Kliknite "Add New Service"
3. Izaberite jednu od opcija:
   - **Gmail** - ako koristite Gmail
   - **Outlook** - ako koristite Outlook
   - **Custom SMTP** - za custom email server
4. Pratite instrukcije za povezivanje sa vašim email servisom
5. Zapišite **Service ID** koji dobijete

### 3. Kreiranje Email Template-a

1. Idite na "Email Templates" u levom meniju
2. Kliknite "Create New Template"
3. Dajte ime template-u (npr. "Contact Form")
4. U Subject polju stavite: `Novi upit sa sajta - {{service_type}}`
5. U Body polju stavite:

```
Poštovani {{to_name}},

Dobili ste novi upit sa vašeg sajta:

Ime i prezime: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}
Tip usluge: {{service_type}}

Poruka:
{{message}}

S poštovanjem,
{{from_name}}
```

6. Sačuvajte template i zapišite **Template ID**

### 4. Dobijanje Public Key-a

1. Idite na "Account" u levom meniju
2. U "API Keys" sekciji kopirajte **Public Key**

### 5. Ažuriranje Konfiguracije

1. Otvorite `src/config/emailjs.ts`
2. Zamenite placeholder vrednosti sa vašim stvarnim ID-jevima:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'vaš_service_id_ovde',
  TEMPLATE_ID: 'vaš_template_id_ovde', 
  PUBLIC_KEY: 'vaš_public_key_ovde'
};
```

### 6. Testiranje

1. Pokrenite aplikaciju: `npm run dev`
2. Idite na kontakt formu
3. Popunite formu i pošaljite
4. Proverite da li ste dobili email

## Template Variables

EmailJS koristi ove varijable u template-u:

- `{{from_name}}` - Ime i prezime pošiljaoca
- `{{from_email}}` - Email adresa pošiljaoca  
- `{{from_phone}}` - Telefon pošiljaoca
- `{{service_type}}` - Tip usluge koji traže
- `{{message}}` - Poruka pošiljaoca
- `{{to_name}}` - Ime kompanije (AD Mont Krupanj)

## Sigurnost

- **Public Key** je siguran za korišćenje u frontend kodu
- EmailJS ima rate limiting za besplatne naloge
- Možete postaviti dodatne sigurnosne mere u EmailJS dashboard-u

## Troubleshooting

### Email se ne šalje
- Proverite da li su svi ID-jevi ispravno postavljeni
- Proverite EmailJS dashboard za greške
- Proverite browser konzolu za JavaScript greške

### Rate Limiting
- Besplatni nalog ima ograničen broj emailova mesečno
- Razmislite o prelasku na plaćeni plan ako vam treba više

### Spam Filteri
- Dodajte EmailJS email adresu u vašu whitelist
- Proverite spam folder

## Alternativna Rešenja

Ako EmailJS ne odgovara vašim potrebama, možete razmotriti:

1. **Formspree** - sličan servis za forme
2. **Netlify Forms** - ako hostujete na Netlify
3. **Backend API** - kreiranje vlastitog backend servisa
4. **Zapier** - automatizacija sa drugim servisima

## Korisni Linkovi

- [EmailJS Dokumentacija](https://www.emailjs.com/docs/)
- [EmailJS React Primer](https://www.emailjs.com/docs/react/)
- [EmailJS Template Primer](https://www.emailjs.com/docs/templates/)
