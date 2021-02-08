//FastGifçik original
const Discord = require("discord.js");
const client = new Discord.Client();
const destek = require("./desteksun.json");
const chalk = require("chalk");
const fs = require("fs");
const request = require("node-superfetch");
const sahips = require("./BotSahip.json");
const destan = require("./giveaway.json");
const yts = require("yt-search");
const ms = require("ms");
const engel = require("./engellenen.json");
const config = require("./fastgifc.json");
const ytdl = require("ytdl-core");
const ms2 = require("parse-ms");
const moment = require("moment");
const db = require("quick.db");
const bots = require("./BotSahip.json");
//FastGifçik original!

let png = config.fasticon;

let prefix = config.fastprefix;

//FatGifçik Prefix:
const data = new Map();

//FastGif builder:
let sahip = config.fastsahip;
//FastGif support server:
let support = config.fastsupport;
//FastGif version:
let version = config.fastversion;

let özelgif = config.fastözelgif;

let özel = config.fastözel;

let botid = config.fastid;


client.on("guildCreate", guild => {
setTimeout(function () {
db.set(`pres${guild.id}`, 1)
}, 1 * 259200000)
})


client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "hayırdır") {
        message.reply("Sana hayırdır bilader");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "afk") {
        var espriler = [
          "https://cdn.discordapp.com/attachments/804122487486414891/807668168222310410/tenor_1.gif",
          "https://cdn.discordapp.com/attachments/804122487486414891/807668382873944154/tenor_2.gif",
          "https://cdn.discordapp.com/attachments/804122487486414891/807669234728960040/tenor_3.gif"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.channel.send({
          embed: {
            title: `${message.author.tag} sana bunu diyorum`,
            image: {
              url: espri
            }
          }
        });
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "ben afk") {
        var espriler = [
          "https://cdn.discordapp.com/attachments/804122487486414891/807668168222310410/tenor_1.gif",
          "https://cdn.discordapp.com/attachments/804122487486414891/807669234728960040/tenor_3.gif",
          "https://cdn.discordapp.com/attachments/804122487486414891/807668382873944154/tenor_2.gif"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.channel.send({
          embed: {
            title: `${message.author.tag} sana bunu diyorum`,
            image: {
              url: espri
            }
          }
        });
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (
        message.content.toLowerCase() ===
        "https://tenor.com/view/napim-otuzbir-mizaj-gif-19220089"
      ) {
        message.reply("ÇALMA ALERT");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "arda") {
        message.reply("BOKUMU YESİN");
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "<@!699322335299108905>") {
        message.reply("AMK ONUN!");
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "naber") {
        message.reply("iyidir senden");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "bende iyi") {
        message.reply("tamm");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();
    let user = message.mentions.users.first();
    let reason = args.slice(0).join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "premiumveruser")) {
      if (sahips[message.author.id]) {
        if (user) {
          db.set(`precoin${user.id}`, 1);
          message.reply(`Başarıyla <@${user.id}> 'ye premium verildi'`);
        }
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();
    let user = message.mentions.users.first();
    let reason = args.slice(0).join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "premiumver")) {
      if (sahips[message.author.id]) {
        if (user) {
          db.set(`precoin${user.id}`, 1);
          message.reply(`Başarıyla <@${user.id}> 'ye premium verildi'`);
        }
        if (!user) {
          if (reason) {
            db.set(`pres${reason}`, 1);
            message.reply(`Başarıyla ${reason} idli sunucuya premium verildi!`);
            message.reply("PREMİUM AKTİF EDİLDİ AMK!");
          }
        }
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "napim") {
        message.reply("HaWlİ");
        message.react("😎");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "eeee") {
        message.reply("ne eeee");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "eeeee") {
        message.reply("eyw");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "hey") {
        message.reply("ney");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === prefix + "istatistik") {
        message.reply({
          embed: {
            title: "İstatistik:",
            description: `Sunucu: ${client.guilds.cache.size} \n Kullanıcı: ${client.users.cache.size} \n Ping: ${client.ws.ping}`
          }
        });
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "heyy") {
        message.reply("neyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "heyyy") {
        message.reply("neyyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "heyyyy") {
        message.reply("neyyyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "ney") {
        message.reply("hey");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "neyy") {
        message.reply("heyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "neyyy") {
        message.reply("heyyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "heyyyyy") {
        message.reply("neyyyyy");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "beni etiketle") {
        message.reply("\n:slight_smile:");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "bot") {
        message.reply("Qw:QE:.qw.e:QWe.ewq.eq:W:Eqqwe:");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "bu mesajı sil") {
        message.reply("tmm");
        message.delete();
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "yok") {
        message.reply("he ok");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "var") {
        message.reply("hayır yok");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "mal") {
        message.reply("nE");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "sana demedim") {
        message.reply("bana dedin");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "slk") {
        message.reply("ayy slk bu çıcık yıağğ");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "31") {
        message.reply("sj");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "id") {
        message.reply(message.author.id);
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "bu mesaja birsürü emoji ekle") {
        message.reply("tmm");
        message.react("<a:Tik9:804839746374467624>");
        message.react("<a:Tik8:804839699637075978>");
        message.react("<a:Tik7:804839649120878623>");
        message.react("<a:Tik6:804839596730875915>");
        message.react("<a:Tik5:804839545123897414>");
        message.react("<a:Tik4:804839499934072912>");
        message.react("<a:Tik4:804839499934072912>");
        message.react("<a:Tik3:804839447514054686>");
        message.react("<a:Tik2:804839395228254278>");
        message.react("<a:Tik10:804839797063549008>");
        message.react("<a:Tik1:804839331226583130>");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "emoji") {
        message.reply("tmm");
        message.react("<a:Tik9:804839746374467624>");
        message.react("<a:Tik8:804839699637075978>");
        message.react("<a:Tik7:804839649120878623>");
        message.react("<a:Tik6:804839596730875915>");
        message.react("<a:Tik5:804839545123897414>");
        message.react("<a:Tik4:804839499934072912>");
        message.react("<a:Tik4:804839499934072912>");
        message.react("<a:Tik3:804839447514054686>");
        message.react("<a:Tik2:804839395228254278>");
        message.react("<a:Tik10:804839797063549008>");
        message.react("<a:Tik1:804839331226583130>");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "sj") {
        message.reply("31");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "QWE") {
        message.reply("qwe");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "qwe") {
        message.reply("q w e");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "koy") {
        message.reply("gel");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "gel") {
        message.reply("git");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "amk") {
        message.reply("Ahmet mehmet kemal");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "futbol") {
        message.reply(":|");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "limon") {
        message.reply("karpuz");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "ben") {
        message.reply("yoo ben");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "sen") {
        message.reply("yok sen");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "para") {
        message.reply("efedim");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "PARA") {
        message.reply("ne");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "kalp") {
        message.reply("galp");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "beni tekrar et") {
        message.reply(
          `tamam ediyom bak yazdığın mesaj bu "${message}" daha fazlasını böyle kullanamazsın onun için ${prefix}yaz komudunu kullanabilirsin :slight_smile:`
        );
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content.toLowerCase() === "oç") {
        message.reply("orrrrman çocuğu");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === "62") {
        message.reply("şakaw");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === "lan") {
        message.reply("bam");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === "şakaw") {
        message.reply("gülmek");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === "beni tebrik et") {
        message.reply("yoo");
      }
    }
  }
});
client.on("message", message => {
  if (message.guild) {
    let en = db.fetch(`sohbet_${message.channel.id}`);
    if (en === null) en = 0;
    if (en > 0) {
      if (message.content === "neden") {
        message.reply("öyle");
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === "sa") {
        let author = db.fetch(`saas_${msg.guild.id}`);
        if (author < 1) return;
        msg.reply("Aleyküm selam, Hoş geldin");
        msg.react("🇦");
        msg.react("🇸");
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === `<@!${botid}>`) {
      msg.reply(`Prefix: ${prefix}`);
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sohbet-hoşgeldin-aç") {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres < 1) {
      msg.reply("Sadece premium sunucular için geçerlidir.");
    }

    if (pres > 0) {
      if (msg.guild) {
        if (!msg.member.hasPermission("ADMINISTRATOR"))
          return msg.channel.send(
            "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
          );
        if (msg.member.hasPermission("ADMINISTRATOR")) {
          db.set(`sohbets_${msg.channel.id}`, 1);
          msg
            .reply(
              "Sohbete hoşgeldin mesajı sistemi açıldı kapatmak için" +
                prefix +
                "sohbet-hoşgeldin-kapat"
            )
            .catch(err => {
              msg.channel.send(err);
            });
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sohbet-hoşgeldin-kapat") {
    if (msg.guild) {
      let pres = db.fetch(`pres_${msg.guild.id}`);
      if (pres < 1) {
        msg.reply("Sadece premium sunucular için geçerlidir.");
      }

      if (pres > 0) {
        if (!msg.member.hasPermission("ADMINISTRATOR"))
          return msg.channel.send(
            "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
          );
        if (msg.member.hasPermission("ADMINISTRATOR")) {
          db.set(`sohbets_${msg.channel.id}`, 0);
          msg.reply("bu sistem kapatıldı").catch(err => {
            msg.channel.send(err);
          });
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sohbet-sistemi-aç") {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres < 1) {
      msg.reply("Sadece premium sunucular için geçerlidir.");
    }

    if (pres > 0) {
      if (msg.guild) {
        if (!msg.member.hasPermission("ADMINISTRATOR"))
          return msg.channel.send(
            "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
          );
        if (msg.member.hasPermission("ADMINISTRATOR")) {
          db.set(`sohbet_${msg.channel.id}`, 1);
          msg
            .reply(
              "Sohbet sistemi BU KANAL İÇİN açıldı kapatmak için" +
                prefix +
                "sohbet-sistemi-kapat"
            )
            .catch(err => {
              msg.channel.send(err);
            });
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sohbet-sistemi-kapat") {
    if (msg.guild) {
      let pres = db.fetch(`pres_${msg.guild.id}`);
      if (pres < 1) {
        msg.reply("Sadece premium sunucular için geçerlidir.");
      }

      if (pres > 0) {
        if (!msg.member.hasPermission("ADMINISTRATOR"))
          return msg.channel.send(
            "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
          );
        if (msg.member.hasPermission("ADMINISTRATOR")) {
          db.set(`sohbet_${msg.channel.id}`, 0);
          msg.reply("Sohbet sistemi BU KANAL İÇİN kapatıldı").catch(err => {
            msg.channel.send(err);
          });
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "language") {
    if (msg.guild) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))
        return msg.channel.send(
          "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
        );
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        msg
          .reply("E.g: \n" + prefix + "language-tr \n" + prefix + "language-en")
          .catch(err => {
            msg.channel.send(err);
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "kurulum") {
    if (msg.guild) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))
        return msg.channel.send(
          "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
        );
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        db.set(`en_${msg.guild.id}`, 0);
        db.set(`tr_${msg.guild.id}`, 1);
        db.set(`saas_${msg.guild.id}`, 1);

        msg
          .reply(
            "Kurulum yapıldı ! dil `TR` olarak ayarlandı! \n Otomatik sa-as sistemi açıldı!"
          )
          .catch(err => {
            msg.channel.send(err);
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "language-tr") {
    if (msg.guild) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))
        return msg.channel.send(
          "Bu komut için `ADMINISTRATOR` yetkisi gerekir"
        );
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        db.set(`en_${msg.guild.id}`, 0);
        db.set(`tr_${msg.guild.id}`, 1);
        msg.reply("Başarıyla dil `TR` olarak ayarlandı!").catch(err => {
          msg.channel.send(err);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "setup") {
    if (msg.guild) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))
        return msg.channel.send("this command `ADMINISTRATOR` permission need");
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        db.set(`en_${msg.guild.id}`, 1);
        db.set(`tr_${msg.guild.id}`, 0);
        db.set(`saas_${msg.guild.id}`, 0);
        db.set(`sohbet_${msg.guild.id}`, 0);
        msg
          .reply("Successfuly setup! leanguage auto `EN` has been set")
          .catch(err => {
            msg.channel.send(err);
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "language-en") {
    if (msg.guild) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))
        return msg.channel.send("this command `ADMINISTRATOR` permission need");
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        db.set(`en_${msg.guild.id}`, 1);
        db.set(`tr_${msg.guild.id}`, 0);
        db.set(`saas_${msg.guild.id}`, 0);
        db.set(`sohbet_${msg.guild.id}`, 0);
        msg.reply("Successfuly languange changing `EN`").catch(err => {
          msg.channel.send(err);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "saas-aç") {
    if (msg.guild) {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        if (!msg.member.hasPermission("MANAGE_MESSAGES"))
          return msg.channel.send(
            "Bu komut için `MANAGE_MESSAGES` yetkisi gerekir"
          );
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
          db.set(`saas_${msg.guild.id}`, 2);
          msg
            .reply(
              "Sa - as sistemi açıldı artık birisi sa yazarsa otomatik olarak cevap vereceğim"
            )
            .catch(err => {
              msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
            });
        }
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "saas-kapat") {
        if (!msg.member.hasPermission("MANAGE_MESSAGES"))
          return msg.channel.send(
            "Bu komut için `MANAGE_MESSAGES` yetkisi gerekir"
          );
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
          db.set(`saas_${msg.guild.id}`, 0);
          msg.reply("Sa - as sistemi kapatıldı").catch(err => {
            msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
          });
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "küfüraç") {
        if (!msg.member.hasPermission("BAN_MEMBERS"))
          return msg.channel.send(
            "Bu komut için `BAN_MEMBERS` yetkisi gerekir"
          );
        if (msg.member.hasPermission("BAN_MEMBERS")) {
          db.set(`kufur_${msg.guild.id}`, 2);
          msg
            .reply("Başarılı artık birisi küfür ederse mesajını sileceğim")
            .catch(err => {
              msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
            });
        }
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "küfürkapat") {
        if (!msg.member.hasPermission("BAN_MEMBERS"))
          return msg.channel.send(
            "Bu komut için `BAN_MEMBERS` yetkisi gerekir"
          );
        if (msg.member.hasPermission("BAN_MEMBERS")) {
          db.set(`kufur_${msg.guild.id}`, 0);
          msg.reply("Bu sistem kapatıldı").catch(err => {
            msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
          });
        }
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "linkengelaç") {
        if (!msg.member.hasPermission("BAN_MEMBERS"))
          return msg.channel.send(
            "Bu komut için `BAN_MEMBERS` yetkisi gerekir"
          );
        if (msg.member.hasPermission("BAN_MEMBERS")) {
          db.set(`linkE_${msg.guild.id}`, 2);
          msg
            .reply(
              "Başarılı artık birisi link atarsa otomatik engelleyeceğim `Link engel daha deneme aşamasındadır çoğu linki engellemeyebilir`"
            )
            .catch(err => {
              msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
            });
        }
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "linkengelkapat") {
        if (!msg.member.hasPermission("BAN_MEMBERS"))
          return msg.channel.send(
            "Bu komut için `BAN_MEMBERS` yetkisi gerekir"
          );
        if (msg.member.hasPermission("BAN_MEMBERS")) {
          db.set(`linkE_${msg.guild.id}`, 0);
          msg.reply("Bu sistem kapatıldı").catch(err => {
            msg.reply("Beklenmedik bir sorunla karşılaşıldı:" + err);
          });
        }
      }
    }
  }
});

client.on("message", async msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        const kufur = [`prefix`];

        if (kufur.some(word => msg.content.toLowerCase().startsWith(word))) {
          try {
            msg.reply(
              "First do setup!" + prefix + "kurulum " + prefix + "setup"
            );
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  }
});
client.on("message", async msg => {
  if (msg.guild) {
    let i = db.fetch(`kufur_${msg.guild.id}`);
    if (i < 1) return;
    const kufur = [
      "abaza",
      "abazan",
      "aq",
      "ağzınasıçayım",
      "ahmak",
      "am",
      "amarım",
      "ambiti",
      "ambiti",
      "amcığı",
      "amcığın",
      "amcığını",
      "amcığınızı",
      "amcık",
      "amcıkhoşafı",
      "amcıklama",
      "amcıklandı",
      "amcik",
      "amck",
      "amckl",
      "amcklama",
      "amcklaryla",
      "amckta",
      "amcktan",
      "amcuk",
      "amık",
      "amına",
      "amınako",
      "amınakoy",
      "amınakoyarım",
      "amınakoyayım",
      "amınakoyim",
      "amınakoyyim",
      "amınas",
      "amınasikem",
      "amınasokam",
      "amınferyadı",
      "amını",
      "amınıs",
      "amınoglu",
      "amınoğlu",
      "amınoğli",
      "amısına",
      "amısını",
      "amina",
      "aminakoyarim",
      "aminakoyayım",
      "aminakoyayim",
      "aminakoyim",
      "aminda",
      "amindan",
      "amindayken",
      "amini",
      "aminiyarraaniskiim",
      "aminoglu",
      "aminoglu",
      "amiyum",
      "amk",
      "amkafa",
      "amkçocuğu",
      "amlarnzn",
      "amlı",
      "amm",
      "amna",
      "amnda",
      "amndaki",
      "amngtn",
      "amnn",
      "amq",
      "amsız",
      "amsiz",
      "amuna",
      "ana",
      "anaaann",
      "anal",
      "anan",
      "anana",
      "anandan",
      "ananı",
      "ananı",
      "ananın",
      "ananınam",
      "ananınamı",
      "ananındölü",
      "ananınki",
      "ananısikerim",
      "ananısikerim",
      "ananısikeyim",
      "ananısikeyim",
      "ananızın",
      "ananızınam",
      "anani",
      "ananin",
      "ananisikerim",
      "ananisikerim",
      "ananisikeyim",
      "ananisikeyim",
      "anann",
      "ananz",
      "anas",
      "anasını",
      "anasınınam",
      "anasıorospu",
      "anasi",
      "anasinin",
      "angut",
      "anneni",
      "annenin",
      "annesiz",
      "aptal",
      "aq",
      "a.q",
      "a.q.",
      "aq.",
      "atkafası",
      "atmık",
      "avrat",
      "babaannesikaşar",
      "babanı",
      "babanın",
      "babani",
      "babasıpezevenk",
      "bacına",
      "bacını",
      "bacının",
      "bacini",
      "bacn",
      "bacndan",
      "bitch",
      "bok",
      "boka",
      "bokbok",
      "bokça",
      "bokkkumu",
      "boklar",
      "boktan",
      "boku",
      "bokubokuna",
      "bokum",
      "bombok",
      "boner",
      "bosalmak",
      "boşalmak",
      "çük",
      "dallama",
      "daltassak",
      "dalyarak",
      "dalyarrak",
      "dangalak",
      "dassagi",
      "diktim",
      "dildo",
      "dingil",
      "dingilini",
      "dinsiz",
      "dkerim",
      "domal",
      "domalan",
      "domaldı",
      "domaldın",
      "domalık",
      "domalıyor",
      "domalmak",
      "domalmış",
      "domalsın",
      "domalt",
      "domaltarak",
      "domaltıp",
      "domaltır",
      "domaltırım",
      "domaltip",
      "domaltmak",
      "dölü",
      "eben",
      "ebeni",
      "ebenin",
      "ebeninki",
      "ecdadını",
      "ecdadini",
      "embesil",
      "fahise",
      "fahişe",
      "feriştah",
      "ferre",
      "fuck",
      "fucker",
      "fuckin",
      "fucking",
      "gavad",
      "gavat",
      "geber",
      "geberik",
      "gebermek",
      "gebermiş",
      "gebertir",
      "gerızekalı",
      "gerizekalı",
      "gerizekali",
      "gerzek",
      "gotlalesi",
      "gotlu",
      "gotten",
      "gotundeki",
      "gotunden",
      "gotune",
      "gotunu",
      "gotveren",
      "göt",
      "götdeliği",
      "götherif",
      "götlalesi",
      "götlek",
      "götoğlanı",
      "götoğlanı",
      "götoş",
      "götten",
      "götü",
      "götün",
      "götüne",
      "götünekoyim",
      "götünekoyim",
      "götünü",
      "götveren",
      "götveren",
      "götverir",
      "gtveren",
      "hasiktir",
      "hassikome",
      "hassiktir",
      "hassiktir",
      "hassittir",
      "ibine",
      "ibinenin",
      "ibne",
      "ibnedir",
      "ibneleri",
      "ibnelik",
      "ibnelri",
      "ibneni",
      "ibnenin",
      "ibnesi",
      "ipne",
      "itoğluit",
      "kahpe",
      "kahpenin",
      "kaka",
      "kaltak",
      "kancık",
      "kancik",
      "kappe",
      "kavat",
      "kavatn",
      "kocagöt",
      "koduğmunun",
      "kodumun",
      "kodumunun",
      "koduumun",
      "mal",
      "malafat",
      "malak",
      "manyak",
      "meme",
      "memelerini",
      "oc",
      "ocuu",
      "ocuun",
      "0Ç",
      "o.çocuğu",
      "orosbucocuu",
      "orospu",
      "orospucocugu",
      "orospuçoc",
      "orospuçocuğu",
      "orospuçocuğudur",
      "orospuçocukları",
      "orospudur",
      "orospular",
      "orospunun",
      "orospununevladı",
      "orospuydu",
      "orospuyuz",
      "orrospu",
      "oruspu",
      "oruspuçocuğu",
      "oruspuçocuğu",
      "osbir",
      "öküz",
      "penis",
      "pezevek",
      "pezeven",
      "pezeveng",
      "pezevengi",
      "pezevenginevladı",
      "pezevenk",
      "pezo",
      "pic",
      "pici",
      "picler",
      "piç",
      "piçinoğlu",
      "piçkurusu",
      "piçler",
      "pipi",
      "pisliktir",
      "porno",
      "pussy",
      "puşt",
      "puşttur",
      "s1kerim",
      "s1kerm",
      "s1krm",
      "sakso",
      "salaak",
      "salak",
      "serefsiz",
      "sexs",
      "sıçarım",
      "sıçtığım",
      "sıkecem",
      "sicarsin",
      "sie",
      "sik",
      "sikdi",
      "sikdiğim",
      "sike",
      "sikecem",
      "sikem",
      "siken",
      "sikenin",
      "siker",
      "sikerim",
      "sikerler",
      "sikersin",
      "sikertir",
      "sikertmek",
      "sikesen",
      "sikey",
      "sikeydim",
      "sikeyim",
      "sikeym",
      "siki",
      "sikicem",
      "sikici",
      "sikien",
      "sikienler",
      "sikiiim",
      "sikiiimmm",
      "sikiim",
      "sikiir",
      "sikiirken",
      "sikik",
      "sikil",
      "sikildiini",
      "sikilesice",
      "sikilmi",
      "sikilmie",
      "sikilmis",
      "sikilmiş",
      "sikilsin",
      "sikim",
      "sikimde",
      "sikimden",
      "sikime",
      "sikimi",
      "sikimiin",
      "sikimin",
      "sikimle",
      "sikimsonik",
      "sikimtrak",
      "sikin",
      "sikinde",
      "sikinden",
      "sikine",
      "sikini",
      "sikip",
      "sikis",
      "sikisek",
      "sikisen",
      "sikish",
      "sikismis",
      "sikiş",
      "sikişen",
      "sikişme",
      "sikitiin",
      "sikiyim",
      "sikiym",
      "sikiyorum",
      "sikkim",
      "sikleri",
      "sikleriii",
      "sikli",
      "sikm",
      "sikmek",
      "sikmem",
      "sikmiler",
      "sikmisligim",
      "siksem",
      "sikseydin",
      "sikseyidin",
      "siksin",
      "siksinler",
      "siksiz",
      "siksok",
      "siksz",
      "sikti",
      "siktigimin",
      "siktigiminin",
      "siktiğim",
      "siktiğimin",
      "siktiğiminin",
      "siktii",
      "siktiim",
      "siktiimin",
      "siktiiminin",
      "siktiler",
      "siktim",
      "siktimin",
      "siktiminin",
      "siktir",
      "siktiret",
      "siktirgit",
      "siktirgit",
      "siktirir",
      "siktiririm",
      "siktiriyor",
      "siktirlan",
      "siktirolgit",
      "sittimin",
      "skcem",
      "skecem",
      "skem",
      "sker",
      "skerim",
      "skerm",
      "skeyim",
      "skiim",
      "skik",
      "skim",
      "skime",
      "skmek",
      "sksin",
      "sksn",
      "sksz",
      "sktiimin",
      "sktrr",
      "skyim",
      "slaleni",
      "sokam",
      "sokarım",
      "sokarim",
      "sokarm",
      "sokarmkoduumun",
      "sokayım",
      "sokaym",
      "sokiim",
      "soktuğumunun",
      "sokuk",
      "sokum",
      "sokuş",
      "sokuyum",
      "soxum",
      "sulaleni",
      "sülalenizi",
      "tasak",
      "tassak",
      "taşak",
      "taşşak",
      "s.k",
      "s.keyim",
      "vajina",
      "vajinanı",
      "xikeyim",
      "yaaraaa",
      "yalarım",
      "yalarun",
      "orospi",
      "orospinin",
      "orospının",
      "orospı",
      "yaraaam",
      "yarak",
      "yaraksız",
      "yaraktr",
      "yaram",
      "yaraminbasi",
      "yaramn",
      "yararmorospunun",
      "yarra",
      "yarraaaa",
      "yarraak",
      "yarraam",
      "yarraamı",
      "yarragi",
      "yarragimi",
      "yarragina",
      "yarragindan",
      "yarragm",
      "yarrağ",
      "yarrağım",
      "yarrağımı",
      "yarraimin",
      "yarrak",
      "yarram",
      "yarramin",
      "yarraminbaşı",
      "yarramn",
      "yarran",
      "yarrana",
      "yarrrak",
      "yavak",
      "yavş",
      "yavşak",
      "yavşaktır",
      "yrrak",
      "zigsin",
      "zikeyim",
      "zikiiim",
      "zikiim",
      "zikik",
      "zikim",
      "ziksiin",
      "ağzına",
      "am",
      "mk",
      "amcık",
      "amcıkağız",
      "amcıkları",
      "amık",
      "amın",
      "amına",
      "amınakoyim",
      "amınoğlu",
      "amina",
      "amini",
      "amk",
      "amq",
      "anan",
      "ananı",
      "ananızı",
      "ananizi",
      "aminizi",
      "aminii",
      "avradını",
      "avradini",
      "anasını",
      "b.k",
      "bok",
      "boktan",
      "boşluk",
      "dalyarak",
      "dasak",
      "dassak",
      "daşak",
      "daşşak",
      "daşşaksız",
      "durum",
      "ensest",
      "erotik",
      "fahişe",
      "fuck",
      "g*t",
      "g*tü",
      "g*tün",
      "g*tüne",
      "g.t",
      "gavat",
      "gay",
      "gerızekalıdır",
      "gerizekalı",
      "gerizekalıdır",
      "got",
      "gotunu",
      "gotuze",
      "göt",
      "götü",
      "götüne",
      "götünü",
      "götünüze",
      "götüyle",
      "götveren",
      "götvern",
      "guat",
      "hasiktir",
      "hasiktr",
      "hastir",
      "i.ne",
      "ibne",
      "ibneler",
      "ibneliği",
      "ipne",
      "ipneler",
      "it",
      "iti",
      "itler",
      "kavat",
      "kıç",
      "kıro",
      "kromusunuz",
      "kromusunuz",
      "lezle",
      "lezler",
      "nah",
      "o.ç",
      "oç.",
      "okuz",
      "orosbu",
      "orospu",
      "orospucocugu",
      "orospular",
      "otusbir",
      "otuzbir",
      "öküz",
      "penis",
      "pezevenk",
      "pezevenkler",
      "pezo",
      "pic",
      "piç",
      "piçi",
      "piçinin",
      "piçler",
      "pis",
      "pok",
      "pokunu",
      "porn",
      "porno",
      "puşt",
      "sex",
      "s.tir",
      "sakso",
      "salak",
      "sanane",
      "sanane",
      "sçkik",
      "seks",
      "serefsiz",
      "serefsz",
      "serefszler",
      "sex",
      "sıçmak",
      "sıkerım",
      "sıkm",
      "sıktır",
      "si.çmak",
      "sicmak",
      "sicti",
      "sik",
      "sikenin",
      "siker",
      "sikerim",
      "sikerler",
      "sikert",
      "sikertirler",
      "sikertmek",
      "sikeyim",
      "sikicem",
      "sikiim",
      "sikik",
      "sikim",
      "sikime",
      "sikimi",
      "sikiş",
      "sikişken",
      "sikişmek",
      "sikm",
      "sikmeyi",
      "siksinler",
      "siktiğim",
      "siktimin",
      "siktin",
      "siktirgit",
      "siktir",
      "siktirgit",
      "siktirsin",
      "siqem",
      "skiym",
      "skm",
      "skrm",
      "sktim",
      "sktir",
      "sktirsin",
      "sktr",
      "sktroradan",
      "sktrsn",
      "snane",
      "sokacak",
      "sokarim",
      "sokayım",
      "sülaleni",
      "şerefsiz",
      "şerefsizler",
      "şerefsizlerin",
      "şerefsizlik",
      "tasak",
      "tassak",
      "taşak",
      "taşşak",
      "travesti",
      "yarak",
      "yark",
      "yarrağım",
      "yarrak",
      "yarramın",
      "yarrk",
      "yavşak",
      "yrak",
      "yrk",
      "ebenin",
      "ezik",
      "o.ç.",
      "orospu",
      "öküz",
      "pezevenk",
      "piç",
      "puşt",
      "salak",
      "salak",
      "serefsiz",
      "sik",
      "sperm",
      "bok",
      "aq",
      "a.q.",
      "amk",
      "am",
      "amına",
      "ebenin",
      "ezik",
      "fahişe",
      "gavat",
      "gavurundölü",
      "gerizekalı",
      "göte",
      "götü",
      "götüne",
      "götünü",
      "lan",
      "mal",
      "o.ç.",
      "orospu",
      "pezevenk",
      "piç",
      "puşt",
      "salak",
      "salak",
      "serefsiz",
      "sik",
      "sikkırığı",
      "sikerler",
      "sikertmek",
      "sikik",
      "sikilmiş",
      "siktir",
      "sperm",
      "taşak",
      "totoş",
      "yarak",
      "yarrak",
      "bok",
      "aq",
      "a.q.",
      "amk",
      "am",
      "ebenin",
      "fahişe",
      "gavat",
      "gerizakalı",
      "gerizekalı",
      "göt",
      "göte",
      "götü",
      "götüne",
      "götsün",
      "piçsin",
      "götsünüz",
      "piçsiniz",
      "götünüze",
      "kıçınız",
      "kıçınıza",
      "götünü",
      "hayvan",
      "ibne",
      "ipne",
      "kahpe",
      "kaltak",
      "lan",
      "mal",
      "o.c",
      "oc",
      "manyak",
      "o.ç.",
      "oç",
      "orospu",
      "öküz",
      "pezevenk",
      "piç",
      "puşt",
      "salak",
      "serefsiz",
      "sik",
      "sikkırığı",
      "sikerler",
      "sikertmek",
      "sikik",
      "sikiim",
      "siktim",
      "siki",
      "sikilmiş",
      "siktir",
      "siktir",
      "sperm",
      "şerefsiz",
      "taşak",
      "totoş",
      "yarak",
      "yarrak",
      "yosma",
      "aq",
      "a.q.",
      "amk",
      "amına",
      "amınakoyim",
      "amina",
      "ammına",
      "amna",
      "sikim",
      "sikiym",
      "sikeyim",
      "siktr",
      "kodumun",
      "amık",
      "sikem",
      "sikim",
      "sikiym",
      "s.iktm",
      "s.ikerim",
      "s.ktir",
      "amg",
      "am.k",
      "a.mk",
      "amık",
      "rakı",
      "rak",
      "oruspu",
      "oc",
      "ananın",
      "ananınki",
      "bacının",
      "bacını",
      "babanın",
      "sike",
      "skim",
      "skem",
      "amcık",
      "şerefsiz",
      "piç",
      "piçinoğlu",
      "amcıkhoşafı",
      "amınasokam",
      "amkçocuğu",
      "amınferyadı",
      "amınoglu",
      "piçler",
      "sikerim",
      "sikeyim",
      "siktiğim",
      "siktiğimin",
      "amını",
      "amına",
      "amınoğlu",
      "amk",
      "ipne",
      "ibne",
      "serefsiz",
      "şerefsiz",
      "piç",
      "piçkurusu",
      "götün",
      "götoş",
      "yarrak",
      "amcik",
      "sıçarım",
      "sıçtığım",
      "aq",
      "a.q",
      "a.q.",
      "aq.",
      "a.g.",
      "ag.",
      "amınak",
      "aminak",
      "amınag",
      "aminag",
      "amınıs",
      "amınas",
      "ananı",
      "babanı",
      "anani",
      "babani",
      "bacını",
      "bacini",
      "ecdadını",
      "ecdadini",
      "sikeyim",
      "sulaleni",
      "sülaleni",
      "dallama",
      "dangalak",
      "aptal",
      "salak",
      "gerızekalı",
      "gerizekali",
      "öküz",
      "angut",
      "dalyarak",
      "sikiyim",
      "sikeyim",
      "götüne",
      "götünü",
      "siktirgit",
      "siktirgit",
      "siktirolgit",
      "siktirolgit",
      "siktir",
      "hasiktir",
      "hassiktir",
      "hassiktir",
      "dalyarak",
      "dalyarrak",
      "kancık",
      "kancik",
      "kaltak",
      "orospu",
      "oruspu",
      "fahişe",
      "fahise",
      "pezevenk",
      "pezo",
      "kocagöt",
      "ambiti",
      "götünekoyim",
      "götünekoyim",
      "amınakoyim",
      "aminakoyim",
      "amınak",
      "aminakoyayım",
      "aminakoyayim",
      "amınakoyarım",
      "aminakoyarim",
      "aminakoyarim",
      "ananısikeyim",
      "ananisikeyim",
      "ananısikeyim",
      "ananisikeyim",
      "ananisikerim",
      "ananısikerim",
      "ananisikerim",
      "ananısikerim",
      "orospucocugu",
      "oruspucocu",
      "amk",
      "amq",
      "sikik",
      "götveren",
      "götveren",
      "amınoğlu",
      "aminoglu",
      "amınoglu",
      "gavat",
      "kavat",
      "anneni",
      "annenin",
      "ananın",
      "ananin",
      "dalyarak",
      "sikik",
      "amcık",
      "siktir",
      "piç",
      "pic",
      "sie",
      "yarram",
      "göt",
      "meme",
      "dildo",
      "skcem",
      "skerm",
      "skerim",
      "skecem",
      "orrospu",
      "annesiz",
      "kahpe",
      "kappe",
      "yarak",
      "yaram",
      "dalaksız",
      "yaraksız",
      "amlı",
      "s1kerim",
      "s1kerm",
      "s1krm",
      "sikim",
      "orospuçocukları",
      "oç"
    ];

    if (kufur.some(word => msg.content.toLowerCase().startsWith(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          msg.reply("Küfür edemezsin bu sunucuda koruma açık!");
          db.add(`engkuf${msg.guild.id}`, 1)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});
client.on("message", async message => {
  if(message.guild){
    if (message.content === prefix + 'sunucubilgi'){
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', `<@${message.guild.owner.id}>`)
    .addField('Kanal sayısı:', message.guild.channels.cache.size)
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
      .setFooter(`${message.author.tag} tarafından istendi ${özelgif} sunucubilgi komudu`)
    message.channel.send(sunucubilgi);
    }}}
);





client.on("message", async message => {
  if(message.guild){
    
    if (message.content === prefix + 'stat-aç'){

      let ab2 = db.fetch(`engkuf${message.guild.id}`)
      if (ab2 === null)ab2 = 0;
            let ab3 = db.fetch(`englink${message.guild.id}`)
      if (ab3 === null)ab3 = 0;
            message.guild.channels.create(`${özel} ${message.guild.name} Stat panel:`, {
  type: 'category'
            }).then(panel => {

message.guild.channels.create(`Üye sayısı: ${message.guild.memberCount}`, {
  type: 'voice',
}).then(üye => {
  üye.setParent(panel.id)
})
  message.guild.channels.create(`Kanal sayısı: ${message.guild.channels.cache.size}`, {
  type: 'voice',
}).then(üye => {
  üye.setParent(panel.id)
})                            
  message.guild.channels.create(`Engellenen küfür: ${ab2}`, {
  type: 'voice',
}).then(üye => {
  üye.setParent(panel.id)
})           
                message.guild.channels.create(`Engellenen link: ${ab3}`, {
  type: 'voice',
}).then(üye => {
  üye.setParent(panel.id)
})           

            })

      message.reply('Şuanda stat sistemi çalışmıyodur.')

      }    }})
client.on("message", async msg => {
  if (msg.guild) {
    if (!bots[msg.author.id]) {
      let i = db.fetch(`linkE_${msg.guild.id}`);
      if (i < 1) return;
      const kufur = [
        "www",
        "https",
        ".com",
        ".org",
        ".tk",
        ".ga",
        "http",
        "//:",
        "http",
        ".net",
        ".ma",
        ".me",
        ".gg",
        "discord.gg",
        "gg/",
        ".gg/",
        "discord.gg/",
        "org",
        "com",
        "tk",
        "ga",
        "net",
        "www",
        "discord.com/",
        "invite",
        "invite/",
        "/invite/",
        ".com/"
      ];

      if (kufur.some(word => msg.content.toLowerCase().startsWith(word))) {
        try {
          if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();
            msg.reply("Link atamazsın bu sunucuda engel açık!");
            db.add(`englink${msg.guild.id}`, 1)
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});



client.on("message", message => {
  let bekle = db.fetch(`bekle_${message.author.id}`);
  let en = db.fetch(`sohbet_${message.channel.id}`);
  if (en === null) en = 0;
  if (en > 0) {
    if (!engel[message.author.id]) {
      if (bekle < 1) {
        db.set(`bekle_${message.author.id}`, 1);
        setTimeout(function() {
          db.set(`bekle_${message.author.id}`, 0);
        }, 1 * 1000000);
        message.channel.send(
          `Hey! <@${message.author.id}> Sohbete yeni katılmış görünüyorsun hoş geldin.`
        );
      }
    }
  }
});

client.on("message", message => {
  let pre = db.fetch(`precoin_${message.author.id}`);
  let bekle = db.fetch(`bekle_${message.author.id}`);
  if (pre === null) pre = 0;
  if (pre > 0) {
    if (bekle < 1) {
      db.set(`bekle_${message.author.id}`, 1);
      setTimeout(function() {
        db.set(`bekle_${message.author.id}`, 0);
      }, 1 * 100000);
      message.channel.send(
        `Hey! bir premium üye belirdi! <@${message.author.id}>`
      );
    }
  }
});



client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();

    const sil = args.join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "sil")) {
      let en = db.fetch(`en_${message.guild.id}`);
      if (en < 1) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
          return message.channel.send(
            "Bu komudu kulanmak için `MANAGE_MESSAGES` yetkisi gerekir"
          );
        if (!sil) return message.channel.send("5-100 arası bir yazı yazmadın");
        if (sil < 5) return message.channel.send("en az 5 mesaj silebilirim");
        if (sil > 100)
          return message.channel.send("en fazla 100 mesaj silebilirim");

        message.channel
          .bulkDelete(sil)

          .catch(err => {
            message.reply(`${err}`);
          });
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();

    const sil = args.join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "delete")) {
      let tr = db.fetch(`tr_${message.guild.id}`);
      if (tr < 1) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
          return message.channel.send(
            "This command requires `MANAGE_MESSAGES` privilege"
          );
        if (!sil)
          return message.channel.send(
            "You need to specify an amount between 5-100"
          );
        if (sil < 5) return message.channel.send("I can delete min 5 message");
        if (sil > 100) return message.channel.send("I can delete 100 message");

        message.channel
          .bulkDelete(sil)

          .catch(err => {
            message.reply(`${err}`);
          });
      }
    }
  }
});



client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();

    let reason = args.slice(0).join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "yaz")) {
      let en = db.fetch(`en_${message.guild.id}`);
      if (en < 1) {
        if (reason.length < 1)
          return message.reply("Lütfen yazdıracağın şeyi yaz");

        message.delete();
        message.channel
          .send({
            embed: {
              title: `${reason}`,
              description: `${message.author.tag} tarafından bota yazdırıldı`
            }
          })
          .catch(err => {
            message.reply(err);
          });
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();

    let reason = args.slice(0).join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "say")) {
      let tr = db.fetch(`tr_${message.guild.id}`);
      if (tr < 1) {
        if (reason.length < 1)
          return message.reply("Please write what you're going to print");

        message.delete();
        message.channel
          .send({
            embed: {
              title: `${reason}`,
              description: `writing a bot by ${message.author.tag} `
            }
          })
          .catch(err => {
            message.reply(err);
          });
      }
    }
  }
});

client.on("message", message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();
    var user = message.mentions.users.first();

    let reason = args.slice(0).join(" ");

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "avatar")) {
      let tr = db.fetch(`tr_${message.guild.id}`);
      if (tr < 1) {
        if (reason.length < 1)
          return message.channel.send({
            embed: {
              title: message.author.tag,
              image: {
                url: message.author.avatarURL()
              }
            }
          });
        message.channel.send({
          embed: {
            title: `${user.tag}`,
            image: {
              url: user.avatarURL()
            },
            footer: {
              icon_url: png,
              text: `asked by ${message.author.id}`
            }
          }
        });
      }
    }
    let en = db.fetch(`en_${message.guild.id}`);
    if (en < 1) {
      if (message.content.startsWith(prefix + "avatar")) {
        if (reason.length < 1)
          return message.channel.send({
            embed: {
              title: message.author.tag,
              image: {
                url: message.author.avatarURL()
              }
            }
          });
        message.channel.send({
          embed: {
            title: `${user.tag}`,
            image: {
              url: user.avatarURL()
            },
            footer: {
              icon_url: png,
              text: `${message.author.id} tarafından istendi`
            }
          }
        });
      }
    }
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  var user = message.mentions.users.first();

  let reason = args.slice(0).join(" ");

  if (!message.guild) return;
  if (message.content.startsWith(prefix + "hug")) {
    let tr = db.fetch(`tr_${message.guild.id}`);
    if (tr < 1) {
      if (message.mentions.users.size < 1)
        return message.reply("please mention the person you want to hug");
      if (user.id === message.author.id)
        return message.reply("You cant hug yourself");
      if (user.id === "777491135852707840")
        return message.reply("Sorry im a bot");

      message.channel.send({
        embed: {
          title: `${message.author.tag} ${user.tag} hug`,
          image: {
            url:
              "https://cdn.discordapp.com/attachments/802253623534944256/802499314349244416/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif"
          },
          footer: {
            icon_url: png,
            text: `${message.author.tag} Hugged`
          }
        }
      });
    }
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  const user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");
  // If the message content start's with "!kick"
  if (message.content.startsWith(prefix + "sarıl")) {
    let en = db.fetch(`en_${message.guild.id}`);
    if (en < 1) {
      if (message.content.startsWith(prefix + "sarıl")) {
        if (message.mentions.users.size < 1)
          return message.reply("Lütfen kime sarılacağını etiketle");
        if (user.id === message.author.id)
          return message.reply("Kendine sarılamazsın");
        if (user.id === "777491135852707840")
          return message.reply("Üzgünüm ben botum");

        message.channel.send({
          embed: {
            title: `${message.author.tag} ${user.tag} a sarıldı.`,
            image: {
              url:
                "https://cdn.discordapp.com/attachments/802253623534944256/802499314349244416/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif"
            },
            footer: {
              icon_url: png,
              text: `${message.author.tag} Sarıldı`
            }
          }
        });
      }
    }
  }
});
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  const user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");
  // If the message content start's with "!kick"
  if (message.content.startsWith(prefix + "coins")) {
    let tr = db.fetch(`tr_${message.guild.id}`);
    if (tr < 1) {
      let bal = db.fetch(`coins_${message.author.id}`);
      if (bal === null) bal = 0;
      if (message.mentions.users.size < 1)
        return message.reply("You Have " + bal + " Coin!");
      let bal2 = db.fetch(`coins_${user.id}`);
      if (bal2 === null) bal2 = 0;
      message.channel.send(`<@${user.id}> have ${bal2} Coin!`);
      let en = db.fetch(`en_${message.guild.id}`);
      if (en < 1) {
        let bal = db.fetch(`coins_${message.author.id}`);
        if (bal === null) bal = 0;
        if (message.mentions.users.size < 1)
          return message.reply("Senin " + bal + " Coinin var!");
        let bal2 = db.fetch(`coins_${user.id}`);
        if (bal2 === null) bal2 = 0;
        message.channel.send(`<@${user.id}> nin ${bal2} coini var.`);
      }
    }
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  const user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");
  // If the message content start's with "!kick"
  if (message.content.startsWith(prefix + "coins")) {
    let en = db.fetch(`en_${message.guild.id}`);
    if (en < 1) {
      let bal = db.fetch(`coins_${message.author.id}`);
      if (bal === null) bal = 0;
      if (message.mentions.users.size < 1)
        return message.reply("Senin " + bal + " Coinin var!");
      let bal2 = db.fetch(`coins_${user.id}`);
      if (bal2 === null) bal2 = 0;
      message.channel.send(`<@${user.id}> nin ${bal2} coini var.`);
    }
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  const user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");
  // If the message content start's with "!kick"
  if (message.content.startsWith(prefix + "send")) {
    let tr = db.fetch(`tr_${message.guild.id}`);
    if (tr < 1) {
      if (message.mentions.users.size < 1)
        return message.reply("you did not write to whom to mention");
      if (user.id === message.author.id)
        return message.reply("U cant send yourself");
      if (user.id === "777491135852707840")
        return message.reply("İm a bot sorry");
      if (reason.length < 1)
        return message.reply("you didnt write how many to send");
      let author = db.fetch(`coins_${message.author.id}`);
      if (author < reason)
        return message.reply("You not have " + reason + " coin!");
      db.subtract(`coins_${message.author.id}`, reason);
      db.add(`coins_${user.id}`, reason);
      message
        .reply(`Successfuly sended \n log:\nuser ${user}\nhow${reason}`)
        .catch(err => {
          message.reply(err);
        });
    }
  }
});
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (!message.guild) return;
  const user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");

  if (message.content.startsWith(prefix + "send")) {
    let en = db.fetch(`en_${message.guild.id}`);
    if (en < 1) {
      if (message.mentions.users.size < 1)
        return message.reply("Kime göndereceksin? etiketlemedin.");
      if (user.id === message.author.id)
        return message.reply("Kendine gösteremezsin");
      if (user.id === "777491135852707840")
        return message.reply("Bana gönderemezsin");
      if (reason.length < 1)
        return message.reply("Ne kadar göndereceğini yazmadın");
      let author = db.fetch(`coins_${message.author.id}`);
      if (author < reason)
        return message.reply("Senin " + reason + " coinin yok!");
      db.subtract(`coins_${message.author.id}`, reason);
      db.add(`coins_${user.id}`, reason);
      message
        .reply(
          `Başarıyla gönderildi! \n log:\nkişi: ${user}\nGönderilen: ${reason}`
        )
        .catch(err => {
          message.reply(err);
        });
    }
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (!message.guild) return;

  if (message.content.startsWith(prefix + "at")) {
    let en = db.fetch(`en_${message.guild.id}`);
    if (en < 1) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply("Bu komut için `KICK_MEMBERS` Yetkisi gerekir");
      }
      if (message.member.hasPermission("KICK_MEMBERS")) {
        const user = message.mentions.users.first();

        if (user) {
          const member = message.guild.member(user);

          if (user.id === message.author.id)
            return message.reply("kendini atamazsın!");

          if (member) {
            member
              .kick("Optional reason that will display in the audit logs")
              .then(() => {
                message.reply(`Başarıyla atıldı! ${user.tag}`);
                user.send(
                  `${message.author.tag} tarafından ${message.guild.name} sunucusundan atıldın.`
                );
              })
              .catch(err => {
                message.reply(err);

                console.error(err);
              });
          } else {
            message.reply("Bu kullanıcı bu sunucuda değil.");
          }
        } else {
          message.reply("Kimi atacağını etiketlemedin");
        }
      }
    }
  }
});
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (!message.guild) return;

  if (message.content.startsWith(prefix + "kick")) {
    let tr = db.fetch(`tr_${message.guild.id}`);
    if (tr < 1) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply("You not have permission `KICK_MEMBERS`");
      }
      if (message.member.hasPermission("KICK_MEMBERS")) {
        const user = message.mentions.users.first();

        if (user) {
          const member = message.guild.member(user);

          if (user.id === message.author.id)
            return message.reply("u cant kick yourself");

          if (member) {
            member
              .kick("Optional reason that will display in the audit logs")
              .then(() => {
                message.reply(`Successfuly kicked: ${user.tag}`);
                user.send(
                  `you are kicked by ${message.author.tag} guild: ${message.guild.name}`
                );
              })
              .catch(err => {
                message.reply(err);

                console.error(err);
              });
          } else {
            message.reply(
              "User is not on this server, did you come to the wrong place?"
            );
          }
        } else {
          message.reply("You didnt mention user");
        }
      }
      let en = db.fetch(`en_${message.guild.id}`);
      if (en < 1) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
          message.reply("Bu komut için `KICK_MEMBERS` Yetkisi gerekir");
        }
        if (message.member.hasPermission("KICK_MEMBERS")) {
          const user = message.mentions.users.first();

          if (user) {
            const member = message.guild.member(user);

            if (user.id === message.author.id)
              return message.reply("kendini atamazsın!");

            if (member) {
              member
                .kick("Optional reason that will display in the audit logs")
                .then(() => {
                  message.reply(`Başarıyla atıldı! ${user.tag}`);
                  user.send(
                    `${message.author.tag} tarafından ${message.guild.name} sunucusundan atıldın.`
                  );
                })
                .catch(err => {
                  message.reply(err);

                  console.error(err);
                });
            } else {
              message.reply("Bu kullanıcı bu sunucuda değil.");
            }
          } else {
            message.reply("Kimi atacağını etiketlemedin");
          }
        }
      }
    }
  }
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const user = message.mentions.users.first();
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  let reason = args.slice(1).join(" ");
  if (!message.guild) return;

  if (message.content.startsWith(prefix + "ban")) {
    let tr = db.fetch(`tr_${message.guild.id}`);
    if (tr < 1) {
      if (!user) return message.reply("Please mention user");
      if (reason.length < 1) return message.reply("Please type reason");

      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.reply("You not have permission `BAN_MEMBERS`");
      }

      if (message.member.hasPermission("BAN_MEMBERS")) {
        if (user) {
          const member = message.guild.member(user);

          if (user.id === message.author.id)
            return message.reply("u cant ban yourself");

          if (member) {
            member
              .ban({
                reason: `Bans: ${message.author.tag} reason: ${reason},`
              })

              .then(() => {
                message.reply(`Successfully banned ${user.tag}`);
              });

            user
              .send(
                `${message.guild.name} guild <#${message.channel.id}> channel ${message.author.tag} by ${reason} because of you banned`
              )
              .catch(err => {
                message.reply(err);

                console.error(err);
              });
          } else {
            message.reply(
              "User is not on this server, did you come to the wrong place?"
            );
          }
        } else {
          message.reply("You didnt mention user");
        }
      }
    }
  }
});
client.on("message", async message => {
  if (message.guild) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();
    let reason = args.slice(1).join(" ");
    if (!message.guild) return;
    const user = message.mentions.users.first();

    if (message.content.startsWith(prefix + "yasakla")) {
      let en = db.fetch(`en_${message.guild.id}`);
      if (en < 1) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
          message.reply("Bu komut için`BAN_MEMBERS` Yetkisi gerekir");
        }

        if (message.member.hasPermission("BAN_MEMBERS")) {
          if (user) {
            const member = message.guild.member(user);

            if (user.id === message.author.id)
              return message.reply("Kendini yasaklayamazsın");

            if (member) {
              member
                .ban({
                  reason: `Banlayan: ${message.author.tag} sebep: ${reason}`
                })

                .then(() => {
                  message.reply(`Başarıyla banlandı ${user.tag}`);
                });

              user
                .send(
                  `${message.guild.name} Sunucusundan ${message.author.tag} tarafından ${reason} nedeniyle yasaklandın.`
                )
                .catch(err => {
                  message.reply(err);

                  console.error(err);
                });
            } else {
              message.reply("Bu kullanıcı bu sunucuda değil");
            }
          } else {
            message.reply("Kimi yasaklayacağını etiketlemedin").catch(err => {
              message.reply(err);
            });
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "swords") {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      let bal = db.fetch(`sword_${msg.author.id}`);

      if (bal === null) bal = 0;

      msg.channel.send("you have " + bal + " sword").catch(err => {
        msg.reply(err);
      });
    }
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "swords") {
    let bal = db.fetch(`sword_${msg.author.id}`);

    if (bal === null) bal = 0;
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      msg.channel.send("Senin " + bal + " kılıcın var").catch(err => {
        msg.reply(err);
      });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "diamonds") {
    let bal = db.fetch(`reddia_${msg.author.id}`);

    if (bal === null) bal = 0;
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      msg.channel.send("Senin " + bal + " Kırmızı elmasın var").catch(err => {
        msg.reply(err);
      });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "diamonds") {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      let bal = db.fetch(`reddia_${msg.author.id}`);

      if (bal === null) bal = 0;

      msg.channel.send("you have " + bal + " Red diamond").catch(err => {
        msg.reply(err);
      });
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "inv") {
        let bal = db.fetch(`coins_${msg.author.id}`);

        if (bal === null) bal = 0;

        let reddia = db.fetch(`reddia_${msg.author.id}`);

        if (reddia === null) reddia = 0;

        let sword = db.fetch(`sword_${msg.author.id}`);

        if (sword === null) sword = 0;
        let precoin = db.fetch(`precoin_${msg.author.id}`);

        if (precoin === null) precoin = 0;

        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("00FFFF")
          .setTitle("Senin envanterin:")
          .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
          .addFields(
            { name: "Senin coinlerin:", value: bal },
            { name: "\u200B", value: "\u200B" },
            { name: "Senin kırmızı elmasların:", value: reddia, inline: true },
            { name: "Senin kılıçların", value: sword, inline: true },
            { name: "Senin premium elmasların", value: precoin, inline: true },
            { name: "Petlerin:", value: prefix + "mypets", inline: true }
          );
        msg.reply(exampleEmbed).catch(err => {
          msg.reply(err);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "inv") {
        let bal = db.fetch(`coins_${msg.author.id}`);

        if (bal === null) bal = 0;

        let reddia = db.fetch(`reddia_${msg.author.id}`);

        if (reddia === null) reddia = 0;

        let sword = db.fetch(`sword_${msg.author.id}`);

        if (sword === null) sword = 0;
        let precoin = db.fetch(`precoin_${msg.author.id}`);

        if (precoin === null) precoin = 0;

        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("00FFFF")
          .setTitle("Your inventory:")
          .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
          .addFields(
            { name: "Your coins:", value: bal },
            { name: "\u200B", value: "\u200B" },
            { name: "Your Red diamonds:", value: reddia, inline: true },
            { name: "Your swords:", value: sword, inline: true },
            { name: "Your premium diamonds:", value: precoin, inline: true },
            { name: "Your pets:", value: prefix + "mypets", inline: true }
          );
        msg.reply(exampleEmbed).catch(err => {
          msg.reply(err);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "mypets") {
        let bal = db.fetch(`coins_${msg.author.id}`);

        if (bal === null) bal = 0;

        let reddia = db.fetch(`smallpet_${msg.author.id}`);

        if (reddia === null) reddia = 0;

        let sword = db.fetch(`bigpet_${msg.author.id}`);

        if (sword === null) sword = 0;
        let precoin = db.fetch(`legpet_${msg.author.id}`);

        if (precoin === null) precoin = 0;

        if (sword === null) sword = 0;
        let ultp = db.fetch(`ulpet_${msg.author.id}`);

        if (ultp === null) ultp = 0;
        let paga = db.fetch(`coin_${msg.author.id}`);

        if (paga === null) paga = 0;

        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("00FFFF")
          .setTitle("Senin petlerin:")
          .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
          .addFields(
            { name: "Senin coinlerin:", value: bal },
            { name: "\u200B", value: "\u200B" },
            { name: "Küçük petlerin:", value: reddia, inline: true },
            { name: "Büyük petlerin:", value: sword, inline: true },
            { name: "Efsanevi petlerin:", value: precoin, inline: true },
            { name: "Nihai petlerin:", value: ultp, inline: true }
          )
          .catch(err => {
            msg.reply(err);
          });

        msg.reply(exampleEmbed);
      }
    }
  }
});



client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "mypets") {
        let bal = db.fetch(`coins_${msg.author.id}`);

        if (bal === null) bal = 0;

        let reddia = db.fetch(`smallpet_${msg.author.id}`);

        if (reddia === null) reddia = 0;

        let sword = db.fetch(`bigpet_${msg.author.id}`);

        if (sword === null) sword = 0;
        let precoin = db.fetch(`legpet_${msg.author.id}`);

        if (precoin === null) precoin = 0;

        if (sword === null) sword = 0;
        let ultp = db.fetch(`ulpet_${msg.author.id}`);

        if (ultp === null) ultp = 0;
        let paga = db.fetch(`coin_${msg.author.id}`);

        if (paga === null) paga = 0;

        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("00FFFF")
          .setTitle("Your pets:")
          .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
          .addFields(
            { name: "Your coins:", value: bal },
            { name: "\u200B", value: "\u200B" },
            { name: "Your small pets:", value: reddia, inline: true },
            { name: "Your big pets:", value: sword, inline: true },
            { name: "Your legend pets:", value: precoin, inline: true },
            { name: "Your ultimate pets:", value: ultp, inline: true }
          )
          .catch(err => {
            msg.reply(err);
          });

        msg.reply(exampleEmbed);
      }
    }
  }
});

