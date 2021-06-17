const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

  module.exports = {
    name: "remove",
    description: `Xóa bài hát tương ứng khỏi hàng đợi.`,
    usage: "[number]",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["rm"],

    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.players.get(message.guild.id);
    const song = player.queue.slice(args[0] - 1, 1); 
    if (!player) return client.sendTime(message.channel, "❌ | **Không có bài nào đang phát cả.**");
    if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Bạn phải ở trong kênh thoại để dùng lệnh.**");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, "❌ | **Bạn phải ở cùng kênh thoại với tôi để sử dụng lệnh !**");
        
    if (!player.queue || !player.queue.length || player.queue.length === 0)
      return message.channel.send("Không có bài hát nào để loại bỏ.");
    let rm = new MessageEmbed()
      .setDescription(`✅ **|** Loại bỏ bài số **\`${Number(args[0])}\`** khỏi hàng đợi !`)
      .setColor("GREEN")
      if (isNaN(args[0]))rm.setDescription(`**Đã dùng - **${client.config.prefix}\`remove [track]\``);
      if (args[0] > player.queue.length)
      rm.setDescription(`Hàng đợi chỉ có ${player.queue.length} bài hát !`);
    await message.channel.send(rm);
    player.queue.remove(Number(args[0]) - 1);
  },

  SlashCommand: {
    options: [
      {
          name: "track",
          value: "[track]",
          type: 4,
          required: true,
          description: "Remove a song from the queue",
      },
  ],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
    run: async (client, interaction, args, { GuildDB }) => {
      let player = await client.Manager.get(interaction.guild_id);
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);
      const song = player.queue.slice(args[0] - 1, 1);
      if (!player) return client.sendTime(interaction, "❌ | **Nothing is playing right now...**");
      if (!member.voice.channel) return client.sendTime(interaction, "❌ | **You must be in a voice channel to use this command.**");
      if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, ":x: | **You must be in the same voice channel as me to use this command!**");
  
      if (!player.queue || !player.queue.length || player.queue.length === 0)
      return client.sendTime("❌ | **Nothing is playing right now...**");
    let rm = new MessageEmbed()
      .setDescription(`✅ **|** Removed track **\`${Number(args[0])}\`** from the queue!`)
      .setColor("GREEN")
      if (isNaN(args[0]))rm.setDescription(`Usage: ${client.config.prefix}\`remove [track]\``);
      if (args[0] > player.queue.length)
      rm.setDescription(`The queue has only ${player.queue.length}!`);
    await interaction.send(rm);
      player.queue.remove(Number(args[0]) - 1);
    },
  }
};