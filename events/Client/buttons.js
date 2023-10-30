const client = require("../../index");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const moment = require("moment")
require('moment-duration-format')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { Embed } = require("../../config/config")

module.exports = {
  name: "buttons.js"
};

client.on(Events.InteractionCreate, async interaction => {
		
        let user = client.users.cache.get(interaction.member.id)
        const kurulus = new Date().getTime() - user.createdAt.getTime();
        const gün = moment(kurulus).format('dddd');

        if (interaction.customId === "kayitbuton") {

                if (kurulus > 7776000000) {
                    await interaction.member.roles.add('640310376025686026')
                    interaction.reply({ content: "Başarıyla kayıt oldunuz.\n\nYou have successfully registered.", ephemeral: true })
                  }

                if (kurulus < 7776000000) {
                    interaction.reply({ content: "Maalesef kayıt olamadınız. Sebep ise, hesabınız 3 aydan daha kısa bir sürede açılmış.\n\nUnfortunately, you could not register. The reason is that your account was opened in less than 3 months.", ephemeral: true })
                  }
            }

            if (interaction.customId === "wrk58kayit") {
					await interaction.member.roles.add('1076687613659975802')
					interaction.reply({ content: "Başarıyla kayıt oldunuz.\n\nYou have successfully registered.", ephemeral: true })
              }
			  
			if (interaction.customId === "suggestmod") {
          const modal = new ModalBuilder()
          .setCustomId('suggestMod')
          .setTitle('58 Works™ Embed Builder');

          const istekmod = new TextInputBuilder()
          .setCustomId('istekmod')
          .setLabel("İstek Mod")
          .setPlaceholder('İstediğin modu kısaca yaz.')
          .setStyle(TextInputStyle.Short);
    
          const markamodel = new TextInputBuilder()
          .setCustomId('markamodel')
          .setLabel("Tır Marka ve Model")
          .setPlaceholder('Marka ve model yaz.')
          .setRequired(true)
          .setStyle(TextInputStyle.Paragraph);
    
          const modlink = new TextInputBuilder()
          .setCustomId('modlink')
          .setLabel("Mod Link")
          .setPlaceholder('Modun linkini buraya at.')
          .setStyle(TextInputStyle.Short);
    
          const modresim = new TextInputBuilder()
          .setCustomId('modresim')
          .setLabel("Modun Resmi")
          .setPlaceholder('Modun resmini link olarak at.')
          .setStyle(TextInputStyle.Short);

      const istek_mod = new ActionRowBuilder().addComponents(istekmod);
      const marka_model = new ActionRowBuilder().addComponents(markamodel);
      const mod_link = new ActionRowBuilder().addComponents(modlink);
      const mod_resim = new ActionRowBuilder().addComponents(modresim);

      modal.addComponents(istek_mod, marka_model, mod_link, mod_resim);

      await interaction.showModal(modal);
        }

        if (interaction.customId === "kdbsil") {
          await db.delete(`ktarih_${interaction.guild.id}`);
          await db.delete(`ktopsaat_${interaction.guild.id}`);
          await db.delete(`kciksaat_${interaction.guild.id}`);
          await db.delete(`ktopalan_${interaction.guild.id}`);
          await db.delete(`kbityer_${interaction.guild.id}`);
          await db.delete(`ksunucu_${interaction.guild.id}`)
          await db.delete(`kprofil_${interaction.guild.id}`)
          await db.delete(`krota_${interaction.guild.id}`)
          await db.delete(`kdlc_${interaction.guild.id}`)

          interaction.reply({content: "Veriler Silindi!", ephemeral: true});
        }

        if (interaction.customId === "kbilgi") {
          const kmodal = new ModalBuilder()
            .setCustomId('konvoyBilgi2')
            .setTitle('58 Works™ Konvoy Bilgi');

        const sunucuIsim = new TextInputBuilder()
            .setCustomId('sunucu')
            .setLabel("Sunucu İsmi")
            .setPlaceholder('Sunucu İsmini Yaz!')
			      .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const profilDosyasi = new TextInputBuilder()
            .setCustomId('profil')
            .setLabel("Profil Dosyası")
            .setPlaceholder('Profil Dosyasının Linkini At! Yoksa Ne Olacağını Yaz.')
			      .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const rota = new TextInputBuilder()
            .setCustomId('rota')
            .setLabel("Rota")
            .setPlaceholder('Rota Linkini At!')
			      .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const dlc = new TextInputBuilder()
            .setCustomId('dlc')
            .setLabel("DLC")
            .setPlaceholder('DLC Gerekiyorsa Yaz!')
			      .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const ksunucu = new ActionRowBuilder().addComponents(sunucuIsim);
        const kprofil = new ActionRowBuilder().addComponents(profilDosyasi);
        const krota = new ActionRowBuilder().addComponents(rota);
        const kdlc = new ActionRowBuilder().addComponents(dlc);

        kmodal.addComponents(ksunucu, kprofil, krota, kdlc);

        await interaction.showModal(kmodal);
        }

        if (interaction.customId === "kbilgiyayinla") {
        const ktarih = await db.get(`ktarih_${interaction.guild.id}`)
        const ktopsaat = await db.get(`ktopsaat_${interaction.guild.id}`)
        const kciksaat = await db.get(`kciksaat_${interaction.guild.id}`)
        const ktopalan = await db.get(`ktopalan_${interaction.guild.id}`)
        const kbityer = await db.get(`kbityer_${interaction.guild.id}`)
        const ksunucu = await db.get(`ksunucu_${interaction.guild.id}`)
        const kprofil = await db.get(`kprofil_${interaction.guild.id}`)
        const krota = await db.get(`krota_${interaction.guild.id}`)
        const kdlc = await db.get(`kdlc_${interaction.guild.id}`)

        const kembed = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setFooter({ text: Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
        .setTitle("<:58_ekiplogo:1115166357596672070> | 58 Works™ Konvoy Bilgisi")
        .setDescription(`<:58_takvim:1115166402660278292> • **Tarih:** ${ktarih}
<:58_saat:1115166390786199594> • **Buluşma Saati:** ${ktopsaat}
<:58_saat:1115166390786199594> • **Çıkış Saati:** ${kciksaat}

<:58_lokasyon:1115072709655789608> • **Toplanma Alanı:** ${ktopalan}
<:58_lokasyon:1115072709655789608> • **Bitiş Alanı:** ${kbityer}

<:58_server:1115175665642242158> • **Sunucu:** ${ksunucu}
<:58_dlc:1115072656304242711> • **DLC:** ${kdlc}
<:58_save:1152940136242368573> • **Save:** ${kprofil}

<:58_duyuru:1115072660217548850> _Tüm konvoy kurallarımız <#1149714574346571897> kanalında yazmaktadır. Uymayanlar cezalandırılacaktır._

<:58_duyuru:1115072660217548850> _Geçerli mazereti olanlar <#1012944292450406420> kanalına yazılacaktır. Mazeret bildirmeyenler cezalandırılacaktır._`)
.setImage(krota)

    await interaction.reply({ content: 'Mesaj gönderildi.', ephemeral: true })
		
		await interaction.channel.send({ embeds: [kembed] })
        }
})