import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  Utensils, 
  MapPin, 
  Heart, 
  Users, 
  Globe, 
  Sparkles,
  Monitor,
  Wifi,
  Headphones,
  Calendar,
  Clock,
  Star,
  Check,
  ArrowRight
} from "lucide-react";

export default function App() {
  const courseModules = [
    {
      icon: Plane,
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей."
    },
    {
      icon: Hotel,
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики."
    },
    {
      icon: Utensils,
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении."
    },
    {
      icon: MapPin,
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях."
    },
    {
      icon: Heart,
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск."
    },
    {
      icon: Globe,
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык."
    },
    {
      icon: Users,
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения."
    },
    {
      icon: Star,
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения."
    }
  ];

  const features = [
    "Акцент на практическую, живую речь, а не на грамматику ради грамматики",
    "Все ситуации — из реальной жизни путешественника",
    "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты",
    "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс"
  ];

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#0d1230]">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden px-4 py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[140px]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
          >
            <span className="text-primary">Новый набор открыт!</span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Курс «Английский для путешествий»
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </motion.p>

          <motion.button
            onClick={scrollToCTA}
            className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Записаться на курс
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.section>

      {/* Target Audience */}
      <motion.section 
        className="px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              📌 Для кого курс
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="p-8 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-xl">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-primary">Первая группа</h3>
              <p className="text-muted-foreground">4–5 класс</p>
            </motion.div>
            
            <motion.div 
              className="p-8 bg-card border border-secondary/20 rounded-2xl hover:border-secondary/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-xl">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-secondary">Вторая группа</h3>
              <p className="text-muted-foreground">6–8 класс</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section 
        className="px-4 py-16 bg-gradient-to-b from-transparent to-card/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              📚 Программа курса
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {courseModules.map((module, index) => {
              const Icon = module.icon;
              const colors = ['primary', 'secondary', 'accent', 'primary'];
              const color = colors[index % colors.length];
              
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`mb-4 inline-block p-3 bg-${color}/10 rounded-xl`}>
                    <Icon className={`w-6 h-6 text-${color}`} style={{ 
                      color: color === 'primary' ? '#14b8a6' : color === 'secondary' ? '#f59e0b' : '#f97316' 
                    }} />
                  </div>
                  <h3 className="mb-3">{module.title}</h3>
                  <p className="text-muted-foreground mb-3">{module.description}</p>
                  <p className="text-sm text-primary flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{module.benefit}</span>
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Special */}
      <motion.section 
        className="px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              ✨ Почему этот курс особенный?
            </h2>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-card/50 border border-border rounded-xl hover:border-secondary/40 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Requirements */}
      <motion.section 
        className="px-4 py-16 bg-gradient-to-b from-transparent to-card/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              💻 Что потребуется
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="p-6 bg-card border border-border rounded-xl text-center"
              whileHover={{ y: -5 }}
            >
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Стационарный компьютер или ноутбук</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card border border-border rounded-xl text-center"
              whileHover={{ y: -5 }}
            >
              <Headphones className="w-12 h-12 text-secondary mx-auto mb-4" />
              <p className="text-muted-foreground">Наушники и микрофон</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card border border-border rounded-xl text-center"
              whileHover={{ y: -5 }}
            >
              <Wifi className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-muted-foreground">Стабильный интернет и Zoom</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Schedule and Pricing */}
      <motion.section 
        className="px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div>
              <div className="mb-8">
                <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  🕒 Расписание
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-card border border-primary/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-primary">Четверг</span>
                  </div>
                  <div className="flex items-center gap-3 ml-8">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span>15:00 (МСК) — группа 4–5 класс</span>
                  </div>
                </div>
                
                <div className="p-6 bg-card border border-secondary/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="text-secondary">Пятница</span>
                  </div>
                  <div className="flex items-center gap-3 ml-8">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span>15:30 (МСК) — группа 6–8 класс</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="mb-8">
                <h2 className="mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  💳 Стоимость
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="mb-2">Полный курс (10 уроков)</div>
                  <div className="text-3xl text-primary">12 000 ₽</div>
                </div>
                
                <div className="p-6 bg-card border border-border rounded-xl">
                  <div className="mb-2 text-muted-foreground">Абонемент</div>
                  <div className="text-2xl">1 300 ₽ / урок</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        id="cta-section"
        className="px-4 py-20 bg-gradient-to-b from-card/30 to-background"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 bg-gradient-to-br from-card via-card to-primary/5 border border-primary/30 rounded-3xl"
          >
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
            
            <h2 className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              📢 Набор открыт!
            </h2>
            
            <p className="text-lg mb-4">
              Группы маленькие — максимум <span className="text-primary">6 детей</span>, чтобы каждый получил внимание.
            </p>
            <p className="text-accent mb-8">Места ограничены!</p>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              👉 Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent text-background rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('Форма записи открыта! Скоро с вами свяжутся.');
              }}
            >
              Записаться на курс
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Английский для путешествий. Откройте мир вместе с нами! 🌍</p>
        </div>
      </footer>
    </div>
  );
}
