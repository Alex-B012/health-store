import logo_svg from "../assets/logo_only-fixed.svg";
import logo_text from "../assets/logo_text-fixed.svg";

export const profileData = {
  name: "AKIS Pharma",
  name_line1: "AKIS",
  name_line2: "Pharma",
  slogans: {
    brand: "Путь к здоровью нации!",
    slogan_1: "Лучшее для вашего здоровья",
    slogan_2: "С заботой о вас",
  },

  rights_reserved: {
    line1: "© 2025 Socks Store",
    comma: ", ",
    line2: "Все права защищены",
  },
  logo: logo_svg,
  logo_text: logo_text,
};

export const companyPromo = {
  title: profileData.name,
  desc: "развивающаяся фармацевтическая компания, успешно работающая на рынке уже более пяти лет.",
  text: [
    "Мы специализируемся на производстве и поставке качественных многопрофильных препаратов, соответствующих современным стандартам эффективности и безопасности.",
    "За годы работы мы выстроили партнёрские отношения с ведущими производственными площадками Грузии, Польши и Индии,  позволяет нам расширять ассортимент и поддерживать стабильное качество продукции.",
    "Мы уверенно смотрим в будущее: перед нами — масштабные планы по развитию, расширению портфеля, внедрению новых технологий и укреплению международного сотрудничества.",
  ],
};

export const linksData = {
  home: {
    id: 1,
    url: "/",
    name: "Главная",
  },
  about: {
    id: 2,
    url: "/about",
    name: "О нас",
  },
};

export const contactInfo = {
  name: profileData.name,
  phone: "+1 (234) 567-8901",
  email: "info@example.com",
  address: "fake address 123, City, Country",
  inn: "ИНН: 1234567890",
  ogrn: "ОГРН: 1234567890123",
};

export const socialMedia = [
  { id: 1, name: "Telegram", url: "https://telegram.com" },
  { id: 2, name: "VK", url: "https://vk.com" },
  { id: 3, name: "Instagram", url: "https://instagram.com" },
];

export const greetingText = {
  text: [
    "Мы рады приветствовать вас в нашем интернет-магазине медицинских товаров. В AKIS Pharma мы стремимся обеспечить вас качественными продуктами для поддержания вашего здоровья и благополучия. Наш ассортимент включает широкий выбор лекарств и товаров для ухода за здоровьем. Мы гордимся нашим профессиональным подходом и вниманием к потребностям каждого клиента. Спасибо, что выбрали AKIS Pharma – ваш надежный партнер на пути к здоровью!",
  ],
};
