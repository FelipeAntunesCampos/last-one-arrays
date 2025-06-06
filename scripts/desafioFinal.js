let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  
//1) Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.

let ultimoElementoAlpha = inventarioAlpha.pop();

console.log(inventarioAlpha); // Imprimi lista modificada
console.log(ultimoElementoAlpha); // Imprimi o item que foi retirado da lista

//2) Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
let ultimoElementoBeta = inventarioBeta.pop();

console.log(inventarioBeta); // Imprimi lista modificada
console.log(ultimoElementoBeta); // Imprimi o item que foi retirado da lista

//3) Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
let elementosAdicionadosAlpha = inventarioAlpha.push('Memória Galáctica', 'Capa de Invisibilidade', 'Globo de plasma');//Adiciona 3 itens da terra na lista alpha

console.log(inventarioAlpha); // Imprimi lista modificada

//4) Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
let elementosAdicionadosBeta = inventarioBeta.push('Fragmento Prismático', 'Núcleo de Plasma');//Adiciona 2 itens do kepler na lista beta

console.log(inventarioBeta);//Imprimi lista modificada

//5) Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
let itemAMoverAlpha = inventarioAlpha[7]; // Armazena o valor do item
inventarioAlpha.splice(7, 1); // Remove o item
inventarioAlpha.splice(0, 1, itemAMoverAlpha); // Insere o item na nova posição
console.log(inventarioAlpha);

//6) Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
let itemAMoverBeta = inventarioBeta[7]; // Armazena o valor do item
inventarioBeta.splice(7, 1); // Remove o item
inventarioBeta.splice(0, 1, itemAMoverBeta); // Insere o item na nova posição
console.log(inventarioBeta);

//7) Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let itemRemovidoAlpha = inventarioAlpha.shift(); //Remove o primeiro item da lista
console.log(inventarioAlpha); //Imprimi valor na tela

//8) O primeiro item da Beta pertence a um museu e deve ser removido.
let itemRemovidoBeta = inventarioBeta.shift(); //Remove o primeiro item da lista
console.log(inventarioBeta); //Imprimi valor na tela

//9) Verifique se a “Relíquia de Zordon” está presente no inventário Beta.
console.log(`O invetário beta inclui Relíquia de Zordon? ${inventarioBeta.includes("Relíquia de Zordon")}`);

//10) Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha.
console.log(`O invetário Alpha inclui Relíquia de Zordon? ${inventarioBeta.includes("Nanofibra Luminosa")}`);

//11) Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.
// Extrai todos os nomes de planetas, permitindo duplicatas.
let todosPlanetas = inventarioAlpha.map(item => item[1]);
console.log(`Lista alpha apenas com os nomes dos planetas: ${todosPlanetas.join(', ')}`);

//12)Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
let primeirosDez = inventarioBeta.slice(0, 11); //Adiciona os 10 primeiros da lista beta itens a variavel
console.log(`Lista beta apenas com os dez primeiros itens da lista: ${primeirosDez.join(',  ')}`);

//13) Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let primeirosCincoItensBeta = inventarioBeta.slice(0, 6); //adiciona os cinco primeiros itens da lista beta a variavel
console.log(primeirosCincoItensBeta);

//14) Separe os 10 últimos itens do inventário Alpha para estudo temporal.
let ultimosDezItensAlpha = inventarioAlpha.slice(-10);//adiciona os 10 ultimos itens da lista beta a variavel
console.log(ultimosDezItensAlpha);

//15) O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
let itemSubstituido = inventarioAlpha.splice(6, 1); //Remove um item da posição 5 e adiciona a variavel
console.log('O item substituido foi o', itemSubstituido,' inventario atual ', inventarioAlpha);

//16) Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
console.log(inventarioBeta.length); //Verificar o tamaho do invetario 
inventarioBeta.splice(13, 2); //Na posição 12 remove 2 itens. (posição 12 metade da lista)
console.log(inventarioBeta);

//17) Unifique os inventários Alpha e Beta em uma única estrutura.
console.log(`Inventários combinados: ${inventarioAlpha.concat(inventarioBeta).join(', ')}`); //Junta as duas lista e separa por virgula

