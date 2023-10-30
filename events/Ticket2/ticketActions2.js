const { ButtonInteraction, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const { Ticket } = require("../../config/config.js");
const ticketSchema2 = require("../../models/Ticket2.js")
const client = require("../../index");

module.exports = {
    name: "r440TicketAction"
}

client.on('interactionCreate', async (interaction) => {
    const { guild, member, customId, channel } = interaction;
    const { ManageChannels, SendMessages } = PermissionFlagsBits

    if (!interaction.isButton()) return;

    if (!["close2", "lock2", "unlock2"].includes(customId)) return;

    if (!guild.members.me.permissions.has(ManageChannels))
        interaction.reply({ content: "Bunu yapabilmem için yetkiye ihtiyacım var.", ephemeral: true });

    const embed = new EmbedBuilder().setColor(0xcc2222)

    ticketSchema2.findOne({ ChannelID: channel.id }, async (err, data) => {
        if (err) throw err;
        if (!data) return;

        const fetchedMember = await guild.members.cache.get(data.MembersID);

        switch (customId) {
            case "close2":

                if (!member.permissions.has(ManageChannels))
                    return interaction.reply({ content: 'Bunun için yetkin yok!', ephemeral: true });

                if (data.closed == true)
                    return interaction.reply({ content: "Ticket is already getting deleted...", ephemeral: true })

                const transcript = await createTranscript(channel, {
                    limit: -1,
                    returnBuffer: false,
                    fileName: `${member.user.username}-ticket${data.Type}-${data.TicketID}.html`
                });

                await ticketSchema2.updateOne({ ChannelID: channel.id }, { Closed: true });

                const transcriptEmbed = new EmbedBuilder()
                    .setTitle(`Transcript Type: ${data.Type}\nId: ${data.TicketID}`)
                    .setFooter({ text: member.user.tag, iconURL: member.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                const transcriptProcesss = new EmbedBuilder()
                    .setTitle('Saving Transcript...')
                    .setDescription("Ticket will be closed in 5 seconds, enable DM's for the ticket transcript.")
                    .setColor(0xcc2222)
                    .setFooter({ text: member.user.tag, iconURL: member.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                const res = await guild.channels.cache.get(Ticket.TRANSCRIPT2).send({
                    embeds: [transcriptEmbed],
                    files: [transcript]
                });

                channel.send({ embeds: [transcriptProcesss] });

                setTimeout(function () {
                    channel.delete();
                }, 5000);

                break;

            case "lock2":
                if (!member.permissions.has(ManageChannels))
                    return interaction.reply({ content: 'Bunun için yetkin yok!', ephemeral: true });

                if (data.Locked == true)
                    return interaction.reply({ content: 'Bilet kanalı zaten kilitlendi', ephemeral: true });

                await ticketSchema2.updateOne({ ChannelID: channel.id }, { Locked: true });
                embed.setDescription("Bilet başarıyla kilitlendi.");

                channel.permissionOverwrites.edit(fetchedMember, { SendMessages: false });

                return interaction.reply({ embeds: [embed] });

                break;

            case "unlock2":
                if (!member.permissions.has(ManageChannels))
                    return interaction.reply({ content: 'Bunun için yetkin yok!', ephemeral: true });

                if (data.Locked == true)
                    return interaction.reply({ content: 'Bilet kanalının zaten kilidi açıldı', ephemeral: true });

                await ticketSchema2.updateOne({ ChannelID: channel.id }, { Locked: false });
                embed.setDescription("Biletin kilidi başarıyla açıldı.");

                channel.permissionOverwrites.edit(fetchedMember, { SendMessages: true });

                return interaction.reply({ embeds: [embed] });

                break;
        }
    })

})