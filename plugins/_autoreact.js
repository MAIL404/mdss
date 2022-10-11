let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /^((tes(?)|q?|w?|e?|r?|t?|y?|u?|i?|o?|p?|a?|s?|d?|f?|g?|h?|j?|k?|l?|z?|x?|c?|v?|b?|n?|m?|1?|2?|3?|4?|5?|6?|7?|8?|9?|0?))$/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
