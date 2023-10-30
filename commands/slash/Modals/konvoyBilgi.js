const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "konvoybilgi",
    description: "58 Works™ Konvoy Bilgi",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "ManageMessages"
    },
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('konvoyBilgi')
            .setTitle('58 Works™ Konvoy Bilgi');

        const tarih = new TextInputBuilder()
            .setCustomId('tarih')
            .setLabel("Tarih")
            .setPlaceholder('Tarih Yaz! (Örn: dd.aa.yyyy)')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);

        const toplanmaSaati = new TextInputBuilder()
            .setCustomId('topsaat')
            .setLabel("Toplanma Saati")
            .setPlaceholder('Toplanma Saatini Yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);

        const cikisSaati = new TextInputBuilder()
            .setCustomId('ciksaat')
            .setLabel("Çıkış Saati")
            .setPlaceholder('Çıkış Saatini Yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);

        const toplanmaAlan = new TextInputBuilder()
            .setCustomId('topalan')
            .setLabel("Toplanma Alanı")
            .setPlaceholder('Toplanma Alanını Yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);

        const bitisYeri = new TextInputBuilder()
            .setCustomId('bitisyer')
            .setLabel("Bitiriş Alanı")
            .setPlaceholder('Bitiriş Alanını Yaz!')
			.setRequired(true)
            .setStyle(TextInputStyle.Short);

        const ktarih = new ActionRowBuilder().addComponents(tarih);
        const ktoplanmaSaati = new ActionRowBuilder().addComponents(toplanmaSaati);
        const kcikisSaati = new ActionRowBuilder().addComponents(cikisSaati);
        const ktoplanmaAlan = new ActionRowBuilder().addComponents(toplanmaAlan);
        const kbitisYeri = new ActionRowBuilder().addComponents(bitisYeri);

        modal.addComponents(ktarih, ktoplanmaSaati, kcikisSaati, ktoplanmaAlan, kbitisYeri);

        await interaction.showModal(modal);
    },
};
