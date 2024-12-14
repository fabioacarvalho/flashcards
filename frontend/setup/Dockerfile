# Usar imagem base do Node.js
FROM node:latest

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta da aplicação (se necessário)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]