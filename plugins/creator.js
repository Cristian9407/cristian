let handler = function (m) {
  // this.sendContact(m.chat, '593960175832', '𝑪𝒓𝒊𝒔𝒕𝒊𝒂𝒏', m)
  this.sendContact(m.chat, '593960175832', '𝑪𝒓𝒊𝒔𝒕𝒊𝒂𝒏', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
