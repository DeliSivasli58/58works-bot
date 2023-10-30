const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "subrol", // Name of command
    description: "58 Works™ Abone Rolü", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "abone",
            description: "Select this member",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {

        if (interaction.guild.id === '749673230557511818') {
			
			if (interaction.member.roles.cache.some(r => r.id === '962402336095998052') ||
				interaction.member.roles.cache.some(r => r.id === '1017668660187381770') ||
				interaction.member.roles.cache.some(r => r.id === '962402466652094474') ||
				interaction.member.roles.cache.some(r => r.id === '1014524874414362625') ||
                interaction.member.roles.cache.some(r => r.id === '1077651751102062663') ||
                interaction.member.roles.cache.some(r => r.id === '1071429579417333780') ||
                interaction.member.roles.cache.some(r => r.id === '962394313285836890') ||
                interaction.member.roles.cache.some(r => r.id === '1012943152501501962') ||
                interaction.member.roles.cache.some(r => r.id === '1077673785639063613')) {
            const target = interaction.guild.members.cache.get(interaction.options.getUser("abone").id)
            const abonerol = "962468133518573669"

            target.roles.add(abonerol).catch(console.error);

            return interaction.reply({ content: `**${target}** abone rolünüz **${interaction.user.username}** tarafından verilmiştir. <#962468047069802516> kanalına erişebilirsiniz.` , ephemeral: false })
		}
        }
        
        else {
            interaction.reply({content: "Bu komut yalnızca **58 Works™** sunucusunda kullanılmaktadır.", ephemeral: true});
        }
    },
};