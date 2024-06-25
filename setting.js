global.prefa = ['','!','.','f']
global.ownNumb = '62895359528183'
global.owner = '62895359528183@s.whatsapp.net'
global.NamaOwner = ' Faza Md '
global.ownername = ' Faza MBh'
global.namabot = '  Faza ND'
global.botname = ' Faza MD'
global.baileys = "whiskeysocket/baileys"
global.namastore = "Faza Md"
global.themeemoji = '🪀'
global.namaowner = 'Rafael'
global.wm = `Copyright © 2024 Faza Md` // footer text
global.sgc = "https://wa.me/62895359528183"
global.sessionName = 'Session'
global.namabot = 'Faza Md' //ganti aj klo mau
global.author = 'Faza' //ganti aj klo mau
global.packname = 'Faza Sector' //ganti aj klo mau
global.saluran = 'https://wa.me/62895359528183'
global.idsal = "120363185387746998@newsletter" // opsional ID saluran
global.footer2 = 'simple whatsapp bot made by Faza Mdz'
global.yt = '' //gausah diganti 
global.version = '[Beta Version]'
global.mess = { // bagian ini gausah diganti 
    ingroup: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
    prem: 'khusus prem',
    group: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
    owner: 'Waduhh! ,Lu bukan owner gw bg🗣️',
    premium: 'You are not a premium user, Lu gabisa akses fitur ini karna lu bukn preium, aowkawokawok🐦',
    seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
    usingsetpp: 'Setpp hanya bisa dipake owner, lu kira gw bego? 🤓',
    wait: 'Tunggu sedang diproses🕙',
    botAdmin: '*[ System Notice ]* please add bot *admin*'
}
//GLOBAL APIKEY 
global.skizo = 'rafael'
global.key = 'yanzsky'
global.lolkey = 'GataDios'
global.phoneNumber = '62895359528183'
//
global.onlygc = false
//
//
global.group = 'https://xcode.eu.org'
//
global.elxyz = 'rafael'

global.autoBio = true
// False (Nonaktifin)
global.ownNumb = '089517657040'
global.ownermail = 'https://'

global.BOT_TOKEN = '6712791868:AAGuWJsmo75N2YbJiAH1RTZK0fmth9QvHIQ'
global.BOT_NAME = "Faza Md" 
global.OWNER_NAME = "Faza Md" 
global.OWNER_NUMBER = "62895359528183" 
global.OWNER = ["https://wa.me/62895359528183", "https://t.me/google.com"] 
global.tamnel = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoCCddFXob54HSX50rRFSuzTCDv2CzOnHSA&s'


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})