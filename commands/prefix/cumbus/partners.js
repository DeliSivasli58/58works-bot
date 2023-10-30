const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "cpartner", // Name of Command
        description: "Cümbüş Partner", // Command Description
        usage: "cpartner" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete();
			
			const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・Cümbüş Partners')
            .setDescription(`<:58_partner:1115166381114142750> | [BaLDBoSS-TV](https://discord.gg/sqHs7hpeBR)
<:58_partner:1115166381114142750> | [Tiny 3d Graphics](https://discord.gg/tiny3dgraphic)
<:58_partner:1115166381114142750> | [Elite](https://discord.gg/SsB2DsJJab)
<:58_partner:1115166381114142750> | [58 Works™](https://discord.gg/4EXB2trxVA)
<:58_partner:1115166381114142750> | [Melkor](https://discord.gg/melkor)
<:58_partner:1115166381114142750> | [Kattegat](https://discord.gg/bG7cb3cvNe)

<:58_ayrac:1117448934768525363><:58_ayrac:1117448934768525363><:58_ayrac:1117448934768525363><:58_ayrac:1117448934768525363><:58_ayrac:1117448934768525363><:58_ayrac:1117448934768525363>

<a:58_ringingbell:1115072740450373643> _Sadece ahbap ve dostluk kurduğumuz kişilerle partnerlik mevcuttur. Partnerlik konusunda lütfen ısrarcı olmayınız._
`);
            return message.channel.send({ embeds:[embed] });
        
    },
};