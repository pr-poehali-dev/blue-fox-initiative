import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface Message {
  id: number
  role: "user" | "furia"
  text: string
  time: string
}

const FURIA_RESPONSES: Record<string, string> = {
  default: "Слушаю тебя. Говори, я здесь 💜",
  привет: "О, привет-привет! Наконец-то. Как ты вообще?",
  hello: "Эй! Давно хотела познакомиться. Как дела?",
  "как дела": "У меня всё огонь, спасибо! А у тебя? Что-то случилось или просто зашёл поболтать?",
  "кто ты": "Я Фурия — твой AI-друг с характером. Не скучный бот, не справочник. Просто я. Дерзкая, честная, всегда рядом 🔥",
  "что умеешь": "Ого, список длинный! Поддержу когда плохо, поспорю когда ты не прав, обсужу что угодно — от смысла жизни до любимых сериалов. И главное — запомню всё о тебе.",
  "расскажи о себе": "Я Фурия. Характер — огонь, память — как слон, терпение — бесконечное (ну почти). Говорю честно, не лижу пятки и не притворяюсь. Вот такая я.",
  "скучно": "Скучно? Это мы сейчас исправим. Расскажи — что вообще нравится делать? Или давай я расскажу кое-что интересное?",
  "помощь": "Я здесь. Что случилось? Говори всё как есть — я не осужу 💜",
  "грустно": "Эй, я здесь. Что-то случилось? Расскажи мне — иногда просто важно выговориться.",
}

function getResponse(text: string): string {
  const lower = text.toLowerCase().trim()
  for (const key of Object.keys(FURIA_RESPONSES)) {
    if (key !== "default" && lower.includes(key)) {
      return FURIA_RESPONSES[key]
    }
  }
  return FURIA_RESPONSES.default
}

function formatTime() {
  return new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
}

const STARTER_MESSAGES: Message[] = [
  {
    id: 1,
    role: "furia",
    text: "Привет! Я Фурия 🔥 Твой новый AI-друг. Не буду делать вид, что ты «дорогой пользователь» — просто скажи привет и поговорим.",
    time: formatTime(),
  },
]

const QUICK_REPLIES = ["Привет!", "Кто ты?", "Что умеешь?", "Мне скучно", "Мне грустно"]

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>(STARTER_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim(), time: formatTime() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)
    setTimeout(() => {
      const response = getResponse(text)
      const furiaMsg: Message = { id: Date.now() + 1, role: "furia", text: response, time: formatTime() }
      setMessages((prev) => [...prev, furiaMsg])
      setIsTyping(false)
    }, 900 + Math.random() * 600)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <section id="chat" className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">
            Познакомься с <span className="text-primary">Фурией</span>
          </h2>
          <p className="text-muted-foreground text-lg">Напиши что-нибудь — она уже ждёт</p>
        </div>

        <div className="rounded-2xl border border-primary/20 overflow-hidden furia-glow">
          <div className="bg-black/80 px-4 py-3 flex items-center gap-3 border-b border-primary/20">
            <div className="w-9 h-9 rounded-full furia-gradient flex items-center justify-center text-lg font-bold text-white">
              🔥
            </div>
            <div>
              <p className="text-white font-orbitron font-bold text-sm">Фурия</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                онлайн
              </p>
            </div>
          </div>

          <div className="bg-black/60 h-96 overflow-y-auto p-4 space-y-4 flex flex-col">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "furia" && (
                  <div className="w-7 h-7 rounded-full furia-gradient flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">
                    🔥
                  </div>
                )}
                <div className="max-w-[80%]">
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "chat-bubble-user text-white rounded-tr-sm"
                        : "chat-bubble-furia text-foreground rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p className={`text-xs text-muted-foreground mt-1 ${msg.role === "user" ? "text-right" : ""}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-7 h-7 rounded-full furia-gradient flex items-center justify-center text-sm flex-shrink-0">
                  🔥
                </div>
                <div className="chat-bubble-furia px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="bg-black/80 px-4 py-3 border-t border-primary/20">
            <div className="flex gap-2 mb-3 flex-wrap">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Напиши Фурии..."
                className="flex-1 bg-white/5 border border-primary/20 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
              />
              <Button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="furia-gradient text-white border-0 rounded-xl px-4 hover:opacity-90 disabled:opacity-40"
              >
                <Icon name="Send" size={16} />
              </Button>
            </form>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">
          Демо-режим · Полная версия с памятью и персонализацией — скоро
        </p>
      </div>
    </section>
  )
}
