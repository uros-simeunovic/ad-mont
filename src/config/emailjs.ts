import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY
};

export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

/*
{{from_name}} - Ime i prezime pošiljaoca
{{from_email}} - Email adresa pošiljaoca
{{from_phone}} - Telefon pošiljaoca
{{service_type}} - Tip usluge koji traže
{{message}} - Poruka pošiljaoca
{{to_name}} - Ime kompanije (AD Mont Krupanj)
*/

/*
Subject: Novi upit sa sajta - {{service_type}}

Dobili ste novi upit sa vašeg sajta:

Ime i prezime: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}
Tip usluge: {{service_type}}

Poruka:
{{message}}

S poštovanjem,
{{from_name}}
*/
