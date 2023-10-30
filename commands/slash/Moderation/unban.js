const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    name: "unban", // Name of command
    description: "Unban the user", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "targett",
            description: "Select this member",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "BanMembers" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const target = interaction.options.getUser("targett");

        interaction.guild.members.unban(target);

        const bane = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setDescription(`・Banı Kaldırılan Kullanıcı: ${target}
        
        ・Banı Kaldıran: ${interaction.user}`)

        interaction.reply({ embeds: [bane] });
    },
};