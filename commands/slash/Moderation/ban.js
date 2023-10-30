const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config');

module.exports = {
    name: "ban", // Name of command
    description: "Ban this user", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "target",
            description: "Select this member",
            required: true
        },
        {
            type: ApplicationCommandOptionType.String,
            name: "reason",
            description: "Write ban reason"
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "BanMembers" // User permissions needed
    },
    run: async (client, interaction, config, db) => {

        const kisi = interaction.options.getUser("target");
        const sebep = interaction.options.getString("reason") || "Sebep Girilmedi!";

        const err1 = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setDescription(`Sunucu sahibini asla banlayamazsın, ama o seni banlayabilir dikkat et... :)`)

        if (kisi.id === interaction.guild.ownerID)
            return interaction.reply({
                embeds: [err1],
                ephemeral: true
            })

        await interaction.guild.members.ban(kisi, { reason: sebep })

        const banned = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setDescription(`${kisi} başarıyla, \`${sebep}\` sebebi ile banlanmıştır.`)
            .setTimestamp()

        await interaction.reply({
            embeds: [banned]
        })
    },
};