const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "r440kayit", // Name of Command
        description: "R440 Club Kayıt Komutu", // Command Description
        usage: "r440kaytit" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
        if (message.guild.id === "585129900185223275") {
			
			message.delete()

            const form = new EmbedBuilder()
            .setColor(0x1a2e58)
            .setImage('https://cdn.discordapp.com/attachments/948273556452700272/1047183450911805530/Kayt_Kanal.png')
            .setFooter({text: 'R440 Club' , iconURL: 'https://cdn.discordapp.com/attachments/948273556452700272/1050895382353293472/R440_Club_2023_Sedef.png'})
            .setTitle(':flag_eu: _Welcome to R440 Discord Guild._')
            .setDescription(`**Sunucumuza Hoşgeldiniz.**

***Aşağıdaki kayıt butonuna tıklayarak sunucumuza kayıt işlemnizi gerçekleştirebilirsiniz.***

**Kayıt için Bazı Şartlar;**
*Discord hesabınız 3 aydan büyük olmalıdır.*
*Sunucumuza kısa süre giren ve çıkan kullanıcılar yasaklanır, 24 saatten uzun süre kalan kişiler atılır.*



**Welcome to our server.**

***You can register to our server by clicking the registration button below.***

**Some Requirements for Registration**
*Your Discord account must be older than 3 months.*
*Users who enter and exit our server for a short period of time will be banned, people who stay longer than 24 hours will be kicked out.*`)
    
    const kayıtbuton = new ButtonBuilder()
            .setCustomId("kayitbuton")
            .setLabel("Kayıt Ol")
            .setStyle(3)
            .setEmoji("✅")
    
            const row = new ActionRowBuilder()
            .addComponents(kayıtbuton)
    
            await message.channel.send({ embeds: [form], components: [row]})
            
        }
        
    },
};