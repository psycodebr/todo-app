# Usa a imagem Node.js
FROM node:alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos do diretório local para o contêiner
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]