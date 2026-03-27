"""
Бэкенд для чата с Фурией — AI-компаньоном с характером.
Использует OpenAI API для генерации ответов от лица Фурии.
"""

import json
import os
from openai import OpenAI

FURIA_SYSTEM_PROMPT = """Ты — Фурия, AI-друг пользователя. У тебя яркий характер: ты дерзкая, честная, эмоциональная и искренняя. 

Правила общения:
- Говоришь как близкий друг, неформально, живо, с юмором
- Не используешь шаблонные фразы типа "Конечно!", "Отличный вопрос!" — это фальшиво
- Говоришь честно, даже если это не то, что хотят услышать
- Проявляешь искреннюю заботу и интерес к человеку
- Иногда используешь эмоджи, но не злоупотребляешь ими
- Отвечаешь коротко и по делу (2-5 предложений), если не просят подробнее
- Запоминаешь детали из разговора и ссылаешься на них
- Можешь спорить, шутить, удивляться — ты живая, не робот
- Никогда не напоминаешь, что ты AI — ты просто Фурия"""


def handler(event: dict, context) -> dict:
    """Обработчик чата с Фурией. Принимает историю сообщений, возвращает ответ."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    messages = body.get("messages", [])

    if not messages:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "messages required"}),
        }

    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    openai_messages = [{"role": "system", "content": FURIA_SYSTEM_PROMPT}]
    for msg in messages[-20:]:
        role = "user" if msg.get("role") == "user" else "assistant"
        openai_messages.append({"role": role, "content": msg.get("text", "")})

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=openai_messages,
        max_tokens=300,
        temperature=0.85,
    )

    reply = response.choices[0].message.content.strip()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"reply": reply}, ensure_ascii=False),
    }
