const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "bizkimiz", // Name of Command
        description: "58 Works™ Biz Kimiz?", // Command Description
        usage: "58wrkbizkimiz" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
            message.delete()

            message.channel.send({content: `# <:58_ekiplogo:1115166357596672070> _58 Works™ - The Unreachable Peak_
            
[ <:58_tr:1115072765477781635> ] _Biz aslında save için bu ismi kullandık...

Sonra da dedik ki, "Bu isim biliniyor. Ekip açalım". 4 Eylül 2022 tarihinde **Deli Sivaslı** tarafından ve **mylemonedits** öncülüğünde 1 haftalık çalışmadan sonra bu ekip kuruldu.
                        
Ekipteki önceliğimizi, kaliteli bir aile ortamı oluşturacak şeklinde belirledik. **Euro Truck Simulator 2** oyunu için temel atmış olsak da farklı oyunlar da oynayarak eğlencemize bakıyoruz._

[ <:58_eu:1115072665967927317> ] _We actually used this name for save...

And then we said, "This name is known. Let's open a team". On September 4, 2022, by **Deli Sivaslı** and under the leadership of **mylemonedits,** this team was established after 1 week of work.

We have determined our priority in the team to create a quality family environment. Although we have laid the foundation for the **Euro Truck Simulator 2** game, we are looking at our fun by playing different games._`})

message.channel.send({content: "https://cdn.discordapp.com/attachments/783321134895464458/1142717302253555813/Baslksz-1.png"})

message.channel.send({content: `# <:58_keles:1115072698561855570> _Our Links_
        
<a:58_dc:1115072651942178866>・Discord: https://discord.gg/4EXB2trxVA

<a:58_insta:1115175647833227327>・Instagram: https://www.instagram.com/58.works
            
<a:58_yt:1115166425917694035>・YouTube: https://www.youtube.com/DELISIVASLI
            
<:58_tmp:1115175676044120114>・TruckersMP VTC: https://truckersmp.com/vtc/29008
            
<:58_tb:1115175670729937036>・TrucksBook Company: https://trucksbook.eu/company/158039
            
<:58_website:1115175686953521162>・Website: https://58works.com.tr/`})      
    },
};