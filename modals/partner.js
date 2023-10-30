const { EmbedBuilder } = require("discord.js");
const { Embed, R440CLUB } = require('../config/config')

module.exports = {
    id: "partner",
    run: async (client, interaction, config, db, message, args) => {

        const isim = interaction.fields.getTextInputValue('guildname');
        const dclink = interaction.fields.getTextInputValue('guildlink');

        const embed = new EmbedBuilder().setDescription(`**Guild Name:** ${isim}\n\n**Guild Link:** ${dclink}`)

        if (interaction.guild.id === "749673230557511818" || interaction.guild.id === "1009142272144707594") {
            embed.setTitle("<:58_ekiplogo:1115166357596672070> | New Partner!")
            embed.setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON });
            embed.setColor(Embed.RENK)
            embed.setThumbnail(Embed.FOOTERICON)

            await interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
            await interaction.channel.send({embeds: [embed]});
			await interaction.channel.send({content: "https://cdn.discordapp.com/attachments/783321134895464458/1142717302253555813/Baslksz-1.png"})
        }
    },
};
