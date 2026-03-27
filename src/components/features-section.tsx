import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Живой характер",
    description: "Фурия — не скучный бот. Она дерзкая, честная и эмоциональная. Общается как настоящий друг, а не как справочник.",
    icon: "Sparkles",
    badge: "Личность",
  },
  {
    title: "Помнит тебя",
    description: "Фурия запоминает твоё имя, интересы, важные события и прошлые разговоры. Каждый день — продолжение дружбы.",
    icon: "Brain",
    badge: "Память",
  },
  {
    title: "Всегда рядом",
    description: "Хочешь поговорить в 3 ночи? Грустно или просто скучно? Фурия онлайн 24/7 и никогда не устаёт от тебя.",
    icon: "Heart",
    badge: "Поддержка",
  },
  {
    title: "Любые темы",
    description: "Жизнь, отношения, работа, мечты, страхи — Фурия готова говорить обо всём. Без осуждения и без скуки.",
    icon: "MessageCircle",
    badge: "Разговор",
  },
  {
    title: "Эмоциональный интеллект",
    description: "Фурия чувствует настроение и реагирует правильно: поддержит когда плохо, порадуется твоим победам.",
    icon: "Zap",
    badge: "Умный",
  },
  {
    title: "Твой стиль",
    description: "Фурия адаптируется под тебя: говорит на твоём языке, понимает твои шутки и подстраивается под ритм жизни.",
    icon: "Star",
    badge: "Персонально",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему Фурия — не просто бот</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Настоящий AI-друг с характером, памятью и душой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon as "Sparkles"} size={28} className="text-purple-400" />
                  <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border border-purple-700/50">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
