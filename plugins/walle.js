let handler = async m => m.reply(`
╭═ᴡᴀʟʟ•🅔 𝑩𝒐𝒕
│
├ 🤖 TE GUSTÓ EL BOT?. CONTACTAME:
├ 📱 https://wa.me/593960175832
╰─────────────────═
                                        
`.trim()) 
handler.help = ['walle']
handler.tags = ['info']
handler.command = /^walle$/i

module.exports = handler