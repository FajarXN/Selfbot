const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const imgbb = require("imgbb-uploader");
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const TobzKey = 'BotWeA'


banChats = false //true = self and false = public
offline = false
targetpc = '62852232723520'  //num
owner = '6285223272352'  //num
fake = 'ᴹᴿ᭄͢FajarNurz⁴̅⁰͍⁴̵〆⁩×፝֟͜×🌹'  //name
owner = '6285223272352'  //num
ownername = 'Fajar XN々'  //numname
numbernye = '0'  //done
waktu = '-'
alasan = '-'
//=================[ Apikey ]=========================//
zekskey = 'FajarGanzXN'  
lol = 'KurrXD'
//=================================================//
module.exports = syaa = async (syaa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = syaa.user.jid
		const botNumberss = syaa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await syaa.chats.all()
		const groupMetadata = isGroup ? await syaa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isAntiLink = isGroup ? antilink.includes(from) : false		
		const isOwner = owner.includes(sender)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || true
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? syaa.user.jid : syaa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? syaa.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESSNYA
		mess = {
			wait: 'please wait a few minutes........',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            syaa.sendMessage(from, teks, text, {quoted:mek})
        }

 let zero = fs.readFileSync ('./stik/fake.jpeg')
//━━━━━━━━━━━━━━━[ BUTTON NYA ]━━━━━━━━━━━━━━━━━//
        const sendButton = async (from, context, fortext, but, mek) => {

            buttonMessages = {

            contentText: context,

            footerText: fortext,

            buttons: but,

            headerType: 1

        }

            syaa.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)

        }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return syaa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
//=================[ FAKE FAKE KAN NYA ]=========================//
const katalog = (teks) => {
             res = syaa.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_ᴹᴿ᭄FajarNurz⁴̅⁰͍⁴̵〆⁩×፝֟͜×_*", "thumbnail": zero, "surface": 'CATALOG' }}, {quoted:ftrol})
             syaa.relayWAMessage(res)
        }
const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `ᴹᴿ᭄͢FajarNurz⁴̅⁰͍⁴̵〆⁩×፝֟͜×🌹`, 
                            orderTitle: `ᴹᴿ᭄͢FajarNurz⁴̅⁰͍⁴̵〆⁩×፝֟͜×🌹`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }//        
        const sendMess = (hehe, teks) => {
            syaa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? syaa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            syaa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            syaa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            syaa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        syaa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    syaa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
//==========================================//
if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				syaa.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    syaa.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}   
///=================[ Waktu ]=========================//
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Selamat Pagi'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang'
        } else if (hour_now >= '14' && hour_now <= '16') {
          ucapanWaktu = 'Selamat Sore'
        } else if (hour_now >= '16' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Petang'
        } else if (hour_now >= '17' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam'
        } else {
          ucapanWaktu = 'Selamat Malam'
        }
