const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Função de pausa

async function overflowCommand(bluxmd, sender, isGroup, isNsfw, isPremium, info, reply, reagir) {
  // Reage com 🌐 após um pequeno delay
  setTimeout(() => { reagir(sender, "🌐"); }, 300);
  
  // Responde com uma mensagem
  reply("*Olha o PV para você assistir*");

  // Link do vídeo
  const videoLink = "https://files.catbox.moe/kqlray.mp4";

  // Envia o vídeo com a mensagem
  await bluxmd.sendMessage(
    sender,
    {
      video: { url: videoLink }, // Link do vídeo
      caption: 'Assista episódios completos de Overflow Dublado 🎥🎬😎'
    },
    { quoted: info }
  );
}

// Exporta a função para uso no index.js
module.exports = { overflowCommand };