// ini link nya boleh ganti tapi penjelasan nya jangan
// penjelasan berfungsi buat user lain bila gak tau

let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `X
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
