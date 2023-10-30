const { EmbedBuilder } = require("discord.js");
const { Embed } = require('../config/config')

module.exports = {
    id: "embedBuilder",
    run: async (client, interaction, config, db, message, args) => {

        const baslik = interaction.fields.getTextInputValue('title');
        const aciklama = interaction.fields.getTextInputValue('description');
        const resim = interaction.fields.getTextInputValue('image');

        const embed = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setTitle(baslik)
        .setDescription(aciklama)
        .setImage(resim)
        .setThumbnail(Embed.FOOTERICON)
        .setFooter({
            text: Embed.FOOTERTEXT,
            iconURL: Embed.FOOTERICON
        });

        await interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
		
		await interaction.channel.send({ embeds: [embed] })

    },
};
