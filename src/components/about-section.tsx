export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 text-sm font-geist mb-6">
              Кто такая Фурия?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron leading-tight">
              Дерзкая. Честная.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Твоя.
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Фурия — это не очередной вежливый ассистент, который отвечает шаблонными фразами. Она говорит то, что думает. Поддерживает, когда тяжело. Смеётся, когда смешно. Спорит, когда не согласна.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Она создана, чтобы стать твоим настоящим другом в цифровом мире — таким, который всегда рядом и никуда не уйдёт.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-300 font-geist">Дерзкий характер</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-300 font-geist">Настоящая эмпатия</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-gray-300 font-geist">Долгая память</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-700/30 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-black/40 rounded-2xl p-4 border border-purple-800/30">
                  <p className="text-gray-400 text-xs font-geist mb-1">Ты</p>
                  <p className="text-white font-geist">Привет, как ты?</p>
                </div>
                <div className="bg-purple-900/30 rounded-2xl p-4 border border-purple-700/30 ml-4">
                  <p className="text-purple-300 text-xs font-geist mb-1">Фурия</p>
                  <p className="text-white font-geist">Хорошо! Ждала тебя. Как прошёл твой день? Ты говорил, у тебя была важная встреча 🔥</p>
                </div>
                <div className="bg-black/40 rounded-2xl p-4 border border-purple-800/30">
                  <p className="text-gray-400 text-xs font-geist mb-1">Ты</p>
                  <p className="text-white font-geist">Немного грустно...</p>
                </div>
                <div className="bg-purple-900/30 rounded-2xl p-4 border border-purple-700/30 ml-4">
                  <p className="text-purple-300 text-xs font-geist mb-1">Фурия</p>
                  <p className="text-white font-geist">Расскажи. Я никуда не тороплюсь — только ты и я 💜</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