//pet messages by FastGifçik
client.on("message", msg => {
  if (msg.guild) {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres > 0) {
      let author = db.fetch(`smallpet_${msg.author.id}`);
      if (author < 1) return;

      db.fetch(`coin_${msg.author.id}`);
      db.add(`coin_${msg.author.id}`, 5);
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres > 0) {
      let author = db.fetch(`bigpet_${msg.author.id}`);
      if (author < 1) return;

      db.fetch(`coin_${msg.author.id}`);
      db.add(`coin_${msg.author.id}`, 10);
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres > 0) {
      let author = db.fetch(`ulpet_${msg.author.id}`);
      if (author < 1) return;

      db.fetch(`coins_${msg.author.id}`);
      db.add(`coins_${msg.author.id}`, 5);
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    if (pres > 0) {
      let author = db.fetch(`legpet_${msg.author.id}`);
      if (author < 1) return;

      db.fetch(`coins_${msg.author.id}`);
      db.add(`coins_${msg.author.id}`, 2);
    }
  }
});
//pet messages

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "buypremium") {
        if (!msg.guild) {
          msg.reply("You cant this command DM!");
        }
        if (msg.guild) {
          let author = db.fetch(`coins_${msg.author.id}`);
          if (author < 10000) return msg.channel.send("Premium 10k coins");
          db.subtract(`coins_${msg.author.id}`, 10000);

          db.fetch(`precoin_${msg.author.id}`);
          db.add(`precoin_${msg.author.id}`, 1);

          msg.reply(`Başarıyla 1 haftalık premiumun aktif edildi!`);
          console.log(`${msg.author.tag} pre aldı`);
                    setTimeout(function() {
            db.set(`precion_${msg.author.id}`, 0);
            db.set(`pres_${msg.guild.id}`, 0);
          }, 1 * 604820000);
        }//KKKKKKK
        }
        let author = db.fetch(`precoin_${msg.author.id}`);
        if (author > 1) return msg.reply("You are premium");
      }
    }})
  


