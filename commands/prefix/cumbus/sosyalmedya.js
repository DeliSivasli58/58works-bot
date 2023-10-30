const { EmbedBuilder } = require('discord.js');
const { Embed } = require('../../../config/config')

module.exports = {
    config: {
        name: "csocial", // Name of Command
        description: "Cümbüş Sosyal Medya", // Command Description
        usage: "csocial" // Command usage
    },
    permissions: "", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
			
			message.delete();
			
			const embed = new EmbedBuilder()
            .setColor(Embed.RENK)
            .setImage("https://i.imgur.com/mBD0SwD.png")
            .setFooter({ text:Embed.FOOTERTEXT, iconURL: Embed.FOOTERICON })
            .setTitle('<:58_ekiplogo:1115166357596672070>・Cümbüş Sosyal Medya Linkler')
            .setDescription(`<a:58_insta:1115175647833227327>・Instagram: https://www.instagram.com/gmdespina/
                        
            <a:58_yt:1115166425917694035>・YouTube: https://www.youtube.com/channel/UCl0C5E1dLbaiq4hpj1mMkOQ
                        
            <a:58_twitch:1115175679185662043>・Twitch: https://www.twitch.tv/gmdespinaa
			
            :money_with_wings:・BynoGame: https://www.bynogame.com/en/destekle/gmdespina
			`);
            return message.channel.send({ embeds:[embed] });
        
    },
};