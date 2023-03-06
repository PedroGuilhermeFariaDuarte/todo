![todo-v2](https://user-images.githubusercontent.com/16112395/223253622-b2b351bd-b3d0-4eb8-a81b-27638699980a.png)


# Introdução
O aumento nas tarefas diárias acaba prejudicando a organização e produtividade, e tudo que foi planejado para o dia e até mesmo para a semana acaba não sendo concluído. 
Recorrer a notação em caderno por exemplo é uma das soluções mais procuradas por quem enfrenta esse tipo de problema, mas por fim acaba não ajudando muito dependendo da quantidade de tarefas e se precisam ser concluídas em alguma data ou tempo, soluções digitais para produtividade são bem comuns no meio empresarial, mas são ferramentas pagas e na maioria das vezes com recursos que pessoas fora do ambiente empresarial não precisam.
Geralmente as soluções digitais para gestão de tarefas e aumento de produtividade costumam ter recursos e interfaces que abrangem as necessidades de uma equipe de empresa, e para o público comum todas essas funcionalidades acabam se transformando em um acúmulo de informação e de recursos que nunca vão ser utilizados.
Podemos tomar como exemplo de acúmulo de informação e de recursos o ClickUp, um aplicativo que oferece todo tipo de recurso para produtividade como criação de “espaços”, grupos de tarefas com e sem subtarefas, marcação de responsabilidade, comentários, criação de documentos com editor de texto e muito mais, é algo realmente impressionante, mas são recursos que para uma única pessoa são exagerados.
Imaginando o cenário de João, um caseiro que precisa cuidar de sua casa para a festa da filha que vai acontecer no período da tarde, e para conseguir preparar tudo ele vai usar um aplicativo do tipo Todo List e  por não ter muito costume com aplicativos uma interface complexa com muitos links, botões, menus e seus submenus, se localizar para encontrar a tarefa do dia e confirmar como concluída acaba se tornando um processo de navegação bem complexo e demorado e por isso o João não consegui finalizar todas as tarefas e precisou de ajuda de ultima hora para finalizar tudo.
O cenário acima é fictício, mas demonstra bem como um aplicativo mais centralizado nos seus recursos e de simples navegação seria o mais adequado para o João, e foi imaginando esse cenário e focando na centralização de recursos e uma navegação mais simples e assistida que foi desenvolvido o Todo (Túudo).
A criação do Todo tem como objetivo facilitar o controle de tarefas através de uma interface simples e uma navegação assistida, oferecendo um informe de tarefas de forma automática para o usuário, se baseando na semana, dia ou mês. 

**Centralização de recursos** - O excesso de funcionalidades sempre foi um problema para usuários menos entretidos com o aplicativo, geralmente fazem o uso de apenas algumas funções e que são a base do app. No Todo os únicos recursos disponibilizados para os usuários vão ser exatamente o que o usuário precisa, sem recursos escondidos em configurações ou opcionais.

**Navegação Assistida** - Nos aplicativos de gestão de produtividade o acesso as tarefas e afins é feito de forma “manual” pelo usuário e caso alguma tarefa esteja incorporada em algum outro escopo de funcionalidade ele vai precisar realizar uma navegação ou clicar em botões e ou links, isso acaba gerando um excesso de informação visual na interface do aplicativo e por muitas vezes aumentando o tempo de navegação. A navegação assistida vai se basear em uma única definição, escolhida pelo usuário para listar e notificar as tarefas removendo a necessidade de “clicks” para o usuário se localizar e começar a concluir suas tarefas.
Objetivos deste documento
Este documento tem por objetivo descrever todos os processos que envolve o escopo, funcionalidades, regras de funcionamento e nicho de mercado do aplicativo intitulado “todo”.

#### **Público-alvo**
-	Homens e mulheres de todas as classes  
-	Abrangente – faixa etária a partir dos 10
-	Pessoas com excesso de tarefas
-	Pessoas com problemas de produtividade e gestão de suas tarefas



#### **Nome do produto e de seus componentes principais**

Todo como um produto tem como componente principal a tarefa criada pelo usuário, mas também oferece uma navegação assistida (usabilidade) como um dos seus componentes.

#### **Descrição do produto**

Todo é um gerenciador de tarefas simplificado oferecendo um pequeno conjunto de funcionalidades de forma direta para o usuário, mas permite que o mesmo possa realizar configurações de sua preferência em grupo pequeno de opções. Essa escolha é para facilitar a gestão e produtividade do dia-a-dia do usuário, focando-o nas suas tarefas e oferecendo uma navegação rápida e inteligente.
Missão do produto.

#### **Missão**
Criar aplicações que resolvam o problema do usuário de forma simples é um grande desafio, e o Todo foi pensando, conceituado e desenvolvido para enfrentar esse tipo de problema e entregar o que o usuário precisa.


# Requisitos Funcionais, Não-Funcionais e Suplementares

### **Requisitos Funcionais – RF**

Os requisitos funcionais são todos as funcionalidades que um software (Programa de computador) disponibiliza para o usuário, o meio como o usuário pode interagir com essas funcionalidades podem variar de acordo a natureza do software e o computador onde é executado.

Um dos meios mais comuns de uso das funcionalidades de um software é através de um computador pessoal, onde o software podendo ser um site ou um programa convencional permite que o usuário execute suas funcionalidades através da interação com elementos gráficos, digitação de textos, cliques e até mesmos gestos.

As funcionalidades de um software podem variar de acordo com o proposito no qual foi feito, mas podemos imaginar um programa de edição de texto que disponibiliza um menu para o usuário clicar e selecionar por exemplo o item “Salvar Documento” (Funcionalidade do software) que após a interfacção com o click do usuário realiza uma outra funcionalidade para salvar o arquivo.

Um software pode ter vários tipos de funcionalidades, as mais comuns são as disponibilizadas para o usuário e que podem ser executadas após algum comando do mesmo e temos também “funcionalidades privadas” (FV), nas FV apenas o software que as criou pode fazer o seu uso estando ocultas ao usuário.

1.	[**RF001**] - Cria tarefa
Cria uma tarefa contendo a descrição digitada pelo usuário.
2.	[**RF002**] – Listar tarefas
Lista todas as tarefas filtradas com base nas definições do modo “assistido”.
3.	[**RF003**] – Concluir tarefa
Define uma tarefa como concluída.
4.	[**RF004**] – Excluir tarefa
Exclui a tarefa
5.	[**RF005**] – Criar grupos de tarefas
Cria grupos de tarefas com base nas definições do modo “assistido”
6.	[**RF006**] – Mostra o total de tarefas
Mostra o total de tarefas criadas
7.	[**RF007**] – Mostra o total de tarefas concluídas
Mostra o total de tarefas concluídas do total de tarefas criadas
8.	[**RF008**] – Navegação assistida
Gerar de forma implícita o auxílio ao usuário sobre as tarefas do dia
9.	[**RF009**] – Salva automaticamente os grupos de tarefas
Armazena no browser do usuário os grupos de tarefas


### **Requisitos Não Funcionais – RNF**

Os requisitos não funcionais atuam como uma regra e ou condições para que um requisito funcional possa ser executado, podemos imaginar um documento que o usuário quer salvar em um programa de computador, se o documento estiver vazio e o usuário tentar salvar o documento o programa vai notificá-lo e impedir que o documento seja salvo, com este exemplo podemos observar algumas condições para salvar o arquivo:
1.	O arquivo deve ter algum conteúdo
2.	O programa vai notificá-lo que o salvamento não é possível apenas se o documento não tiver algum conteúdo.
Com isso podemos observar que além dos RF possuírem seus próprios RNF alguns RF só são executados quando um RNF não é “obedecido”, como o caso da notificação por exemplo.
Um ponto importante sobre os RNF, eles são responsáveis por garantir que as RN sejam implementadas e executadas, mas também podem ser aplicados para os RF.

1.	[**RNF001**] – Para o RF001 Implementa e executa o RN001
2.	[**RNF002**] – Para o RF002 Implementa e executa o RN002
3.	[**RNF003**] – Para o RF003 Implementa e executa o RN003
4.	[**RNF004**] – Para o RF004 Implementa e executa o RN004
5.	[**RNF005**] – Para o RF005, todo grupo deve ser originado do dia da semana em que está sendo criado ou para o dia da próxima semana em que está sendo criado
6.	[**RNF006**] – Para o RF002, listar de forma ordenada caso as configurações do modo assistido não estiverem configuradas
7.	[**RNF007**] – Para o RF009 Implementa e executa o RN005
 
### **Regras de Negócio - RN**

As regras de negócio estão presentes em qualquer tipo de negócio seja ele físico como uma loja ou digital como um software, garante uma boa comunicação com o cliente e claro afetam diretamente o lucro. Podemos tomar como exemplo de uma regra de negócio a forma como um vendedor se comunica com o cliente, o fluxo necessário para realizar a venda do produto entre outros, então podemos dizer que as RN constituem a forma como o negócio vai e deve funcionar.

Podemos imaginar o cenário do vendedor Antônio, que vende Coco na praia, Antônio vende seus cocos todos os dias e mesmo assim tem um lucro baixo e perde muitos cocos devido ao número baixo de vendas, a forma como o Antônio realiza suas vendas exige que os cocos fiquem exposto e sem uma refrigeração constante, gerando uma alta taxa de perda das suas mercadorias e fazendo com que suas vendas sejam maiores apenas no período da manhã, onde tem um baixo fluxo de pedestres, percebendo isso ele decide observar a concorrência e percebe que mesmo aqueles que realizam suas vendas durante todo o dia ficam posicionados em um lugar fixo do calçadão e sempre mantem algum coco amostra, mas não vende eles e os cocos que são vendidos estão dentro de uma caixa térmica e com gelo, percebendo a causa da sua baixa lucratividade e as diferenças entre seu modo de venda e dos concorrentes ele decide criar algumas regras para melhorar o seu negócio:

1.	Estabelecer um lugar amplo.
2.	Meios de armazenar os cocos.
3.	Sempre manter os cocos refrigerados.
4.	Cadeiras para os clientes.
5.	Canudos.
6.	Papel para as mãos.

As regras criadas pelo Antônio moldam a forma e a maneira de como a venda deve funcionar e focam na experiencia do cliente final, oferecendo recursos que a concorrência não oferece como Canudos e Papeis para as mãos por exemplo.

Com as regras 2 e 3 a taxa de perda dos cocos caem consideravelmente e as RN 1, 4, 5 e 6 mantém uma alta rotação de clientes já que essas regras geram conforto e comodidade aos clientes. Nos casos que geram comodidade ao cliente como os Canudos, eles podem vir como um gesto de boa vontade do atendente/vendedor, em um programa de computador poderíamos definir o oferecimento do canudo como um requisito funcional que atua como uma regra de negócio, então muitas vezes um RF podem sim atuar como uma RN e intervir diretamente no negócio, gerando situações como a venda talheres extras.

O cenário acima tenta ilustrar como as RN são importantes para um bom funcionamento e que em outras palavras são elas que moldam e estruturam o negócio.

1.	[**RN001**] – A tarefa deve ter uma data inicial e uma data de término 
Toda tarefa criada pelo usuário deve ter pelo menos uma data de início que não seja menor que a data de criação da tarefa e uma data de término que seja maior ou igual a data de criação e início da tarefa.
2.	[**RN002**] – A navegação assistida deve ter uma configuração base
A navegação assistida deve ter uma configuração básica para gerar assistência para o usuário, sendo sempre o dia e horário em que o usuário acessa o sistema.
3.	[**RN003**] – A tarefa deve ter uma descrição
A tarefa deve sempre ter uma descrição
4.	[**RN004**] – A tarefa pode ser concluída
A tarefa pode ser concluída a qualquer momento pelo usuário
5.	[**RN005**] – Armazenar os grupos de tarefas
Todo os grupos de tarefas devem ser salvos quando são criados, atualizados e excluídos



Agradeço a leitura e fique a vontade para fazer o build do Todo e usar no seu dia-a-dia, mas peço que [respeite a licença de uso](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt_BR) da branch V2!

E caso sinta que o aplicativo ajudou você ou algum conhecido, se puder dar uma forcinha também agradeço, rss... 😂

<p>
<img src="https://user-images.githubusercontent.com/16112395/223235753-e9aef3cb-e899-4706-837e-85040be61df7.jpg" width="150" height="150"/>
</p>

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/PedroGuilhermeFariaDuarte/todo/tree/v2">todo</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="http://www.instragam.com/instadaonedev/">ONEDEV Developments</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>
