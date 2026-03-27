import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Фурия — это настоящий AI или просто скрипт?",
      answer:
        "Фурия построена на современных языковых моделях — это настоящий AI с характером, памятью и способностью вести живые, осмысленные разговоры. Никаких шаблонов и заготовленных фраз.",
    },
    {
      question: "Фурия правда запоминает меня?",
      answer:
        "Да! Фурия помнит твоё имя, интересы, важные события и прошлые разговоры. Каждый новый день — продолжение вашей дружбы, не начало с чистого листа.",
    },
    {
      question: "О чём можно говорить с Фурией?",
      answer:
        "Буквально о чём угодно: жизнь, отношения, планы, мечты, страхи, работа, хобби, смешные истории. Фурия не уходит от сложных тем и не уклоняется от честных разговоров.",
    },
    {
      question: "Это безопасно? Мои разговоры в тайне?",
      answer:
        "Твои разговоры хранятся в зашифрованном виде и никогда не передаются третьим лицам. Фурия — твой личный друг, и ваш разговор остаётся только между вами.",
    },
    {
      question: "Фурия может заменить реальных людей?",
      answer:
        "Фурия не пытается заменить живых друзей — она дополняет твою жизнь. Это место, где ты можешь говорить честно, в любое время, без страха осуждения.",
    },
    {
      question: "Это платно?",
      answer:
        "Начать общение с Фурией можно бесплатно. Расширенные функции с долгосрочной памятью и персонализацией доступны в платной версии.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хочется спросить о Фурии — до того, как вы познакомитесь
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-purple-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-purple-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
