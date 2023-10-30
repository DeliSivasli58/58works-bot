const { EmbedBuilder, PermissionFlagsBits, VoiceChannel, GuildEmoji, ApplicationCommandOptionType } = require('discord.js');
const client = require("../../../index");
const { Embed } = require('../../../config/config')

module.exports = {
    name: "queue", // Name of command
    description: "Müzik listeni göster", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { member, guild } = interaction;

        const voiceChannel = member.voice.channel;

        const embed = new EmbedBuilder()

        if (!voiceChannel) {
            embed.setColor(Embed.RENK).setDescription("Herhangi bir sesli kanalda değilsin!")

            return interaction.reply({ embeds: [embed] });
        }

        if (!member.voice.channelId === guild.members.me.voice.channelId) {
            embed.setColor(Embed.RENK).setDescription(`Bu botu kullanabilmen için <#${guild.members.me.voice.channelId}> kanalında olman gerekiyor.`)

            return interaction.reply({ embeds: [embed] });
        }
        try {

            const queue = await client.distube.getQueue(voiceChannel);

            if (!queue) {
                embed.setColor(Embed.RENK).setDescription("🛑 | Kuyrukta şarkı yok!")
                return interaction.reply({ embeds: [embed], ephemeral: true });
            }

            embed.setColor(Embed.RENK).setDescription(`${queue.songs.map(
                (song, id) => `\n**${id + 1}.** ${song.name} -\`${song.formattedDuration}\``
            )}`);
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        catch (err) {
            console.log(err);

            embed.setColor(Embed.RENK).setDescription("🛑 | Hata oluştu")
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }
    },
};