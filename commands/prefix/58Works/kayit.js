const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "kayit", // Name of Command
        description: "58 Works™ Kayıt Komutu", // Command Description
        usage: "kayit" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete()

            const form = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setTimestamp()
            .setImage("https://cdn.discordapp.com/attachments/783321134895464458/1125020845241290802/My_Video.gif")
            .setFooter({ text: Embed.FOOTERTEXT , iconURL: Embed.FOOTERICON})
            .setAuthor({ name: '58 Works™ - The Unreachable Peak', iconURL: 'https://i.imgur.com/efu2M5t.png', url: 'https://58worksproduction.com' })
            .setDescription(`
            :flag_tr:

            _Sunucumuza hoş geldiniz. Aşağıdaki_ **":white_check_mark: Kayıt Ol"** _butonuna basarak kayıt olabilirsiniz._

            _Rol vermemesi durumunda, aşağıdaki kişiye istek atarak sorunu belirtebilirsiniz._

            > <@606555563513610290>

            :flag_eu:

            _Welcome to our server. You can register by clicking the_ **":white_check_mark: Register "** _button below._

            _In the event that it does not give a role, you can indicate the problem by sending a request to the following person._

            > <@606555563513610290>
`)
    
    const kayıtbuton = new ButtonBuilder()
            .setCustomId("wrk58kayit")
            .setLabel("Kayıt Ol")
            .setStyle(2)
            .setEmoji("✅")
    
            const row = new ActionRowBuilder()
            .addComponents(kayıtbuton)
    
            await message.channel.send({ embeds: [form], components: [row]})
        
    },
};