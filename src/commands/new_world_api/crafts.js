const { craftsApi } = require('../../utils/api/new_world');
const { MessageEmbed } = require('discord.js');
const paginationEmbed = require('discord.js-pagination');

module.exports = {
    run: async (client, message, args) => {

        let query = ""

        for (let index = 0; index < args.length; index++) {
            if (args[index] === "-t" && args.length > index) {
                query += ` tier: ${args[index + 1]} `
            }
        }

        const data = await craftsApi();
        const dataCopy = [...data];
        
        let pages = [];

        while (data.crafts.length > 10) {
            tempArray = data.crafts.splice(0, 10);

            let dataText = "";
            tempArray.crafts.forEach(craft => {
                dataText += "- " + craft.name + "\n"
            });

            const embed = {
                "title": `${dataCopy.crafts.length} elements found ♥`,
                "color": 7506394,
                "description": `${dataText}`
            }

            pages.push(embed);
        }

        if (data.crafts.length >= 1) {

            let dataText = "";
            data.crafts.forEach(craft => {
                dataText += "- " + craft.name + "\n"
            });

            const embedn = {
                "title": `${dataCopy.crafts.length} elements found ♥`,
                "color": 7506394,
                "description": `${dataText}`
            }
            pages.push(embed);
        }
        
        paginationEmbed(message, pages);
        //message.channel.send(`${data.crafts.length} elements found :\n${dataText}`);//
    },
    name: "crafts",
    aliases: [],
    category: "new world api",
    description: "Get new world crafts, with filter",
    usage: "crafts",
    arg: false,
}