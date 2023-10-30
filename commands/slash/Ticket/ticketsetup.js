const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { Ticket, Embed } = require("../../../config/config.js")

module.exports = {
    name: "ticketsetup", // Name of command
    description: "Ticket Oluştur", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ManageChannels" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { guild } = interaction;

        const embed = new EmbedBuilder()
            .setTitle("<:58_ekiplogo:1115166357596672070> | 58 Works™ Ticket System")
            .setDescription("Sunucumuzda bilet açabilirsiniz.")
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setThumbnail(Embed.FOOTERICON)
            .setColor(Embed.RENK);

        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('inviteconvoy').setLabel('Event Management').setStyle(ButtonStyle.Secondary).setEmoji('🚚'),
            new ButtonBuilder().setCustomId('hrmanagement').setLabel('Human Resources Management').setStyle(ButtonStyle.Secondary).setEmoji('👥'),
            new ButtonBuilder().setCustomId('partner').setLabel('Partner').setStyle(ButtonStyle.Secondary).setEmoji('🤝'),
        );

        await guild.channels.cache.get(Ticket.OPENTICKET).send({
            embeds: [embed],
            components: [button]
        });

        interaction.reply({ content: 'Mesaj başarıyla gönderildi', ephemeral: true });
    },
};