//=================[ FUNCTION ]=========================//
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            syaa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        syaa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//=================[ auto read & merekan terus ]=========================//
        syaa.chatRead(from, "read")
		syaa.updatePresence(from, Presence.recording)
	
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {    
case 'menu':   case 'allmenu':          
case 'help':
menunya =`hallo kak ${pushname} ${ucapanWaktu} ✨✨
Saya Fajar Yg Siap Membantu Anda Dalam Kinerja Whatsapp Agar Mempermudah Seperti Membuat Sticker , Dll


𝗔𝗕𝗢𝗨𝗧

Prefix : 「 MULTI-PREFIX 」

*✗⃝🎩 YouTube Owner*
• bit.ly/FajarNurz

*✗⃝🍂 Instagram Owner*
• https://instagram.com/fajar.nrd

*✗⃝💫 Web*
• https://fajar-xn.fajarg.repl.co

╔═════════════════❍
║┏━━⊱ *</OWNER>*
║┃ *${prefix}off*
║┃ *${prefix}on*
║┃ *${prefix}status*
║┃ *${prefix}self*
║┃ *${prefix}public*
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
║┃ *${prefix}bokep*
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
║┃ *${prefix}meme*
║┃ *${prefix}memeindo*
║┃ *${prefix}memes*
║┃ *${prefix}darkjoke*
║┃ *${prefix}darkjokes*
║┃ *${prefix}loli*
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
║┃ *${prefix}snow*
║┃ *${prefix}pubg*
║┃ *${prefix}smoke*
║┃ *${prefix}bneon*
║┃ *${prefix}matrix*
║┃ *${prefix}gplay*
║┃ *${prefix}splay*
║┃ *${prefix}tex3d*
║┃ *${prefix}lithg*
║┃ *${prefix}logocrs*
║┃ *${prefix}dropair*
║┃ *${prefix}flame*
║┃ *${prefix}flower*
║┃ *${prefix}logoff*
║┃ *${prefix}pornhub*
║┃ *${prefix}ganz*
║┃ *${prefix}cans*
║┃ *${prefix}naruto*
║┃ *${prefix}barcode*
║┃ *${prefix}skytext*
║┃ *${prefix}cslogo*
║┃
║┣━━⊱ *</SOUND>*
║┃ *${prefix}soundmenu*
║┃ 
║┣━━⊱ *</OTHER>*
║┃ *${prefix}resep*
║┃ *${prefix}jadwalsholat*
║┃ *${prefix}jadwaltv*
║┗━━━━⊱
╚═══❏ *FAJAR - SELF* ❏══❍`
gambar = fs.readFileSync ('./stik/menu.jpeg') 
teks =
`ᴹᴿ᭄͢FajarNurz⁴̅⁰͍⁴̵〆⁩×፝֟͜×🌹`
but = [
          { buttonId: `${prefix}oh`, buttonText: { displayText: '𝐓𝐄𝐑𝐈𝐌𝐀 𝐊𝐀𝐒𝐈𝐇' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break   
//=================[ bates ]=========================//
case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break                
case 'owner': case 'creator': case 'author': //fix no button
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator Fajar Self Bot ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
syaa.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: mek, 
})
reply('TUHH NOMER OWNER KU')
break
 case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            syaa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'tagall':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            if (!isGroup) return reply(mess.only.group)
            members_id = []
                teks = (args.length > 0) ? body.slice(8).trim() : ''
                teks += '\n\n'
                for (let mem of groupMembers) {
                    teks += `•> @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
                mentions(teks, members_id, true)
            break    
	case 'linkgc': case 'linkgroup':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await syaa.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					syaa.sendMessage(from, yeh, text, { quoted: mek })
					break
case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            syaa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await syaa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await syaa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await syaa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            syaa.sendMessage(from, buffer453, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await syaa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            syaa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await syaa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            syaa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await syaa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            syaa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            syaa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            syaa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'colongsw': //arif
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
    case 'l9':
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await syaa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `FajarGanz`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `@sofunsyabi.id`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, syaa, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await syaa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            syaa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            syaa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await syaa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            syaa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            syaa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            syaa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await syaa.downloadMediaMessage(swsw)
            syaa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            syaa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await syaa.downloadMediaMessage(swsw)
            syaa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            syaa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
case 'resep': 
if (args.length < 1) return reply('*Mau Resep Masak Apa?*') 
bo = args.join(" ")
fakestatus ('masak gan')
anu = await fetchJson(`https://api.zeks.me/api/resep-masak?apikey=${zekskey}&q=${bo}`)
get = anu
sendMediaURL(from, get.thumb, `${get.title}\n\n${get.bahan}\n\nCaranya:\n${get.cara}`)
break
case 'jadwaltv':
var z = '```'
if (args.length < 1) return reply('Nama Tv?')
bo = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/jadwaltv?channel=${bo}&apikey=${zekskey}`)
teks = anu
yoi =`${z}${teks.result}${z}`
reply(yoi)
break
case 'jadwalsholat': 
if (args.length < 1) return reply('*Daerah mana?*') 
bo = args.join(" ")
fakestatus ('bentar berak dulu')
anu = await fetchJson(`https://api.zeks.me/api/jadwalsholat?apikey=${zekskey}&daerah=${bo}`)
get = anu.data
ini_txt =`*Jadwal Sholat Ditemukan*
*Daerah : ${args.join(" ")}*

${get.string}`
reply(ini_txt)
break
case 'sc':
    case 'scrip':
    case 'script':
    case 'sourcecode':	
            ohu = `*`
		    source = `${ohu}Sourcecode Dari Sini🐧${ohu}\https://github.com/nazedev/Self2`
            sendButton(from, `${source}`, `Subs : https://youtube.com/channel/UC-_PgO4W2W01BRJo47bly1g`, [{buttonId: `y`,buttonText: {displayText: `Oke Bang !`},type: 1}])  
	        break    
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await syaa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await syaa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		syaa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await syaa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			syaa.sendMessage(from, optionshidetag, text)
			break
case 'stcmeme':
  ct = args.join(" ")
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await syaa.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
case 'memegenerator':
    case 'memegen':
   if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   
   var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
   var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
   var imgbb = require('imgbb-uploader')
   var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   var media = await syaa.downloadAndSaveMediaMessage(enmedia)
   var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
   var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
   syaa.sendMessage(from, resu, image, {quoted: mek})
    fs.unlinkSync(media)
    } catch (e) {
    return reply(`${e}`)
    console.log(e)
    }
   break
case 'jar':

            but = [{ buttonId: '${prefix}menu', buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: '${prefix}memeindo', buttonText: { displayText: 'MEMEINDO' }, type: 1 }]

            sendButton(from, "Silahkan pilih untuk buka/tutup group", fake, but, mek)

            break
case 'tobc':
            if (!isOwner && !mek.key.fromMe) return                

		    syaa.updatePresence(from, Presence.composing)
		    anu = await syaa.chats.all()
		    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    buff = await syaa.downloadMediaMessage(encmedia)
		    for (let _ of anu) {
		    syaa.sendMessage(_.jid, buff, audio, { quoted: fvn, mimetype: 'audio/mp4', ptt:true})}
		    } else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
		    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    buff = await syaa.downloadMediaMessage(encmedia)
		    for (let _ of anu) {
		    syaa.sendMessage(_.jid, buff, sticker, { quoted: fvn, contextInfo: { forwardingScore: 508, isForwarded: true}})}
		    } else{
            fakestatus('reply sticker/audio')}
	        break  
