# Pesquisa em Saúde | UFRN

Questionário digital responsivo (azul, branco e amarelo) com progressão em 10 módulos, escalas eHEALS (8 itens) e DHLI (21 itens), perguntas condicionais, elegibilidade, revisão das respostas e confirmação de recibo na planilha Google Sheets.

## Situação do projeto

O formulário está em **MODO DE DEMONSTRAÇÃO**. O PDF fornecido apresenta uma declaração de concordância, mas não inclui o texto completo do TCLE. Também é necessário confirmar a versão DHLI: diversos itens mencionam insuficiência cardíaca, embora o estudo aceite diferentes condições crônicas. As faixas da pergunta sobre renda não foram definidas no PDF.

Não ative coleta real de dados de saúde antes das revisões ética, metodológica e de segurança.

## Como publicar a página

1. No GitHub: Settings > Pages.
2. Em Build and deployment > Source, selecione Deploy from a branch. Escolha a branch main e a pasta /(root). Clique em Save.
3. O endereço público aparecerá na mesma tela quando a publicação terminar.

Arquivos: index.html (interface), styles.css (identidade visual), questionnaire.js (perguntas), app.js (navegação e envio), config.js (configuração pública), backend/Code.gs (servidor Google Apps Script).

## Conectar ao Google Sheets

Mantenha a planilha privada, compartilhando apenas com pesquisadores autorizados.

1. Abra a planilha no Google Sheets. A aba de respostas deve chamar-se exatamente "Respostas" e a primeira coluna deve ter o título "response_id".
2. Acesse https://script.google.com, crie projeto e cole o conteúdo do arquivo backend/Code.gs.
3. Em Configurações do projeto > Propriedades do script, cadastre SPREADSHEET_ID com o ID da sua planilha. Deixe COLLECTION_ENABLED = false até a aprovação.
4. Após aprovação ética e revisão do instrumento, altere COLLECTION_ENABLED para true.
5. No Apps Script: Implantar > Nova implantação > Aplicativo da Web > Executar como: eu > Quem tem acesso: qualquer pessoa (para questionário público). Autorize com a conta proprietária da planilha.
6. Copie a URL do aplicativo da Web terminada em /exec. No arquivo config.js, preencha endpoint, insira o TCLE integral aprovado em consentText, indique o e-mail da equipe e altere approvedForResearch para true somente após a revisão.
7. Salve no GitHub e faça um envio com dados fictícios. O aplicativo envia as respostas, consulta o identificador de recibo no backend e só confirma quando identifica que a resposta foi registrada.

O site não expõe nem utiliza o ID da planilha. Esse ID fica como propriedade privada do Apps Script. O backend não disponibiliza respostas em consultas públicas; apenas responde se o identificador aleatório foi registrado.

## Campos e organização

Cada envio gera uma linha com identificador aleatório, datas de envio/recebimento, versão, consentimento, dados sociodemográficos, perfil clínico, medicamentos, uso de tecnologia, respostas eHEALS, DHLI, automanejo e agravamentos. Respostas múltiplas são separadas por barra vertical. Campos "Outra – especificar" são gravados como JSON em colunas separadas.

O projeto não adicionou nome, telefone ou e-mail do participante, porque não constam do instrumento fornecido. Os dados pessoais previstos são sociodemográficos e clínicos. Identificadores adicionais exigem justificativa e autorização apropriadas.

O front-end não grava respostas em localStorage ou cookies. Respostas ficam somente na memória da aba até envio ou saída.

## Pendente antes da aplicação

- Incluir TCLE integral aprovado (riscos, benefícios, responsáveis, contatos, privacidade, tratamento de dados e direitos).
- Validar edição, autorização, redação integral e regras de pontuação das escalas eHEALS e DHLI.
- Revisar menções exclusivas a insuficiência cardíaca na DHLI para a população com múltiplas condições crônicas.
- Definir faixas de renda e validar perguntas extras de estado civil / número de moradores.
- Testar todas as ramificações do formulário e os critérios de elegibilidade com dados fictícios.
- Configurar limites de coleta, segurança institucional, política LGPD, controle de acesso e retenção.

**Limitação de segurança do MVP**: o Apps Script que recebe respostas de uma página pública pode receber tráfego automatizado. Em produção, avalie proteção adicional contra abuso, hospedagem adequada, gestão de acesso e auditoria.