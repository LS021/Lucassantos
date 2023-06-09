
//===================================== 

require("./dono/config.js")

const {
default: 
plConnect,
AnyWASocket, 
useSingleFileAuthState, 
WAContextInfo,
DisconnectReason,
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
makeInMemoryStore, 
jidDecode, 
proto
 } = require("@adiwajshing/baileys")
 
 const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const cfonts = require('cfonts');
const { Boom } = require('@hapi/boom')
const spin = require('spinnies')
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const { color, mylog, bgcolor, infolog } = require("./funções/color");
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./funções/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./funções/myfunc')

const { say } = cfonts

const antifake = JSON.parse(fs.readFileSync('./funções de cmd/antis/antifake.json'))

const welcome_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welcomegp2.json'));

const welkom2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/vacilo.json'));

const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welkom.json'));

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================     
const spinner = {
"interval": 150,
"frames": [
  "C",
  "Co",
  "Con",
  "Cone",
  "Conec",
  "Conect",
  "Conecta",
  "Conectan",
  "Conectand",
  "Conectando",
  "Conectando.",  
  "Conectando..",
  "Conectando...",
  "Conectando....",               
 ]}
//=====================================     
let globalSpinner;

const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'pink', succeedColor: 'purple', spinner});
  return globalSpinner;
}

//=====================================     

spins = getGlobalSpinner(false)

//=====================================     

    const start = (id, text) => {
	spins.add("2", {text: text})
	}
	
	
const infopd = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})
}

const close = (id, text) => {
	spins.fail(id, {text: text})
}	
	
//=====================================     

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

//=====================================     

say('AKAME', {
  font: 'block',
  align: 'center',
  colors: [`red`,`red`,`red`,`red`]
})


console.log(chalk.keyword("red")(`╔━━⊱ *「 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾̧𝙊̃𝙀𝙎 」*━━✕
┃
┃➥ 𝐒𝐄𝐑𝐕𝐈𝐃𝐎𝐑 : 𝐏𝐑𝐈𝐕𝐀𝐃𝐎
┃
┃➥ 𝐁𝐎𝐓 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : 𝟓.𝟎
┃
┃➥ 𝐃𝐎𝐍𝐎 : 𝐘𝐔𝐑𝐈 𝐌𝐎𝐃𝐙
┃
┃➥ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀 𝐄𝐃𝐈𝐓𝐀𝐕𝐄𝐋
┃
┃➥ 𝟔𝟎 𝐑𝐄𝐀𝐈𝐒 𝐍𝐎 𝐏𝐈𝐗
┃
┃➥ 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 : 𝟔𝟓 𝟗 𝟗𝟑𝟎𝟔-𝟓𝟓𝟎𝟕
┃
┗━━━━━━━━━━━✕\n`))



async function startpl() {
    const pl = plConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['AKAME-MD-BOT','YURI','5.0'],
        auth: state //esse nome pode trocar
    })

    store.bind(pl.ev)
    

    
//=====================================  


  
require('./funções de cmd/menu/menu')
	require('./dono/config.js')
	require('./akame kill.js')
	require('./index')
  nocache('./funções de cmd/menu/menu', Módulo => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` Módulo "${Módulo}" atualizado`)))
	nocache('./dono/config.js', Módulo => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(`Módulo "${Módulo}" atualizado!`)))
	nocache('./akame kill.js', Módulo => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(`Módulo "${Módulo}" atualizado!`)))
	nocache('./index', Módulo => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(`Módulo "${Módulo}" atualizado!`)))
	
//===================================== 

