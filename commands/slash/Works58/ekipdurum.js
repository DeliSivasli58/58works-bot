const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    name: "ekipdurum", // Name of command
    description: "58 Works Ekip Durum", // Command description
    type: 1, // Command type
    options: [
        {
            type: 1,
            name: "katildi",
            description: "Ekibe katılan kişiyi yaz",
            options: [
                {
                    type: 6,
                    name: "uye",
                    description: "Katılan üyeyi etiketle",
                    required: true,
                },
                {
                    type: 8,
                    name: "yetki",
                    description: "Katılan üyeyi etiketle",
                    required: true,
                }
            ]
        },
        {
            type: 1,
            name: "ayrildi",
            description: "Ekipten ayrılan kişiyi yaz",
            options: [
                {
                    type: 6,
                    name: "uye",
                    description: "Ayrılan üyeyi etiketle",
                    required: true,
                }
            ]
        },
        {
            type: 1,
            name: "yetkiyukseldi",
            description: "Ekipte yetkisi yükselen kişiyi yaz",
            options: [
                {
                    type: 6,
                    name: "uye",
                    description: "Üyeyi etiketle",
                    required: true,
                },
                {
                    type: 8,
                    name: "yetki",
                    description: "İlk rolünü etiketle",
                    required: true,
                },
                {
                    type: 8,
                    name: "yetki2",
                    description: "Yükseldiği yetkiyi etiketle",
                    required: true,
                }
            ]
        },
        {
            type: 1,
            name: "yetkidustu",
            description: "Ekipte yetkisi yükselen kişiyi yaz",
            options: [
                {
                    type: 6,
                    name: "uye",
                    description: "Üyeyi etiketle",
                    required: true,
                },
                {
                    type: 8,
                    name: "yetki",
                    description: "İlk rolünü etiketle",
                    required: true,
                },
                {
                    type: 8,
                    name: "yetki2",
                    description: "Düştüğü yetkiyi etiketle",
                    required: true,
                }
            ]
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        if (interaction.guild.id === "749673230557511818") {

            if (interaction.member.roles.cache.some(r => r.id === '962402336095998052') ||
                interaction.member.roles.cache.some(r => r.id === '962402466652094474') ||
                interaction.member.roles.cache.some(r => r.id === '1017668660187381770') ||
                interaction.member.roles.cache.some(r => r.id === '1014524874414362625') ||
                interaction.member.roles.cache.some(r => r.id === '1012942969671790723') ||
                interaction.member.roles.cache.some(r => r.id === '1071429579417333780')) {
                const member = interaction.guild.members.cache.get(interaction.options.getUser("uye").id)
                const rol = interaction.options.getRole("yetki")
                const rol2 = interaction.options.getRole("yetki2")
                const kanal = interaction.guild.channels.cache.get("1077554602108526652");

                if (interaction.options.getSubcommand() === 'katildi') {
                    const embed = new EmbedBuilder()
                        .setColor(Embed.RENK)
                        .setImage('https://i.imgur.com/zgxREFM.png')
                        .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
                        .setDescription(`<:58_ekiplogo:1115166357596672070> | ${member} ${rol} Olarak Ekibimize Katılmıştır.`)
                    interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
                    kanal.send({ embeds: [embed] })
                }

                else if (interaction.options.getSubcommand() === 'ayrildi') {
                    const embed2 = new EmbedBuilder()
                        .setColor(Embed.RENK)
                        .setImage('https://i.imgur.com/uhemlQg.png')
                        .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
                        .setDescription(`<:58_ekiplogo:1115166357596672070> | ${member.user.tag} Ekibimizden Ayrılmıştır.`)
                    interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
                    kanal.send({ embeds: [embed2] })
                }

                else if (interaction.options.getSubcommand() === 'yetkiyukseldi') {
                    const embed3 = new EmbedBuilder()
                        .setColor(Embed.RENK)
                        .setImage('https://i.imgur.com/ExqI2F9.png')
                        .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
                        .setDescription(`<:58_ekiplogo:1115166357596672070> | ${member} isimli üyemiz ${rol} rolünden, ${rol2} yetkisine yükseltilmiştir.`)
                    interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
                    kanal.send({ embeds: [embed3] })
                }

                else if (interaction.options.getSubcommand() === 'yetkidustu') {
                    const embed4 = new EmbedBuilder()
                        .setColor(Embed.RENK)
                        .setImage('https://i.imgur.com/uhemlQg.png')
                        .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
                        .setDescription(`<:58_ekiplogo:1115166357596672070> | ${member} isimli üyemiz ${rol} yetkisinden, ${rol2} rolüne düşürülmüştür.`)
                    interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
                    kanal.send({ embeds: [embed4] })
                }

            }
            else {
                interaction.reply({ content: 'Yetkiniz yoktur.', ephemeral: true })
            }

        }

        else {
            interaction.reply({ content: "Bu komut 58 Works™ sunucusunda kullanılmaktadır. İznin yoktur.", ephemeral: true })
        }
    },
};