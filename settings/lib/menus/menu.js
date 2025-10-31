const menu2 = (prefix, NomeDoBot, NickDono, sender) => {
    return `
╭━━━❰🔥 𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒 🔥❱━━━╮
┃ 🤖 Bot: ${NomeDoBot}
┃ 👤 Usuário: @${sender.split("@")[0]}
┃ 👑 Dono: ${NickDono}
╰━━━━━━━━━━━━━━━━━━╯

 🎵𝙈𝙀𝙉𝙐 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇🎵
┃│⚙️ ${prefix}configurar-bot - Configurar o Bot
┃│👑 ${prefix}menudono - Menu do Dono     
┃│📄 ${prefix}menuconsultas - Menu Puxadas
┃│🌟 ${prefix}menuadm - Menu Admin
┃│🔞 ${prefix}menu18 - Menu 18+
┃│🎶 ${prefix}playlist - Playlist  
┃│⚙️ ${prefix}alteradores
┃│🚀 ${prefix}startvava7
┃│💎 ${prefix}menupremium - Menu Premium
┃│🎨 ${prefix}logos - Criar Logos 
┃│🎭 ${prefix}brincadeiras - Brincadeiras
┃│🏆 ${prefix}menurpg - Menu rpg  
╰━━━━━━━━━━━━━━━━━━━╯

🎯 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌 💫
┃│ℹ️ ${prefix}infobot - Info do Bot         
┃│🗣️ ${prefix}idiomas - GTTS 
┃│🛑 ${prefix}bug - Relatar Erro 
┃│👑 ${prefix}infodono - Info do Dono
┃│💡 ${prefix}sugestao - Sugerir 
┃│⭐ ${prefix}avalie - Avaliar Bot 
┃│🎉 ${prefix}infowelcome - Info Boas-Vindas
╰━━━━━━━━━━━━━━━━━━━╯

  🎯 𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎 🔍
┃│👀 ${prefix}rvisu
┃│😆 ${prefix}meme
┃│📶 ${prefix}ping - Velocidade/Up   
┃│🏆 ${prefix}rankativo - Ranking 
┃│📌 ${prefix}checkativo - Marcar Ativos
╰━━━━━━━━━━━━━━━━━━━╯

  🎬 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 🎵
┃│🔍 ${prefix}threads - (link)
┃│🔍 ${prefix}threadsmp3 - (link)
┃│🔍 ${prefix}sound_clouds (link)
┃│🔍 ${prefix}sc - (nome)
┃│🔍 ${prefix}sc2 - (nome)
┃│🔍 ${prefix}sound_clouds - (link)
┃│🔍 ${prefix}shazam  - Identificar Áudio
┃│🎼 ${prefix}play - Tocar Música
┃│🎧 ${prefix}play2 - Tocar Música 2
┃│🎧 ${prefix}play3 - Tocar Música 3
┃│🎧 ${prefix}play4 - Tocar Música 4
┃│🎧 ${prefix}play5 - Tocar Música 5
┃│🎵 ${prefix}ytmp3 - Baixar Áudio
┃│🎥 ${prefix}ytmp4 - Baixar Vídeo
┃│📄 ${prefix}ytdoc - Baixar Documento
┃│📄 ${prefix}ytmp4doc  - Baixar Documento
┃│📺 ${prefix}playvid - Tocar Vídeo
┃│📺 ${prefix}playvid2  - Tocar Vídeo
┃│📺 ${prefix}playvid3 - Tocar Vídeo
┃│📱 ${prefix}instavideo - Baixar Video 
┃│📱 ${prefix}instaaudio - Baixar Áudio
┃│📹 ${prefix}ttkmp4 (link)
┃│🎵 ${prefix}ttkmp3 (link)
┃│📹 ${prefix}tiktokvideo - (link)
┃│📹 ${prefix}tiktokvideo2 - (nome)
┃│🎵 ${prefix}tiktokaudio - (link)
┃│🎵 ${prefix}tiktokaudio2 - (nome)
╰━━━━━━━━━━━━━━━━━━━╯

 ⚡🔎 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 🧩
┃│🔗 ${prefix}gerarlink - Gerar Link 
┃│🖼️ ${prefix}upload - Upload de Imagem
┃│🌦️ ${prefix}clima - Previsão do Tempo
┃│📚 ${prefix}book - Buscar Livro 
┃│🎬 ${prefix}movie - Buscar Filme
┃│📌 ${prefix}pinterest - Pinterest
┃│📌 ${prefix}Pintemp3 - baixar áudio  
┃│📌 ${prefix}Pintemp4 - baixa vídeo 
╰━━━━━━━━━━━━━━━━━━━╯

  🤖 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐈𝐀 ⚙
┃│🤖 ${prefix}gpt
┃│🤖 ${prefix}llama-ai
┃│🎙️ ${prefix}totext - Áudio para Texto
╰━━━━━━━━━━━━━━━━━━━╯

 ⚡📸 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀 🌟
┃│📝 ${prefix}ttp - Criar TTP        
┃│📝 ${prefix}mixemoji  
┃│📝 ${prefix}attp              
┃│🖼️ ${prefix}fsticker- Criar Sticker   
┃│🪄 ${prefix}sfundo - Marcar Foto
┃│📷 ${prefix}sticker - Marcar Foto 
┃│🔄 ${prefix}toimg - Converter Sticker
┃│🎭 ${prefix}figuemoji - Figurinhas de Emoji
┃│🎮 ${prefix}figuroblox - Figurinhas de Roblox
┃│😂 ${prefix}figuengracadas - Figurinhas Engraçadas
┃│🐶 ${prefix}figuanimais - Figurinhas de Animais
┃│🎨 ${prefix}figudesenho - Figurinhas de Desenho 
┃│👶 ${prefix}figubebe - Figurinhas de Bebês
┃│🎌 ${prefix}figuanime - Figurinhas de Anime
┃│💐 ${prefix}figuflork - Figurinhas de Flork 
┃│🎭 ${prefix}figurinhas - Diversas Figurinhas
╰━━━━━━━━━━━━━━━━━━━╯

 ⚡🎲 𝐂𝐌𝐃𝐒-𝐃𝐄-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎 🎲
┃│🎭${prefix}baixapp - nome apk
┃│🪑 ${prefix}sentar - Comando Sentar
┃│🔊 ${prefix}gtts - Texto para Fala
┃│🏷️ ${prefix}tagme - Marcar Usuário
┃│💘 ${prefix}cantadas - Gerar Cantadas
┃│🗨️ ${prefix}simi - Falar com Simi
┃│🆔 ${prefix}perfil - Ver Perfil
┃│🧮 ${prefix}calcular - Calcular Expressão
┃│📝 ${prefix}fakechat - Conversar Fake
┃│⚖️ ${prefix}obesidade - Calcular IMC
┃│📆 ${prefix}contardias - Contar Dias
┃│📩 ${prefix}ptvmsg - Mensagem Privada
┃│📩 ${prefix}megadl - Baixar arquivo
┃│🔍 ${prefix}cep - Buscar CEP
┃│🔍 ${prefix}cep2 - Buscar CEP Detalhado
╰━━━━━━━━━━━━━━━━━━━╯
​
`;
};

module.exports = { menu2 };