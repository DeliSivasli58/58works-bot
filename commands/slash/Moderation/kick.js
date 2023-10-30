const { ApplicationCommandOptionType,EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    name: "kick", // Name of command
    description: "Kick the user", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "targett",
            description: "Select this member",
            required: true
        },
        {
            type: ApplicationCommandOptionType.String,
            name: "reasoon",
            description: "Write kick reason",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "KickMembers" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const target = interaction.options.getUser("targett");
        const reason = interaction.options.getString("reasoon");

        interaction.guild.members.kick(target, {reason: reason});

        const bane = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setDescription(`・Kicklenen Kullanıcı: ${target}
        ・Kick Sebebi: ${reason}
        
        ・Kickleyen: ${interaction.user}`)

        interaction.reply({ embeds: [bane] });
    },
};