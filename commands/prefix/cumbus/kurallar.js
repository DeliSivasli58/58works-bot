const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "crules", // Name of Command
        description: "Cümbüş Kurallar", // Command Description
        usage: "crules" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete();
			
			const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/Z4M1xGI.gif")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・Cümbüş Kurallar')
            .setDescription(`<a:x4:1019043640686940250>・**Dini , ırki , siyaset , allah'a küfür tarzı muhabbetler tamamıyla sunucumuzda yasaktır.**

<a:x4:1019043640686940250>・**Sunucuda reklamın her türlüsü vb kesinlikle yasaktır.**

<a:x4:1019043640686940250>・**DM yoluyla sunucu üyeleri ve yetkilileride dahil olmak üzere uygunsuz içerikler yasaktır.**

<a:x4:1019043640686940250>・**Küfür etmek , aşağılamak , küçük düşürmek , dalga geçmek vb yasaktır.**

<a:x4:1019043640686940250>・**J4J Sahte Davet ve Token invite kesinlikle yasaktır.**

<a:x4:1019043640686940250>・**+18 Cinsel içerik, kan, vahşet, jump scare içeren fotoğraf,video paylaşımı yasaktır.**

<a:x4:1019043640686940250>・**Spam yapmak yasaktır. (üst üste 4 - 5 kez veya daha fazla aynı mesajı alt alta yazmak.)**

<a:x4:1019043640686940250>・**Bireylerin özel, şahsi bilgilerini paylaşmak kesinlikle yasaktır. (Ailevi veya şahsi olarak ifşalamak)**

<a:x4:1019043640686940250>・**Başka sunucularda olan sunucu dışı olayları sunucuya yansıtmak yasaktır.**

<a:x4:1019043640686940250>・**Sunucu içerisinde bir toplum oluşturup diğer kişileri kışkırtacak, üyeleri rahatsız edecek davranışlarda bulunmak yasaktır.**

<a:x4:1019043640686940250>・**Profil fotoğrafında ve bannerda dini ve manevi değerler ile dalga geçici, aşağılayıcı fotoğraflar yasaktır.**

<a:x4:1019043640686940250>・**Discord Topluluk İlkelerine aykırı tavırlar sergilemek yasaktır.**

\`\`\`bash
"CÜMBÜŞ AİLESİNİ OLUŞTURAN HER BİR ÜYEMİZ BİZİM BAŞ TACIMIZDIR."
\`\`\``);

const embedd = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setDescription(`<a:k11:1090296397825331200>・<@&1009142272316674181> => Sunucuya ilk katılan kişilere otomatik verilir ve sadece chat kısmına katılabilir
            
            <a:k11:1090296397825331200>・<@&1088600851985215700> => 1. Level Rolüdür.

            <a:k11:1090296397825331200>・<@&1047239576701374544> => 5. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239591037513738> => 10. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239599023460474> => 15. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239610079641663> => 20. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239605960855724> => 25. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239616283033742> => 30. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239657768890400> => 35. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239664349757520> => 40. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239677540843620> => 45. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1047239684721487982> => 50. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1124965858964410399> => 55. Level Rolüdür.
            
            <a:k11:1090296397825331200>・<@&1090709068697579552> -- Sunucuda Çok Fazla Takılan Üyelere Verilir
            
            
            <a:58_kanat:1115166369504313364>・LÜTFEN YENİ KATILAN ARKADAŞLAR YETKİLİ ARKADAŞLARDAN İSMİNİN DÜZENLENMESİNİ TALEP ETSİNLER
`);
            return message.channel.send({ embeds:[embed, embedd] });
        
    },
};