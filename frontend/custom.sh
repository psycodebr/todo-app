#!/bin/bash

# Define o diretório onde a aplicação frontend está localizada
frontend_dir="/app/frontend"

# Executa o build da aplicação frontend, especificando o diretório de saída
npm run build -- --output-path="$frontend_dir/build" --public-url="/frontend/"
