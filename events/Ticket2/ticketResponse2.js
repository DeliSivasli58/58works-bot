const { ChannelType, ButtonInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js");
const ticketSchema2 = require("../../models/Ticket2")
const { Ticket, Users, R440CLUB } = require("../../config/config.js");
const client = require("../../index");

module.exports = {
    name: "r440TicketResponse"
}

client.on('interactionCreate', async (interaction) => {
    const { guild, member, customId, channel } = interaction;
    const { ViewChannel, SendMessages, ManageChannels, ReadMessageHistory } = PermissionFlagsBits;

    if (!interaction.isButton()) return;

    if (!["r440konvoy", "r440hr", "r440partner"].includes(customId)) return;

    if (!guild.members.me.permissions.has(ManageChannels))
        interaction.reply({ content: "Bunu yapabilmem için yetkiye ihtiyacım var.", ephemeral: true });

    try {

        if (interaction.customId === "r440konvoy") {

            await guild.channels.create({
                name: `ticket-em-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT2,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE2,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: Ticket.EVENTMANAGER2,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema2.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Event Management`)
                    .setColor(R440CLUB.RENK)
                    .setDescription("Bilet açtığınız için teşekkür ederiz. Lütfen yetkili bekleyiniz.")
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: R440CLUB.YAZI, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close2').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock2').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock2').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@&${Ticket.EVENTMANAGER2}>`,
                        embeds: [embed],
                        components: [
                            button
                        ]
                    });
    
                    interaction.reply({content: 'Bilet başarıyla açıldı', ephemeral: true})
            })

        }

        else if (interaction.customId === "r440hr") {

            await guild.channels.create({
                name: `ticket-hr-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT2,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE2,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: Ticket.HUMANRESOURCES2,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema2.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Human Resources`)
                    .setColor(R440CLUB.RENK)
                    .setDescription("Bilet açtığınız için teşekkür ederiz. Lütfen yetkili bekleyiniz.")
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: R440CLUB.YAZI, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close2').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock2').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock2').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@&${Ticket.HUMANRESOURCES2}>`,
                        embeds: [embed],
                        components: [
                            button
                        ]
                    });
    
                    interaction.reply({content: 'Bilet başarıyla açıldı', ephemeral: true})
            })

        }

        else if (interaction.customId === "r440partner") {

            await guild.channels.create({
                name: `partner-${member.user.username}`,
                type: ChannelType.GuildText,
                parent: Ticket.TICKETPARENT2,
                permissionOverwrites: [
                    {
                        id: Ticket.EVERYONE2,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory]
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory]
                    }
                ]
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema2.create({
                    GuildID: guild.id,
                    MembersID: member.id,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });
    
                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Partner`)
                    .setColor(R440CLUB.RENK)
                    .setDescription(`<:58_tr:1115072765477781635>
			
_Eğer siz de partnerimiz olmak istiyorsanız, aşağıdaki şartları yerine getirmeniz gerekmektedir._
			
<a:58_sonsuzluk:1115072753544994846> | En az **400** Üye
<a:58_sonsuzluk:1115072753544994846> | Sunucu Üyesine Göre Aktiflik
<a:58_sonsuzluk:1115072753544994846> | Kurallara Uygun Ortam

<a:58_ringingbell:1115072740450373643> | _Eğer, partner yazımız, linkimiz silinirse veya sunucu sahibi sunucumuzdan ayrılırsa, partnerlik anında feshedilecek olup, bir daha partner olmamak üzere kara listeye alınır._

<:58_eu:1115072665967927317>

_If you want to be our partner, you must fulfil the following conditions._
			
<a:58_sonsuzluk:1115072753544994846> | Minimum **400** Member
<a:58_sonsuzluk:1115072753544994846> | Activity by Server Member
<a:58_sonsuzluk:1115072753544994846> | Rules Compliant Environment

<a:58_ringingbell:1115072740450373643> | _If our partner text, link is deleted or the server owner leaves our server, the partnership will be terminated immediately and will be blacklisted to not be a partner again._`)
                    .addFields(
                        { name: 'Kullanıcı Adı', value: member.user.tag, inline: true },
                        { name: 'Kullanıcı ID', value: member.user.id, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: R440CLUB.YAZI, iconURL: member.displayAvatarURL({ dynamic: true }) });
    
                    const button = new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('close2').setLabel(`Ticket'ı Kapat`).setStyle(ButtonStyle.Secondary).setEmoji('❌'),
                        new ButtonBuilder().setCustomId('lock2').setLabel(`Ticket'ı Kilitle`).setStyle(ButtonStyle.Primary).setEmoji('🔐'),
                        new ButtonBuilder().setCustomId('unlock2').setLabel(`Ticket'ın Kilidini Kaldır`).setStyle(ButtonStyle.Success).setEmoji('🔓')
                    );
    
                    channel.send({
                        content: `<@${member.user.id}> | <@396298244482662402>`,
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