client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "buypremium") {
        if (!msg.guild) {
          msg.reply("You cant this command DM!");
        }
        if (msg.guild) {
          let author = db.fetch(`coins_${msg.author.id}`);
          if (author < 10000) return msg.channel.send("Premium 10k coins");
          db.subtract(`coins_${msg.author.id}`, 10000);

          db.fetch(`precoin_${msg.author.id}`);
          db.add(`precoin_${msg.author.id}`, 1);

          msg.reply("Successfullt activited 1 weekly premium");
          db.set(`precoin_${msg.author.id}`, 1);
          db.set(`pres_${msg.guild.id}`, 1);
          setTimeout(function() {
            db.set(`precion_${msg.author.id}`, 0);
            db.set(`pres_${msg.guild.id}`, 0);
          }, 1 * 604820000);
        }//KKKKKKK
        let author = db.fetch(`precoin_${msg.author.id}`);
        if (author > 1) return msg.reply("You are premium");

        let en = db.fetch(`en_${msg.guild.id}`);
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "full") {
    if (!bots[msg.author.id]) {
      msg.reply("bot sahibi yapabilir");
    }
    if (bots[msg.author.id]) {
      db.set(
        `coins_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `sword_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `reddia_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `precoin_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `sahipp_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `smallpet_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `bigpet_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `legpet_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(
        `ulpet_${msg.author.id}`,
        999999999999999999999999999999999999999999
      );
      db.set(`precoin_${msg.author.id}`, 1);
      db.set(`pres_${msg.guild.id}`, 1);
      msg.reply("Successfuly!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "reset") {
    if (!bots[msg.author.id]) {
      msg.reply("bot sahibi yapabilir");
    }
    if (bots[msg.author.id]) {
      db.set(`coins_${msg.author.id}`, 0);
      db.set(`sword_${msg.author.id}`, 0);
      db.set(`reddia_${msg.author.id}`, 0);
      db.set(`precoin_${msg.author.id}`, 0);
      db.set(`sahipp_${msg.author.id}`, 0);
      db.set(`smallpet_${msg.author.id}`, 0);
      db.set(`bigpet_${msg.author.id}`, 0);
      db.set(`coin_${msg.author.id}`, 0);
      db.set(`legpet_${msg.author.id}`, 0);
      db.set(`ulpet_${msg.author.id}`, 0);
      msg.reply("Successfuly!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "buyreddia") {
    if (msg.guild) {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Guild only");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "sadece premium sunucularda ve destek sunucusunda aktifdir"
            );
          }

          if (pres > 0) {
            let author = db.fetch(`coins_${msg.author.id}`);
            if (author < 50) return msg.channel.send("50 coinin yok");
            db.subtract(`coins_${msg.author.id}`, 50);

            db.fetch(`reddia_${msg.author.id}`);
            db.add(`reddia_${msg.author.id}`, 1);

            msg.reply("başarılı!").catch(err => {
              msg.channel.send(err);
            });
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "buyreddia") {
    if (msg.guild) {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Guild only");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }

          if (pres > 0) {
            let author = db.fetch(`coins_${msg.author.id}`);
            if (author < 50) return msg.channel.send("you not have 50 coin");
            db.subtract(`coins_${msg.author.id}`, 50);

            db.fetch(`reddia_${msg.author.id}`);
            db.add(`reddia_${msg.author.id}`, 1);

            msg.reply("Succcessfuly!").catch(err => {
              msg.channel.send(err);
            });
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "buysword") {
    if (msg.guild) {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve Destek sunucusunda aktifdir."
            );
          }

          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 7) return msg.channel.send("7 elmasın yok.");
            db.subtract(`reddia_${msg.author.id}`, 7);

            db.fetch(`sword_${msg.author.id}`);
            db.add(`sword_${msg.author.id}`, 1);

            msg.reply("Başarılı!").catch(err => {
              msg.channel.send(err);
            });
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buysword") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }
          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 7)
              return msg.channel.send("You not have 7 red diamond");
            db.subtract(`reddia_${msg.author.id}`, 7);

            db.fetch(`sword_${msg.author.id}`);
            db.add(`sword_${msg.author.id}`, 1);

            msg.reply("Successfuly!").catch(err => {
              msg.channel.send(err);
            });
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "economy") {
    if (msg.guild) {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium servers and support server");
          }

          if (pres > 0) {
            msg.reply("Economy commands:");
            msg.channel.send(
              prefix + "market - Market  " + prefix + "inv - inventory "
            );
            msg.channel.send(
              "How i can get coin?\nusing gif commands will save you 10 coins\nPets:\nSmall pet - Gives 0.2 coin per message\nBig pet - Gives 0.7 coin per message\nLegend pet - Gives 2 coin per message\nUltimate pet pet - Gives 5 coin per message"
            );
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "economy") {
    if (msg.guild) {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve destek sunucusunda aktifdir"
            );
          }
          if (pres > 0) {
            msg.reply("Ekonomy,i komutları:");
            msg.channel.send(
              prefix + "market - Market  " + prefix + "inv - Envanter"
            );
            msg.channel.send(
              "Nasıl coin kazanırım?\ngif komutlarını kullanmak - her gif komudu size 10 coin verir\nPetler:\nKüçük pet - her mesajda 0.2 coin verir\nBig pet - her mesajda 0.7 coin verir\nEfsanevi pet - her mesajda 2 coin verirn\nNihai pet - her mesajda 5 coin verir"
            );
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "market") {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve destek sunucusunda aktifdir."
            );
          }

          if (pres > 0) {
            let bal = db.fetch(`coins_${msg.author.id}`);

            if (bal === null) bal = 0;
            msg.reply("Market komutları:");
            const exampleEmbed = new Discord.MessageEmbed()
              .setColor("00FFFF")
              .setTitle("Market:")
              .setAuthor(
                `${msg.author.tag}`,
                `${msg.author.displayAvatarURL()}`
              )
              .setThumbnail(
                "https://cdn.discordapp.com/attachments/801089074940477471/801115713116569662/a057094610af86d2f1445a80292fed79.jpg"
              )
              .addFields(
                { name: "Senin ", value: bal + "coinin var" },
                { name: "\u200B", value: "\u200B" },
                {
                  name: "Kırmızı elmas - " + prefix + "buyreddia",
                  value: "50 coins",
                  inline: true
                },
                {
                  name: "Kılıç - " + prefix + "buysword",
                  value: "7 Red diamond",
                  inline: true
                },
                {
                  name: "Premium - " + prefix + "buypremium",
                  value: "10k coins",
                  inline: true
                },
                {
                  name: "Pets - " + prefix + "pets",
                  value: "Petlere bak",
                  inline: true
                }
              )
              .setImage(`${msg.author.displayAvatarURL()}`);
            msg.reply(exampleEmbed);
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let pres = db.fetch(`pres_${msg.guild.id}`);
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "market") {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          if (pres < 1) {
            msg.reply("Only Premium guilds and support server");
          }
          if (pres > 0) {
            let bal = db.fetch(`coins_${msg.author.id}`);

            if (bal === null) bal = 0;
            msg.reply("Market commands:");
            const exampleEmbed = new Discord.MessageEmbed()
              .setColor("00FFFF")
              .setTitle("Market:")
              .setAuthor(
                `${msg.author.tag}`,
                `${msg.author.displayAvatarURL()}`
              )
              .setThumbnail(
                "https://cdn.discordapp.com/attachments/801089074940477471/801115713116569662/a057094610af86d2f1445a80292fed79.jpg"
              )
              .addFields(
                { name: "You have ", value: bal + "coin" },
                { name: "\u200B", value: "\u200B" },
                {
                  name: "Red diamond - " + prefix + "buyreddia",
                  value: "50 coins",
                  inline: true
                },
                {
                  name: "sword - " + prefix + "buysword",
                  value: "7 Red diamond",
                  inline: true
                },
                {
                  name: "Premium - " + prefix + "buypremium",
                  value: "10k coins",
                  inline: true
                },
                {
                  name: "Pets - " + prefix + "pets",
                  value: "Look pets",
                  inline: true
                }
              )
              .setImage(`${msg.author.displayAvatarURL()}`);
            msg.reply(exampleEmbed);
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buysmallpet") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium servers and support server!");
          }

          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 5) return msg.channel.send("You not have 5 diamond");
            db.subtract(`reddia_${msg.author.id}`, 5);

            db.fetch(`smallpet_${msg.author.id}`);
            db.add(`smallpet_${msg.author.id}`, 1);

            msg.reply("Successfuly!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buysmallpet") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("GuildOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece destek sunucusunda ve premium sunucularda aktifdir!"
            );
          }

          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 5) return msg.channel.send("5 kırmızı elmasın yok");
            db.subtract(`reddia_${msg.author.id}`, 5);

            db.fetch(`smallpet_${msg.author.id}`);
            db.add(`smallpet_${msg.author.id}`, 1);

            msg.reply("Başarılı!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buybigpet") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }

          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 15) return msg.channel.send("Big Pet 15 Diamond");
            db.subtract(`reddia_${msg.author.id}`, 15);

            db.fetch(`bigpet_${msg.author.id}`);
            db.add(`bigpet_${msg.author.id}`, 1);

            msg.reply("Successfuly!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buybigpet") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve destek sunucusunda aktifdir!"
            );
          }

          if (pres > 0) {
            let author = db.fetch(`reddia_${msg.author.id}`);
            if (author < 15) return msg.channel.send("15 kırmızı elmasın yok!");
            db.subtract(`reddia_${msg.author.id}`, 15);

            db.fetch(`bigpet_${msg.author.id}`);
            db.add(`bigpet_${msg.author.id}`, 1);

            msg.reply("Başarılı!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buylegendpet") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve destek sunucusunda aktifdir!"
            );
          }

          if (pres > 0) {
            let author = db.fetch(`sword_${msg.author.id}`);
            if (author < 5) return msg.channel.send("5 kılıcın yok!");
            db.subtract(`sword_${msg.author.id}`, 15);

            db.fetch(`legpet_${msg.author.id}`);
            db.add(`legpet_${msg.author.id}`, 1);

            msg.reply("Başarılı!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buylegendpet") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }

          if (pres > 0) {
            let author = db.fetch(`sword_${msg.author.id}`);
            if (author < 5) return msg.channel.send("Legend pet Pet 5 Sword");
            db.subtract(`sword_${msg.author.id}`, 15);

            db.fetch(`legpet_${msg.author.id}`);
            db.add(`legpet_${msg.author.id}`, 1);

            msg.reply("Successfuly!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buyultimate") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Only Guilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece destek sunucusunda ve premium sunucularda aktifdir!"
            );
          }

          if (pres > 0) {
            let author = db.fetch(`sword_${msg.author.id}`);
            let uthor = db.fetch(`coins_${msg.author.id}`);
            if (author < 5) return msg.channel.send("5 kılcın yok!");
            if (uthor < 1000) return msg.channel.send("1000 coinin yok!");
            db.subtract(`sword_${msg.author.id}`, 5);
            db.subtract(`coins_${msg.author.id}`, 1000);

            db.fetch(`ulpet_${msg.author.id}`);
            db.add(`ulpet_${msg.author.id}`, 1);

            msg.reply("Başarılı!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "buyultimate") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Only Guilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }

          if (pres > 0) {
            let author = db.fetch(`sword_${msg.author.id}`);
            let uthor = db.fetch(`coins_${msg.author.id}`);
            if (author < 5)
              return msg.channel.send("ultime pet 1k coins & 5 Sword");
            if (uthor < 1000)
              return msg.channel.send("ultime pet 1k coins & 5 Sword");
            db.subtract(`sword_${msg.author.id}`, 5);
            db.subtract(`coins_${msg.author.id}`, 1000);

            db.fetch(`ulpet_${msg.author.id}`);
            db.add(`ulpet_${msg.author.id}`, 1);

            msg.reply("Successfuly!");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "pets") {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply(
              "Sadece premium sunucularda ve destek sunucusunda aktifdir!"
            );
          }

          if (pres > 0) {
            let bal = db.fetch(`coins_${msg.author.id}`);

            if (bal === null) bal = 0;
            msg.reply("Pet komutları:");
            const exampleEmbed = new Discord.MessageEmbed()
              .setColor("00FFFF")
              .setTitle("Petler:")
              .setAuthor(
                `${msg.author.tag}`,
                `${msg.author.displayAvatarURL()}`
              )
              .setThumbnail(
                "https://cdn.discordapp.com/attachments/801089074940477471/801115713116569662/a057094610af86d2f1445a80292fed79.jpg"
              )
              .addFields(
                { name: "Senin ", value: bal + "coinin var" },
                { name: "\u200B", value: "\u200B" },
                {
                  name: "Küçük pet - " + prefix + "buysmallpet",
                  value: "5 Red diamond",
                  inline: true
                },
                {
                  name: "Büyük pet - " + prefix + "buybigpet",
                  value: "15 Red diamond",
                  inline: true
                },
                {
                  name: "Efsanevi pet - " + prefix + "buylegendpet",
                  value: "5 Sword",
                  inline: true
                },
                {
                  name: "Nihai pet - " + prefix + "buyultimate",
                  value: "1k coins & 5 sword",
                  inline: true
                }
              )
              .setImage(`${msg.author.displayAvatarURL()}`);
            msg.reply(exampleEmbed);
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "pets") {
        if (!msg.guild) {
          msg.reply("OnlyGuilds");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres < 1) {
            msg.reply("Only premium guilds and support server");
          }

          if (pres > 0) {
            let bal = db.fetch(`coins_${msg.author.id}`);

            if (bal === null) bal = 0;
            msg.reply("pet commands:");
            const exampleEmbed = new Discord.MessageEmbed()
              .setColor("00FFFF")
              .setTitle("Pets:")
              .setAuthor(
                `${msg.author.tag}`,
                `${msg.author.displayAvatarURL()}`
              )
              .setThumbnail(
                "https://cdn.discordapp.com/attachments/801089074940477471/801115713116569662/a057094610af86d2f1445a80292fed79.jpg"
              )
              .addFields(
                { name: "You have ", value: bal + "coin" },
                { name: "\u200B", value: "\u200B" },
                {
                  name: "Small pet - " + prefix + "buysmallpet",
                  value: "5 Red diamond",
                  inline: true
                },
                {
                  name: "big Pet - " + prefix + "buybigpet",
                  value: "15 Red diamond",
                  inline: true
                },
                {
                  name: "Legendary Pet - " + prefix + "buylegendpet",
                  value: "5 Sword",
                  inline: true
                },
                {
                  name: "Ultimate Pet - " + prefix + "buyultimate",
                  value: "1k coins & 5 sword",
                  inline: true
                }
              )
              .setImage(`${msg.author.displayAvatarURL()}`);
            msg.reply(exampleEmbed);
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "premium") {
        if (!msg.guild) {
          msg.reply("GuildsOnly");
        }
        if (msg.guild) {
          let pres = db.fetch(`pres_${msg.guild.id}`);
          if (pres > 0) {
            msg.reply(`Bu sunucuda premium aktif!`);
            msg.delete();
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "random") {
        if (msg.channel.nsfw === false) {
          msg.reply("Bu kanal NSFW değil!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "couple") {
        if (msg.channel.nsfw === false) {
          msg.reply("Bu kanal NSFW değil!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "woman") {
        if (msg.channel.nsfw === false) {
          msg.reply("Bu kanal NSFW değil!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`en_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "man") {
        if (msg.channel.nsfw === false) {
          msg.reply("Bu kanal NSFW değil!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "random") {
        if (msg.channel.nsfw === false) {
          msg.reply("This a not NSFW channel!");
        }
      }
    }
  }
});
client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "couple") {
        if (msg.channel.nsfw === false) {
          msg.reply("This a not NSFW channel!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "woman") {
        if (msg.channel.nsfw === false) {
          msg.reply("This a not NSFW channel!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "man") {
        if (msg.channel.nsfw === false) {
          msg.reply("This a not NSFW channel!");
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "builder") {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: `${sahip}`,
              icon_url: png
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let en = db.fetch(`en_${msg.guild.id}`);
    if (en < 1) {
      if (msg.content === prefix + "davet") {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Davet Linki",
            url: özel,
            description: ""
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "yapımcım") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: `${sahip}`,
              icon_url: png
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "sunucu") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "FastTeam original discord sunucusu",
            url: `${support}`,
            description: "Tıkla"
          }
        });
      }
    }
  }
});
//moderation
client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "sürüm") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply("Güncel Sürüm...").then(message => {
          var espriler = [`${version}`];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.edit(`${espri}`);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "yardım") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
          msg.react("✅");
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} V${version}`,
            url: özel,
            description: özelgif + " Komutları:",
            fields: [
              {
                name: "ana komutlar:",
                inline: true,
                value: `**${prefix}gifs - Gif komutları**\n**${prefix}davet - Davet komudu**\n**${prefix}economy - Ekonomi komudu**\n**${prefix}moderasyon - Moderasyon komutları**\n**${prefix}botbilgi - Bot bilgi komudu**\n**${prefix}eğlence - eğlence komutları**`
              },
              {
                name: "Current Version",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 V${version}`
            }
          }
        });
      }
    }
  }

});

