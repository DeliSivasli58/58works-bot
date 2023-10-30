const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { Ticket, R440CLUB } = require("../../../config/config.js")

module.exports = {
    name: "r440ticket", // Name of command
    description: "Ticket Oluştur", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ManageChannels" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        const { guild } = interaction;

        const embed = new EmbedBuilder()
            .setTitle("<:club_white:1053083124231327754> | R440 Club Ticket System")
            .setDescription(`:flag_tr: 

            🖐️ Merhaba;
            
            *Bilet açmak için aşağıdaki butonları kullanabilirsiniz.*
            
            <:Partner:1038559569783300176> **Partnerlik için 400 Misafir barındıran aktif bir sunucu** gereksinimini karşılamalısınız.
            <:uyeler:1038559575168782346> Halka İlişkiler sorumlumuzla görüşmek için, **geçerli ve önemli bir nedeniniz olması** gereklidir. 
            <:SariNokta:1038559580109680754> Konvoy davetleri için **ilk önce [konvoy](https://discord.com/channels/585129900185223275/981597442095054858/1030214931104153730) postumuzdan takvimimize bakın, ardından boşluk varsa bilet açıp** iletişime geçin.
            
            <a:olur:944370963968032848> **Partnerlik şartını karşılamadan partnerlik, çok önemli bir konu olmadan halkla ilişkiler, Konvoy doluluk listemizi incelemeden konvoy davet açan kişiler, gereksiz kullanımdan dolayı o anın gerektirdiği duruma göre yasaklanma veya mute cezası alacaktır.**
            
            :flag_eu:
            
            🖐️ Hello;
            
            You can use the following buttons to open a ticket.
            
            <:Partner:1038559569783300176> **You must meet the requirement of an active server hosting 400 Guests** for partnership.
            <:uyeler:1038559575168782346> You must **have a valid and important reason** to meet with our Public Relations officer. 
            <:SariNokta:1038559580109680754> For convoy invitations, **first check our calendar on our [convoy](https://discord.com/channels/585129900185223275/981597442095054858/1030214931104153730) post, then open a ticket if there is space.**
			
            <a:olur:944370963968032848> **Partnership without meeting the partnership requirement, public relations without a very important issue, convoy invitation without examining our convoy occupancy list, will be banned or mute penalised according to the situation required by the moment due to unnecessary use.**`)
            .setImage("https://cdn.discordapp.com/attachments/718225999451652108/1137661066810241094/Ticket.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/948273556452700272/1051653970885611632/R440_Sunucu_PP_Gif_1.gif")
            .setColor(R440CLUB.RENK);

        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('r440konvoy').setLabel('Event Management').setStyle(ButtonStyle.Primary).setEmoji('📩'),
            new ButtonBuilder().setCustomId('r440hr').setLabel('Human Resources Management').setStyle(ButtonStyle.Primary).setEmoji('👥'),
            new ButtonBuilder().setCustomId('r440partner').setLabel('Partner').setStyle(ButtonStyle.Primary).setEmoji('🤝'),
        );

        await guild.channels.cache.get(Ticket.OPENTICKET2).send({
            embeds: [embed],
            components: [button]
        });

        interaction.reply({ content: 'Mesaj başarıyla gönderildi', ephemeral: true });
    },
};