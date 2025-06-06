Ótimo! Vamos organizar seu README.md com as informações da sua Missão Técnica: Inventário Interplanetário.

Markdown

# 🛰️ Missão Técnica: Inventário Interplanetário – Naves Alpha & Beta

## Objetivo da Missão
A missão principal foi simular um ambiente de trabalho real na Frota Estelar, gerenciando e manipulando os inventários das naves Alpha e Beta. O objetivo era organizar, analisar e preparar artefatos raros para exposições e negociações intergalácticas, praticando a manipulação de dados e o versionamento com Git, incluindo a resolução de conflitos.

## Resumo do que foi feito
Neste projeto, foram realizadas 30 tarefas sequenciais de manipulação de arrays JavaScript, representando os inventários das naves Alpha e Beta. As operações incluíram adição, remoção, atualização, busca, filtragem, ordenação e unificação de dados. Além disso, foi simulado um cenário de conflito com Git, onde um item foi alterado em duas branches diferentes e o conflito foi resolvido manualmente, priorizando o maior valor.

---

## 🛠️ Técnicas de Manipulação de Dados Aplicadas

Foram aplicadas diversas técnicas de manipulação de arrays em JavaScript, simulando as operações de um sistema de inventário:

* **Adição de elementos:** Inserção de novos artefatos no início e no final das listas.
* **Remoção de elementos:** Exclusão de artefatos do início, do final e de posições específicas.
* **Atualização de elementos:** Modificação de informações de artefatos existentes.
* **Busca e Verificação:** Confirmação da presença de itens específicos nos inventários.
* **Extração e Filtro:** Criação de novas listas com subconjuntos de dados (primeiros/últimos itens, itens por valor, itens por origem).
* **Transformação de Dados:** Conversão de valores e formatação de nomes de itens.
* **Unificação de Listas:** Combinação de inventários em uma única estrutura.
* **Ordenação:** Reorganização dos itens com base em valores numéricos e ordem alfabética.
* **Inversão:** Alteração da ordem dos elementos na lista.
* **Contagem:** Determinação do número de itens que atendem a um critério específico.

---

## 💻 Comandos e Estratégias de Versionamento (Git) Utilizadas

Para simular o ambiente de trabalho real com versionamento, foram utilizados os seguintes comandos e estratégias Git:

* `git init`: Inicialização do repositório local.
* `git add .`: Adição de todas as modificações para a área de stage.
* `git commit -m "Mensagem"`: Registro das alterações com mensagens descritivas para cada tarefa ou conjunto de tarefas.
* `git branch <nome-da-branch>`: Criação de uma nova branch para a simulação de alterações paralelas.
* `git checkout <nome-da-branch>`: Navegação entre branches.
* `git merge <nome-da-branch>`: Tentativa de unificar as alterações de diferentes branches.

---

## ⚔️ Relato sobre o Conflito Simulado

Após completar a tarefa 20, uma simulação de conflito foi realizada para replicar um cenário comum em desenvolvimento colaborativo.

1.  **Criação de Branch Paralela:** Uma nova branch foi criada para representar um desenvolvimento separado.
2.  **Alteração Conflitante 1:** Em uma branch, o valor de um artefato específico foi alterado.
3.  **Alteração Conflitante 2:** Na branch principal (ou em outra branch), o *mesmo* artefato teve seu valor alterado de forma diferente.
4.  **Tentativa de Merge e Conflito:** Ao tentar unir as duas branches com `git merge`, o Git identificou um conflito, pois a mesma linha foi modificada de formas diferentes.
5.  **Resolução Manual:** O conflito foi resolvido manualmente, editando o arquivo para manter o valor mais alto para o artefato em questão.
6.  **Registro da Resolução:** Uma mensagem de comentário (`// Conflito resolvido manualmente: valor atualizado após revisão interplanetária.`) foi adicionada ao código para documentar a resolução.

A resolução manual do conflito foi crucial para garantir a integridade do inventário, priorizando o valor mais elevado do artefato após a revisão interplanetária.

---

**Nome Completo:** [Felipe Antunes Campos]
**Turma:** [1TDS2]
**Data:** [06/06/2025]