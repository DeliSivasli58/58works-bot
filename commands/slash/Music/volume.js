const { EmbedBuilder, PermissionFlagsBits, VoiceChannel, GuildEmoji, ApplicationCommandOptionType } = require('discord.js');
const client = require("../../../index");
const { Embed } = require('../../../config/config')

module.exports = {
    name: "volume", // Name of command
    description: "Müzik ses seviyesi ayarla.", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.Integer,
            name: "volume",
            description: "10 = %10",
            minValue: "1",
            maxValue: "100",
            required: true,
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { options, member, guild } = interaction;
        const volume = options.getInteger("volume")
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

            client.distube.setVolume(voiceChannel, volume);
            return interaction.reply({ content: `🔉 | Volume has been set to %${volume}.` })
        }
        catch (err) {
            console.log(err);

            embed.setColor(Embed.RENK).setDescription("🛑 | Hata oluştu")
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }
    },
};