exports.listLanguages = (prefix) => {
return `Você pode ver a lista de idiomas disponíveis em para usar no tradutor ou gtts aqui: https://cloud.google.com/translate/docs/languages
–
• Exemplificando o uso das funções dos comandos *gtts e tradutor*:
–
↳ *Comando:* ${prefix}gtts pt BLUX
*[pt]* - O idioma, o sotaque que ele(a) irá falar no áudio.
*[BLUX]* - Vai ser o que será o texto ou frase falado por ele(a).
–
↳ *Comando:* ${prefix}tradutor pt|love you
*[pt]* - O idioma que vai ser realizado a tradução da palavra ou texto.
*[love you]* - O texto/palavra que ele(a) vai fazer a tradução para o idioma.`
}

exports.bemvindo = (prefix) => {
return `Este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado, o bemvindo2 tem essa função também.
–
• As diferenças entre os bem vindos é que o bemvindo tem foto e o bemvindo2 não contém foto em si somente a mensagem.
–
• Para desativar ou ativar o *bemvindo ou bemvindo2*, use os números 0 ou 1. 
    • Exemplo de como ativar e desativar o recurso em seu grupo: 
        • *Ativando o recurso:* ${prefix}bemvindo 1 ou ${prefix}bemvindo2 1, ative somente um dos dois para evitar flood em seu grupo.
        • *Desativando o recurso:* ${prefix}bemvindo 0 ou ${prefix}bemvindo2 0, caso um dos 2 esteja ativado.
–
• Para realizar a troca do fundo da imagem do bem vindo, é só mandar uma foto no WhatsApp, retangular e marcar ela com o comando *${prefix}fundobemvindo* ou se quer trocar a do saiu, use *${prefix}fundosaiu*
       • *Observação:* Os comandos para mudar o fundo é somente disponibilizado o uso ao proprietário(s) do bot.
–
• *Parâmetros usados que podem ser usados para personalizar sua mensagem:*
*#hora#* => Com essa definição inserida em seu argumento, irá mostrar a hora no momento exato que foi realizada a entrada ou saída do integrante do grupo.
*#nomedogp#* => Usada para mostrar o nome do grupo em seu texto de bem-vindo.
*#numerodele#* => Tem a função de mostrar o número do integrante que entrou ou saiu do grupo.
*#prefixo#* => Vai aparecer qual o símbolo que você está utilizando no bot, para fazer ele funcionar.
*#descrição#* => Com essa definição irá mostrar a descrição do grupo ou regras como você preferir chamar.
–
Para definir uma legenda de quando um integrante sair ou entrar em seu grupo, veja os exemplos baixo:
• Adicionar a legenda ou mensagem para dar as saudações ao novo integrante de forma personalizada: 
    • Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendabv sua mensagem..*
    • Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendabv2 sua mensagem..*
• Definir uma legenda ou mensagem para a saída de um integrante do grupo:
    • Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendasaiu sua mensagem..*
    • Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendasaiu2 sua mensagem..*`
}

exports.infoOwner = (prefix, NickDono, numerodn, NomeDoBot, sender) => {
return `Olá @${sender.split("@")[0]}, aqui está as informações sobre meu dono:
–
• Número do proprietário: wa.me/${numerodn}
• Proprietário: ${NickDono}`
}

exports.tutorialBasic = (prefix) => {
return `👤 Olá, eu sou a *BLUX-BOT*!
• Aqui está um breve tutorial de algumas das minhas funções:
–
• Para divertir seu grupo, use: *${prefix}brincadeiras* e saiba todos meus jogos.
–
• Para fazer figurinhas, use *${prefix}sticker* marcando um(a) foto ou vídeo.
—
• Para renomear o pacote ou roubar uma figurinha, ou seja, colocar autor e pacote de forma personalizada, use o comando: *${prefix}rename pacote/autor*
–
• Baixar fotos/vídeos de redes sociais como *Instagram, Tiktok ou Twitter, etc...* É fácil! Veja o tutorial abaixo:
       • Baixar mídias do instagram: *${prefix}igdl [link do post/reel]*
        • Para baixar vídeos do tiktok, use:  *${prefix}tiktok [link do vídeo]*, caso seja imagens use: *${prefix}tiktokimg [link]*
        • Baixar publicações do Twitter, use: *${prefix}twtdl [link do post]*
        • Ainda tenho um comando que realiza download's de 5 redes sociais ao mesmo tempo, seriam elas: *Twitter, Facebook, Instagram, Threads e Tiktok*. para realizar seu pedido, use: *${prefix}multidl [link do post]*
–
• Também realizo download de músicas do *YouTube e SoundCloud*. Veja:
         • Baixar áudios em mp3 ou doc e vídeos do YouTube: *${prefix}play*, *${prefix}playvid*, *${prefix}playdoc*.
         • Realize download de um mix de um artista, usando: *${prefix}playmix [cantor]*
         • Para baixar músicas em mp3 no SoundCloud, use: *${prefix}scdl [link]*
–
Pronto, aqui foi um tutorial básico de como usar o bot. 
• Para ver todas as minhas funções de forma detalhada, use: *${prefix}menu*`
}

exports.configbot = (prefix) => {
return `✦━༺ *CONFIGURAÇÃO DO BLUX BOT* ༻━✦

☰ 〘 *INFORMAÇÕES DO SISTEMA* 〙
✦ Plataforma: Next Hosting
✦ Site: https://nextshost.com.br
✦ Desenvolvedor: bluxzinho-Oficial

✦━━━━━━━━━━━━━━━━━━✦

☰ 〘 *CONFIGURAÇÃO DO DONO* 〙
✦ 1️⃣ *Ligar o Bot*
→ Abra o Termux e inicie o bot normalmente.
→ Vá no WhatsApp do bot (privado).

✦ 2️⃣ *Alterar Nome do Bot*
→ ${prefix}nome-bot Nome desejado

✦ 3️⃣ *Definir Nick do Dono*
→ ${prefix}nick-dono Seu nick aqui

✦ 4️⃣ *Configurar Número do Dono*
→ ${prefix}numero-dono 558189728863
⚠️ Sem +, sem traço e sem o 9 da operadora.

✦ 5️⃣ *Mudar Prefixo do Bot*
→ ${prefix}prefixo-bot #
Exemplo: ${prefix} vira #.

✦━━━━━━━━━━━━━━━━━━✦

☰ 〘 *FINALIZAÇÃO* 〙
✅ Tudo pronto! Seu BLUX BOT está configurado com sucesso!
💬 Use: ${prefix}criador para suporte.

✦━━━━━━━━━━━━━━━━━━✦`
}

exports.infoTinderSabs = (prefix) => {
return `🔞🤖 Tinder da BLUX BOT - Explicação:
—
• ${prefix}rgtinder -> Registre-se no tinder da Sab's através deste comando, ele vai te explicar o que você deve retornar ou não.
• ${prefix}meutinder -> Veja como está seu perfil atualmente no Tinder Sab's.
• ${prefix}rolar ou ${prefix}tinder -> Veja os participantes com este comando aqui!
• ${prefix}tindernome -> Troque seu nome no nosso sistema, realizamos na hora.
• ${prefix}tinderidade -> Completou ano ou quer mudar? Alteramos na mesma hora.
• ${prefix}setgene -> Mudar o seu gênero que está atualmente no sistema.
• ${prefix}setfiltro -> Coloque o filtro que você deseja atualmente, explicando: 1 para homens, 2 para mulheres e 3 para todos.
• ${prefix}setsex -> Mude a sua sexualidade, caso ouver um erro ou você mudou...
• ${prefix}tinderbio -> (Digitar a sua biografia que você deseja atualmente.
• ${prefix}tinderfoto -> Marque a sua foto que você deseja para mudar no sistema.
• ${prefix}sairtinder -> Caso você desejar deixar de ser incluído no tinder.`
}