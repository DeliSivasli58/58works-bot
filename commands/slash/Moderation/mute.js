const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const ms = require("ms");
const { Embed } = require('../../../config/config')

module.exports = {
    name: "mute", // Name of command
    description: "Mute member", // Command description
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
            description: "Write kick reason",
            required: true
        },
        {
            type: ApplicationCommandOptionType.String,
            name: "time",
            description: "Write mute time",
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
        const time = options.getString("time");
        const convertedTime = ms(time);
        const reason = options.getString("reason") || "Sebep Girilmedi";

        const err1 = new EmbedBuilder()
            .setDescription('Bir hata oluştu, lütfen daha sonra tekrar deneyin.')
            .setColor(Embed.RENK)

        const tamam = new EmbedBuilder()
            .setTitle("**:white_check_mark: Susturuldu**")
            .setDescription(`${user} başarıyla susturuldu.`)
            .addFields(
                {
                    name: "Sebep", value: reason, inline: true
                },
                {
                    name: "Süre", value: time, inline: true
                }
            )
            .setColor(Embed.RENK)
            .setTimestamp()

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({
                embeds: [err1],
                ephemeral: true
            })

        try {

            await member.timeout(convertedTime, reason)
            interaction.reply({
                embeds: [tamam]
            });
        }
        catch (err){
            console.log(err);
        }

    },
};