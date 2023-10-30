const { EmbedBuilder } = require('discord.js');
const { R440CLUB } = require('../../../config/config')

module.exports = {
    config: {
        name: "r440bilgi", // Name of Command
        description: "R440 Club Bilgilendirme", // Command Description
        usage: "r440bilgi" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
        message.delete()
        const b1 = new EmbedBuilder()
        .setColor(R440CLUB.RENK)
        .setImage('https://cdn.discordapp.com/attachments/948273556452700272/1047183450270072912/Hakkmzda.png')
        .setFooter({text: R440CLUB.YAZI , iconURL: R440CLUB.RESIM})
        .setTitle('<:club_blue:1053083357241679882> | _R440 Club Kimdir ?_')
        .setDescription(`_**R440 Club,** birlik ve beraberliği **2017** yılına dayanan, **Euro Truck Simulator 2** oyunu üzerine kurulmuş, simülasyonu seven saygılı bireylerden oluşan bir topluluktur.
        
**2019** yılında **Black Alcoa (Hazar Çelik)** tarafından temelleri atılan **R440 Club,** yönetimsel başarısı ve saygın bir ekip olarak tanınmasıyla bugüne kadar gelmiştir.

Grubumuzda **16** yaş alt sınırının getirdiği minimum mantık ve olgunluk çerçevesi, ekibimizin yönetimini, huzurunu ve devamlılığını olumlu yönde etkilemiş ve dışarıdan herkesin imrenebileceği bir topluluk imajı eklemiştir.

**Euro Truck Simulator 2** oyunu üzerine kurulmuş bir topluluk olmamıza rağmen, ekibimiz diğer tüm oyun kategorilerinde eğlence arayan ve zamanının tadını çıkarmaya çalışan mantıklı düşünen ve olgun anlayışlı bireylerden oluşmaktadır.

Aramızdaki saygı ve sevgi bağı sadece sanal dünyada kalmamış, gerçek hayatta da vakit geçirecek kadar yakınlaşmıştır.

Ailemizin üyelerini seçerken onları dikkatle inceleriz. Diğer takımların ve toplulukların aksine, bir form kullanmıyoruz ve sadece oyun özelliklerini dikkate almıyoruz. Yeni Aile üyelerimizi bizimle geçirdikleri süre boyunca tanır ve bazı faktörleri inceleriz.


Bunlar, saygı, hoşgörü, uyum, mantık ve daha fazlası gibi bireyin kişiliğini ve olgunluğunu yansıtan faktörlerdir. Oyun zamanı yerine, günlük hayatımız için bir arkadaş seçmek gibi, arkadaşlarımızı seçiyoruz.

Ekibimize dahil etmeye karar verdiğimiz kişi hemen işe alınmaz. İşe alım, tüm **R440 Club** aile üyelerinin görüşleri ayrı ayrı alındıktan ve üzerinde anlaşmaya varıldıktan sonra gerçekleşir.

Ekibimiz sadece ciddi ve önemli kararlarda hiyerarşik olarak yönetilir ve ekibin çıkarlarını etkileyecek tüm konularda demokrasi anlayışını benimsemiştir.

**R440 CLUB BİR EKİP DEĞİL AİLE ORTAMIDIR.**_`)

const b2 = new EmbedBuilder()
.setColor(R440CLUB.RENK)
.setImage('https://cdn.discordapp.com/attachments/948273556452700272/1047183450270072912/Hakkmzda.png')
.setFooter({text: R440CLUB.YAZI , iconURL: R440CLUB.RESIM})
.setTitle('<:club_blue:1053083357241679882> | _Who is R440 Club ?_')
.setDescription(`_**R440 Club** is a community of respectful individuals who love simulation, built on the **Euro Truck Simulator 2** game, whose unity and solidarity dates back to **2017.**

R440 Club, whose foundations were laid in **2019** by **Black Alcoa (Hazar Çelik),** has survived until today with its managerial success and recognition as a respected team.

The minimum rationale and maturity framework brought by the lower age limit of **16** in our group has positively affected the management, peace and continuity of our team and added a community image that can be envied by all outsiders.

Although we are a community built on the game **Euro Truck Simulator 2,** our team consists of logical thinking and mature understanding individuals who seek entertainment in all other game categories and try to enjoy their time.

The bond of respect and love between us has not only remained in the virtual world, but has also become close enough to spend time in real life.

When choosing members of our family, we carefully examine them. Unlike other teams and communities, we don't use a form and just don't consider game features. We get to know our new Family members during their time with us and examine some factors.


These are factors that reflect an individual's personality and maturity, such as respect, tolerance, harmony, logic, and more. Instead of playtime, we choose our friends, like choosing a friend for our daily life.

The person we decide to include in our team is not recruited immediately. Recruitment takes place after the opinions of all **R440 Club** family members have been individually taken and agreed upon.

Our team is managed hierarchically only in serious and important decisions and has adopted the understanding of democracy in all matters that will affect the interests of the team.

**R440 CLUB IS NOT A TEAM, IT IS A FAMILY ENVIRONMENT.**_`)

const b3 = new EmbedBuilder()
.setColor(R440CLUB.RENK)
.setImage('https://cdn.discordapp.com/attachments/948273556452700272/1047183452312715304/Sosyal_Medya_Embed.png')
.setFooter({text: R440CLUB.YAZI , iconURL: R440CLUB.RESIM})
.setTitle('<:club_blue:1053083357241679882> | _R440 Club Links_')
.setDescription(`[<a:discord:877513028088782869> Sınırsız Discord Linki](https://discord.gg/nZzqMmbb3J)

[<:Youtube:801910509007405066> YouTube](https://www.youtube.com/@R440Club)

[<:tmp:877513476749283348> TruckersMP VTC](https://truckersmp.com/vtc/30772)

[<:steam:881152122534633542> Steam Grup](https://steamcommunity.com/groups/r440)

[:globe_with_meridians: Website](https://r440clubcompany.wixsite.com/r440club)

[<:instagram:881284806686691349> Instagram](https://www.instagram.com/r440clubb/)`)

message.channel.send({embeds: [b1, b2, b3]});
        
    },
};