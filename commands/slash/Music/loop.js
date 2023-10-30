const { EmbedBuilder, PermissionFlagsBits, VoiceChannel, GuildEmoji, ApplicationCommandOptionType } = require('discord.js');
const client = require("../../../index");
const { Embed } = require('../../../config/config')

module.exports = {
    name: "loop", // Name of command
    description: "Müziği tekrarlar.", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.String,
            name: "options",
            description: "Loop options: off, song, queue",
            choices: [
                { name: "off", value: "off" },
                { name: "song", value: "song" },
                { name: "queue", value: "queue" },
            ],
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { member, guild, options } = interaction;
        const option = options.getString("options")
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

            let mode = null;

            switch (option) {
                case "off":
                    mode = 0;
                    break;
                case "song":
                    mode = 1;
                    break;
                case "queue":
                    mode = 2;
                    break;
            }

            mode = await queue.setRepeatMode(mode);

            mode = mode ? (mode === 2? "Kuyruğu Tekrarla" : "Şarkıyı Tekrarla") : "Kapalı";

            embed.setColor(Embed.RENK).setDescription(`🔁 Tekrarlama modu \`${mode}\` olarak değiştirildi.`);
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }
        catch (err) {
            console.log(err);

            embed.setColor(Embed.RENK).setDescription("🛑 | Hata oluştu")
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }
    },
};