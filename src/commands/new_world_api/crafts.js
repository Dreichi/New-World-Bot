const { craftsApi } = require('../../utils/api/new_world');

module.exports = {
    run: async (client, message, args) => {

        let query = ""

        for (let index = 0; index < args.length; index++) {
            if (args[index] === "-t" && args.length > index) {
                query += ` tier: ${args[index + 1]} `
            }
        }

        const data = await craftsApi();
        let dataText = "";
        data.crafts.forEach(craft => {
            dataText += craft.name + "\n"
        }); 
        message.channel.send(`${data.crafts.length} elements found :\n${dataText}`);
    },
    name: "crafts",
    aliases: [],
    category: "new world api",
    description: "Get new world crafts, with filter",
    usage: "crafts",
    arg: false,
} 