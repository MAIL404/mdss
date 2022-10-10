let handler =  m => m.reply(`
Pulsa Ceban indosat 08146382902
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
