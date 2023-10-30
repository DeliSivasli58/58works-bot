const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "asd", // Name of Command
        description: "58 Works™ İstek Mod Kanalı", // Command Description
        usage: "asd" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete()

            const form = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setTimestamp()
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text: Embed.FOOTERTEXT , iconURL: Embed.FOOTERICON})
            .setAuthor({ name: '58 Works™ - The Unreachable Peak', iconURL: 'https://i.imgur.com/efu2M5t.png', url: 'https://58worksproduction.com' })
            .setDescription(`
            :flag_tr:

*Merhabalar.*

*Aşağıdaki butona tıklayarak istek modunuzu yazabilirsiniz.*

            :flag_eu:

*Greetings.*

*You can write your request mode by clicking the button below.*
`)
    
    const suggestmod = new ButtonBuilder()
            .setCustomId("suggestmod")
            .setLabel("Click Here!")
            .setStyle(2)
            .setEmoji("✅")
    
            const row = new ActionRowBuilder().addComponents(suggestmod)
    
            await message.channel.send({ embeds: [form], components: [row]})
        
    },
};