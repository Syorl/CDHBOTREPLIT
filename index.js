const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
})

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3




client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)

//////////////////////////////////////////////////////////////////////antilink
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  let confirm = await db.get(`antilink_${message.guild.id}`);
  if (confirm === false || confirm === null) {
    return;
  } else if (confirm === true) {
    if (message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return; // Caso o usuário tenha permissão de ADM, o bot vai permitir que o mesmo envie links
    if (message.content.toLocaleLowerCase().includes("http")) {
      message.delete()
      message.channel.send(`${message.author} Não envie links no servidor!`)
    }

  }
})

client.on("interactionCreate", (interaction) => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId === "painel_ticket") {
      let opc = interaction.values[0]
      if (opc === "opc1") {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 1.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      } else if (opc === "opc2") {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 2.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      } else if (opc === "opc3") {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 3.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      }
    }
  } else if (interaction.isButton()) {
    if (interaction.customId === "fechar_ticket") {
      interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos...`)
      setTimeout ( () => {
        try { 
          interaction.channel.delete()
        } catch (e) {
          return;
        }
      }, 5000)
    }
  }
})

////////////////////////////////////////////////////////////////////////// BOT em call sempre(vai funcionar mesmo sem colocar o id)

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {
  let canal = client.channels.cache.get("") // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

  } catch(e) {
    console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)
  }

})

///////////////////////////////////////////////////////////////BOAS-VINDAS

client.on("guildMemberAdd", (member) => {
  let canal_logs = "1068518300109254696";// Coloque o ID do canal de texto
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
  .setColor("Pink")
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setTitle("👋 Boas Vindas!")
  .setDescription(`> Olá ${member}!\nSeja Bem-Vindo(a) ao servidor \`${member.guild.name}\`!\nAtualmente estamos com \`${member.guild.memberCount}\` membros.`);

  member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
})

/////////////////////////////////////////////////////////////////SAÍDA

client.on("guildMemberRemove", (member) => {
  let canal_logs = "1068518300109254696"; // Coloque o ID do canal de texto
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
  .setColor("Grey")
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setTitle(`Adeus ${member.user.username}....`)
  .setDescription(`> O usuário ${member} saiu do servidor!\n> 😓 Espero que retorne um dia.\n> Nos sobrou apenas \`${member.guild.memberCount}\` membros.`);

  member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content". 
})

///////////////////////////////////////////VERIFICAÇÃO

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "verificar") {
      let role_id = await db.get(`cargo_verificação_${interaction.guild.id}`);
      let role = interaction.guild.roles.cache.get(role_id);
      if (!role) return;
      interaction.member.roles.add(role.id)
      interaction.reply({ content: `Ola **${interaction.user.username}**, você foi verificado!`, ephemeral: true })
    }
  }
})

/////////////////////////////////////////////////Ticket config

const discord = require("discord.js")

module.exports = {
  name: "tickets", // Coloque o nome do comando
  description: "Ative o sistema de ticket no servidor.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "canal",
        description: "Mencione um canal de texto.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply(`Olá ${interaction.user}, você não possui permissão para utilizar este comando.`)
    } else {
        let canal = interaction.options.getChannel("canal");
        if (!canal) canal = interaction.channel;

        let embed_ephemeral = new Discord.EmbedBuilder()
        .setColor("Grey")
        .setDescription(`Olá ${interaction.user}, o sistema foi adicionado em ${canal} com sucesso.`);

        let emebd_tickets = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true}) })
        .setDescription(`> Clique no botão abaixo para abrir um ticket!`);

        let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("tickets_basico")
            .setEmoji("🎫")
            .setStyle(Discord.ButtonStyle.Primary)
        );

        interaction.reply({ embeds: [embed_ephemeral], ephemeral: true }).then( () => {
            canal.send({ embeds: [emebd_tickets], components: [botao] })
        })
    }


    
  }
}

////////////////////////////////////////////////////////AFK

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (await db.get(`modo_afk_${message.author.id}`) === true) {
    message.reply(`Olá ${message.author}, seu modo AFK foi desativado!`)
    await db.delete(`modo_afk_${message.author.id}`)
  }

  let afk_user = message.mentions.members.first()
  if (!afk_user) return;

  if (afk_user) {
  let afk_mode = await db.get(`modo_afk_${afk_user.id}`);
  if (afk_mode === true) {
    let afk_motivo = await db.get(`motivo_afk_${afk_user.id}`);
    message.reply(`Olá ${message.author}, o usuário **${afk_user.user.username}** está com o modo AFK ativado pelo motivo: \`${afk_motivo}\``)
  } else {
    return;
  }
  }
});

///////////////////////////////////////////////////////////autorole

client.on("guildMemberAdd", (member) => {
  let cargo_autorole = member.guild.roles.cache.get("") // Coloque o ID do cargo
  if (!cargo_autorole) return console.log("❌ O AUTOROLE não está configurado.")

  member.roles.add(cargo_autorole.id).catch(err => {
    console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
  })
})

///////////////////////////////////////////////////////////Menção(caso o bot seja pingado)

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  let mencoes = [`<@${client.user.id}>`, `<@!${client.user.id}>`]

  mencoes.forEach(element => {
    if (message.content === element) {

      //(message.content.includes(element))

      let embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynaimc: true }) })
      .setDescription(`💕 Olá ${message.author}, utilize \`/help\` para ver meus comandos!`)
      
      message.reply({ embeds: [embed] })
    }
  })

})

//////////////////////////////////////////////////////////////Eventos

const fs = require('fs');

fs.readdir('./Events', (err, file) => {
  file.forEach(event => {
    require(`./Events/${event}`)
  })
})

///////////////////////////////////////////////////////////////