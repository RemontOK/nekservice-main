import { useState, useEffect } from "react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reasons = [
    {
      title: "Опытные инженеры",
      description: "Команда с глубокими знаниями и реальным опытом.",
      image: "images/engineer.jpg"
    },
    {
      title: "Компонентный уровень ремонта",
      description: "Ремонтируем то, что другие заменяют целиком.",
      image: "/images/component.jpg"
    },
    {
      title: "Срочные заказы",
      description: "Многие ремонты — в течение часа.",
      image: "/images/fast.jpg"
    },
    {
      title: "Гарантия до 1 года",
      description: "Мы уверены в результате и даем длительную гарантию.",
      image: "/images/warranty.jpg"
    }
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % reasons.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + reasons.length) % reasons.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Хедер */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-orange-500">НЭК СЕРВИС</h1>
        <nav>
          <ul className="flex space-x-6 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-white">УСЛУГИ</a></li>
            <li><a href="#about" className="hover:text-white">О НАС</a></li>
            <li><a href="#warranty" className="hover:text-white">ГАРАНТИЯ</a></li>
            <li><a href="#contacts" className="hover:text-white">КОНТАКТЫ</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
        <section className="relative bg-[url('C:/Users/Алексей/Desktop/nekservice-landing/public/images/hero.jpg')] bg-cover bg-center w-full h-screen"
          >
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-opacity-50"></div>
        <div className="relative z-10 bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-lg max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">НэкСервис — сервис, где качество не обсуждается</h2>
          <p className="text-gray-300 mb-6">Профессиональный ремонт смартфонов и техники. Надёжно. Быстро. С гарантией.</p>
          <div className="flex space-x-4 justify-center">
            <a href="#contacts">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600">
                Нужен ремонт?
              </button>
            </a>
            <a href="#contacts">
              <button className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-white hover:text-white">
                Статус заказа
              </button>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{ title: "Замена стекла", description: "Используем только оригинальные комплектующие." }, { title: "Диагностика", description: "Быстро находим неисправность. Никакой лишней работы." }, { title: "Восстановление после воды", description: "Чистим, сушим, спасаем. Надёжно и аккуратно." }, { title: "Микропайка", description: "Ремонт на компонентном уровне — то, чего не делают везде." }, { title: "Гарантия на ремонт", description: "До 12 месяцев на работы. Потому что уверены в результате." }, { title: "Срочные ремонты", description: "Многие поломки устраняем за 30–60 минут." }].map((service) => (
              <div key={service.title} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему мы? */}
      <section className="py-20 bg-gray-800 text-center relative">
        <h2 className="text-3xl font-bold mb-10">Почему выбирают нас?</h2>
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reasons.map((item, index) => (
              <div
                key={index}
                className="min-w-full h-80 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-md">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prevSlide}
              className="text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
            >
              ▶
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'} transition`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Гарантия качества */}
      <section id="warranty" className="py-20 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Гарантия качества</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Мы не просто чиним — мы возвращаем устройствам жизнь. Все ремонты проходят проверку и тестирование.
        </p>
        <p className="text-orange-400 font-medium mb-2">iPhone — гарантия до 1 года</p>
        <p className="text-orange-400 font-medium mb-8">Android — гарантия до 6 месяцев</p>
        <iframe
          title="Отзывы Яндекс"
          src="https://yandex.ru/maps-reviews-widget/1234567890"
          className="w-full max-w-3xl h-96 mx-auto border-none rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 bg-gray-800 text-center text-white">
  <h2 className="text-3xl font-bold mb-6">О компании</h2>
  <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
    НэкСервис — это не просто ремонт, это отношение. Мы любим свою работу и уверены в своих решениях.
    Берёмся за сложные случаи, с которыми другие даже не пытаются работать.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
    <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
      <p className="text-2xl font-bold text-orange-400">2025</p>
      <p className="text-gray-300 text-sm mt-2">Год основания</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
      <p className="text-2xl font-bold text-orange-400">5000+</p>
      <p className="text-gray-300 text-sm mt-2">Успешных ремонтов</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
      <p className="text-2xl font-bold text-orange-400">4.9★</p>
      <p className="text-gray-300 text-sm mt-2">Рейтинг на Яндексе</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
      <p className="text-2xl font-bold text-orange-400">100%</p>
      <p className="text-gray-300 text-sm mt-2">Гарантия качества</p>
    </div>
  </div>
</section>

      {/* Контакты */}
      <section id="contacts" className="py-20 text-center">
        <h2 className= "text-3xl font-bold mb-4">Наше местоположение</h2>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A29519b64b5dc1cf8b3794c0a20b3a430c2e839a8b2023c76b8bb429397c6d20a&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="Карта проезда"
            className="rounded-xl shadow-lg max-w-4xl mx-auto"
            allowFullScreen
          ></iframe>
        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
        <p className="text-gray-400">Адрес: г. Москва, ул. Примерная, 123</p>
        <p className="text-gray-400">Телефон: +7 (900) 123-45-67</p>
        <p className="text-gray-400">WhatsApp / Telegram: +7 (900) 123-45-67</p>
        <p className="text-gray-400">Instagram: <a href="https://instagram.com/nek_service" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">@nek_service</a></p>
        <div className="mt-8">
          
        </div>
      </section>
    </div>
  );
}