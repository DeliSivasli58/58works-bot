const { EmbedBuilder } = require('discord.js');
const { tr1, tr2, tr3, en1, en2, en3 } = require("../../../config/r440kurallar.json");
const { R440CLUB } = require("../../../config/config.js")

module.exports = {
    config: {
        name: "r440k", // Name of Command
        description: "R440 Club Kurallar", // Command Description
        usage: "r440k k1/k2/k3" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {

        const option = args[0];
        const options = ["k1", "k2", "k3"]

        const embed = new EmbedBuilder()
        .setColor(R440CLUB.RENK)
        .setFooter({text: R440CLUB.YAZI , iconURL: R440CLUB.RESIM})

        const embed2 = new EmbedBuilder()
        .setColor(R440CLUB.RENK)
        .setFooter({text: R440CLUB.YAZI , iconURL: R440CLUB.RESIM})
        .setImage('https://cdn.discordapp.com/attachments/948273556452700272/1047183451222196304/Kurallar.png')

        
        if (options.includes(option)){

            switch (option) {
                case "k1":
                    message.delete()
                    embed.setDescription(tr1)
                    embed.setTitle('<:club_blue:1053083357241679882> | _R440 Club Kuralları_')
                    message.channel.send({embeds: [embed]})
                    break;
                case "k2":
                    message.delete()
                    embed.setDescription(tr2)
                    message.channel.send({embeds: [embed]})
                    setTimeout(() => {
                        embed.setDescription(tr3)
                        message.channel.send({embeds: [embed]})
                      }, 3000);
                    setTimeout(() => {
                        embed.setDescription(en1)
                        message.channel.send({embeds: [embed]})
                      }, 6000);
                    setTimeout(() => {
                        embed.setDescription(en2)
                        message.channel.send({embeds: [embed]})
                      }, 9000);
                    break;
                case "k3":
                    message.delete()
                    embed2.setDescription(en3)
                    message.channel.send({embeds: [embed2]});
                    break;
                default:
                    console.log("Bilinmeyen Hata!")
                    break;
            }

        }
        
    },
};