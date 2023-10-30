const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const ms = require("ms");
const { Embed } = require('../../../config/config')

module.exports = {
    name: "unmute", // Name of command
    description: "Unmute member", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "target",
            description: "Select this member",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ModerateMembers" // User permissions needed
    },
    run: async (client, interaction, config, db) => {

        const { guild, options } = interaction;

        const user = options.getUser("target");
        const member = guild.members.cache.get(user.id);

        const err1 = new EmbedBuilder()
            .setDescription('Bir hata oluştu, lütfen daha sonra tekrar deneyin.')
            .setColor(Embed.RENK)

        const tamam = new EmbedBuilder()
            .setTitle("**:white_check_mark: Susturması Kaldırıldı**")
            .setDescription(`${user} isimli kullanıcının susturulması başarıyla kaldırıldı.`)
            .setColor(Embed.RENK)
            .setTimestamp()

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({
                embeds: [err1],
                ephemeral: true
            })

        try {

            await member.timeout(null)
            interaction.reply({
                embeds: [tamam]
            });
        }
        catch (err){
            console.log(err);
        }

    },
};