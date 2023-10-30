const { ChannelType, ButtonInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js");
const ticketSchema = require("../../models/Ticket")
const { Ticket, Users, Embed } = require("../../config/config.js");
const client = require("../../index");

module.exports = {
    name: "ticketResponse"
}

client.on('interactionCreate', async (interaction) => {
    const { guild, member, customId, channel } = interaction;
    const { ViewChannel, SendMessages, ManageChannels, ReadMessageHistory } = PermissionFlagsBits;

    if (!interaction.isButton()) return;

    if (!["inviteconvoy", "partner", "hrmanagement"].includes(customId)) return;

    if (!guild.members.me.permissions.has(ManageChannels))
        interaction.reply({ content: "Bunu yapabilmem için yetkiye ihtiyacım var.", ephemeral: true });

    try {

        if (interaction.customId === "inviteconvoy") {

            await guild.channels.create({
                name: `em-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: Ticket.EVENTMANAGER,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Event Management`)
                    .setColor(Embed.RENK)
                    .setDescription("Bilet açtığınız için teşekkür ederiz. Lütfen yetkili bekleyiniz.")
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: Embed.FOOTERTEXT, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@&${Ticket.EVENTMANAGER}>`,
                        embeds: [embed],
                        components: [
                            button
                        ]
                    });
    
                    interaction.reply({content: 'Bilet başarıyla açıldı', ephemeral: true})
            })

        }

        if (interaction.customId === "hrmanagement") {

            await guild.channels.create({
                name: `hr-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: Ticket.HUMANRESOURCES,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Human Resources`)
                    .setColor(Embed.RENK)
                    .setDescription("Bilet açtığınız için teşekkür ederiz. Lütfen yetkili bekleyiniz.")
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: Embed.FOOTERTEXT, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@&${Ticket.HUMANRESOURCES}>`,
                        embeds: [embed],
                        components: [
                            button
                        ]
                    });
    
                    interaction.reply({content: 'Bilet başarıyla açıldı', ephemeral: true})
            })

        }

        if (interaction.customId === "partner") {

            await guild.channels.create({
                name: `partner-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Partner`)
                    .setColor(Embed.RENK)
                    .setDescription(`<:58_tr:1115072765477781635>
			
_Eğer siz de partnerimiz olmak istiyorsanız, aşağıdaki şartları yerine getirmeniz gerekmektedir._
			
<a:58_sonsuzluk:1115072753544994846> | En az **500** Üye
<a:58_sonsuzluk:1115072753544994846> | Sunucu Üyesine Göre Aktiflik
<a:58_sonsuzluk:1115072753544994846> | Kurallara Uygun Ortam

<a:58_ringingbell:1115072740450373643> | _Eğer, partner yazımız, linkimiz silinirse veya sunucu sahibi sunucumuzdan ayrılırsa, partnerlik anında feshedilecek olup, bir daha partner olmamak üzere kara listeye alınır._

<:58_eu:1115072665967927317>

_If you want to be our partner, you must fulfil the following conditions._
			
<a:58_sonsuzluk:1115072753544994846> | Minimum **500** Member
<a:58_sonsuzluk:1115072753544994846> | Activity by Server Member
<a:58_sonsuzluk:1115072753544994846> | Rules Compliant Environment

<a:58_ringingbell:1115072740450373643> | _If our partner text, link is deleted or the server owner leaves our server, the partnership will be terminated immediately and will be blacklisted to not be a partner again._`)
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: Embed.FOOTERTEXT, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@${Users.OWNERS}>`,
                        embeds: [embed],
                        components: [
                            button
                        ]
                    });
    
                    interaction.reply({content: 'Bilet başarıyla açıldı', ephemeral: true})
            })

        }

        

    }
    catch (err) {
        return console.log(err)
    }
})