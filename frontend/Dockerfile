# Use a imagem de node como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do código-fonte para o diretório de trabalho
COPY . .

# Especifique o comando padrão para ser executado quando o contêiner for iniciado
CMD ["npm", "start"]