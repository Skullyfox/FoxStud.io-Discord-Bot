const guildMemberAdd = require("../command/guildMemberAdd");

module.exports = async (Discord, client) => {
    client.on('message', (msg) => {
        const command = msg.content.split(' ')[0];
        if (command === 'f.test') {
            client.emit("guildMemberAdd", msg.member || msg.guild.fetchMember(msg.author));
        }
    });

    client.on('guildMemberAdd', (member) => {
        guildMemberAdd(Discord, client, member);
    });
}