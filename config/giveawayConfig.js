module.exports = {

    giveawayManager: {
        //Private Message Information.
        //If you set false, the bot will not send private message information to members who join the giveaway, for example.
        privateMessageInformation: true,
        // When a giveaway is created the bot pings everyone (true or false)
        everyoneMention: false,
        // You can choose a custom reaction
        reaction: '🎉'
    },

    messages: {
        giveaway: '🎉 **Çekiliş**',
        giveawayEnded: '🎉 **Çekiliş Sona Erdi**',
        title: 'Ödül: {this.prize}',
        drawing: 'Çekiliş şu tarihte sona eriyor: {timestamp}',
        dropMessage: 'İlk yapman gereken, 🎉 tepkisine tıkla!',
        inviteToParticipate: '🎉 tepkisine basarak çekilişe katılabilirsin!',
        winMessage: 'Tebrikler, {winners}! **{this.prize}** ödülünü kazandın!',
        embedFooter: '{this.winnerCount} Kazanan(lar)',
        noWinner: 'Çekiliş iptal edildi, geçerli katılım yok.',
        hostedBy: 'Çekilişi Yapan: {this.hostedBy}',
        winners: 'Kazanan(lar):',
        endedAt: 'Sona eriyor',
        paused: '⚠️ **Çekiliş Durduruldu!**',
        infiniteDurationText: '`ASLA`',
        congrat: 'Sonraki kazanan(lar): {winners}! Tebrikler, **{this.prize}** ödülünü kazandın!',
        error: 'Reroll iptal edildi, geçerli katılım yok.'
    }
}