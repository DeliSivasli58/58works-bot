const { PermissionFlagsBits, EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const ticketSchema2 = require("../../../models/Ticket2")
const { R440CLUB } = require('../../../config/config')

module.exports = {
    name: "r440ticketaction", // Name of command
    description: "Ticket Action", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.String,
            name: "action",
            description: "Add or remove",
            required: true,
            choices: [
                {
                    name: "Add", value: "add"
                },
                {
                    name: "Remove", value: "remove"
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.User,
            name: "member",
            description: "Add or remove user",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ManageChannels" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { guildId, options, channel } = interaction;

        const action = options.getString("action");
        const member = options.getUser("member");

        const embed = new EmbedBuilder()

        switch (action) {

            case "add":
                ticketSchema2.findOne({ GuildID: guildId, ChannelID: channel.id }, async (err, data) => {
                    if (err) throw err;
                    if (!data)
                        return interaction.reply({ embeds: [embed.setColor(R440CLUB.RENK).setDescription('Komutta hata var, lütfen daha sonra tekrar deneyiniz.')], ephemeral: true });

                    if (data.MembersID.includes(member.id))
                        return interaction.reply({ embeds: [embed.setColor(R440CLUB.RENK).setDescription('Komutta hata var, lütfen daha sonra tekrar deneyiniz.')], ephemeral: true });

                    data.MembersID.push(member.id);

                    channel.permissionOverwrites.edit(member.id, {
                        SendMessages: true,
                        ViewChannel: true,
                        ReadMessageHistory: true
                    });

                    interaction.reply({
                        embeds: [
                            embed.setColor("Green")
                            .setDescription(`${member} bilete başarıyla eklendi.`)
                        ]
                    });

                    data.save();
                });
                break;
            case "remove":
                ticketSchema2.findOne({ GuildID: guildId, ChannelID: channel.id }, async (err, data) => {
                    if (err) throw err;
                    if (!data)
                        return interaction.reply({ embeds: [embed.setColor(R440CLUB.RENK).setDescription('Komutta hata var, lütfen daha sonra tekrar deneyiniz.')], ephemeral: true });

                    if (!data.MembersID.includes(member.id))
                        return interaction.reply({ embeds: [embed.setColor(R440CLUB.RENK).setDescription('Komutta hata var, lütfen daha sonra tekrar deneyiniz.')], ephemeral: true });

                    data.MembersID.remove(member.id);

                    channel.permissionOverwrites.edit(member.id, {
                        SendMessages: false,
                        ViewChannel: false,
                        ReadMessageHistory: false
                    });

                    interaction.reply({
                        embeds: [
                            embed.setColor("Green")
                            .setDescription(`${member} biletten başarıyla kaldırıldı.`)
                        ]
                    });

                    data.save();
                });
                break;








        }
    },
};