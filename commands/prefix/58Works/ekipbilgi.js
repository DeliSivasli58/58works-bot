const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "ekipbilgi", // Name of Command
        description: "58 Works™ Ekip Bilgi", // Command Description
        usage: "ekipbilgi" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete()

            const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・58 Works™ Bilgi')
            .setDescription(`\`・\` Ekip Tagımız
\`▸\` Oyun İçi Tagımız: **58 Works™ |**
\`▸\` Renk: **R:** 255 | **G:** 255 | **B:** 255

\`・\` Logomuz
\`▸\` Logomuzu görmek için [buraya tıklayınız.](https://i.imgur.com/KJj4ycY.png)

\`・\` Alım Yazımız
\`▸\` **58 Works™ | Local Modlar | Aktif ve Eğlenceli Ortam | Onaylı VTC | discord.58works.com.tr**

\`▸\` **58 Works™ | Ekibimize Yeni Dostlar Arıyoruz. | Onaylı VTC | discord.58works.com.tr**`);

        const embed2 = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・58 Works™ Ekip Boyası')
            .setDescription(`\`・\` Tır Boyası: Solid [DLC'yi satın almak için tıkla](https://store.steampowered.com/app/1415700/Euro_Truck_Simulator_2__Super_Stripes_Paint_Jobs_Pack/)
            
            \`・\` Renk Sıralaması:

            \`▸\` 1. HEX: **#222222** RGB: **(R: 34 / G: 34 / B: 34)**
            \`▸\` 2. HEX: **#045757** RGB: **(R: 4 / G: 87 / B: 87)**
            \`▸\` 3. HEX: **#044343** RGB: **(R: 4 / G: 67 / B: 67)**
            \`▸\` 4. HEX: **#E4E4E4** RGB: **(R: 228 / G: 228 / B: 228)**
			
			\`・\` Tırı ve dorseyi tam olarak görmek için [buraya tıklayınız.](https://i.imgur.com/Tan5G9J.png)`);

            return message.channel.send({ embeds:[embed, embed2] });
        
    },
};