const {model, Schema} = require("mongoose");

let ticketSchema2 = new Schema({
    GuildID: String,
    MembersID: [String],
    TicketID: String,
    ChannelID: String,
    Closed: Boolean,
    Locked: String,
    Type: String,
})

module.exports = model("Ticket2", ticketSchema2);