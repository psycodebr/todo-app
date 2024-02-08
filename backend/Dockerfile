# Usa a imagem Python
FROM python:alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos do diretório local para o contêiner
COPY . .

# Instala as dependências
RUN pip install -r requirements.txt

# Expõe a porta 5001
EXPOSE 5001

# Comando para iniciar a aplicação
CMD ["python", "app.py"]
