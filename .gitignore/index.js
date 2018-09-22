const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'Lotus'

client.login(process.en.TOKEN)

client.on('guildMemberAdd', async member => {
const channel = member.guild.channels.find('name', 'général');
if (!channel) return;
channel.send(`:tada: Bienvenue sur le Discord du clan mon chere Kubrow ! ${member} :tada:`);
}
);
