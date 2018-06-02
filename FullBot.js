const Discord = require('discord.js');
const client = new Discord.Client();
var blacklisted = ["discord.gg", "discord.gg/", "https://discord.gg"];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === "*help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: General commands**","** **")
      .addField("***ping :stopwatch:**","** Speed your connection**")
      .addField("***id :chart_with_downwards_trend:**","**View the speed of the bot connection**")
      .addField("***avatar :camping:**","** Pictures of the chosen person**")
      .addField("***roll :1234:**","**Lots of 1 - 100**")
      .addField("***server :recycle:**","**For server information**")
      .addField("***roles :medal: **","**Clear chat conversations**")
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
client.on("guildDelete", guild => {
    let str = "<@!Owner ID>";
    let id = str.replace(/[<@!>]/g, '');
    let embed = new Discord.RichEmbed()
    .setDescription("Server Removed")
    .setColor("#444444")
    .setTimestamp()
    .addField('Server', `${guild.name}`)
    .addField('Owner', `${guild.owner.user.tag}`)
    .setFooter(`${bot.guilds.size} Servers`);
  
    bot.fetchUser(id)
    .then(user => {user.send(embed)});
  });
//
client.on('message', message => {
    if (message.content === "*help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: Management orders**","** **")
      .addField("***bc  :mega:**","**For Broadcast**")
      .addField("***clear :octagonal_sign:**","**Clear Chat**")
      .addField("***kick  :outbox_tray:**","**Expulsion**")
      .addField("***ban  :no_entry:**","**Ban members**")
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', msg => {
    if (msg.content === 'hello') {
      msg.reply('hi there');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('hi there');
    }
  });
//
client.on('message', message => {
    if (message.content === "*help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** Programmer bot :wrench: **","**@!     ThaWither#1360   **")
.setColor('RANDOM')
   message.channel.sendEmbed(embed);
    }
});
//
client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
//,  , 
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`**Welcome**, ${member} , **to the ExibelMC Discord!** `);
  });
//Welcome @Quack to Exibel I $3,500 F TOP! Make sure to Invite your friends here :ok_hand: 
client.on('message', message => {
if (message.content.startsWith('*ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
var prefix = "*";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);


    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
//
var prefix = "*";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var Owner = message.guild.owner
        var Members = message.guild.memberCount
        var id = message.guild.id
        var Countryserver = message.guild.region
        var Rooms = message.guild.channels.size
        var Ranks = message.guild.roles
        var Work = message.guild.createdAt
        var Room = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('Server Name', servername)
        .addField('Members of the server', Members)
        .addField('Server rooms', Rooms)
        .addField('Basic Chat Room', Room)
        .addField('Server owner', Owner)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
//
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **You do not have permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | Done",
        color: 0x06DF00,
        description: "Messages successfully cleared",
        footer: {
          text: "Discord.js Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('ready',  () => {
  console.log('By : ThaWither');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '*bc') {
   if (!message.member.hasPermission("ADMINISTRATOR"))  
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('Sent by :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("Account information")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("Account Name", `${message.author.username}`)
  .addField('Private Account Code', message.author.discriminator)
  .addField('Bot', message.author.bot)
  .addField("date of registration", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply(`** Prevents posting of links ! **`)
    message.delete()
    
    }
});

client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Discord.js Bot- Script By : ThaWither`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ThaWither ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("Exibel MC")
client.user.setStatus("Online")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**Life in all that is always standing in the middle between the balance of meaning and against him of love and hatred and right and wrong and justice and injusticr**.",
  "**To live you have to master the art of professional neglect**.",
  "**Do not grieve for those who feel that you have been foolish in the face of his insolence**.",
  "**There are those who dream of success and there are those who wake up early to achieve it**.",
  "**To treat your own pain is power**.", 
  "**Everyone hears what you say and friends listen to what you say and best friends listen to what your scout has hidden**.", 
  "**Equestrian time is over, horses are not extinct, but cavalry are extinct**.", 
  "**To be a wise man is better than to be ignorant**.", 
  "**Sterile discussions do not give rise to ideas**.", 
  "**We write what we can not say and what we want to be**.", 
  "**We write what we can not say and what we want to be**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("*Reflections")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Desert Bot' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
   if (message.content.startsWith("id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
//
client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
})
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Subtract a certain number from which to withdraw**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
























client.login('NDUxNTUzMTE3MjQzMTc5MDI5.DfJgfQ.Ri0ZWl25BF8TDLtNRjYqH_u-lMI');