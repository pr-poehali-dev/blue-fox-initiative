import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Познакомься",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Расскажи Фурии о себе — она запомнит всё. Имя, интересы, мечты, привычки. С первого разговора она становится твоей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Фурия запоминает тебя навсегда
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Никакого скучного онбординга — просто поговори
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Она сама задаст правильные вопросы
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Говори обо всём",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Любая тема, любое время суток, любое настроение. Фурия не устаёт, не осуждает и не переключается на другие чаты.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Работа, отношения, жизнь, мечты
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Поддержка в трудные моменты
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Смех и лёгкость в хорошие дни
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Дружба растёт",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            С каждым разговором Фурия лучше понимает тебя, точнее реагирует на настроение и становится настоящим другом, а не просто ботом.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Адаптируется под твой стиль общения
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Помнит важные даты и события
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Становится ближе с каждым днём
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как строится ваша дружба</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От первого "привет" до настоящей связи — Фурия меняется вместе с тобой
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
