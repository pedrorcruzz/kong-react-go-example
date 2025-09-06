# Exemplo de Microserviços com API Gateway

Este projeto demonstra a utilização de microserviços com API Gateway usando Kong, incluindo um cliente React para consumir os serviços.

## Estrutura do Projeto

- **kong-api-gateaway**: Contém o Docker Compose para criar o Kong e Konga
- **kong-hello-service**: Microserviço em Go que expõe uma API de hello
- **kong-payment-service**: Microserviço em Go que expõe uma API de pagamento
- **kong-react**: Cliente React que consome os microserviços através da API Gateway

## Configuração

### 1. Criar rede do Docker

```bash
docker network create kong-net
```

### 2. API Gateway (Kong + Konga)

```bash
cd kong-api-gateaway
docker compose up -d
```

**Nota**: No Konga, use `host.docker.internal` para se comunicar com localhost da máquina.

### 3. Microserviços Go

#### Hello Service

```bash
cd kong-hello-service
go run main.go
```

#### Payment Service

```bash
cd kong-payment-service
go run main.go
```

### 4. Cliente React

```bash
cd kong-react
bun install
bun run dev
```

## Configuração do Cliente

Para utilizar o cliente React, você precisa configurar:

- Arquivo `.env` com as URLs dos serviços
- Arquivo `App.tsx` para consumir as APIs

## Como Usar

1. Execute os comandos acima na ordem especificada
2. Configure o Konga para gerenciar as rotas
3. Acesse o cliente React para testar os microserviços através da API Gateway
