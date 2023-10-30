const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    name: "boosternick", // Name of command
    description: "Cümbüş - Booster Nickname", // Command description
    type: 1, // Command type
    options: [
        {
        type: ApplicationCommandOptionType.String,
        name: "nick",
        description: "İstediğin İsmi Gir",
        required: true
    }
], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {

        //const member = interaction.author;
        const isim = interaction.options.getString("nick");

        if (interaction.member.roles.cache.find(r => r.id === '1009149227496132670')) {
            interaction.member.setNickname(`${isim}`)

            const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle(":white_check_mark: İşlem Başarıyla Tamamlandı!")
            .setDescription(`İsminiz Başarıyla ${isim} olarak güncellenmiştir.`)
            .setTimestamp()

            interaction.reply({embeds: [embed], ephemeral: true});
        } else {
			interaction.reply({content: "Bu komutu kullanmak için Booster Leader rolüne ihtiyacınız vardır.", ephemeral: true});
		}
        
    },
};