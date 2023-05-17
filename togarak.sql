-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 16 2023 г., 22:09
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `togarak`
--

-- --------------------------------------------------------

--
-- Структура таблицы `carousel`
--

CREATE TABLE `carousel` (
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `carousel`
--

INSERT INTO `carousel` (`name`) VALUES
('638322128.jpg'),
('905516451.jpg'),
('607788662.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `circle`
--

CREATE TABLE `circle` (
  `id` int(11) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `text` text NOT NULL,
  `duration` varchar(20) NOT NULL,
  `when` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `circle`
--

INSERT INTO `circle` (`id`, `subject`, `text`, `duration`, `when`, `price`, `date`) VALUES
(1, 'Frontend (Angular)', 'Angular, Google tomonidan yaratilgan bir TypeScript freymvorkidir va muhim web ilovalarni ishlab chiqish uchun foydalaniladi. U, tashqi freymvork va kutubxonalar to\'plamini ishlatadi va shu bilan birga kompleks veb ilovalarni yaratishda ham yordam beradi.\n\nQuyidagi ma\'lumotlarni bilish foydalidir:\n\n1. Component-based architecture: Angular komponentlar asosida tuzilgan. Komponentlar, interfeysning biron bir qismini ifodalaydi va o\'z ichiga logikani, HTML shablonlarini va stilni o\'z ichiga oladi. Bunday komponentlar o\'zaro aloqalar orqali bir-biriga bog\'langan va kompleks ilovalar yaratishga imkon beradi.\n\n2. TypeScript ishlatish: Angular, JavaScript asosida ishlashga qo\'shgan TypeScript tilini ishlatadi. TypeScript JavaScript tiliga qo\'shimcha kuchlar qo\'shadi, misol uchun muhokama vaqtida xato aniqlash, kodni yozishda yordam beradi. TypeScript, to\'liq obyektoriy tarkibiyli va o\'yinchan tarkibiyli yordam beradi.\n\n3. Directives: Angular direktivlari HTML taglariga yordam beradi va veb ilovalarda dinamik o\'zgarishlarni bajarish uchun foydalaniladi. Bu direktivlar, ilova logikasini HTML-ga joylashtirishda kuchli asboblar beradi.\n\n4. Dependency Injection: Angular modellar va xizmatlar orasidagi bog\'liqliklarni boshqarish uchun mavjud xizmatlar va konteynerlar tashkil etish uchun qiymatli injeksionini o\'z ichiga olgan. Bu, kodning bo\'sh joylarda ta\'riflangan xizmatlardan foydalanishni osonlashtiradi va kodning test qilinishini osonlashtiradi.\n\n5. Routings: Angular, veb ilovalarda navigatsiya va boshqa manzillar orasida o\'tishni boshqarish uchun router tashkil etishga imkon beradi. Bu, foydalanuvchilarni bir sahifadan boshqasiga ko\'chirish, URL-lar orqali ilovalarni boshqarish va ilovalar orasida izohlash imkoniyatlarini beradi.\n\nAngular, katta va kuchli kompaniyalarda, korporativ ilovalarda va kompleks veb platformalarda ishlatiladi. U o\'zining kengaygan ekosistemasiga ega bo\'lib, barcha zarur modullarni, komponentlarni va xizmatlarni yuklash va ulardan foydalanishni osonlashtiradi.', '4 oy', 'Juft kunlar', '1500000', '2023-05-16 22:46:12'),
(2, 'Backend NodeJS', 'Node.js, JavaScript tilida yozilgan yoki JavaScript ishlatuvchi server tomonidagi yuqori tezlikdagi dasturlarni ishga tushurishga imkon beruvchi bir platformadir. Obyektoriy asoslangan, ochiq manbali va to\'liq ozgarmas platforma sifatida xizmat qiladi.\n\nQuyidagi ma\'lumotlarni bilishingiz yaxshi bo\'ladi:\n\n1. JavaScript ishlatish: Node.js JavaScript tilini o\'zida ishlatadi. Bu, dasturchilarga to\'rtlash va boshqaruv uchun tayyor bo\'lgan tarjimalarni o\'rniga, tashqi kutubxonalardan foydalanishga imkon beradi.\n\n2. Server tomonidagi ish: Node.js server tomonidagi dasturlarni yaratishga imkon beradi. Uning asosiy maqsadi server tarafdagi logikalarni yaratish va ishga tushirishdir. Node.js I/O operatsiyalarini non-blocking bo\'lib bajarganligi tufayli, keng tarqalgan va yuqori darajada yuqori tezlikdagi dasturlarni yaratishga imkon beradi.\n\n3. Ochiq manba: Node.js ochiq manbali bo\'lib, uni dasturchilar xohlagan vaqt davomida o\'zgartirishlarni kiritishlari mumkin. Bu kabi manbalardan foydalanish, Node.js ekosistemasini kengaytiradi va kuchaytiradi.\n\n4. Kengaygan ekosistema: Node.js, npm (Node Package Manager) deb nomlanadigan yuqori darajali kutubxona tizimini ishlatadi. Bu kutubxona tizimi, dasturchilarga bir qancha foydali kutubxonalarni yuklash va ulardan foydalanish imkonini beradi. Bu ekosistema orqali ko\'p xil turdagi loyihalarni yaratish va ulardan foydalanish osonlashadi.\n\n5. Mashhur loyihalar: Node.js-ni ko\'p mashhur loyihalar ishlatadi. Masalan, Express.js web freymvorki, Socket.io birinchiligi, MongoDB hamda Node.js-ning iste\'mol qilish mumkin.\n\nNode.js, yuqori tezlikdagi server tomonidagi dasturlarni yaratishda kuchli va ommabop bir vosita sifatida ko\'rinadi. U to\'liq o\'zgarmas va ochiq manba sifatida dasturchilarni kuchaytiradi va JavaScript tilidagi ish yuritishni server tomonida amalga oshiradi.', '4 oy', 'Toq kunlari', '1000000', '2023-05-16 23:40:25');

-- --------------------------------------------------------

--
-- Структура таблицы `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone`, `email`) VALUES
(1, 'Xorezm viloyati Urganch shahri Mustaqillik ko\'chasi 1-uy', '+998930939200', 'nickname.8687.@gmail.com');

-- --------------------------------------------------------

--
-- Структура таблицы `home`
--

CREATE TABLE `home` (
  `id` int(11) NOT NULL,
  `allPupils` int(10) NOT NULL,
  `activePupils` int(10) NOT NULL,
  `employees` int(10) NOT NULL,
  `year` int(10) NOT NULL,
  `mainImage` text NOT NULL,
  `mainTitle` text NOT NULL,
  `mainText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `home`
--

INSERT INTO `home` (`id`, `allPupils`, `activePupils`, `employees`, `year`, `mainImage`, `mainTitle`, `mainText`) VALUES
(1, 21212, 122, 21, 22, '244352957.jpg', 'Siz biz bilan kompyuterlar olamiga kirasiz', 'Informatika to\'garaklari o\'qitiladigan darslar sizga kompyuterlar, axborot tizimlari va dastur yaratish sohasidagi asosiy tushunchalarni o\'rganish imkonini beradi. Bu to\'garaklar sizga kompyuterlarning asosiy ish rejalarini tushunish, muammolarni yechish, ma\'lumotlarni tahlil qilish va dastur yozish jarayonlarida yordam berishga imkon beradi.\nBoshqaruv tizimlari, axborotni saqlash, boshqarish va qo\'llab-quvvatlash uchun arxitektura va o\'zaro aloqa qurilmalari bilan bog\'liq bo\'lgan to\'garaklardir. Bu to\'garaklar, axborot tizimlarini boshqarish va ularga erishishni osonlashtirish uchun mo\'ljallangan.');

-- --------------------------------------------------------

--
-- Структура таблицы `images_of_circle`
--

CREATE TABLE `images_of_circle` (
  `id` int(11) NOT NULL,
  `circle_id` int(11) NOT NULL,
  `imageName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `images_of_circle`
--

INSERT INTO `images_of_circle` (`id`, `circle_id`, `imageName`) VALUES
(1, 1, '576502123.jpg'),
(2, 1, '227862158.jpg'),
(3, 1, '72399942.jpg'),
(4, 2, '266318372.jpg'),
(5, 2, '767526099.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `name`, `phone`, `subject`, `message`, `date`) VALUES
(13, 'Nick', 'nickname.8687@gmail.com', 'Saytni sozlash', 'Assalomu aleykum', '2023-05-01 11:23:43'),
(14, 'Muxriddin', '+998930939200', 'SMS api bo\'yicha', 'Assalomu aleykum', '2023-05-16 22:31:39');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'admin', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `circle`
--
ALTER TABLE `circle`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `images_of_circle`
--
ALTER TABLE `images_of_circle`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `circle`
--
ALTER TABLE `circle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `home`
--
ALTER TABLE `home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `images_of_circle`
--
ALTER TABLE `images_of_circle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
