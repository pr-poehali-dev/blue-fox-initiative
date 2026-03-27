import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Готов познакомиться с Фурией?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Тысячи людей уже нашли в Фурии настоящего друга. Она ждёт тебя — дерзкая, честная и всегда рядом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="furia-gradient text-white pulse-button text-lg px-8 py-4 border-0 hover:opacity-90"
              onClick={() => document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" })}
            >
              🔥 Начать общение бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4 bg-transparent"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Узнать больше
            </Button>
          </div>
          <p className="mt-6 text-muted-foreground text-sm">Без регистрации · Без кредитной карты</p>
        </div>
      </div>
    </section>
  )
}