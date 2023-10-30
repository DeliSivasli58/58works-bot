const { Client, Partials, Collection, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config/config');
const colors = require("colors");

const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify")

// Creating a new client:
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction],
  presence: {
    activities: [{ name: "The Unreachable Peak", type: 1 }],
    status: 'dnd'
  }
});

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js.".red)
  return process.exit();
};

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();
client.giveawayConfig = require("./config/giveawayConfig")

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

['giveawaysEventsHandler', 'giveawaysManager'].forEach((x) => {
  require(`./Utils/${x}`)(client)
})

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});

client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  leaveOnFinish: true,
  emitAddListWhenCreatingQueue: false,
  plugins: [new SpotifyPlugin()]
});

const status = queue =>
  `Ses: \`${queue.volume}%\` | Filtre: \`${queue.filters.names.join(', ') || 'Kapalı'}\` | Tekrar: \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'Tüm Kuyruk' : 'Tek Şarkı') : 'Kapalı'}\` | Oto-oynatma: \`${queue.autoplay ? 'Açık' : 'Kapalı'}\``
client.distube
  .on('playSong', (queue, song) =>
    queue.textChannel.send({
      embeds: [new EmbedBuilder().setColor("Green")
        .setDescription(`🎶 | Oynatılan Şarkı: \`${song.name}\` - \`${song.formattedDuration}\`\nİsteyen: ${song.user}\n${status(queue)}`)]
    })
  )
  .on('addSong', (queue, song) =>
    queue.textChannel.send(
      {
        /*embeds: [new EmbedBuilder().setColor("Green")
          .setDescription(`🎶 | Eklendi ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`)]*/
        embeds: [new EmbedBuilder().setColor("Green")
          .setDescription(`🎶 | ${song.user} tarafından eklenen şarkı: ${song.name} - \`${song.formattedDuration}\``)
        ]
      }
    )
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
      {
        embeds: [new EmbedBuilder().setColor("Green")
          /*.setDescription(`🎶 | Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)]*/
          .setDescription(`🎶 | \`${playlist.name}\` çalma listesindeki ${playlist.songs.length} şarkı listeye eklendi.\n${status(queue)}`)]
      }
    )
  )
  .on('error', (channel, e) => {
    if (channel) channel.send(`⛔ | Hata oluştu: ${e.toString().slice(0, 1974)}`)
    else console.error(e)
  })
  .on('empty', channel => channel.send({
    embeds: [new EmbedBuilder().setColor("Red")
      .setDescription('⛔ | Ses kanalı boş, kanaldan ayrılıyorum.')]
  }))
  .on('searchNoResult', (message, query) =>
    message.channel.send(
      {
        embeds: [new EmbedBuilder().setColor("Red")
          .setDescription('`⛔ | Aradığınız şey bulunamadı: \`${query}\`!`')]
      })
  )
  .on('finish', queue => queue.textChannel.send({
    embeds: [new EmbedBuilder().setColor("Green")
      .setDescription('🏁 | Liste tamamlandı!')]
  }))
  
//Cümbüş Ayarlar

  client.on('messageCreate', async (message) => {
    if (message.guild.id === "1009142272144707594") {
      if (message.channel.id === '1126834013240303686') {
        if (message.attachments.size > 0) {
          message.react('<:pati:1127545245207367772>')
        }
        }
		if (message.channel.id === '1128099414716711024') {
          message.react('<:1108816676746707064:1109260691325587516>')
        }
    }
  });