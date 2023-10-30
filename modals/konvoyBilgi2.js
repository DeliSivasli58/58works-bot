const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");
const { Embed } = require('../config/config')

module.exports = {
    id: "konvoyBilgi2",
    run: async (client, interaction, config, db) => {

        const sunucuBilgisi = interaction.fields.getTextInputValue('sunucu');
        const profilBilgisi = interaction.fields.getTextInputValue('profil');
        const rotaBilgisi = interaction.fields.getTextInputValue('rota');
        const dlcBilgisi = interaction.fields.getTextInputValue('dlc');

        db.set(`ksunucu_${interaction.guild.id}`, sunucuBilgisi);
        db.set(`kprofil_${interaction.guild.id}`, profilBilgisi);
        db.set(`krota_${interaction.guild.id}`, rotaBilgisi);
        db.set(`kdlc_${interaction.guild.id}`, dlcBilgisi);

        const ksunucu = await db.get(`ksunucu_${interaction.guild.id}`)
        const kprofil = await db.get(`kprofil_${interaction.guild.id}`)
        const krota = await db.get(`krota_${interaction.guild.id}`)
        const kdlc = await db.get(`kdlc_${interaction.guild.id}`)

        const mesaj = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setFooter({
            text: Embed.FOOTERTEXT,
            iconURL: Embed.FOOTERICON
        })
        .setDescription(`İşlenen Bilgiler:
        
Sunucu: ${ksunucu}

Profil Dosyası: ${kprofil}

Rota: ${krota}

DLC: ${kdlc}`);

const kbilgiyayinla = new ButtonBuilder()
            .setCustomId("kbilgiyayinla")
            .setLabel("Yayınla!")
            .setStyle(2)
            .setEmoji("✅")

const kdbsil = new ButtonBuilder()
            .setCustomId("kdbsil")
            .setLabel("Bilgileri Sil")
            .setStyle(4)
            .setEmoji("🗑")
    
            const konvoyBilgiYayinla = new ActionRowBuilder().addComponents(kbilgiyayinla)
            const konvoyDbSil = new ActionRowBuilder().addComponents(kdbsil)

interaction.reply({embeds: [mesaj], components: [konvoyBilgiYayinla, konvoyDbSil], ephemeral: true});

    },
};
