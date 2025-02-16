const TelegramBot = require('node-telegram-bot-api');

const token = '7829156843:AAEqIlE8iCMgATEaEBj0h3KWuUYofIdOezI';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://happy-balang-dragon.online/j6DHxL"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://happy-balang-dragon.online/j6DHxL",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home-2.jpg');
            await bot.sendMessage(chatId, " 🚀 Играй на Dragon Money через Telegram 🚀 \n\n\n👉 Жми на кнопку «Играть сейчас» или вводи команду\n /start\n 👉 Лови заносы 💰 \n\n Удобная функция доступна игрокам с двухфакторной аутентификацией 🍀 \n\n Лови удачу за хвост вместе с Драконом 🐉", menu_game) 
        }
    }
    startBot()
})