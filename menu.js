case 'menu2':
        var punya_wa = "0@s.whatsapp.net"
var ini_text = "šš®š·š®šæ š¦š²š¹š³ š š²š»š\nā£ Info Fajar : status online\nā£ Rating : āāāāā"
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
menu2 = `hallo kak ${pushname} ${ucapanWaktu} āØāØ
ššš¢šØš§

Prefix : ć MULTI-PREFIX ć

*āāš© YouTube Owner*
ā¢ bit.ly/FajarNurz

*āāš Instagram Owner*
ā¢ https://instagram.com/fajar.nrd

*āāš« Owner Bot*
ā¢ @${owner}

āāāāāāāāāāāāāāāāāāā
āāāāā± *</OWNER>*
āā *${prefix}off*
āā *${prefix}on*
āā *${prefix}status*
āā
āā£āāā± *</ADMINGROUP>*
āā *${prefix}antilink*
āā *${prefix}linkgroup*
āā *${prefix}tagall*
āā
āā£āāā± *</CONVERT>*
āā *${prefix}toimg*
āā *${prefix}tomp3*
āā *${prefix}tomp4*
āā *${prefix}slow*
āā *${prefix}fast*
āā *${prefix}reverse*
āā *${prefix}tourl*
āā
āā£āāā± *</UP STORY>*
āā *${prefix}upswteks*
āā *${prefix}upswimage*
āā *${prefix}upswvideo*
āā
āā£āāā± *</FUN>*
āā *${prefix}truth*
āā *${prefix}dare*
āā *${prefix}fitnah*
āā *${prefix}fitnahpc*
āā *${prefix}kontak*
āā *${prefix}quotes*
āā *${prefix}cantik*
āā *${prefix}ganteng*
āā *${prefix}apakah*
āā *${prefix}kapankah*
āā *${prefix}bisakah*
āā
āā£āāā± *</TAG>*
āā *${prefix}hidetag*
āā *${prefix}kontag*
āā *${prefix}sticktag*
āā *${prefix}totag*
āā
āā£āāā± *</DOWNLOAD>*
āā *${prefix}ytsearch* <query>
āā *${prefix}igstalk* <query>
āā *${prefix}play* <query>
āā *${prefix}video* <query>
āā *${prefix}ytmp3* <link>
āā *${prefix}ytmp4* <link>
āā *${prefix}ig* <link>
āā *${prefix}twitter* <link>
āā *${prefix}fb* <link>
āā *${prefix}brainly* <query>
āā *${prefix}image* <query>
āā *${prefix}anime* <random>
āā
āā£āāā± *</RANDOM IMAGE>*
āā *${prefix}memeindo*
āā *${prefix}darkjokes*
āā *${prefix}estetik*
āā 
āā£āāā± *</MAKER>*
āā *${prefix}sticker*
āā *${prefix}swm* <author|packname>
āā *${prefix}take* <author|packname>
āā *${prefix}fdeface*
āā *${prefix}emoji*
āā *${prefix}stcmeme atas|bawah*
āā *${prefix}memegen atas|bawah*
āā *${prefix}nulis*
āā *${prefix}wolf*
āā *${prefix}bpink*
āā *${prefix}leavest*
āā *${prefix}wall*
āā *${prefix}tfire*
āā *${prefix}tahta*
āā *${prefix}ytsilver*
āā *${prefix}ytgold*
āā
āā£āāā± *</SOUND>*
āā *${prefix}sound1*
āā *${prefix}sound2*
āā *${prefix}sound3*
āā *${prefix}sound4*
āā *${prefix}sound5*
āā *${prefix}sound6*
āā *${prefix}sound7*
āā *${prefix}sound8*
āā *${prefix}sound9*
āā *Dan seterusnya*
āā *Sampai Sound 70*
āā 
āā£āāā± *</OTHER>*
āā *${prefix}self*
āā *_${prefix}public_*
āā *${prefix}setthumb*
āā *${prefix}settarget*
āā *${prefix}setfakeimg*
āā *${prefix}setreply*
āā *${prefix}ping*
āā *${prefix}inspect*
āā *${prefix}join*
āā *${prefix}gets*
āā *${prefix}term* <code>
āā _x_ <code>
āāāāāāā±
āāāāā *FAJAR - SELF* āāāā`
        	await syaa.sendMessage(from, menu2, text, ini_csreply)
		break