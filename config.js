module.exports = {
  Admins: ["776684345938673705"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "chm", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/D6CtHujqYN", //Support Server Link
  Token: process.env.Token || "ODUyMDcyODQxNTMyNDA3ODA4.YMBgrA.__2hzUYUQFcI4_6O7wknmdnu7Ss", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "852072841532407808", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "G69t4P-xppVU4-rteymRAPq0p9OOT9s8", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Nemo is cute", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/icons/812680854316646430/ad70e0859d11e29df32d6181ab34452c.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link", 
    port: 80,
    pass: "youshallnotpass", 
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "fb295f9a02d74bda8fa5c4572c38f760", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "fbbab0ad3f104c0d895a090fc6714248", //Spotify Client Secret
  },
};
