#!/bin/bash

# Função para exibir mensagens coloridas
echo_color() {
    local color=$1
    local message=$2
    case $color in
        "red") echo -e "\033[1;31m$message\033[0m" ;;    # Vermelho
        "green") echo -e "\033[1;32m$message\033[0m" ;;  # Verde
        "yellow") echo -e "\033[1;33m$message\033[0m" ;; # Amarelo
        "blue") echo -e "\033[1;34m$message\033[0m" ;;   # Azul
        "cyan") echo -e "\033[1;36m$message\033[0m" ;;   # Ciano
        *) echo -e "$message" ;;
    esac
}

# Função para efeito de carregamento
loading_effect() {
    local message=${1:-"⏳ Carregando"}
    echo -n "$message"
    for i in {1..4}; do
        echo -n "."
        sleep 0.5
    done
    echo ""
}

# Função para verificar conexão ativa
verificar_conexao() {
    if [ -f "/path/to/conexao_ativa.txt" ]; then
        return 0  # Conectado
    else
        return 1  # Não conectado
    fi
}

# Função para conectar
conectar() {
    local tipo_conexao=$1
    local parametro=$2
    echo_color "blue" "🔄 BLUX V3 - Conexão via $tipo_conexao ativada..."
    loading_effect
    if [ "$tipo_conexao" == "QR Code" ]; then
        echo "📷 Escaneie o QR Code para conectar."
    else
        echo "🔢 Insira o código gerado para finalizar a conexão."
    fi
    node connect.js "$parametro"
}

# Função para apagar arquivos QR
apagar_qr() {
    local dir="./database/bluxnexMart-qr"
    if [ -d "$dir" ]; then
        rm -f "$dir"/*
        echo_color "green" "✅ Arquivos do QR Code apagados com sucesso!"
    else
        echo_color "red" "❌ Diretório não encontrado!"
    fi
}

# Função para exibir um banner estilizado
banner() {
    clear
    echo_color "cyan" "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo_color "yellow"  "         🚀 BEM-VINDO AO BLUX V3 🚀"
echo_color "blue"    "     Conexão rápida e eficiente garantida!"
echo_color "cyan" "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
}

# Loop principal
while true; do
    if ! verificar_conexao; then
        banner
echo_color "green" "🔹 Escolha uma opção abaixo:"
        echo_color "blue"      "─────────────────────────────────────────"
echo_color "cyan"      "   [1] ▶ Conectar via QR Code  🔗"
echo_color "green" "   [2] ▶ Conectar via Código 🧾"
echo_color "yellow"    "   [3] ▶ Instalar Dependências ⚙️"
echo_color "blue"      "   [4] ▶ Abrir Canal do YouTube 📺"
echo_color "green"     "   [5] ▶ Contato do Criador 👑"
echo_color "cyan"      "   [6] ▶ Apagar arquivos do QR 🗑️"
echo_color "red"       "   [7] ▶ Sair 🚪"
echo_color "blue"      "─────────────────────────────────────────"
echo ""

        read -t 20 -p "➡️ Digite o número da opção desejada: " opcao
        echo ""

        if [ -z "$opcao" ]; then
            echo_color "yellow" "⏳ Tempo esgotado! Conectando automaticamente..."
            conectar "QR Code" "não"
        else
            case $opcao in
                1) conectar "QR Code" "não" ;;
                2) conectar "Código" "sim" ;;
                3) 
                    echo_color "green" "⚙️ Instalando dependências, aguarde..."
                    loading_effect "🔄 Atualizando pacotes"
                    apt-get update -y
                    apt-get upgrade -y
                    apt install -y nodejs nodejs-lts ffmpeg wget git
                    echo_color "green" "✅ Dependências instaladas com sucesso!"
                    echo "ℹ️ Reinicie o script e escolha a opção 1 ou 2 para conectar."
                    ;;
                4) 
                    echo_color "blue" "🌐 Abrindo canal do YouTube... 📺"
                    xdg-open "https://youtube.com/@bluxmodz?si=bIQonBTdBUbaeHr2" 2>/dev/null
                    ;;
5)
echo_color "blue" "🎯 Abrindo o numero do criador... ⚡"
xdg-open "https://wa.me/558189728863?text=Ola%20bluxzinho%20quero%20ajudar" 2>/dev/null
;;
                6) apagar_qr ;;
                7) 
                    echo_color "yellow" "👋 Obrigado por usar o BLUX V3! Até a próxima."
                    exit 0
                    ;;
                *) 
                    echo_color "red" "❌ Opção inválida! Tente novamente."
                    echo "ℹ️ Escolha um número entre 1 e 7."
                    ;;
            esac
        fi
    else
        echo_color "green" "🔗 Conexão ativa! Iniciando a aplicação..."
        loading_effect
        node start.js
    fi

    echo_color "red" "⚠️ O processo foi encerrado! Reiniciando em 5 segundos..."
    sleep 5
done