//18) Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let cincoPrimeirosItensBeta = inventarioBeta.slice(0, 6); //Cria uma variavel com os 5 primeiros itens da lista beta
let cincoPrimeirosItensAlpha = inventarioAlpha.slice(0, 6); //Cria uma variavel com os 5 primeiros itens da lista alpha
console.log('-----------------------------------------');
console.log(`5 primeiros itens dos inventários alpha e beta combinados: ${cincoPrimeirosItensAlpha.concat(cincoPrimeirosItensBeta).join(', ')}`); //Junta os dois invetarios

//19)Crie uma versão com os nomes de todos os itens da Beta em letras maiúsculas.
let betaMaiusculo = inventarioBeta.map((item) => [
    item[0].toUpperCase(),
    item[1],
    item[2],
]);
console.log(betaMaiusculo);


//20) Converta os valores de todos os itens da Alpha para uma moeda interestelar (multiplicação).
let todosItensAlpha = inventarioAlpha.map(item => item[2]); //adiciona os itens do inventario na variavel 
let apenasOsNumerosAlphas = todosItensAlpha.filter(item => typeof item === 'number'); //verifica se o numero é inteiro
let resultado = apenasOsNumerosAlphas.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1); // faz a multiplicação do numero
console.log(resultado);

//21)Filtre da Beta apenas os itens que custam mais de 7000 créditos.
let invetarioBetaFiltrado = inventarioBeta.filter(item => item[2] > 7000); //coloca os itens do inventário beta que forem maiores que 7000 em um variavel

console.log(`inventário filtrado (itens com mais de 7000 créditos): ${invetarioBetaFiltrado}`);

//22) Filtre da Alpha todos os itens originários da Terra para despacho diplomático.
let invetarioAlphaFiltrado = inventarioAlpha.filter(item => item[1] === 'Terra'); //coloca os itens do inventário alpha que tiverem o nome Terra em uma váriavel 

console.log(`inventário filtrado (itens originários da Terra ): ${invetarioAlphaFiltrado}`);

//23) Reorganize os itens da Beta do menor para o maior valor.
let listaDeNumerosBetaModificada = inventarioBeta.sort((a, b) => b - a);
console.log(listaDeNumerosBetaModificada);

//24) Reorganize a lista da Alpha em ordem alfabética dos nomes dos artefatos.
let inventarioAlphaReorganizado = inventarioAlpha.sort();
console.log(inventarioAlpha); 

//25) Inverta a ordem de todos os itens da Beta para visualização reversa.
let listaInvertida = inventarioBeta.reverse();
console.log(listaInvertida);

//26) Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
let listaNumerosAlphaModificada = inventarioAlpha.slice(0, 15);
listaDeNumerosBetaModificada = listaDeNumerosBetaModificada.reverse();
console.log(listaDeNumerosBetaModificada);

//27) Crie uma prévia com os nomes e planetas dos 10 itens mais valiosos da Alpha.
let listaOrdenada = inventarioAlpha.sort((a, b) => b - a); // Ordena a lista em ordem decrescente (do maior para o menor)
let dezMaisValiosos = listaOrdenada.slice(0, 10);// Obtém os 10 primeiros itens (os mais valiosos)
console.log(dezMaisValiosos);

//28) Extraia os itens da Beta que foram coletados em luas (ex: Lua, Europa, Titã…).
let invetarioBetaFiltradoLua = inventarioBeta.filter(item => item[1] === 'lua'); //coloca os itens do inventário alpha que tiverem o nome Terra em uma váriavel 
console.log(`inventário filtrado (itens originários da lua ): ${invetarioAlphaFiltrado}`);

//29) Identifique e mova para o final da Alpha todos os itens com valor abaixo de 4000.
let inventarioAlphaFiltradoValores = inventarioAlpha.filter(item => item[2] < 4000); //coloca os itens do inventário alpha que forem menores que 4000 em um variavel
inventarioAlpha.push(inventarioAlphaFiltradoValores);
console.log(inventarioAlpha);

//30)Conte quantos itens do inventário Beta vieram de planetas do sistema solar interno.
let inventarioModificadoSistemaSolarInterno = inventarioBeta.filter(item => item[1] === 'Sol');
console.log('Dois itens vieram de planetas do sistema solar interno. ',inventarioModificadoSistemaSolarInterno,inventarioModificadoSistemaSolarInterno.length);
