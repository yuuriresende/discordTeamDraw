const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sorteia')
		.setDescription('sorteamento')
		.addIntegerOption(option =>
			option.setName('times')
			  	.setDescription('Número de times')
			  	.setRequired(true)),
				async execute(interaction) {
					if (interaction.member.voice.channel) {
						const voiceChannel = interaction.member.voice.channel;
						const guild = interaction.guild;
      					const membersInVoiceChannel = guild.members.cache.filter(member => member.voice.channel === voiceChannel); //filtering members who are on same voice channel as you
						const usernames = []
						const times = interaction.options.getInteger('times');
						let usernamesMock = ['oproprio', 'low', 'nery', 'erve', 'coka', 'brunao', 'helin', 'complete'] //mock to test without people

						membersInVoiceChannel.forEach(member => {
							const username = member.user.username;
							console.log(username);
							usernames.push(username)
						});
						//add nicknames who are on same voice channel as you on usernames vector
						if (times <= 0) {
							await interaction.reply('O número de times deve ser maior que zero.'); //verifica se o numero de times é 0
							return;
						  }

						//TODO: change to original vector
						if (usernames2.length % times !== 0) {
						 	await interaction.reply('O número de pessoas não é divisível pelo número de times especificado.'); // verifica se o numero de usuarios é divisivel pelo numero de times
						return;
						
						} else {					
							async function sortearTimes(interaction, times) {
								
								let randomUsers = usernamesMock.sort((a, b) => 0.5 - Math.random());
								//TODO: change to original vector

								const divisoes = Math.ceil(randomUsers.length / times); // calculates the number of people per team
							  
								for (let i = 0; i < randomUsers.length; i += divisoes) {
								  const time = randomUsers.slice(i, i + divisoes); //select users for the actual team
								  const mensagem = `TIME ${Math.ceil(i / divisoes) + 1} = ${time.join(', ')}`; //generates team's message
								  
								  if (i === 0) {
									await interaction.reply(mensagem); // interaction reply
								  } else {
									await interaction.followUp(mensagem); // interaction follow of previous reply
								  }
								  //here is necessary to verify if is the first loop, bc reply methods just works for an interaction reply
								  //its not possible to use the reply method when you are in a loop so it has to be the followUp method that follows the reply interaction
								  
								}
							  }
							
						sortearTimes(interaction, times);
						//execute the randomize&sort algorithm up
						}
						console.log(usernames)
					  } else {
						await interaction.reply('Você precisa estar em um canal de voz para executar esse comando.');
					  }
				  
				}
};