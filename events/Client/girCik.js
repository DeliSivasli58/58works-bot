const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "58 Works Gir Cik Log"
};

const sunucu = '749673230557511818';


client.on('guildMemberAdd', (guildmember) => {
			
			if (guildmember.guild.id === sunucu) {
				
const girciklog = guildmember.guild.channels.cache.get("1035264948252713082");
			girciklog.send({ content: `${guildmember} \`${guildmember.user.tag} / ${guildmember.user.id}\` sunucuya giriş yaptı.` })
			
			}
})

client.on('guildMemberRemove', (guildmember) => {
		
		if (guildmember.guild.id === sunucu) {
			
const girciklog = guildmember.guild.channels.cache.get("1035264948252713082");
			
			girciklog.send({ content: `${guildmember} \`${guildmember.user.tag} / ${guildmember.user.id}\` sunucudan ayrıldı.` })
			
		}
})