pl.ev.on('messages.upsert', async ({ messages }) => {
try {
        mek = messages ? messages[0]: messages[1]
        
        if (!mek.message) return

        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        
        if (!pl.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        
        m = smsg(pl, mek, store)
        
        require("./akame kill.js")(pl, m, messages, store)
        } catch (err) {
            console.log(err)
        }
    })

//===================================== 

pl.getName = (jid, withoutContact  = false) => {
        id = pl.decodeJid(jid)
        withoutContact = pl.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = pl.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === pl.decodeJid(pl.user.id) ?
            pl.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
 //===================================== 

function pickRandomm(list) {
return list[Math.floor(list.length * Math.random())]
}
    
    let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandomm(documents)


//===============(BEM VINDO)=============\\


pl.ev.on('group-participants.update', async (manu) => {
  
const groupMetadata = await pl.groupMetadata(manu.id) 
  
const mdata = await pl.groupMetadata(manu.id)  



// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeuscara.json'))
const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(manu)
if(dbackid.indexOf(manu.id) >= 0) {
if (manu.action == 'add'){ 
num = manu.participants[0]
var ind = dbackid.indexOf(manu.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await pl.sendMessage(mdata.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
pl.groupParticipantsUpdate(mdata.id, [manu.participants[0]], 'remove')
return
}
}
}
// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(manu.id)) {
if (manu.action === 'add' && !manu.participants[0].startsWith(55)){
num = manu.participants[0]
pl.sendMessage(mdata.id, {text: 'OSH FAKE AKI NÃO VAZAAA...👋😡*'})

pl.groupParticipantsUpdate(mdata.id, [manu.participants[0]], 'remove')
}
}

if(antifake.includes(manu.id)) {
if (manu.action === 'add' && manu.participants[0].startsWith(55800)){
num = manu.participants[0]
pl.sendMessage(mdata.id, {text: 'OSH FAKE AKI NÃO VAZAAA...👋😡'})
pl.groupParticipantsUpdate(mdata.id, [manu.participants[0]], 'remove')
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 
//=====================================     
if(welkom.includes(manu.id)) {
if(antifake.includes(manu.id) && !manu.participants[0].startsWith(55)) return
        try {
            let metadata = await pl.groupMetadata(manu.id)
            let participants = manu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await pl.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await pl.profilePictureUrl(manu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//welcome\\
        let nama = await pl.getName(num)
memb = metadata.participants.length
Wlcm = await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/d460e086f9f9bf6b04e17.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)
Lft = await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/d460e086f9f9bf6b04e17.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)
                if (manu.action == 'add') {
                const xbuffer = await getBuffer(ppuser)
                let Xnome = num
	           const members = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: Wlcm, surface: 200, message: `${metadata.subject}`, orderTitle: 'PEDRO', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xbody = `┌─☆
│「 OLÁ 👋 」
└┬☆ 「 @${Xnome.split("@")[0]}  」
   ✑  PARTICIPANTES : ${members}
   ✑  ENTROU AS : ${time} / ${date}
   ╰━─━───༺[💫]༻────━─━╯`

let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./funções/theme/MANUELA.xlsx'),
mimetype: docs,
jpegThumbnail:Wlcm,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 9999999999999,
caption: xbody,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${NickDono}`,
body: `Não se esqueça de ler a descrição do grupo`,
mediaType:2,
thumbnail: Wlcm,
sourceUrl: `${websitex}`,
mediaUrl: `${websitex}`
}}
}
pl.sendMessage(manu.id, buttonMessage, {quoted:unicorndoc})
                } else if (manu.action == 'remove') {
                	const xbuffer = await getBuffer(ppuser)
                   	let nome = num
                    const members = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: xbuffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'PEDRO', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xbody = `┌─☆
│「 TCHAUZIN 👋 」
└┬☆ 「 @${nome.split("@")[0]}  」
   ✑  PARTICIPANTES : ${members}
   ✑  SAIU AS : ${time} / ${date}
   ╰━─━───༺[💫]༻────━─━╯`

let buttons = [
{buttonId: `KSKSKS`, buttonText: {displayText: '🤣 F TROPA'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./funções/theme/MANUELA.xlsx'),
mimetype: docs,
jpegThumbnail:Lft,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: xbody,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${NickDono}`,
body: `Tchau! amigo, cuide-se. 👋🤧`,
mediaType:2,
thumbnail: Lft,
sourceUrl: `${websitex}`,
mediaUrl: `${websitex}`
}}
}
pl.sendMessage(manu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
}
}
})

 
//=====================================

// FIM ^


// BEM VINDO 2 ( SEM FOTO )

pl.ev.on('creds.update', saveState);
pl.ev.on('group-participants.update', async (manu) => {
  
const groupMetadata = await pl.groupMetadata(manu.id) 
  
const mdata = await pl.groupMetadata(manu.id)  



// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

if(welkom2.includes(manu.id)) {
if(antifake.includes(manu.id) && !manu.participants[0].startsWith(55)) return
try {

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.jid)
for(let obj of bye_group2) groupIdBye2.push(obj.jid)


const isByed2 = groupIdBye2.indexOf(manu.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(manu.id) >= 0) ? true : false

if(manu.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(manu.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+manu.participants[0].split('@')[0])
.replace('#numerobot#', pl.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(manu.participants[0].split('@')[0], mdata.subject)
}

pl.sendMessage(mdata.id, {text: teks}, {mentions: manu.participants})

} else if(manu.action === 'remove') {
mem = manu.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(manu.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', manu.participants[0].split('@')[0])
.replace('#numerobot#', pl.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(manu.participants[0].split('@')[0])
}

pl.sendMessage(mdata.id, {text: teks}, {mentions: manu.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
console.log(e);
}
}
})
// FIM BEM VINDO (2)

   pl.ev.on('group-participants.update', async (manu) => {
if(manu.action === 'promote') pl.sendMessage(manu.id, {text: `@${manu.participants[0].split('@')[0]} foi promovido a administrador do grupo`, mentions: manu.participants})
if(manu.action === 'demote') pl.sendMessage(manu.id, {text: `@${manu.participants[0].split('@')[0]} deixou de ser um administrador do grupo`, mentions: manu.participants})
})            
 

//==========(CHAT-UPDATE)===========\\
   
//===================================== 
    
//GRUP UPDATE
pl.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await pl.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/3983c55ac7f3ebea225d3.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       pl.send5ButImg(pea[0].id, `「 Alterações nas configurações do grupo 」\n\nO grupo foi fechado pelo administrador, agora só os administradores podem enviar mensagens !`, `${NomeDoBot}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       pl.send5ButImg(pea[0].id, `「 Alterações nas configurações do grupo 」\n\nO grupo foi aberto pelo administrador, agora os participantes podem enviar mensagens !`, `${NomeDoBot}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       pl.send5ButImg(pea[0].id, `「 Alterações nas configurações do grupo 」\n\nAs informações do grupo foram restritas, agora apenas administradores podem editar informações do grupo !`, `${NomeDoBot}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       pl.send5ButImg(pea[0].id, `「 Alterações nas configurações do grupo 」\n\nInformações do grupo foram abertas, agora os participantes podem editar informações do grupo !`, `${NomeDoBot}`, wm_fatih, [])
       } else {
       pl.send5ButImg(pea[0].id, `「 Alterações nas configurações do grupo 」\n\nO nome do Grupo foi alterado para *${pea[0].subject}*`, `${NomeDoBot}`, wm_fatih, [])
     }
    })

	
    
//=====================================     
    
// Setting
    pl.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    pl.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = pl.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })


//=====================================     
    
    pl.setStatus = (status) => {
        pl.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    pl.public = true

    pl.serializeM = (m) => smsg(pl, m, store)
    
//===================================== 


//===================================== 





    pl.ev.on('connection.update', async (update) => {
   const {
            connection, lastDisconnect, qr, isNewLogin
        } = update
        if (qr) {
            console.log(color("Escanear o qrcode em um ambiente escuro faz com que o foco da câmera seja melhor."))
        }

        if (connection === 'connecting') {
            start(" ", " ")
        }

        if (isNewLogin?.qr) {
            startpl()
        }

        if (connection === 'open') {
            success('2', 'Conectado com sucesso!')
        }

        if (connection === 'close') {
            var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
            if (String(lastDisconnect.error)
                .includes("Stream Errored")) {
                console.log(color("Stream errored, o bot pode está conectado em outra sessão. Se essa mensagem continuar repetindo desconecte o bot do Whatsapp.", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection Failure")) {
                exec(`rm ${sessionName}.json`)
                console.log(color("O bot foi desconectado do WhatsApp, irei apagar e gerar um qr code novo.", "red"))
                process.exit()
            } else if (String(lastDisconnect.error)
                .includes("Restart Required")) {
                console.log(color("Reinicie se for nescessario..", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection was lost")) {
                console.log(color("Conexão perdida", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection Terminated")) {
                console.log(color("Conexão terminada"))
            }

            if (lastDisconnect?.error) {
                startpl()
}
}
}) 
//=====================================     
    
    pl.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: pl.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            pl.relayMessage(jid, template.message, { messageId: template.key.id })
    }

//===================================== 

    pl.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        pl.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
//===================================== 

    pl.sendText = (jid, text, quoted = '', options) => pl.sendMessage(jid, { text: text, ...options }, { quoted })

//===================================== 

    pl.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await pl.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

//===================================== 
    
    pl.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await pl.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

 //===================================== 
 
    pl.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await pl.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

//===================================== 

    pl.sendTextWithMentions = async (jid, text, quoted, options = {}) => pl.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

//===================================== 

    pl.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await pl.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

//===================================== 


    pl.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await pl.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
//=====================================     
    
	pl.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await pl.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await pl.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
 
 //===================================== 
 
    pl.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

//===================================== 


    pl.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
     
//===================================== 
     
    pl.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await pl.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

//===================================== 


    pl.cMod = (jid, copy, text = '', sender = pl.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === pl.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }

//===================================== 

    pl.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

//=====================================     
    
function nocache(Módulo, cb = () => { }) {
    fs.watchFile(require.resolve(Módulo), async () => {
        await uncache(require.resolve(Módulo))
        cb(Módulo)
    })
}

//===================================== 

function uncache(Módulo = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(Módulo)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}    


//=====================================     
    
    pl.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await pl.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await pl.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    pl.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }
    

    return pl
}



startpl()

