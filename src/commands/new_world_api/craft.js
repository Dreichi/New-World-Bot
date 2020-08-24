const Discord = require('discord.js');
const { craftApi } = require('../../utils/api/new_world')

module.exports = {
	run: async (client, message, args) => {
		let name = args.join(" ");
		name = name.charAt(0).toUpperCase();
		const data = await craftApi(name);
		const { tier, ingredients, level, station } = data.craft;
		let ingredientString = ""
		ingredients.forEach(ingredient => {
			ingredientString += "- " + ingredient.quantity + " " + ingredient.name + "\n"
		});


		const embed = {
			"title": `${name}`,
			"description": " ",
			"color": 7506394,
			"fields": [{
					"name": "Tier",
					"value": `${tier}`
				},
				{
					"name": "Materials",
					"value": `${ingredientString}`
				},
				{
					"name": "Job level",
					"value": `${level}`,
					"inline": true
				},
				{
					"name": "Station",
					"value": `${station.name} level ${station.level}`,
					"inline": true
				}
			],
			"author": {
				"name": "New World Bot"
			},
			"footer": {
				"text": "Api by Redbow26 and Louanyaa"
			}
		}
		message.channel.send({
			embed: embed
		});
	},
	name: "craft",
	aliases: ['c'],
	category: "new world api",
	description: "Get new world specific new world craft",
	usage: "craft",
	arg: true,
}