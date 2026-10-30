// Transcrição operacional baseada no PDF enviado. Revisão científica/CEP necessária antes do uso em pesquisa.
(function(){
var yn=["Sim","Não"], freq=["Nunca","Raramente","Às vezes","Frequentemente","Sempre"], dif=["Muito fácil","Fácil","Difícil","Muito difícil"], dfreq=["Nunca","Raramente","Às vezes","Frequentemente"];
function radio(id,title,opts,extra){return Object.assign({id:id,title:title,type:"single",options:opts},extra||{});}
function multi(id,title,opts,extra){return Object.assign({id:id,title:title,type:"multi",options:opts},extra||{});}
function field(id,title,type,extra){return Object.assign({id:id,title:title,type:type},extra||{});}
var respiratory=["Asma","Doença Pulmonar Obstrutiva Crônica (DPOC)","Bronquite crônica","Outras doenças respiratórias – especificar"];
var conditions=["Asma","Doença Pulmonar Obstrutiva Crônica (DPOC)","Bronquite crônica","Outras doenças respiratórias – especificar","Hipertensão arterial","Diabetes mellitus tipo 1","Diabetes mellitus tipo 2","Doenças cardiovasculares","Doença renal crônica","Doenças reumatológicas ou autoimunes","Obesidade","Câncer","Doenças neurológicas","Doenças endócrinas","Outra condição crônica – especificar"];
var e=[
"Eu sei quais são os conteúdos sobre saúde disponíveis na internet.",
"Eu sei onde encontrar conteúdos úteis sobre saúde na internet.",
"Eu sei como encontrar conteúdos úteis sobre saúde na internet.",
"Eu sei como usar a internet para responder às minhas dúvidas sobre saúde.",
"Eu sei como usar as informações de saúde que encontro na internet para me ajudar.",
"Eu consigo avaliar os conteúdos sobre saúde que encontro na internet.",
"Eu consigo distinguir conteúdos de saúde de alta qualidade de conteúdos de baixa qualidade na internet.",
"Eu me sinto confiante em usar informações da internet para tomar decisões sobre a minha saúde."
];
var d=[
["Habilidades operacionais","Quando você usa a internet para buscar informações ou gerenciar cuidados sobre a insuficiência cardíaca:","Quão fácil ou difícil é para você usar o teclado ou a tela de toque (touchscreen) do seu dispositivo?"],
["Habilidades operacionais","Quando você usa a internet para buscar informações ou gerenciar cuidados sobre a insuficiência cardíaca:","Quão fácil ou difícil é para você clicar ou tocar nos links ou botões corretos da página de saúde?"],
["Habilidades operacionais","Quando você usa a internet para buscar informações ou gerenciar cuidados sobre a insuficiência cardíaca:","Quão fácil ou difícil é para você preencher campos de texto ou formulários online (como login ou pesquisas)?"],
["Habilidades de navegação","Ao acessar sites ou aplicativos sobre insuficiência cardíaca:","Quão fácil ou difícil é para você encontrar o caminho ou as páginas corretas dentro de um portal de saúde?"],
["Habilidades de navegação","Ao acessar sites ou aplicativos sobre insuficiência cardíaca:","Quão fácil ou difícil é para você navegar entre diferentes páginas para juntar as informações que precisa?"],
["Habilidades de navegação","Ao acessar sites ou aplicativos sobre insuficiência cardíaca:","Quão fácil ou difícil é para você não se perder ou não se confundir ao clicar em vários links seguidos?"],
["Busca de informações","Quando precisa resolver uma dúvida sobre os seus sintomas ou cuidados:","Quão fácil ou difícil é para você digitar as palavras certas no mecanismo de busca (como o Google) para encontrar o que quer?"],
["Busca de informações","Quando precisa resolver uma dúvida sobre os seus sintomas ou cuidados:","Quão fácil ou difícil é para você escolher, entre os vários resultados da busca, o site que parece mais adequado?"],
["Busca de informações","Quando precisa resolver uma dúvida sobre os seus sintomas ou cuidados:","Quão fácil ou difícil é para você encontrar rapidamente a informação específica que procura dentro do texto?"],
["Avaliação da confiabilidade","Ao ler informações sobre o tratamento, dieta ou medicações para insuficiência cardíaca na internet:","Quão fácil ou difícil é para você julgar se a informação encontrada é de confiança ou não?"],
["Avaliação da confiabilidade","Ao ler informações sobre o tratamento, dieta ou medicações para insuficiência cardíaca na internet:","Quão fácil ou difícil é para você diferenciar se um texto de saúde é comercial (uma propaganda) ou estritamente educativo?"],
["Avaliação da confiabilidade","Ao ler informações sobre o tratamento, dieta ou medicações para insuficiência cardíaca na internet:","Quão fácil ou difícil é para você checar se a informação está atualizada ou baseada em critérios médicos?"],
["Determinação da relevância","Ao tentar aplicar o que lê na internet para a sua própria saúde:","Quão fácil ou difícil é para você decidir se aquela orientação em saúde se aplica especificamente ao seu caso de insuficiência cardíaca?"],
["Determinação da relevância","Ao tentar aplicar o que lê na internet para a sua própria saúde:","Quão fácil ou difícil é para você usar a informação que encontrou na internet para tomar decisões no seu dia a dia (como o controle de líquidos ou sal)?"],
["Determinação da relevância","Ao tentar aplicar o que lê na internet para a sua própria saúde:","Quão fácil ou difícil é para você conversar com o seu médico ou enfermeiro sobre as informações que você descobriu online?"],
["Adição de conteúdo autogerado","Considerando o uso de redes sociais, grupos de apoio ou aplicativos de mensagens:","Com que frequência você posta perguntas, dúvidas ou desabafos sobre a insuficiência cardíaca em plataformas online?"],
["Adição de conteúdo autogerado","Considerando o uso de redes sociais, grupos de apoio ou aplicativos de mensagens:","Com que frequência você responde ou comenta publicações de outras pessoas que compartilham experiências sobre problemas cardíacos?"],
["Adição de conteúdo autogerado","Considerando o uso de redes sociais, grupos de apoio ou aplicativos de mensagens:","Com que frequência você utiliza mensagens escritas para relatar seus sintomas (como ganho de peso ou inchaço) para profissionais de saúde ou familiares?"],
["Proteção da privacidade","Ao criar contas ou interagir em sites e aplicativos de saúde:","Com que frequência você lê os termos de privacidade ou avisos sobre o uso dos seus dados de saúde antes de aceitá-los?"],
["Proteção da privacidade","Ao criar contas ou interagir em sites e aplicativos de saúde:","Com que frequência você evita postar informações muito íntimas ou dados clínicos pessoais em grupos públicos na internet?"],
["Proteção da privacidade","Ao criar contas ou interagir em sites e aplicativos de saúde:","Com que frequência você se preocupa ou altera as configurações de privacidade para controlar quem pode ver o que você pesquisa ou posta sobre a sua doença?"]
];
var modules=[
{id:"tcle",name:"Consentimento",icon:"✧",items:[
radio("tcle","Li as informações apresentadas e concordo em participar voluntariamente desta pesquisa.",yn,{description:"Leia o Termo de Consentimento Livre e Esclarecido antes de decidir. A participação é voluntária.",required:true,kind:"consent"})
]},
{id:"eligibility",name:"Elegibilidade",icon:"◌",items:[
field("age","Qual é a sua idade?","number",{min:0,max:120,description:"Informe sua idade em anos completos."}),
radio("diagnosed","Você possui diagnóstico médico de alguma doença ou condição crônica?",yn)
]},
{id:"demographic",name:"Seu perfil",icon:"♙",items:[
radio("sex","Sexo",["Feminino","Masculino","Intersexo","Prefiro não informar"]),
radio("gender","Identidade de gênero",["Mulher","Homem","Mulher trans","Homem trans","Não binário","Outra identidade – especificar","Prefiro não informar"],{optional:true,otherOption:"Outra identidade – especificar"}),
radio("race","Raça/cor",["Branca","Preta","Parda","Amarela","Indígena","Prefiro não informar"]),
radio("education","Escolaridade",["Sem escolaridade","Ensino fundamental incompleto","Ensino fundamental completo","Ensino médio incompleto","Ensino médio completo","Ensino superior incompleto","Ensino superior completo","Pós-graduação"]),
radio("occupation","Ocupação atual",["Empregado","Autônomo","Desempregado","Aposentado","Estudante","Do lar","Outra – especificar"],{otherOption:"Outra – especificar"}),
field("income","Renda familiar mensal","text",{optional:true,description:"Campo aberto provisório. As faixas de renda ainda precisam ser definidas no protocolo."}),
field("city","Município onde reside","text"),
radio("zone","Zona de residência",["Urbana","Rural"]),
radio("marital","Estado civil",["Solteira(o)","Casada(o)","Viúva(o)","Divorciada(o)","União estável"]),
field("household","Com quantas pessoas você mora?","number",{min:0,max:100})
]},
{id:"clinical",name:"Saúde e condições",icon:"♡",items:[
multi("conditions","Quais doenças ou condições crônicas você possui?",conditions,{description:"Você pode marcar mais de uma opção.",otherOption:["Outras doenças respiratórias – especificar","Outra condição crônica – especificar"]}),
radio("primary","Qual dessas condições mais impacta sua saúde atualmente?",[],{dynamicOptions:function(a){return a.conditions||[]},description:"Selecione apenas uma das condições que você marcou."}),
radio("diagnosis_age","Há quanto tempo você recebeu o diagnóstico dessa condição?",["Menos de 1 ano","De 1 a 5 anos","De 6 a 10 anos","Mais de 10 anos","Não sei informar"]),
radio("followup","Você realiza acompanhamento regular com algum profissional de saúde para essa condição?",["Sim","Não","Às vezes"]),
radio("monitor","Você realiza algum tipo de monitoramento da sua condição em casa?",yn),
multi("monitor_method","Como você realiza esse monitoramento?",["Medição da pressão arterial","Controle da glicemia","Monitoramento da respiração ou saturação de oxigênio","Acompanhamento de sintomas","Aplicativos ou dispositivos digitais","Outro – especificar"],{showIf:function(a){return a.monitor==="Sim"},otherOption:"Outro – especificar"}),
multi("resp_treatment","Você utiliza algum dispositivo ou tratamento específico para sua condição respiratória?",["Bombinha ou inalador","Nebulização","Oxigenoterapia","Outro tratamento – especificar","Não utilizo nenhum desses"],{showIf:function(a){return (a.conditions||[]).some(function(c){return respiratory.includes(c)})},otherOption:"Outro tratamento – especificar",exclusiveOption:"Não utilizo nenhum desses"}),
radio("resp_intensify","Nos últimos 12 meses, precisou intensificar o tratamento respiratório devido à piora dos sintomas?",["Sim","Não","Não sei informar"],{showIf:function(a){return (a.conditions||[]).some(function(c){return respiratory.includes(c)})}})
]},
{id:"medication",name:"Medicamentos",icon:"✚",items:[
radio("medications","Você utiliza medicamentos para tratar sua condição crônica?",["Sim, regularmente","Não","Apenas quando necessário"]),
radio("med_count","Quantos medicamentos utiliza diariamente?",["Nenhum","1 a 2","3 a 4","5 ou mais","Não sei informar"]),
radio("med_skip","Com que frequência você esquece ou deixa de tomar os medicamentos conforme a orientação profissional?",["Nunca","Raramente","Às vezes","Frequentemente","Sempre","Não se aplica"]),
radio("med_self","Você costuma iniciar, interromper ou modificar medicamentos por conta própria, sem orientação de um profissional de saúde?",["Sim","Não","Às vezes"])
]},
{id:"internet",name:"Internet e tecnologia",icon:"⌁",items:[
radio("smartphone","Você possui smartphone (celular com acesso a aplicativos e internet)?",yn),
radio("internet","Você possui acesso à internet?",yn),
radio("internet_frequency","Com que frequência utiliza a internet?",["Diariamente","Algumas vezes por semana","Raramente","Nunca"]),
radio("online_search","Você costuma procurar informações sobre saúde ou sobre sua doença na internet?",freq),
multi("search_places","Onde costuma buscar informações sobre saúde?",["Google ou outros buscadores","Sites de saúde","Redes sociais","YouTube ou outras plataformas de vídeo","Aplicativos de saúde","Sites de hospitais, universidades ou instituições oficiais","Grupos de mensagens","Outro – especificar"],{showIf:function(a){return a.online_search!=="Nunca"},otherOption:"Outro – especificar"})
]},
{id:"eheals",name:"Escala eHEALS",icon:"◈",items:e.map(function(t,i){return radio("eheals_"+(i+1),t,["1 — Discordo totalmente","2 — Discordo","3 — Não tenho certeza / Neutro","4 — Concordo","5 — Concordo totalmente"],{description:"eHEALS-Br • Afirmação "+(i+1)+" de 8"})})},
{id:"dhli",name:"Escala DHLI",icon:"▤",items:d.map(function(row,i){return radio("dhli_"+(i+1),row[2],i<15?dif:dfreq,{description:"DHLI • "+row[0]+" • "+row[1]})})},
{id:"selfcare",name:"Automanejo",icon:"☼",items:[
radio("self_26","Com que frequência você segue o tratamento e as orientações dos profissionais de saúde?",freq),
radio("self_27","Com que frequência realiza cuidados recomendados para controlar sua condição, como alimentação adequada e atividade física?",freq),
radio("self_28","Com que frequência acompanha ou monitora os sinais e sintomas relacionados à sua condição?",freq),
radio("self_29","Você consegue reconhecer quando sua condição de saúde está piorando?",freq),
radio("self_30","Você sabe identificar quando precisa procurar atendimento de saúde diante de uma piora da sua condição?",freq),
radio("self_31","Você participa das decisões relacionadas ao seu tratamento e aos cuidados com sua saúde?",freq),
radio("self_32","Você utiliza aplicativos, dispositivos ou ferramentas digitais para acompanhar ou cuidar da sua saúde?",yn),
field("self_32_tools","Quais aplicativos, dispositivos ou ferramentas você utiliza?","text",{optional:true,showIf:function(a){return a.self_32==="Sim"}})
]},
{id:"worsening",name:"Agravamento",icon:"♧",items:[
radio("worsening_33","Nos últimos 12 meses, você apresentou algum episódio de piora ou agravamento da sua condição crônica?",["Sim","Não","Não sei informar"]),
field("episodes_34","Quantos episódios de piora apresentou nos últimos 12 meses?","number",{min:0,max:999,showIf:function(a){return a.worsening_33==="Sim"}}),
radio("urgent_35","Precisou procurar atendimento de urgência ou emergência devido à piora?",yn,{showIf:function(a){return a.worsening_33==="Sim"}}),
field("urgent_count_36","Quantas vezes procurou atendimento de urgência ou emergência?","number",{min:0,max:999,showIf:function(a){return a.urgent_35==="Sim"&&a.worsening_33==="Sim"}}),
radio("admitted_37","Precisou ser internado devido à piora da condição?",yn,{showIf:function(a){return a.worsening_33==="Sim"}}),
field("admitted_count_38","Quantas internações ocorreram?","number",{min:0,max:999,showIf:function(a){return a.admitted_37==="Sim"&&a.worsening_33==="Sim"}}),
radio("icu_39","Precisou de atendimento em Unidade de Terapia Intensiva (UTI)?",yn,{showIf:function(a){return a.worsening_33==="Sim"}}),
radio("intensify_40","A piora da sua condição exigiu alteração ou intensificação do tratamento?",["Sim","Não","Não sei informar"],{showIf:function(a){return a.worsening_33==="Sim"}}),
radio("interference_41","Atualmente, quanto sua condição de saúde interfere nas suas atividades diárias?",["Não interfere","Interfere pouco","Interfere moderadamente","Interfere muito","Impede diversas atividades"]),
radio("health_42","Como você avalia sua saúde atualmente?",["Muito boa","Boa","Regular","Ruim","Muito ruim"])
]}
];
window.SURVEY={version:"2026-10-30-pdf-reformulado",modules:modules,flatten:function(){return modules.flatMap(function(m){return m.items.map(function(q){return Object.assign({moduleId:m.id,moduleName:m.name},q)})})}};
})();