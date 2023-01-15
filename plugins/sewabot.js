let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/6ab4daac226292a112540.jpg'
let text = `━━〔 *𝚂𝙴𝚆𝙰* 〕━⬣

┏━〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃ 15 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃ 45 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃ 60 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ
┃ ᴘᴇʀᴍᴀɴᴇɴ 50ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ *${author}* ━
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6283811034750?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler