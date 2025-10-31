// Index.js

const fs = require('fs');
const path = require('path');

// Função para processar a cobrança
async function processarCobrança(args, from, sasah, bluxmd, enviar, SoDono, pushname) {
  if (!SoDono) {
    return bluxmd.sendMessage(from, { text: enviar.msg.donosmt }, { quoted: sasah });
  }

  try {
    const links = {
      logocapa3: 'https://files.catbox.moe/g7fho0.jpeg' // Link da imagem
    };

    // Extrair argumentos
    const valor = args[0];
    const numero = args[1].replace(/[^\d]/g, '');
    const mensagem = args[2];
    const prazo = args[3];
    const cobrador = pushname || 'Um cobrador';
    const chavePix = '8b0677f9-58b4-42d6-b75b-ad3069ede66e';
    const cobrancasDir = path.join(__dirname, 'cobrancas');
    const cobrancasPath = path.join(cobrancasDir, 'cobrancaspendentes.json');

    // Criar a pasta 'cobrancas' caso não exista
    if (!fs.existsSync(cobrancasDir)) {
      fs.mkdirSync(cobrancasDir);
    }

    const mensagemCobrança = `💰 *Cobrança* \n\n${cobrador} lhe está enviando uma cobrança de R$${valor}.\n\n*Mensagem do cobrador:* ${mensagem}`;
    const numeroFormatado = numero && numero.length >= 10 ? `${numero}@s.whatsapp.net` : null;

    if (!numeroFormatado) {
      return bluxmd.sendMessage(from, { text: `❌ O número fornecido (${numero}) não é válido.` }, { quoted: sasah });
    }

    // Função para calcular o prazo em milissegundos
    function calcularPrazoEmMilissegundos(prazo) {
      const regex = /(\d+)([smhd])/g;
      let totalMilliseconds = 0;
      prazo.replace(regex, (_, valor, unidade) => {
        const unidades = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
        totalMilliseconds += parseInt(valor) * (unidades[unidade] || 0);
      });
      return totalMilliseconds;
    }

    // Função para formatar a data
    function formatarData(data) {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      const horas = String(data.getHours()).padStart(2, '0');
      const minutos = String(data.getMinutes()).padStart(2, '0');
      return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
    }

    // Função para carregar cobranças pendentes
    function carregarCobrancasPendentes() {
      if (fs.existsSync(cobrancasPath)) {
        const data = fs.readFileSync(cobrancasPath, 'utf8');
        return JSON.parse(data);
      }
      return [];
    }

    // Função para salvar cobranças pendentes
    function salvarCobrancasPendentes(cobrancas) {
      try {
        fs.writeFileSync(cobrancasPath, JSON.stringify(cobrancas, null, 2));
      } catch (error) {
        console.error('Erro ao salvar cobranças:', error.message);
      }
    }

    // Função para remover cobrança do JSON
    function removerCobranca(cobrancaParaRemover) {
      const cobrancasPendentes = carregarCobrancasPendentes();
      const novasCobrancas = cobrancasPendentes.filter(
        c => c.numeroFormatado !== cobrancaParaRemover.numeroFormatado || c.dataAgendamento !== cobrancaParaRemover.dataAgendamento
      );
      salvarCobrancasPendentes(novasCobrancas);
    }

    // Função para agendar a cobrança
    async function agendarCobranca(cobranca) {
      const { valor, numeroFormatado, mensagemCobrança, prazo, cobrador, dataAgendamento } = cobranca;
      const timeToWait = calcularPrazoEmMilissegundos(prazo);

      setTimeout(async () => {
        try {
          await bluxmd.sendMessage(numeroFormatado, {
            image: { url: links.logocapa3 },
            caption: mensagemCobrança
          }, { quoted: sasah });
          await bluxmd.sendMessage(numeroFormatado, { text: `🔑 Aqui está sua chave Pix:\n\n*${chavePix}*` }, { quoted: sasah });
          await bluxmd.sendMessage(numeroFormatado, {
            text: `> *Nome*: BLUXZINHO\n\n> *Descrição*: Criador Ofc BLUX BOT\n\n> 🌟 *O contato dele, caso você precise de ajuda:*\nhttps://wa.me/558189728863\n\n> 🎥 *Inscreva-se no meu canal para não perder nenhuma novidade:*\nhttps://youtube.com/@bluxzinho\n\n> 🌐 *Minha API:* https://bluxzinho.shop\n\n> 🌐 *Meu site:* https://linktr.ee/bluxzinho.online`
          }, { quoted: sasah });
          await bluxmd.sendMessage(from, { text: `✅ A cobrança de R$${valor} foi enviada para o número ${numeroFormatado}.\nMensagem: ${mensagemCobrança}` }, { quoted: sasah });
          removerCobranca(cobranca);
        } catch (error) {
          console.log(`Erro ao enviar cobrança programada: ${error.message}`);
        }
      }, timeToWait);
    }

    // Agendamento da cobrança
    const dataAgendamento = formatarData(new Date());
    const cobrancasPendentes = carregarCobrancasPendentes();
    const novaCobranca = {
      valor,
      numeroFormatado,
      mensagemCobrança,
      prazo,
      cobrador,
      dataAgendamento
    };
    cobrancasPendentes.push(novaCobranca);
    salvarCobrancasPendentes(cobrancasPendentes);
    agendarCobranca(novaCobranca);

    // Mensagem de confirmação ao solicitante
    await bluxmd.sendMessage(from, {
      text: `✅ A cobrança de R$${valor} foi agendada para o número ${numero}.\nEla será enviada após ${prazo}.\n\nData e Hora de Agendamento: ${dataAgendamento}`
    }, { quoted: sasah });

  } catch (error) {
    console.error('Erro na cobrança:', error.message);
    await bluxmd.sendMessage(from, { text: '❌ Ocorreu um erro ao agendar a cobrança. Por favor, tente novamente.' }, { quoted: sasah });
  }
}

module.exports = { processarCobrança };