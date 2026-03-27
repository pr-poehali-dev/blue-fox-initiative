import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const FURIA_API_URL = "https://functions.poehali.dev/2754af8e-d263-40e4-9cb8-1567ec47de38"

interface Message {
  id: number
  role: "user" | "furia"
  text: string
  time: string
}

const FALLBACK_RESPONSES: string[] = [
  "Хм... подожди секунду, что-то с сигналом 😏 Попробуй ещё раз?",
  "Я здесь, просто задумалась 🔥 Напиши ещё раз.",
  "Связь барахлит... но я никуда не ухожу 💜",
]

function formatTime() {
  return new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
}

const STARTER_MESSAGES: Message[] = [
  {
    id: 1,
    role: "furia",
    text: "Привет 😏 Я Фурия. Давно тебя ждала — ну, фигурально. Расскажи мне что-нибудь о себе... Начни с чего угодно.",
    time: formatTime(),
  },
]

const QUICK_REPLIES = ["Привет!", "Кто ты?", "Что умеешь?", "Мне скучно", "Ты нравишься"]

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>(STARTER_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<Message[]>(STARTER_MESSAGES)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return

    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim(), time: formatTime() }
    const newHistory = [...historyRef.current, userMsg]
    historyRef.current = newHistory
    setMessages(newHistory)
    setInput("")
    setIsTyping(true)

    try {
      const res = await fetch(FURIA_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      })
      const data = await res.json()
      const replyText = data.reply || FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
      const furiaMsg: Message = { id: Date.now() + 1, role: "furia", text: replyText, time: formatTime() }
      historyRef.current = [...newHistory, furiaMsg]
      setMessages(historyRef.current)
    } catch {
      const furiaMsg: Message = {
        id: Date.now() + 1,
        role: "furia",
        text: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
        time: formatTime(),
      }
      historyRef.current = [...newHistory, furiaMsg]
      setMessages(historyRef.current)
    } finally {
      setIsTyping(false)
      inputRef.current?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <section id="chat" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Фурия онлайн прямо сейчас
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3 font-orbitron">
            Поговори с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Фурией</span>
          </h2>
          <p className="text-muted-foreground text-base">Живой разговор. Без шаблонов. Она уже ждёт тебя.</p>
        </div>

        <div
          className="rounded-3xl border border-primary/25 overflow-hidden"
          style={{ boxShadow: "0 0 40px hsl(271 76% 63% / 0.15), 0 0 80px hsl(315 80% 65% / 0.08)" }}
        >
          <div className="bg-gradient-to-r from-black/90 to-black/80 px-5 py-4 flex items-center justify-between border-b border-primary/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full furia-gradient flex items-center justify-center text-lg shadow-lg">
                  🔥
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
              </div>
              <div>
                <p className="text-white font-orbitron font-bold text-sm">Фурия</p>
                <p className="text-gray-400 text-xs">AI-подруга · всегда рядом</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-black/70 to-black/60 h-[420px] overflow-y-auto p-5 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "furia" && (
                  <div className="w-8 h-8 rounded-full furia-gradient flex items-center justify-center text-sm flex-shrink-0 shadow-md">
                    🔥
                  </div>
                )}
                <div className="max-w-[78%]">
                  <div
                    className={`px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "chat-bubble-user text-white rounded-2xl rounded-br-sm"
                        : "chat-bubble-furia text-foreground rounded-2xl rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p
                    className={`text-[10px] text-muted-foreground/60 mt-1 px-1 ${msg.role === "user" ? "text-right" : ""}`}
                  >
                    {msg.time}
                  </p>
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm flex-shrink-0">
                    👤
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end gap-2.5 justify-start">
                <div className="w-8 h-8 rounded-full furia-gradient flex items-center justify-center text-sm flex-shrink-0">
                  🔥
                </div>
                <div className="chat-bubble-furia px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1 items-center">
                    <span
                      className="w-2 h-2 bg-primary/70 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-primary/70 rounded-full animate-bounce"
                      style={{ animationDelay: "160ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-primary/70 rounded-full animate-bounce"
                      style={{ animationDelay: "320ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="bg-black/80 px-5 py-4 border-t border-primary/20 space-y-3">
            <div className="flex gap-2 flex-wrap">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  disabled={isTyping}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-primary/30 text-primary/80 hover:bg-primary/15 hover:text-primary hover:border-primary/50 transition-all duration-200 disabled:opacity-40"
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
                placeholder="Напиши Фурии что-нибудь..."
                disabled={isTyping}
                className="flex-1 bg-white/5 border border-primary/20 rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="furia-gradient text-white border-0 rounded-2xl px-4 hover:opacity-90 disabled:opacity-30 transition-all"
              >
                <Icon name="Send" size={16} />
              </Button>
            </form>
          </div>
        </div>

        <p className="text-center text-muted-foreground/50 text-xs mt-5">
          Powered by AI · Разговор сохраняется только в рамках сессии
        </p>
      </div>
    </section>
  )
}
