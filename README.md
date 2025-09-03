# Gerador de Certificados

![Preview](public/preview.png)

Este projeto é uma aplicação Angular para geração e gerenciamento de certificados acadêmicos.

## Funcionalidades

- Cadastro de certificados com nome do aluno, atividades e data de emissão
- Listagem dos certificados gerados
- Visualização de certificado individual
- Interface moderna e responsiva
- Armazenamento local dos certificados

## Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto:
   ```bash
   npm start
   ```
3. Acesse `http://localhost:4200` no navegador.

## Estrutura

- `src/app/pages/certificado-form`: Formulário para criar certificados
- `src/app/pages/certificados`: Listagem de certificados
- `src/app/pages/certificado`: Visualização de certificado
- `src/app/_services/certificado.service.ts`: Serviço de armazenamento

## Tecnologias

- Angular
- TypeScript
- Bootstrap

## Autor

- [Bruno Moura](https://github.com/brunomoura88)
