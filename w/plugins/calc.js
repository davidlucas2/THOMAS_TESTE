global.math = global.math ? global.math : {}
let handler = async (m, { conn, text }) => {
  let id = m.chat
  if (id in global.math) {
    clearTimeout(global.math[id][3])
    delete global.math[id]
    m.reply('Hmmm...ngecheat?')
  }
  let val = text
    .substituir(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .substituir(/×/g, '*')
    .substituir(/÷/g, '/')
    .substituir(/π|pi/gi, 'Math.PI')
    .substituir(/e/gi, 'Math.E')
    .substituir(/\/+/g, '/')
    .substituir(/\++/g, '+')
    .substituir(/-+/g, '-')
  deixe formatar = val
    .substituir(/Math\.PI/g, 'π')
    .substituir(/Math\.E/g, 'e')
    .substituir(/\//g, '÷')
    .substituir(/\*×/g, '×')
  try {
    console.log(val)
    deixe o resultado = (new Function('return ' + val))()
    if (.result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5

module.exports = handler
