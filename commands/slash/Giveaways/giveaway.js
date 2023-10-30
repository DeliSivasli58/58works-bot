const { EmbedBuilder, ApplicationCommandOptionType, ChannelType } = require('discord.js');
const ms = require("ms");

module.exports = {
    name: "giveaway", // Name of command
    description: "Çekiliş Sistemi", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "start",
            description: "Çekiliş Başlatırsın.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "length",
                    description: "Çekilişin süresini girin.",
                    required: true
                },
                {
                    type: ApplicationCommandOptionType.String,
                    name: "prize",
                    description: "Çekilişin ödülünü girin.",
                    required: true
                },
                {
                    type: ApplicationCommandOptionType.Integer,
                    name: "winners",
                    description: "Kaç kişinin kazanacağını yazın. (Varsayılan olarak 1)",
                    required: false
                },
                {
                    type: ApplicationCommandOptionType.Channel,
                    name: "channel",
                    description: "Çekiliş mesajının hangi kanala atacağını seç. (Varsayılan olarak bu kanala atar.)",
                    required: false
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "pause",
            description: "Çekilişi Duraklatır.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "message-id",
                    description: "Duraklatılacak olan çekilişin mesaj id'sini yazın.",
                    required: true
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "unpause",
            description: "Çekilişi Devam Ettirir.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "message-id",
                    description: "Devam ettirilecek olan çekilişin mesaj id'sini yazın.",
                    required: true
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "end",
            description: "Çekilişi Bitirir.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "message-id",
                    description: "Devam ettirilecek olan çekilişin mesaj id'sini yazın.",
                    required: true
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "reroll",
            description: "Çekilişi Yeniden Çeker.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "message-id",
                    description: "Devam ettirilecek olan çekilişin mesaj id'sini yazın.",
                    required: true
                }
            ]
        },
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "delete",
            description: "Çekilişi Siler.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "message-id",
                    description: "Devam ettirilecek olan çekilişin mesaj id'sini yazın.",
                    required: true
                }
            ]
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "Administrator" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { options, channel, guildId } = interaction;

        const sub = options.getSubcommand();

        const errEmbed = new EmbedBuilder().setColor("Red");
        const succEmbed = new EmbedBuilder().setColor("Green");

        if (sub === "start") {
            const gchannel = options.getChannel("channel") || channel;
            const duration = ms(options.getString("length"));
            const winnerCount = options.getInteger("winners") || 1;
            const prize = options.getString("prize");

            if (isNaN(duration)) {
                errEmbed.setDescription("Çekiliş süresini doğru girmedin. Lütfen kontrol et! Örnek: `1d (1 Gün) | 1h (1 Saat) | 1m (1 Dakika) | 1s (1 Saniye)`");
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            }

            return client.giveawaysManager.start(gchannel, {
                duration: duration,
                winnerCount,
                prize,
                messages: client.giveawayConfig.messages
            }).then(async () => {
                if (client.giveawayConfig.giveawayManager.everyoneMention) {
                    const msg = await gchannel.send({ content: "@everyone" });
                    msg.delete();
                }
                succEmbed.setDescription(`Çekiliş, ${gchannel} kanalında başlatıldı.`);
                return interaction.reply({ embeds: [succEmbed], ephemeral: true });
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }

        const messageid = options.getString("message-id");
        const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === guildId && g.messageId === messageid);

        if (!giveaway) {
            errEmbed.setDescription(`Girdiğin çekiliş mesaj ID'si \`${messageid}\` veritabanında bulunamadı.`);
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });
        }

        if (sub === "pause") {
            if (giveaway.isPaused) {
                errEmbed.setDescription("Çekiliş zaten duraklatıldı!")
                return interaction.reply({ embeds: [errEmbed], ephemeral: true })
            }
            await client.giveawaysManager.pause(messageid, {
                content: client.giveawayConfig.messages.paused,
                infiniteDurationText: client.giveawayConfig.messages.infiniteDurationText,
            }).then(() => {
                succEmbed.setDescription('Çekiliş başarıyla duraklatıldı.');
                return interaction.reply({ embeds: [succEmbed], ephemeral: true })
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }

        if (sub === "unpause") {
            await client.giveawaysManager.unpause(messageid).then(() => {
                succEmbed.setDescription('Çekiliş başarıyla devam ettiriliyor.');
                return interaction.reply({ embeds: [succEmbed], ephemeral: true })
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }

        if (sub === "end") {
            await client.giveawaysManager.end(messageid).then(() => {
                succEmbed.setDescription('Çekiliş başarıyla durduruldu.');
                return interaction.reply({ embeds: [succEmbed], ephemeral: true })
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }

        if (sub === "reroll") {
            await client.giveawaysManager.reroll(messageid, {
                messages: {
                    congrat: client.giveawayConfig.messages.congrat,
                    error: client.giveawayConfig.messages.error
                }
            }).then(() => {
                succEmbed.setDescription('Çekiliş başarıyla tekrar çekildi. Yeni kazanan belirlendi.');
                return interaction.reply({ embeds: [succEmbed], ephemeral: true })
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }

        if (sub === "delete") {
            await client.giveawaysManager.delete(messageid).then(() => {
                succEmbed.setDescription('Çekiliş başarıyla silindi.');
                return interaction.reply({ embeds: [succEmbed], ephemeral: true })
            }).catch((err) => {
                console.log(err);

                errEmbed.setDescription(`Hata\n\n\`${err}\``);
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            });
        }
    },
};