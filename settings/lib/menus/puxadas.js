const puxadas = (prefix, sender) => {
    return `╭━━━━━━━━━━━━━━━💫
┃💫 𝐌𝐄𝐍𝐔 - 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒 💫
╰━━━💫━━━━━━━━━╮
╭┤〘👤〙➢ Usuário: @${sender.split("@")[0]}
┃╰━━━━━━━━━💫
╰╦━━━━━━━━━━━━✨
╭┤✨ 𝐏𝐔𝐗𝐀𝐃𝐀𝐒 𝐃𝐄: ✨
┃│〘🧾〙➢ ${prefix}cpf - Puxar CPF
┃│〘🩺〙➢ ${prefix}cpfsus - Puxar CPF SUS
┃│〘📛〙➢ ${prefix}Nome - Puxar Nome
┃│〘🏘️〙➢ ${prefix}vizinhos - Puxar Vizinhos
┃│〘🏠〙➢ ${prefix}endereco - Puxar endereço 
┃│〘📱〙➢ ${prefix}telefone - Puxar Telefone
┃│〘👩〙➢ ${prefix}mae - Puxar Mãe
┃│〘👨〙➢ ${prefix}pai - Puxar Pai
┃│〘💼〙➢ ${prefix}cnpj - Puxar CNPJ
┃│〘🚗🏷️〙➢ ${prefix}placa   - Puxar Placa / Outro
┃╰━━━✨━━━━━━━━╯
╰━━━━━━━━━━━━━━💫`;
};

module.exports = { puxadas };