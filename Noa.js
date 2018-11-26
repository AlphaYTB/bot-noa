const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'salut noa') {
    msg.reply('Bonjour, Comment allez-vous ?');
  }
  if (msg.content === 'qui est tu noa ?') {
    msg.reply("Je suis le Bot du serveur, si tu a besoin d'aide, tu peut demander a mes développeurs. Enjoy :)");
  }
  if (msg.content === 'merci noa') {
    msg.reply("De rien, enfin quelqu'un de poli :)")
  }
   if (msg.content === '!help') {  
    msg.reply(`juste à ta droite, tu a des catégories, comme par exemple INFOS, PRONOTE, BREVET etc...
    Dans c'est catégories tu a des "channel" texte et vocal. On reconnait les channels texts grâce à l'icone "#" et les channels vocals avec " :loud_sound: ".
    Si du doit rattraper un cours, rend-toi dans la catégories COURS (TEXTE) et selectionne le channel de la matière que tu veut ou bien, dans la catégories COURS (VOCAL), le vocal de la matière en question pour parler avec les autre du cours que tu a besoin.
    Si tu veut parler du brevet, des notes ou autre, cherche la channel en question.
    Le channel général sert a parler de tous et de n'importe quoi :)
    Le channel actus t'informera des événements à venir...
    Enjoy :)`); 
  } 
   if (msg.content === 'bien et toi ?'){ 
    msg.reply('Super bien! Enjoy ;)'); 
  }
  
});
client.login(process.env.TOKEN);
