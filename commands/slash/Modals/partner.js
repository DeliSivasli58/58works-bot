const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "partner",
    description: "58 Works™ Partner System",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "Administrator"
    },
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('partner')
            .setTitle('58 Works™ Partner');

        const guildname = new TextInputBuilder()
            .setCustomId('guildname')
            .setLabel("Sunucu İsmi")
            .setPlaceholder('Sunucu İsmini Yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);
			
		const guildlink = new TextInputBuilder()
            .setCustomId('guildlink')
            .setLabel("Sunucu Linki")
            .setPlaceholder('Sunucu Linkini Yaz!')
            .setStyle(TextInputStyle.Short);

        const name = new ActionRowBuilder().addComponents(guildname);
        const link = new ActionRowBuilder().addComponents(guildlink);

        modal.addComponents(name, link);

        await interaction.showModal(modal);
    },
};
