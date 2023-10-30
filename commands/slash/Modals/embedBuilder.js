const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "embedbuilder",
    description: "Embed Builder",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "ManageMessages"
    },
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('embedBuilder')
            .setTitle('58 Works™ Embed Builder');

        const title = new TextInputBuilder()
            .setCustomId('title')
            .setLabel("Başlık")
            .setPlaceholder('Başlık yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);
			
		const description = new TextInputBuilder()
            .setCustomId('description')
            .setLabel("Açıklama")
            .setPlaceholder('Açıklama yaz!')
            .setRequired(true)
            .setStyle(TextInputStyle.Paragraph);
			
		const image = new TextInputBuilder()
            .setCustomId('image')
            .setLabel("Resim")
            .setPlaceholder('Resim linki yaz!')
            .setStyle(TextInputStyle.Short);

        const ttitle = new ActionRowBuilder().addComponents(title);
        const ddescription = new ActionRowBuilder().addComponents(description);
        const iimage = new ActionRowBuilder().addComponents(image);

        modal.addComponents(ttitle, ddescription, iimage);

        await interaction.showModal(modal);
    },
};
