import logo_svg from '../assets/logo_only-fixed.svg';


export const profileData = {
   name: "AKIS Pharma",
   name_line1: "AKIS",
   name_line2: "Pharma",
   slogan: "Путь к здоровью нации!",

   rights_reserved: {
      line1: "© 2025 Socks Store",
      comma: ", ",
      line2: "Все права защищены"
   },
   logo: logo_svg,

}

export const linksData = [
   {
      id: 1,
      url: "/",
      name: "Главная"
   }
]

export const contactInfo = {
   name: profileData.name,
   phone: "+1 (234) 567-8901",
   email: "info@example.com",
   address: "fake address 123, City, Country",
   inn: "ИНН: 1234567890",
   ogrn: "ОГРН: 1234567890123"
}

export const socialMedia = [
   { id: 1, name: "Telegram", url: "https://telegram.com" },
   { id: 2, name: "VK", url: "https://vk.com" },
   { id: 3, name: "Instagram", url: "https://instagram.com" }
];