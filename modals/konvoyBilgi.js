const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");
const { Embed } = require('../config/config')

module.exports = {
    id: "konvoyBilgi",
    run: async (client, interaction, config, db) => {

        const tarih = interaction.fields.getTextInputValue('tarih');
        const toplanmaSaati = interaction.fields.getTextInputValue('topsaat');
        const cikisSaati = interaction.fields.getTextInputValue('ciksaat');
        const toplanmaAlan = interaction.fields.getTextInputValue('topalan');
        const bitisYeri = interaction.fields.getTextInputValue('bitisyer');

        db.set(`ktarih_${interaction.guild.id}`, tarih);
        db.set(`ktopsaat_${interaction.guild.id}`, toplanmaSaati);
        db.set(`kciksaat_${interaction.guild.id}`, cikisSaati);
        db.set(`ktopalan_${interaction.guild.id}`, toplanmaAlan);
        db.set(`kbityer_${interaction.guild.id}`, bitisYeri);

        const ktarih = await db.get(`ktarih_${interaction.guild.id}`)
        const ktopsaat = await db.get(`ktopsaat_${interaction.guild.id}`)
        const kciksaat = await db.get(`kciksaat_${interaction.guild.id}`)
        const ktopalan = await db.get(`ktopalan_${interaction.guild.id}`)
        const kbityer = await db.get(`kbityer_${interaction.guild.id}`)

        const mesaj = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setFooter({
            text: Embed.FOOTERTEXT,
            iconURL: Embed.FOOTERICON
        })
        .setDescription(`İşlenen Bilgiler:
        
Tarih: ${ktarih}

Toplanma Saati: ${ktopsaat}

Çıkış Saati: ${kciksaat}

Başlayacağımız Yer: ${ktopalan}

Bitireceğimiz Yer: ${kbityer}`);

const kbilgi = new ButtonBuilder()
            .setCustomId("kbilgi")
            .setLabel("Devam Et")
            .setStyle(2)
            .setEmoji("✅")

const kdbsil = new ButtonBuilder()
            .setCustomId("kdbsil")
            .setLabel("Bilgileri Sil")
            .setStyle(4)
            .setEmoji("🗑")
    
            const konvoyBilgi = new ActionRowBuilder().addComponents(kbilgi)
            const konvoyDbSil = new ActionRowBuilder().addComponents(kdbsil)

interaction.reply({embeds: [mesaj], components: [konvoyBilgi, konvoyDbSil], ephemeral: true});

    },
};
