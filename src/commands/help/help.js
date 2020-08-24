const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    run: async (client, message, args) => {
        const embed =  {
            "title": "Commands list:",
                    "color": 7506394,
                    "fields": [
                        {
                            "name": "!crafts",
                            "value": "List of all the crafts."
                        },
                        {
                            "name": "!craft {name}",
                            "value": "Put the name of the craft after\nthe command and you will got \nplenty of information!"
                        }
                    ]
         }
        message.channel.send({
            embed: embed
        });
    },
    name: "",
    aliases: ['h'],
    category: "",
    description: "Help command",
    usage: "help",
    arg: false,
}

