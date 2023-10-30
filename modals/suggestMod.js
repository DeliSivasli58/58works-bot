const { EmbedBuilder } = require("discord.js");
const { Embed } = require('../config/config')

module.exports = {
    id: "suggestMod",
    run: async (client, interaction, config, db) => {
		
		const { member } = interaction;

        const istekmodd = interaction.fields.getTextInputValue('istekmod');
        const markaamodel = interaction.fields.getTextInputValue('markamodel');
        const moddlink = interaction.fields.getTextInputValue('modlink');
        const moddresim = interaction.fields.getTextInputValue('modresim');

        const embed = new EmbedBuilder()
        .setColor(Embed.RENK)
        .setTitle("İstek Local Mod")
        .setDescription(`\`・\` İstek Mod: ${istekmodd}
        
        \`・\` Marka ve Model: ${markaamodel}

        \`・\` Mod Link: [Mod](${moddlink})

        \`・\` Mod Resim: [Resim](${moddresim})`)
        .setFooter({ text: member.user.tag , iconURL: Embed.FOOTERICON });

        const istekmodkanal = client.channels.cache.get("1109913639764377712");
        await istekmodkanal.send({content: '@everyone', embeds: [embed]});

        await interaction.reply({ content: "\`・\` İsteğiniz gönderildi!", ephemeral: true});

    },
};
