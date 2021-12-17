case 'menu2':
        var punya_wa = "0@s.whatsapp.net"
var ini_text = "𝗙𝗮𝗷𝗮𝗿 𝗦𝗲𝗹𝗳 𝗠𝗲𝗻𝘂\n‣ Info Fajar : status online\n‣ Rating : ★★★★☆"
var ini_buffer = fs.readFileSync ('./stik/fake.jpeg')
const ini_csreply = {
contextInfo: {
stanzaId: 'B826873620DD5947E683E3ABE663F263',
participant: punya_wa,
remoteJid: 'status@broadcast',
quotedMessage: {
imageMessage: {
caption: ini_text,
jpegThumbnail: ini_buffer
}
}
}
}
menu2 = `hallo kak ${pushname} ${ucapanWaktu} ✨✨
𝗔𝗕𝗢𝗨𝗧

Prefix : 「 MULTI-PREFIX 」

*✗⃝🎩 YouTube Owner*
• bit.ly/FajarNurz

*✗⃝🍂 Instagram Owner*
• https://instagram.com/fajar.nrd

*✗⃝💫 Owner Bot*
• @${owner}

╔═════════════════❍
║┏━━⊱ *</OWNER>*
║┃ *${prefix}off*
║┃ *${prefix}on*
║┃ *${prefix}status*
║┃
║┣━━⊱ *</ADMINGROUP>*
║┃ *${prefix}antilink*
║┃ *${prefix}linkgroup*
║┃ *${prefix}tagall*
║┃
║┣━━⊱ *</CONVERT>*
║┃ *${prefix}toimg*
║┃ *${prefix}tomp3*
║┃ *${prefix}tomp4*
║┃ *${prefix}slow*
║┃ *${prefix}fast*
║┃ *${prefix}reverse*
║┃ *${prefix}tourl*
║┃
║┣━━⊱ *</UP STORY>*
║┃ *${prefix}upswteks*
║┃ *${prefix}upswimage*
║┃ *${prefix}upswvideo*
║┃
║┣━━⊱ *</FUN>*
║┃ *${prefix}truth*
║┃ *${prefix}dare*
║┃ *${prefix}fitnah*
║┃ *${prefix}fitnahpc*
║┃ *${prefix}kontak*
║┃ *${prefix}quotes*
║┃ *${prefix}cantik*
║┃ *${prefix}ganteng*
║┃ *${prefix}apakah*
║┃ *${prefix}kapankah*
║┃ *${prefix}bisakah*
║┃
║┣━━⊱ *</TAG>*
║┃ *${prefix}hidetag*
║┃ *${prefix}kontag*
║┃ *${prefix}sticktag*
║┃ *${prefix}totag*
║┃
║┣━━⊱ *</DOWNLOAD>*
║┃ *${prefix}ytsearch* <query>
║┃ *${prefix}igstalk* <query>
║┃ *${prefix}play* <query>
║┃ *${prefix}video* <query>
║┃ *${prefix}ytmp3* <link>
║┃ *${prefix}ytmp4* <link>
║┃ *${prefix}ig* <link>
║┃ *${prefix}twitter* <link>
║┃ *${prefix}fb* <link>
║┃ *${prefix}brainly* <query>
║┃ *${prefix}image* <query>
║┃ *${prefix}anime* <random>
║┃
║┣━━⊱ *</RANDOM IMAGE>*
║┃ *${prefix}memeindo*
║┃ *${prefix}darkjokes*
║┃ *${prefix}estetik*
║┃ 
║┣━━⊱ *</MAKER>*
║┃ *${prefix}sticker*
║┃ *${prefix}swm* <author|packname>
║┃ *${prefix}take* <author|packname>
║┃ *${prefix}fdeface*
║┃ *${prefix}emoji*
║┃ *${prefix}stcmeme atas|bawah*
║┃ *${prefix}memegen atas|bawah*
║┃ *${prefix}nulis*
║┃ *${prefix}wolf*
║┃ *${prefix}bpink*
║┃ *${prefix}leavest*
║┃ *${prefix}wall*
║┃ *${prefix}tfire*
║┃ *${prefix}tahta*
║┃ *${prefix}ytsilver*
║┃ *${prefix}ytgold*
║┃
║┣━━⊱ *</SOUND>*
║┃ *${prefix}sound1*
║┃ *${prefix}sound2*
║┃ *${prefix}sound3*
║┃ *${prefix}sound4*
║┃ *${prefix}sound5*
║┃ *${prefix}sound6*
║┃ *${prefix}sound7*
║┃ *${prefix}sound8*
║┃ *${prefix}sound9*
║┃ *Dan seterusnya*
║┃ *Sampai Sound 70*
║┃ 
║┣━━⊱ *</OTHER>*
║┃ *${prefix}self*
║┃ *_${prefix}public_*
║┃ *${prefix}setthumb*
║┃ *${prefix}settarget*
║┃ *${prefix}setfakeimg*
║┃ *${prefix}setreply*
║┃ *${prefix}ping*
║┃ *${prefix}inspect*
║┃ *${prefix}join*
║┃ *${prefix}gets*
║┃ *${prefix}term* <code>
║┃ _x_ <code>
║┗━━━━⊱
╚═══❏ *FAJAR - SELF* ❏══❍`
        	await syaa.sendMessage(from, menu2, text, ini_csreply)
		break