//=================[  Randomnya  ]=========================//
case 'loli': 
fakestatus('wait om')
lolii = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
syaa.sendMessage(from, lolii, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Loli'})
break
case 'estetik': 
fakestatus(`Memproses harap tunggu..............`)
bugg = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=${zekskey}`)
syaa.sendMessage(from, bugg, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break   
case'meme': case'darkjokes': case'cogan': case 'cecan': case'lovelive':
data = fs.readFileSync(`./lib/${command}.js`);
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex]; 
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result))
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ Next`},type:1}]
imageMsg = ( await syaa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
syaa.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'simi':
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           teksni = args.join(" ")
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${teksni}`)
           getresult = get_result.result
             fakestatus(getresult)         
             break  
//=================[ Makernya]=========================//
case 'wolf':  
                   
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar *`)
                   F = body.slice(6)
                   fakestatus(`Memproses harap tunggu..............`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${zekskey}&text1=rimurubotz&text2=${F}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break 
case 'nulis': 
if (args.length < 1) return fakestatus('*Teks nya mana?*') 
nulis = args.join(" ")
nulis = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${zekskey}&text=${nulis}`)
syaa.sendMessage(from,nulis,image,{quoted:mek}) 
break 
case 'leavest':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar*`)
                   F = body.slice(9)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=${zekskey}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break
case "bpink":
                 fakestatus(mess.wait)
                 bpp = body.slice(7);
                 const preffs = `Usage: \n${prefix}bpink teks\n\nEx :\n${prefix}bpink Naura`
                 if (args.length < 1) return reply(preffs);
                 if (args.length > 10) return reply('Karakter minimal 10')
                 jarz = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=galihrakai10&text=${bpp}`)
                 syaa.sendMessage(from, jarz, image, { quoted: mek });
                 break;
case 'tfire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar*`)
                   F = body.slice(7)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=${zekskey}`)                   
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break                
case 'ytgold': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar*`)
                   F = body.slice(8)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=${zekskey}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break
case 'ytsilver': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar*`)
                   F = body.slice(10)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=${zekskey}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break
case 'tahta':                     
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar*`)
                   F = body.slice(7)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=${zekskey}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break