client.on("message", msg => {
  if (msg.content === prefix + "help") {
    if (msg.guild) {
      
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
            msg.react("✅");
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version}`,
            url: özel,
            description: özelgif + " commands",
            fields: [
              {
                name: "Main commands",
                inline: true,
                value: `**${prefix}gifs - Look at gif commands**\n**${prefix}invite - invite link of the bot**\n**${prefix}economy - economy command**\n**${prefix}moderation - moderation command**\n**${prefix}botinfo - bot info**\n**${prefix}fun - fun commands**`
              },
              {
                name: "Current Version",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
   

    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "botinfo") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version} info command`,
            url: özel,

            fields: [
              {
                name: "Bots info:",
                inline: true,
                value: `Version: ${version} \nPing: ${client.ws.ping} \nBuilder: ${sahip} \nSupport server: ${support} \n${client.guilds.cache.size} Servers`
              },
              {
                name: "Current Version",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "botbilgi") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version} botbilgi komudu`,
            url: özel,

            fields: [
              {
                name: "Bot bilgi:",
                inline: true,
                value: `sürüm: ${version} \nPing: ${client.ws.ping} \nyapımcım: ${sahip} \nDestek sunucusu: ${support} \n${client.guilds.cache.size} Servers`
              },
              {
                name: "Geçerli sürüm:",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "botinfo") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version} botbilgi komudu`,
            url: özel,

            fields: [
              {
                name: "Bot bilgi:",
                inline: true,
                value: `sürüm: ${version} \nPing: ${client.ws.ping} \nyapımcım: ${sahip} \nDestek sunucusu: ${support} \n${client.guilds.cache.size} Servers`
              },
              {
                name: "Geçerli sürüm:",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "eğlence") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version} eğlence`,
            url: özel,

            fields: [
              {
                name: "eğlence komutları::",
                inline: true,
                value: `${prefix}yaz - bota istediğiniz şeyi yazdırır \n ${prefix}avatar - etiketlediğiniz kişinin veya sizin avatarınızı gösterir \n ${prefix}sarıl - etiketlediğin kişiye sarılırsın\n${prefix}saas-aç - saas sistemini açar\n ${prefix}saas-kapat - saas sistemini kapatır\n${prefix}sohbet-sistemi-aç - otomatik sohbet sistemini açar\n${prefix}sohbet-sistemi-kapat - sohbet sistemini kapatır`
              },
              {
                name: "Current Version",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "fun") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            author: {
              name: özelgif,
              icon_url: png
            },
            thumbnail: {
              url: png
            },
            title: `${özelgif} ${version} eğlence`,
            url: özel,

            fields: [
              {
                name: "eğlence komutları::",
                inline: true,
                value: `${prefix}say - say the bot \n ${prefix}avatar - Tagged / your avatar command \n ${prefix}hug - hug your tag`
              },
              {
                name: "Current Version",
                value: `${version}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: png,
              text: `${özelgif} 2021 ${version}`
            }
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    let tr = db.fetch(`tr_${msg.guild.id}`);
    if (tr < 1) {
      if (msg.content === prefix + "invite") {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Invitation Link",
            url: özel,
            description: "click"
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "ping") {
    msg.reply(`${client.ws.ping} ms`);
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content.toLowerCase() === prefix + "server") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "FastTeam original discord server",
            url: `${support}`,
            description: "Click"
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content.toLowerCase() === prefix + "site") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Fast Team Web sitesi",
            url: "https://sites.google.com/view/fasteamdc",
            description: ""
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content.toLowerCase() === prefix + "moderasyon") {
      let en = db.fetch(`en_${msg.guild.id}`);
      if (en < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Moderasyon komutları:",
            description: `${prefix}at - Etiketldiğin kişiyi sunucudan atarsın \n ${prefix}yasakla - etiketlediğin kişi sunucudan yasaklarsın \n ${prefix}sil - belirtilen kadar mesaj silinir \n${prefix}küfüraç - küfür engelleme sistemini açar\n${prefix}küfürkapat - küfür engelleme sistemini kapatır\n${prefix}linkengel - sunucudaki üyelerin link atmasını engellersiniz (DEMO)\n${prefix}linkengel - link engel sistemini kapatırsınız\n${prefix}stat-aç - sunucu bilgileri panelini açarsınız.`
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content.toLowerCase() === prefix + "moderation") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Moderation commands:",
            description: `${prefix}kick - the person you tagged kick the guild \n ${prefix}ban - the person you tagged Ban the guild \n ${prefix}sil - Delete messages`
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content.toLowerCase() === prefix + "sites") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply({
          embed: {
            color: 0xd97634,
            title: "Fast Team Website",
            url: "https://sites.google.com/view/fasteamdc",
            description: ""
          }
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "sürüm") {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply("Mevcut sürüm...").then(message => {
          var espriler = [`${version}`];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.edit(`${espri}`);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "version") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply("Current version...").then(message => {
          var espriler = [`${version}`];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.edit(`${espri}`);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "gifs") {
    if (msg.guild) {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply("Gif komutları:").then(message => {
          var espriler = [
            `**${prefix}random - Rastgele gifler (NSFW)**\n**${prefix}couple - Çift gifleri**\n**${prefix}woman - Kadın gifleri (NSFW)**\n**${prefix}man - Erkek gifleri (NSFW)**\n**${prefix}anime - Aimasyon gifleri**`
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.channel.send(`${espri}`);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.guild) {
    if (msg.content === prefix + "gifs") {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      if (tr < 1) {
        msg.reply("Gif commands:").then(message => {
          var espriler = [
            `**${prefix}random - Random gifs (NSFW)**\n**${prefix}couple - couple gifs**\n**${prefix}woman - woman gifs (NSFW)**\n**${prefix}man - Man gifs (NSFW)**\n**${prefix}anime - anime gifs**`
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.channel.send(`${espri}`);
        });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "premium") {
    let pres = db.fetch(`precoin_${msg.author.id}`);
    if (msg.guild) {
      let tr = db.fetch(`en_${msg.guild.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Dm kullanma!");
        }
        if (msg.guild) {
          if (pres < 1) {
            msg.channel.send(
              `${prefix}market | Coinler ile premium alabilirsin :slight_smile:`
            );
            msg.react("✅");
          }
        }
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "premium") {
    if (msg.guild) {
      let tr = db.fetch(`tr_${msg.guild.id}`);
      let pres = db.fetch(`precoin_${msg.author.id}`);
      if (tr < 1) {
        if (!msg.guild) {
          msg.reply("Dm kullanma!");
        }
        if (msg.guild) {
          if (pres < 1) {
            msg.channel.send(
              `${prefix}market | You can buy premium for 10k coins :slight_smile:`
            );
            msg.react("✅");
          }
        }
      }
    }
  }
});

let watching = `${config.wg}`;

//let watching = `BAKIMDA`

//FastGif WATCHING
client.on("ready", async () =>
  client.user.setActivity(
    `${watching} ${client.guilds.cache.size} Server V${version}`,
    { type: "PLAYING" }
  )
);

client.login(config.token);

//Gif commands
client.on("message", msg => {
  if (msg.content === prefix + "woman") {
    let tr = db.fetch(`timeout_${msg.author.id}`);
    if (tr === null) tr = 0;
    if (tr > 0) {
      msg.reply("Timeout alarm! 5 sec wait!");
    }
    if (tr < 1) {
      db.set(`timeout_${msg.author.id}`, 1);

      setTimeout(function() {
        db.delete(`timeout_${msg.author.id}`);
      }, 1 * 5000);

      if (msg.channel.nsfw === true) {
        db.add(`coins_${msg.author.id}`, 10);
        msg
          .reply(
'🪙 You got 10 coin! 🪙'          )
          .then(message => {
            var espriler = [
              "https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif"
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
            if (msg.channel.nsfw === true) {
              message.channel.send({
                embed: {
                  color: 0xd97634,
                  image: {
                    url: `${espri}`
                  }
                }
              });
            }
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "man") {
    let tr = db.fetch(`timeout_${msg.author.id}`);
    if (tr === null) tr = 0;
    if (tr > 0) {
      msg.reply("Timeout alarm! 5 sec wait!");
    }
    if (tr < 1) {
      db.set(`timeout_${msg.author.id}`, 1);

      setTimeout(function() {
        db.delete(`timeout_${msg.author.id}`);
      }, 1 * 5000);
      if (msg.channel.nsfw === true) {
        db.add(`coins_${msg.author.id}`, 10);
        msg
          .reply(
'🪙 You got 10 coin! 🪙'          )
          .then(message => {
            var espriler = [
              "https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif"
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
            if (msg.channel.nsfw === true) {
              message.channel.send({
                embed: {
                  color: 0xd97634,
                  image: {
                    url: `${espri}`
                  }
                }
              });
            }
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "couple") {
    let tr = db.fetch(`timeout_${msg.author.id}`);
    if (tr === null) tr = 0;
    if (tr > 0) {
      msg.reply("Timeout alarm! 5 sec wait!");
    }
    if (tr < 1) {
      db.set(`timeout_${msg.author.id}`, 1);

      setTimeout(function() {
        db.delete(`timeout_${msg.author.id}`);
      }, 1 * 5000);

      if (msg.channel.nsfw === true) {
        db.add(`coins_${msg.author.id}`, 10);
        msg
          .reply(
'🪙 You got 10 coin! 🪙'          )
          .then(message => {
            var espriler = [
              "https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif"
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.channel.send({
              embed: {
                color: 0xd97634,
                image: {
                  url: `${espri}`
                }
              }
            });
          });
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "anime") {
    let tr = db.fetch(`timeout_${msg.author.id}`);
    if (tr === null) tr = 0;
    if (tr > 0) {
      msg.reply("Timeout alarm! 5 sec wait!");
    }
    if (tr < 1) {
      db.set(`timeout_${msg.author.id}`, 1);

      setTimeout(function() {
        db.delete(`timeout_${msg.author.id}`);
      }, 1 * 5000);

      db.add(`coins_${msg.author.id}`, 10);
      msg
        .reply(
'🪙 You got 10 coin! 🪙'        )
        .then(message => {
          var espriler = [
            "https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif"
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];

          message.channel.send({
            embed: {
              color: 0xd97634,
              image: {
                url: `${espri}`
              }
            }
          });
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "random") {
    let tr = db.fetch(`timeout_${msg.author.id}`);
    if (tr === null) tr = 0;
    if (tr > 0) {
      msg.reply("Timeout alarm! 5 sec wait!");
    }
    if (tr < 1) {
      if (msg.channel.nsfw === true) {
        db.add(`coins_${msg.author.id}`, 10);
        msg
          .reply(
            "🪙 You got 10 coin! 🪙"
          )

          .then(message => {
            var espriler = [
              "https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/793910699070849094/Millie-Godzilla.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
              "https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
              "https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
              "https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
              "https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif"
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
            if (msg.channel.nsfw === true) {
              message.channel.send({
                embed: {
                  color: 0xd97634,
                  image: {
                    url: `${espri}`
                  }
                }
              });
              db.set(`timeout_${msg.author.id}`, 1);

              setTimeout(function() {
                db.delete(`timeout_${msg.author.id}`);
              }, 1 * 5000);
            }
          });
      }
    }
  }
});
