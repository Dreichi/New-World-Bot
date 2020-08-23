require('dotenv').config();

module.exports = async (client, message) => {
    if (message.author.bot) return;

    if (!message.guild) return;
    
    if (!message.content.startsWith(process.env.PREFIX)) return;
    let cmdArgs = message.content.substring(message.content.indexOf(process.env.PREFIX) + 1).split(new RegExp(/\s+/));
    let cmdName = cmdArgs.shift();
    let cmd = client.commands.get(cmdName);

    if (cmd)
        {
        if (cmd.arg)
            if (cmdArgs.length >= 1)
                cmd.run(client, message, cmdArgs);
            else
                client.emit("missing_arg", message)
        else
            cmd.run(client, message, cmdArgs);
        }
    else
        client.emit("command_not_found", cmdName);
}