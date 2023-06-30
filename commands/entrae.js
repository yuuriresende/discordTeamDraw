const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('entrae')
    .setDescription('teu pai vai entrar'),
  async execute(interaction) {
    // Verifica se o membro que executou o comando está em um canal de voz
    if (interaction.member.voice.channel) {
      const voiceChannel = interaction.member.voice.channel;
      try {
        const connection = joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: interaction.guild.id,
          adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        await interaction.reply('Bot entrou no canal de voz!');
      } catch (error) {
        console.error(error);
        await interaction.reply('Ocorreu um erro ao entrar no canal de voz.');
      }
    } else {
      await interaction.reply('Você precisa estar em um canal de voz para executar esse comando.');
    }
  },
};