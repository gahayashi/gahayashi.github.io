---
layout: post
title:  "Homeserver: Desnecessário"
date:   2015-01-19 02:45:00 BRL
categories: Divagando
---

Até um mês atrás, eu queria ter um desktop super foda e um servidor poderoso para colocar uns serviços no Tor e fazer todas as minhas idéias malucas e guardar os meus projetos. Até que eu comecei a pensar mais profundamente em tudo que eu ia fazer no meu homeserver... E notei que eu estava fora da realidade.

### Idéia Original

Um homeserver que faça:

1. Git
1. Armazenamento
1. Email
1. Deploy e Teste dos meus projetos
1. Web
1. Virtualização

### Checando com a realidade

O que realmente importa:

1. Git: fácil, simples... desktop em casa é suficiente.
1. Armazenamente: vide acima.
1. Email: No fim das contas, tem que ter um servidor externo. Deixa lá, então.
1. Deploy e Teste: Se o desktop for bom, por que não?
1. Web: para um servidor interno, desktop > suficiente; para um externo, tem que ser profissional (não tem jeito).
1. Virtualização: Eu tenho recursos para fazer um servidor de virtualização? (Ainda por cima, depois do desktop)

### Conclusão

Depois de considerar bastante, eu cheguei a seguinte conclusão: Para ter dois computadores, que nunca serão utilizados ao seu máximo, é melhor usar um único que eu gasto menos dinheiro.

Muito das minhas necessidades de backup podem ser sanadas com dois HDs no mesmo computador, mantendo cópias dos meus arquivos. (Estou pensando no git aqui, que é o que realmente importa para mim: guardar os meus projetos de programação)

Eu também tenho uma torradeira de HDs que conecta um HD normal a um computador por USB. O que realmente se torna muito útil para fazer backups, já que você pode simplesmente plugar um HD comum nessa torradeira e ter `teras` de espaço.

### O meu desktop

Estou pensando em fazer para mim mesmo um desktop / servidor (porque servidor vem do uso, não do hardware) que terá a seguinte configuração <q>lógica</q>:

1. Um SSD, para o sistema operacional, e para manter os meus gits. O SSD é uma ótima mídia para manter os gits remotos porque não tem partes móveis, é bastante confiavel e será a cópia principal.
1. Um HDD, para dados. Porque eu preciso de um certo espaço para guardar vídeos e tudo isso, mas eu não ligo o suficiente para querer manter backups. Se eu baixei da internet, ou de um DVD em casa, eu posso fazer de novo.
1. Um HDD para dados de maquinas virtuais, porque esse precisa ser meio bom para lidar com toda a porrada que eu vou mandar, mas vou tratar as VMs como instancias da Amazon, usando o SSD para BD e o HDD de dados para dados, porque assim tenho confiança que não vou perder os dados, e não vou ficar triste quando o HD das VMs morrer.
1. Um HDD gigante para backups externos.

Basicamente o "/" vai ficar no SSD. O "/home" vai ficar no HDD de dados e o "/VMs" [?] vai ficar em um outro HDD.

Provavelmente vou colocar um processador Intel top de linha e toda a memória que eu puder comprar e estou considerando se vale a pena, ou não, colocar uma placa de video. Ela tiraria a carga do processador, mas não sei até onde isso é realmente necessário.

### Ponto Filosófico

O que mais me chamava atenção em um homeserver é que eu queria ter os meus dados, nos meus computadores e ainda ter isso acessível pela internet e seguro em casa. Para realmente conseguir isso, não é realmente necessário ter um servidor. Talvez seja interessante se você tenha necessidades muito abrangentes dos seus computadores, mas um cara como eu não precisa de um servidor separado para isso.

Tenho ouvido algumas pessoas falarem que as pessoas precisam ter servidores em casa para suas mídias e porque seus aparelhos precisam acessar seus dados e tals... Acho que o que as pessoas precisam que é realmente fundamental é um computador em casa que guarde seus dados mais importantes, e precisam entender que precisam fazer backups. Só isso.

Adicionar a ideia de um servidor, mesmo que apenas um NAS, é absolutamente alienigena para mim, depois que eu pensei tudo isso. A maioria das pessoas não vai realmente querer mais computadores do que já tem, e acho que a maioria só usa o seu computador mais poderoso, nem olhando para os outros computadores disponíveis. Defina esse computador como seu computador principal. Coloque suas cópias principais nesse computador. Deixe esse computador em casa.

Poucas pessoas usam seus próprios computadores para armazenar filmes, agora que tem o Netflix. Poucas pessoas gravam seus DVDs em seus HDs, e mesmo que gravem, provavelmente nunca assistem tantos DVDs a ponto de ser necessário ter cópias online de todos os filmes. Pouquissimas pessoas realmente fazem tanto uso do computador que seja necessário um servidor dedicado só para isso.

Depois de ter tido um monte de servidores no quarto, doado tudo e agora estar juntando o dinheiro para comprar um computador realmente legal para fazer todas as minhas maluquices, eu acho que eu posso dizer que eu definitivamente não preciso de servidores.

Vou adotar para mim mesmo a regra do "um de cada". Posso ter um computador torre, um laptop, um celular e um tablet. E estou em dúvida se não vou simplesmente vender o meu tablet.

Um desktop bom é suficiente para as necessidades de "servidores" de um usuário domestico, porque afinal de contas não estou compartilhando os meus dados pessoais com os meus pais para validar a necessidade de um servidor.