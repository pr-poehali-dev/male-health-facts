import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const experts = [
    {
      name: "Андрей Смирнов",
      specialty: "Уролог-андролог",
      experience: "15 лет опыта",
      image: "https://cdn.poehali.dev/projects/2f7dde69-1826-4abd-b34f-07a15834d9fa/files/d9365745-4e61-4fc3-b7e5-87ef70d6ae7b.jpg",
    },
    {
      name: "Дмитрий Волков",
      specialty: "Эндокринолог",
      experience: "12 лет опыта",
      image: "https://cdn.poehali.dev/projects/2f7dde69-1826-4abd-b34f-07a15834d9fa/files/d9365745-4e61-4fc3-b7e5-87ef70d6ae7b.jpg",
    },
    {
      name: "Михаил Петров",
      specialty: "Кардиолог",
      experience: "18 лет опыта",
      image: "https://cdn.poehali.dev/projects/2f7dde69-1826-4abd-b34f-07a15834d9fa/files/d9365745-4e61-4fc3-b7e5-87ef70d6ae7b.jpg",
    },
  ];

  const benefits = [
    {
      icon: "ShieldCheck",
      title: "Проверенные факты",
      description: "Только научно подтвержденная информация от специалистов",
    },
    {
      icon: "Heart",
      title: "Без лекарств",
      description: "Естественные методы улучшения здоровья",
    },
    {
      icon: "Target",
      title: "Честный подход",
      description: "Никаких пустых обещаний и маркетинговых уловок",
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            МужскоеЗдоровье
          </h1>
          <div className="flex gap-6 items-center">
            <a href="#experts" className="text-foreground hover:text-primary transition-colors">
              Эксперты
            </a>
            <Button>Консультация</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Только проверенные факты о{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  мужском здоровье
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Без лекарств и пустых обещаний. Научный подход к вашему здоровью.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8 hover-scale">
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://cdn.poehali.dev/projects/2f7dde69-1826-4abd-b34f-07a15834d9fa/files/2dbbad6c-8b4a-4563-b09f-70b58cbc7064.jpg"
                alt="Мужское здоровье"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover-scale fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Наши <span className="text-primary">эксперты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом работы в области мужского здоровья
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
                  <p className="text-primary font-semibold mb-2">{expert.specialty}</p>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Award" size={18} className="mr-2" />
                    <span>{expert.experience}</span>
                  </div>
                  <Button className="w-full mt-4 hover-scale" variant="outline">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готовы улучшить своё здоровье?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите персональную консультацию от наших экспертов
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 hover-scale">
            Записаться на консультацию
            <Icon name="Calendar" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МужскоеЗдоровье
              </h3>
              <p className="text-background/70">
                Научный подход к здоровью без лекарств и пустых обещаний
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#experts" className="hover:text-primary transition-colors">
                    Эксперты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <div className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-2" />
                  <span>info@health.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/70">
            <p>© 2024 МужскоеЗдоровье. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
