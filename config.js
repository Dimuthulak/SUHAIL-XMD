const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_17_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFEcnp4T1NLbk5BQ3UxWnozYVpwb2dxL0RIVk9QVWZGcTcvc2llZzBZSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTU0MDcyMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwNERFNDEwNTM1QjM0MTUyODg2MzNBQ0IxREEyNUUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjYyMzQyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU1NDA3MjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MjVFNkY3NDFGMkY2N0IzMDk1RjBEMkJFNjc3MDIzMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MjM0MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamNtSTNHbUlTaS0yQkV5NHJqMDRBQVwiLFxuICBcInBob25lSWRcIjogXCI1MDFjZmY1Ny0xZDcwLTQ3MjYtOTk3Ni02NmI3YjBlOTc0ZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAzNSxcbiAgICAgIDE1MCxcbiAgICAgIDIzOCxcbiAgICAgIDU2LFxuICAgICAgMTAwLFxuICAgICAgNjEsXG4gICAgICAxMjcsXG4gICAgICAxODYsXG4gICAgICA2NixcbiAgICAgIDExMSxcbiAgICAgIDE0NixcbiAgICAgIDEwNCxcbiAgICAgIDIzNixcbiAgICAgIDE0OSxcbiAgICAgIDE2OCxcbiAgICAgIDIzMSxcbiAgICAgIDIyMixcbiAgICAgIDE4NyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAxNzksXG4gICAgICAyMTAsXG4gICAgICAyMTYsXG4gICAgICAyMDMsXG4gICAgICAxOTUsXG4gICAgICA0MyxcbiAgICAgIDEwLFxuICAgICAgNDIsXG4gICAgICAyMTIsXG4gICAgICA5MSxcbiAgICAgIDIxNCxcbiAgICAgIDE3MixcbiAgICAgIDEzLFxuICAgICAgMTE2LFxuICAgICAgNDcsXG4gICAgICAxNDgsXG4gICAgICAyMjgsXG4gICAgICAxNDIsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUMyM0FFTUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU1NDA3MjExOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvKTJquG0jeG0nFwiLFxuICAgIFwibGlkXCI6IFwiMTg5NzAwNjE4ODk5NjQwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGFFa2JzRkVMMzRscm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3eXk0Ym0wT0ZtQXVrNXlwVklNbDVWajF1TXF2S0txS3pQK0plenM2MWlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdkSHkzVUx1cXdYa3k4ZlFWYjdMNmR2cDlXYzQ0emtsSCtoYTBwVS9kYTMrQU1SOTUxdHlPcmFRSjl6YjI2RERGdHUzemd5aCtKWkJOMnpsRzhXbUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFBUDk3UjNPQ3ZnbXBYb0ViZWR4QStuR2FnV1hTN0R5enBTNWoyZ3ZCejhqeTQ3Tk5kT0piN2ZYWTVja3R6WXczd3VqdUpjMXBpZjMzNGE5LzBlN0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU1NDA3MjExOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI2MjM0MjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKOXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo5di5qc29uIjogIntcImtleURhdGFcIjpcInJ3akpSd2M4NGswb3NqdzFzNmk3VFVPdk1RMFp0TnFmb1pQREhjY1VxQ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2NjE4ODQwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNjIzNDI3NjAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
