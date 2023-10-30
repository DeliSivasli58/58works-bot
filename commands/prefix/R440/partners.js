const { EmbedBuilder } = require('discord.js');
const { R440CLUB } = require('../../../config/config')

module.exports = {
    config: {
        name: "r440partner", // Name of Command
        description: "R440 Partner List", // Command Description
        usage: "r440partner" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
		
		message.delete();

        const partner = new EmbedBuilder()
        .setColor(R440CLUB.RENK)
        .setDescription(`<a:partner:1093563196666810380> [58 Works](https://discord.gg/4EXB2trxVA)
<a:partner:1093563196666810380> [Koçkar Krom](https://discord.gg/2RrQQaggpG)
<a:partner:1093563196666810380> [Grands Club](https://discord.gg/gAuMd3Hm6M)
<a:partner:1093563196666810380> [Aka Group](https://discord.gg/wGYZMmtC9n)
<a:partner:1093563196666810380> [Route Logistics](https://discord.gg/GcWkcx8d4H)
<a:partner:1093563196666810380> [Home of Modders](https://discord.gg/rSd7XkTaCP)
<a:partner:1093563196666810380> [Black Garage](https://discord.gg/fF37YmmP)
<a:partner:1093563196666810380> [Universal Trucks](https://discord.gg/universal-trucks-777161189310332968)
<a:partner:1093563196666810380> [V8 TUNING](https://discord.gg/egf2pz3HFH)
`)
        .setThumbnail('https://media.discordapp.net/attachments/948273556452700272/1050895382722383922/R440_Club_2023_Wintage.png')
        .setImage('https://media.discordapp.net/attachments/948273556452700272/1047183451536752751/Partners.png')
        .setTitle('<:club_wintagemin:1053083396315828325> | R440 Club Partners')
        .setFooter({ text: R440CLUB.YAZI, iconURL: R440CLUB.RESIM })

        message.channel.send({embeds: [partner]});
        
    },
};