const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "kurallar", // Name of Command
        description: "58 Works™ Kurallar", // Command Description
        usage: "58wrkkurallar" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			message.delete()

            const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・58 Works™ Kurallar')
            .setDescription(`\`Genel Kurallar\`

\`・\` Ses, metin kanalları ve DM üzerinden reklam yapmak yasaktır.
\`・\` Sunucuda kara mizah yapmak yasaktır.
\`・\` DM'den alakasız insanlara yazmak yasaktır.
\`・\` Sunucu dışında gerçekleşen olayları, buraya taşımak yasaktır.
\`・\` Hadsizlik yapmak ve insanları kışkırtmak yasaktır.
\`・\` Uyarılara rağmen, insanları rahatsız etmek yasaktır.
\`・\` Dini ve milli hakaretler kesinlikle yasaktır.
\`・\` Save alıp çıkanlar kesinlikle yasaklanacaktır.

\`Metin Kanalı Kuralları\`

\`・\` Küfürü abartılmayacak şekilde kullanabilirsiniz, ailevi küfürler yasaktır.
\`・\` Mesaj, emoji, etiket spamı yapmak yasaktır.
\`・\` Birisinin özel bilgilerini ve hayatını paylaşmak yasaktır.
\`・\` +18 içerikli paylaşımlar yapmak yasaktır.

\`Ses Kanalı Kuralları\`

\`・\` Soundpad basmak kesinlikle yasaktır.
\`・\` Rahatsız edici sesler çıkarmak yasaktır.
\`・\` Troll yapmak yasaktır.`);
            //return message.channel.send({ embeds:[embed] });

message.channel.send({content: `\`Genel Kurallar\`

\`・\` Ses, metin kanalları ve DM üzerinden reklam yapmak yasaktır.
\`・\` Sunucuda kara mizah yapmak yasaktır.
\`・\` DM'den alakasız insanlara yazmak yasaktır.
\`・\` Sunucu dışında gerçekleşen olayları, buraya taşımak yasaktır.
\`・\` Hadsizlik yapmak ve insanları kışkırtmak yasaktır.
\`・\` Uyarılara rağmen, insanları rahatsız etmek yasaktır.
\`・\` Dini ve milli hakaretler kesinlikle yasaktır.
\`・\` Save alıp çıkanlar kesinlikle yasaklanacaktır.
            
\`Metin Kanalı Kuralları\`
            
\`・\` Küfürü abartılmayacak şekilde kullanabilirsiniz, ailevi küfürler yasaktır.
\`・\` Mesaj, emoji, etiket spamı yapmak yasaktır.
\`・\` Birisinin özel bilgilerini ve hayatını paylaşmak yasaktır.
\`・\` +18 içerikli paylaşımlar yapmak yasaktır.
            
\`Ses Kanalı Kuralları\`
            
\`・\` Soundpad basmak kesinlikle yasaktır.
\`・\` Rahatsız edici sesler çıkarmak yasaktır.
\`・\` Troll yapmak yasaktır.`})

message.channel.send({content: "https://cdn.discordapp.com/attachments/783321134895464458/1142717302253555813/Baslksz-1.png"})

message.channel.send({content: `\`General Rules\`

\`・\` Advertising via voice, text channels and DM is prohibited.
\`・\` Black humor on the server is prohibited.
\`・\` It is forbidden to write to unrelated people in DM.
\`・\` It is forbidden to post events that happen off the server here.
\`・\` It is forbidden to be rude and provoke people.
\`・\` It is forbidden to disturb people despite warnings.
\`・\` Religious and national insults are strictly forbidden.
\`・\` Those who take a save file and leave will be strictly banned.
            
\`Text Channel Rules\`
            
\`・\` You can use swearing in moderation, family swearing is prohibited.
\`・\` Spamming messages, emojis, hashtags is prohibited.
\`・\` It is forbidden to share someone's private information and life.
\`・\` It is forbidden to share +18 content.
            
\`Voice Channel Rules\`
            
\`・\` Using the soundpad is strictly prohibited.
\`・\` Making disturbing noises is prohibited.
\`・\` Trolling is prohibited.`})
        
    },
};