case 'wall':                    
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Xyraa*`)
                   F = body.slice(6)
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=${zekskey}&text=${F}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: mek})
                   break
case 'snow': 
if (args.length < 1) return reply('*Teks nya mana?*') 
snow = args.join(" ")
fakestatus('please wait a few minutes........')
snow = await getBuffer(`https://api.zeks.me/api/snowwrite?text1=HartaTahta&text2=${snow}&apikey=${zekskey}`)
syaa.sendMessage(from, snow, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'pubg': 
if (args.length < 1) return reply('*Teks nya mana?*') 
pubg = args.join(" ")
fakestatus('please wait a few minutes........')
pubg = await getBuffer(`https://api.zeks.me/api/pubglogo?text1=PUBG&text2=${pubg}&apikey=${zekskey}`)
syaa.sendMessage(from, pubg, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'smoke': 
if (args.length < 1) return reply('*Teks nya mana?*') 
smoke = args.join(" ")
fakestatus('please wait a few minutes........')
smoke = await getBuffer(`https://api.zeks.me/api/smoketext?text=${smoke}&apikey=${zekskey}`)
syaa.sendMessage(from, smoke, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'bneon': 
if (args.length < 1) return reply('*Teks nya mana?*') 
bneon = args.join(" ")
fakestatus('please wait a few minutes........')
bneon = await getBuffer(`https://api.zeks.me/api/bneon?apikey=${zekskey}&text=${bneon}`)
syaa.sendMessage(from, bneon, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'matrix': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
fakestatus('please wait a few minutes........')
matrix = await getBuffer(`https://api.zeks.me/api/matrix?apikey=${zekskey}&text=${matrix}`)
syaa.sendMessage(from, matrix, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'gplay': 
if (args.length < 1) return reply('*Teks nya mana?*') 
gplay = args.join(" ")
fakestatus('please wait a few minutes........')
gplay = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${gplay}&apikey=${zekskey}`)
syaa.sendMessage(from, gplay, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'splay': 
if (args.length < 1) return reply('*Teks nya mana?*') 
splay = args.join(" ")
fakestatus('please wait a few minutes........')
splay = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${splay}&apikey=${zekskey}`)
syaa.sendMessage(from, splay, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'text3d': 
if (args.length < 1) return reply('*Teks nya mana?*') 
text3d = args.join(" ")
fakestatus('please wait a few minutes........')
text3d = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=${zekskey}&text=${text3d}`)
syaa.sendMessage(from, text3d, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'lithg': 
if (args.length < 1) return reply('*Teks nya mana?*') 
lithg = args.join(" ")
fakestatus('please wait a few minutes........')
lithg = await getBuffer(`https://api.zeks.me/api/lithgtext?text=${lithg}&apikey=${zekskey}`)
syaa.sendMessage(from, lithg, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'dropair': 
if (args.length < 1) return reply('*Teks nya mana?*') 
dropair = args.join(" ")
fakestatus('please wait a few minutes........')
dropair = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=${zekskey}&text=${dropair}`)
syaa.sendMessage(from, dropair, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'logocrs': 
if (args.length < 1) return reply('*Teks nya mana?*') 
logocrs = args.join(" ")
fakestatus('please wait a few minutes........')
logocrs = await getBuffer(`https://api.zeks.me/api/crosslogo?text=${logocrs}&apikey=${zekskey}`)
syaa.sendMessage(from, logocrs, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'flame': 
if (args.length < 1) return reply('*Teks nya mana?*') 
flame = args.join(" ")
fakestatus('please wait a few minutes........')
flame = await getBuffer(`https://api.zeks.me/api/flametext?text=${flame}&apikey=${zekskey}`)
syaa.sendMessage(from, flame, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'flower': 
if (args.length < 1) return reply('*Teks nya mana?*') 
flower = args.join(" ")
fakestatus('please wait a few minutes........')
flower = await getBuffer(`https://api.zeks.me/api/flowertext?text=${flower}&apikey=${zekskey}`)
syaa.sendMessage(from, flower, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'pornhub':                     
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Fajar&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zekskey}`)
                   syaa.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ftrol})
                   break
case 'ganz': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
fakestatus('please wait a few minutes.......')
ganz = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=GANZ&apikey=${zekskey}`)
syaa.sendMessage(from, ganz, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'cans': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
fakestatus('please wait a few minutes.......')
cans = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=CANS&apikey=${zekskey}`)
syaa.sendMessage(from, cans, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'naruto': 
if (args.length < 1) return reply('*Teks nya mana?*') 
naruto = args.join(" ")
fakestatus('please wait a few minutes.......')
naruto = await getBuffer(`https://api.zeks.me/api/naruto?text=${naruto}&apikey=${zekskey}`)
syaa.sendMessage(from, naruto, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'logoff': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
fakestatus('please wait a few minutes.......')
logoff = await getBuffer(`https://api.zeks.me/api/epep?text=${matrix}&apikey=${zekskey}`)
syaa.sendMessage(from, logoff, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'barcode': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
fakestatus('please wait a few minutes.......')
bccode = await getBuffer(`https://api.zeks.me/api/barcode?apikey=${zekskey}&text=${matrix}`)
syaa.sendMessage(from, bccode, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'skytext':
if (args.length < 1) return reply('*Teks nya mana?*') 
sky = args.join(" ")
fakestatus('please wait a few minutes.......')
sky = await getBuffer(`https://api.zeks.me/api/skytext?text=${sky}&apikey=${zekskey}`)
syaa.sendMessage(from, sky, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
case 'cslogo': 
if (args.length < 1) return reply('*Teks nya mana?*') 
cslogo = args.join(" ")
fakestatus('please wait a few minutes.......')
cslogo = await getBuffer(`https://api.zeks.me/api/cslogo?text=${cslogo}&apikey=${zekskey}`)
syaa.sendMessage(from, cslogo, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), caption: 'Nih Bro Dah Jadi'})
break
//=================[ Bates Fun ]=========================//
case 'truth':
              if (!isGroup) return reply(mess.only.group)
             reply(mess.wait)
               const trut =['Pernah suka sama siapa aja? bepemuda lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              syaa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
case 'dare':
              if (!isGroup) return reply(mess.only.group)
             reply(mess.wait)
               const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              syaa.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break
case 'memeindo':    
                   fakestatus(`WAIT KAK CANTIK/GANTENG`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zekskey}`)
                   anu1 = await getBuffer(anu.result)
                   syaa.sendMessage(from, anu1, image, {caption: `nihh kak`, quoted: mek})
                   break
case 'darkjoke':  
                   fakestatus(`Sabar ya sayang 😚😚😚😚`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=${zekskey}`)
                   anu1 = await getBuffer(anu.result)
                   syaa.sendMessage(from, anu1, image, {caption: `nihh beb`, quoted: mek})
                   break
//=================[ lbates ]=========================//
case 'listadmin':
	                if (!mek.key.fromMe) return fakestatus('SELF-BOT')
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await syaa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                syaa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await syaa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            syaa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break            
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await syaa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await syaa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if(!isOwner) return fakestatus('*owner-only*') 	   
if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
  if(!isOwner) return fakestatus('*owner-only*') 	         
	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await syaa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
if(!isOwner) return fakestatus('*owner-only*') 	        
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await syaa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
case 'antilink': //work nyolong dari sc yuzzu
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						syaa.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break	
//=================[ FUN ]=========================//
	case 'bisakah':
				if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
	case 'kapankah':
				if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
case 'quotes':                      	        

const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','  kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']

const tes = quo[Math.floor(Math.random() * quo.length)]

syaa.sendMessage(from, ''+tes+'\n\n_By : Fajar Ganteng_', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「  Bot by FajarNurz 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('stik/fake.jpeg')} } } })

break    
 case 'apakah':
         			  if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
	case 'attp':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				syaa.sendMessage(from, attp2, sticker, {quoted: mek})
				break
	case 'ttp':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(5)}`)
				syaa.sendMessage(from, ttp, sticker, {quoted: mek})
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
      case 'pap':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/sound12');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break
      case 'didunia':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/didunia');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break
      case 'welot':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/welot');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break
      case 'barabere':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/barabere');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})              
              break
      case 'fyp':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/fyp');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break
      case 'myfather':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/myfather');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})              
              break
      case 'ladadida':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/ladadida');
              syaa.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})             
              break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            syaa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			syaa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    syaa.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            syaa.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await syaa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await syaa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await syaa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            syaa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await syaa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await syaa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
//=================[ pengingat ]=========================//
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      syaa.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break 
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      fajar = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      syaa.sendMessage(from, fajar, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break 
case 'soundmenu': 
menu = `❏ 「 \`\`\`SOUND MENU\`\`\` 」//sc yuzzu
├────────────────────
│◦➛${prefix}sound1  
│◦➛${prefix}sound2  
│◦➛${prefix}sound3  
│◦➛${prefix}sound4  
│◦➛${prefix}sound5  
│◦➛${prefix}sound6  
│◦➛${prefix}sound7  
│◦➛${prefix}sound8  
│◦➛${prefix}sound9  
│◦➛${prefix}sound10  
│◦➛${prefix}sound11  
│◦➛${prefix}sound12  
│◦➛${prefix}sound13  
│◦➛${prefix}sound14  
│◦➛${prefix}sound15  
│◦➛${prefix}sound16  
│◦➛${prefix}sound17  
│◦➛${prefix}sound18  
│◦➛${prefix}sound19  
│◦➛${prefix}sound20  
│◦➛${prefix}sound21  
│◦➛${prefix}sound22  
│◦➛${prefix}sound23  
│◦➛${prefix}sound24  
│◦➛${prefix}sound25  
│◦➛${prefix}sound26  
│◦➛${prefix}sound27  
│◦➛${prefix}sound28  
│◦➛${prefix}sound29  
│◦➛${prefix}sound30  
│◦➛${prefix}sound31  
│◦➛${prefix}sound32  
│◦➛${prefix}sound33  
│◦➛${prefix}sound34  
│◦➛${prefix}sound35  
│◦➛${prefix}sound36  
│◦➛${prefix}sound37  
│◦➛${prefix}sound38  
│◦➛${prefix}sound39  
│◦➛${prefix}sound40  
│◦➛${prefix}sound41  
│◦➛${prefix}sound42  
│◦➛${prefix}sound43  
│◦➛${prefix}sound44  
│◦➛${prefix}sound45  
│◦➛${prefix}sound46  
│◦➛${prefix}sound47  
│◦➛${prefix}sound48  
│◦➛${prefix}sound49  
│◦➛${prefix}sound50  
│◦➛${prefix}sound51  
│◦➛${prefix}sound52  
│◦➛${prefix}sound53  
│◦➛${prefix}sound54  
│◦➛${prefix}sound55  
│◦➛${prefix}sound56  
│◦➛${prefix}sound57  
│◦➛${prefix}sound58  
│◦➛${prefix}sound59  
│◦➛${prefix}sound60  
│◦➛${prefix}sound61  
│◦➛${prefix}sound62  
│◦➛${prefix}sound63  
│◦➛${prefix}sound64  
│◦➛${prefix}sound65  
│◦➛${prefix}sound66  
│◦➛${prefix}sound67  
│◦➛${prefix}sound68  
│◦➛${prefix}sound69  
│◦➛${prefix}sound70  
│◦➛${prefix}sound71 
│◦➛${prefix}sound72
│◦➛${prefix}sound73
│◦➛${prefix}sound74
│◦➛${prefix}sound75
└──𝗙𝗔𝗝𝗔𝗥 𝗦𝗘𝗟𝗙 𝗕𝗢𝗧──`
katalog(menu)
break
case 'bokep':
menu = `❏ 「 \`\`\`MENU BOKEP\`\`\` 」
├────────────────────
│◦➛${prefix}bokep1
│◦➛${prefix}bokep2
│◦➛${prefix}bokep3
│◦➛${prefix}bokep4
│◦➛${prefix}bokep5
│◦➛${prefix}bokep6
│◦➛${prefix}bokep7
│◦➛${prefix}bokep8
│◦➛${prefix}bokep9
│◦➛${prefix}bokep10
│◦➛${prefix}-
└Fajar Ganz Self`
katalog(menu)
break
case 'bokep1':				 //lupa dari mana

qute = fs.readFileSync('./stik/siesta.jpg') 
syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'bokep2':

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'bokep3':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'bokep4':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'bokep5':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'bokep6':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'bokep7':

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'bokep8':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'bokep10':	

qute = fs.readFileSync('./stik/siesta.jpg') 

syaa.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break
//=================[ Dah ]=========================//
case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await syaa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             syaa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:            
         if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Sepi`)) {
                  reply(`Iya🗿`)
                  }

if (budy.startsWith('x')){
	if (!mek.key.fromMe) return fakestatus('OWNER ONLY')		
try {
return syaa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
