const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "tetikleyici.js"
};

/*client.on("messageCreate", async msg => { 
	if (msg.guild.id === '585129900185223275') {
		
		const yasak = "save"

		const dcskelime = [yasak,"<@"+yasak+">"]; 
		if (dcskelime.some(dcss => msg.content.includes(dcss))) {
			msg.delete()
			msg.channel.send(`${msg.author}, **Saveler burada yok! YouTube videosunun açıklama kısmında link var!**`).then(msgg => {setTimeout(() => msgg.delete(), 5000)}).catch();
		}
		
	}
	})*/