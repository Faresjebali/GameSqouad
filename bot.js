const Discord = require('discord.js');
const client = new Discord.Client();
var blacklisted = ["discord.gg", "discord.gg/", "https://discord.gg"];
const slowmode_mentions = new Map();
const slowmode_links = new Map();
const slowmode_attachments = new Map();
const ratelimit = 7500; // within 7.5 seconds
const logChannel = "452291868865200159"



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('452242905969590283').roles.find('name', 'RainBow').edit({color: 'RANDOM'}) 
    },12000);
});


client.on('message', message => {
    if (message.content === "*help") {
 var embedhelpmember = new Discord.RichEmbed()    
      .setTitle("**List of Commands**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
            .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
            .addField(" - ping", "Tests your ping (Correct usage: *ping)")
            .addField(" - avatar","It will get your Discord Picture")
            .addField(" -acc","Get Your Account information")
            .addField(" -Mcskin","Shows your minecraft skin")
     .setFooter("ThaWither#1360") // sets a embed box to the var embedhelpadmin
 var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**List of Admin Commands**\n") // sets the title
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])")
            .addField("- bc ","For Broadcast all your Server")
            .addField(" -clear","Clear Chat")  
            .addField(" -staffsquad","Special For New Recruitments")
            .setColor(0xFF0000) // sets a color
            .setFooter("Ooo, an admin!")
message.channel.send(embedhelpmember);
      if(message.member.roles.some(r=>["🔨StaffSquad🔨"].includes(r.name)) ) return message.channel.send(embedhelpadmin);// sends the embed box "embedhelpmember" to the chatif
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
    if (message.author.bot) return;
    if(message.content == '*member') {
    const embed = new Discord.RichEmbed()
    .setDescription("Status of members :battery:")
.addField(`💚 Online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ DND:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 Idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)  
.addField(`🖤 Offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',   true) 
.addField(`💙   All:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

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
      .addField("** Programmer bot :wrench: **","**@ThaWither#1360   **")
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
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`New member`)
    .setDescription(`Welcome to the GameSquad`)
    .addField(' :bust_in_silhouette:  You re member number',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('GameSquad', 'https://cdn.discordapp.com/avatars/452310050602745858/9024f7baf1e2c89cee49da2f97c3812e.png?size=2048')

var channel =member.guild.channels.find('name', '🙌🏽-welcome')
if (!channel) return;
channel.send({embed : embed});
});
client.on('message',message =>{
  if (message.content === "*staffsquad") {
        message.channel.send("Well Congratz,You are Naw a part of our little Communitie But im sure with you we can Increase this and make it Bigger!, idk if u noticed but We **Gamesquad Owners** and Other Member acceepted You To be a part of our staff team , you can be the key to let tis little communitie get bigger! So at the End Wish you a good stay at GameSquad  and wish you Be the person that ill Improve this communitie :smile:,Little Note at Every Begin U will be under a Testing  For 2days To see if you desreve to be a part of staffsquad or no , Wish You Good Luck        ~regards Owners")
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
var prefix = "*";
client.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {

        let args = message.content.split(" ").slice(1)
        let text = args.join(' ').replace('$userid', message.author.id).replace('server-name', message.guild.name)
        message.channel.send(text)
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
client.on('message', message => {
   if(!message.channel.guild) return;
  var prefix = "*"
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
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
     if (message.content === "*acc") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("Account information")
               .setFooter(`ThaWither#1360`, '')
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
if(message.content.startsWith(prefix + 'info')) {
        let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name:", client.user.username)
    .addField("Created at:","**Thu May 17 2018**")
     .addField("Server Owner:","**BarisE#5634**")
	.addField("Server Owner:","**ThaWither#1360**")
    .addField("Botᴰᵉᵛ:","**ThaWither#1360**" )
    .addField("Support us:","https://www.paypal.me/ThaWither");
        message.channel.sendEmbed(botembed);
    }

});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Discord.js Bot- Script By : ThaWither`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ThaWither ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("GameSquad || *help")
client.user.setStatus("online")
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
client.on("message", message => {
    var prefix = "*"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "MCskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "📄-logs") 
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  //By S Codes
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "📄-logs")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

client.on("channelCreate",  cc => {
  const channel = cc.guild.channels.find("name", "📄-logs")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(cc.guild.name)
  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

   client.on("deleteChannel",  dc => {
  const channel = dc.guild.channels.find("name", "📄-logs")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  
  
  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', '📄-logs');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **Edit message
       Send it <@${message.author.id}>                                                                                                                         Changed in Chat** <#${message.channel.id}>\n\nBefor Editing:\n \`${message.cleanContent}\`\n\nAfter Editing:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', '📄-logs');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **Delete message**
**Send it <@${message.author.id}>                                                                                                                        Deleted in Chat** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});
client.on("message", message => {

	if (message.content.startsWith("!ping")) {
		let startTime = Date.now();
		message.channel.send("Ping...").then(newMessage => {
			let endTime = Date.now();
			newMessage.edit("Pong! Took `" + Math.round(endTime - startTime) + "ms`!");
		});
	}

	function log(logmessage) {
		if (message.guild.channels.has(logChannel)) {
			message.guild.channels.get(logChannel).send({ embed: logmessage}).then().catch(err => console.log(err));
		}
	}

	// set the max mentions/links/attachments that are allowed
	let banLevel = {
		"mentions": 10,
		"links": 10,
		"attachments": 10
	};

	// Ignore bots, DMs, Webhooks, if this bot has no perms, and Mods
	if (message.author.bot || !message.guild || !message.member || !message.guild.member(client.user).hasPermission("BAN_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES")) return;

	// Ignore if 1 mention and it's a bot (bot interaction)
	if (message.mentions.users.size == 1 && message.mentions.users.first().bot) return;

	// If there is no trace of the author in the slowmode map, add them.
	let entry_mentions = slowmode_mentions.get(message.author.id);
	let entry_links = slowmode_links.get(message.author.id);
	let entry_attachments = slowmode_attachments.get(message.author.id);

	if (!entry_mentions) {
		entry_mentions = 0;
		slowmode_mentions.set(message.author.id, entry_mentions);
	}
	if (!entry_links) {
		entry_links = 0;
		slowmode_links.set(message.author.id, entry_links);
	}
	if (!entry_attachments) {
		entry_attachments = 0;
		slowmode_attachments.set(message.author.id, entry_attachments);
	}

	// Count the unique user and roles mentions, links and attachments
	entry_mentions += message.mentions.users.size + message.mentions.roles.size;
	entry_links += message.embeds.length;
	entry_attachments += message.attachments.size;
	// Set all the amounts in the slowmode maps
	slowmode_mentions.set(message.author.id, entry_mentions);
	slowmode_links.set(message.author.id, entry_links);
	slowmode_attachments.set(message.author.id, entry_attachments);

	// If the total number of links in the last ratelimit is above the server ban level, ban user
	if (entry_links > banLevel.links) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`link spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many links (${entry_links}x)`));
			slowmode_links.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_links -= message.embeds.length;
			if(entry_links <= 0) slowmode_links.delete(message.author.id);
		}, ratelimit);
	}

	if (entry_mentions > banLevel.mentions) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`mention spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Mentioning too many users (${entry_mentions}x)`));
			slowmode_mentions.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_mentions -= message.mentions.users.size + message.mentions.roles.size;
			if(entry_mentions <= 0) slowmode_mentions.delete(message.author.id);
		}, ratelimit);
	}

	if (entry_attachments > banLevel.attachments) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`image spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many images (${entry_attachments}x)`));
			slowmode_attachments.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_attachments -= message.attachments.size;
			if(entry_attachments <= 0) slowmode_attachments.delete(message.author.id);
		}, ratelimit);
	}

});

process.on("unhandledRejection", err => {
	console.error("Uncaught Promise Error: \n" + err.stack);
});

















client.login('NDUyMzEwMDUwNjAyNzQ1ODU4.DfOebw.LRgLqyrjEV8BGIm24IU7_pcqCQk');
