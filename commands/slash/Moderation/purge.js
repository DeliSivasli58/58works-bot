const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    name: "purge", // Name of command
    description: "Purge the user", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.Integer,
            name: "target",
            description: "Sileceğim mesaj sayısını yaz",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ManageMessages" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        var sayi = interaction.options.getInteger("target")
                if(!sayi){
                    return interaction.reply({ content: "Silinecek sayı miktarını belirtmelisin."}).then(msg => {setTimeout(() => msg.delete(), 5000)}).catch();
                } else {
                    const purgeEmbed = new EmbedBuilder()
                        .setColor(Embed.RENK)
                        .setDescription(`${sayi} mesaj silindi`)
                    interaction.channel.bulkDelete(sayi)
                   return interaction.reply({ embeds: [purgeEmbed] }).then(msgg => {setTimeout(() => msgg.delete(), 5000)}).catch();
                }
    },
};