const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ekip", // Name of command
    description: "58 Works™ Ekip Rolü", // Command description
    type: 1, // Command type
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "kisi",
            description: "Yeni gelen üyenin adını yaz.",
            required: true
        },
		{
			type: ApplicationCommandOptionType.String,
			name: "isim",
			description: "Yeni gelen kişinin adını yaz.",
			required: true
		},
        {
            type: ApplicationCommandOptionType.Number,
            name: "yas",
            description: "Yeni gelen üyenin yaşını yaz",
            required: true
        }
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "ManageRoles" // User permissions needed
    },
    run: async (client, interaction, config, db) => {

        if (interaction.guild.id === '749673230557511818') {

            if (interaction.member.roles.cache.some(r => r.id === '962402336095998052') ||
                interaction.member.roles.cache.some(r => r.id === '962402466652094474') ||
                interaction.member.roles.cache.some(r => r.id === '1017668660187381770') ||
                interaction.member.roles.cache.some(r => r.id === '1014524874414362625') ||
                interaction.member.roles.cache.some(r => r.id === '1012942969671790723') ||
                interaction.member.roles.cache.some(r => r.id === '1071429579417333780')) {
                    if (interaction.user.bot) return;
    
                    const ekiprol = '1011752881596145736'
                    const member = interaction.guild.members.cache.get(interaction.options.getUser("kisi").id)
                    const isimm = interaction.options.getString("isim")
                    const yass = interaction.options.getNumber("yas")
            
                    member.roles.add(ekiprol).catch(console.error);
                    member.setNickname(`58W | ${isimm} (${yass})`);
            
                    return interaction.reply({ content: `<:58_ekiplogo:1115166357596672070> | **${member}** ekip rolü **${interaction.user.username}** tarafından verilmiştir. Aramıza hoş geldiniz.` , ephemeral: false });
                }

                else {
                    return interaction.reply({ content: "Bu komutu kullanmaya izniniz yoktur.", ephemeral: true });
                }

        }

        else {
    
            return interaction.reply({content: 'Bu komut yalnızca **58 Works™** sunucusunda kullanılmaktadır.', ephemeral: true})

        }
    },
};