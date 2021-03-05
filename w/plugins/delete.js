let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (.Demim) throw 'Só pode deletar mensagens minhas'
  if (.isBaileys) throw 'A mensagem não foi enviada por um bot!'
  this.deleteMessage(m.chat, {
    demim,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
