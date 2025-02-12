# 📌 Projeto: Lista de Amigos com Sorteio

## 📖 Sobre o Projeto
Este projeto é uma aplicação web simples que permite adicionar amigos a uma lista e, posteriormente, sortear aleatoriamente um deles. O código foi desenvolvido em **JavaScript**, utilizando manipulação do DOM para exibir e atualizar a lista de amigos.

## 🚀 Funcionalidades
- **Adicionar amigos**: O usuário pode inserir nomes na lista.
- **Exibir lista de amigos**: Cada amigo adicionado aparece dinamicamente na tela.
- **Limpar o campo de entrada**: Após adicionar um amigo, o campo de entrada é limpo automaticamente.
- **Sortear um amigo**: Um nome da lista é escolhido aleatoriamente e exibido.
- **Validação**: O código impede o sorteio caso não haja amigos na lista.

## 🛠️ Tecnologias Utilizadas
- **HTML**: Estrutura da página.
- **CSS** *(opcional)*: Para estilização (não incluído no código atual, mas pode ser adicionado).
- **JavaScript**: Manipulação da lista de amigos e sorteio.

## 📜 Como Funciona o Código
1. **Adicionar um Amigo**
   - O usuário digita um nome no campo de entrada e clica no botão.
   - O nome é validado e adicionado ao array `amigos`.
   - A lista é atualizada na página.

2. **Sortear um Amigo**
   - O usuário clica no botão de sorteio.
   - O código verifica se há amigos na lista.
   - Um nome é escolhido aleatoriamente usando `Math.random()` e `Math.floor()`.
   - O nome sorteado é exibido na tela.

## 📂 Estrutura do Código
```plaintext
📂 Projeto
│-- index.html  -> Página principal
│-- script.js   -> Código JavaScript para manipulação da lista e sorteio
│-- style.css   -> (Opcional) Estilização do projeto
```

## 🎯 Possíveis Melhorias
- Adicionar um botão para remover amigos da lista.
- Estilizar a interface com **CSS** para uma melhor experiência visual.
- Implementar a opção de salvar a lista no **LocalStorage** para manter os nomes após recarregar a página.

---

💡 **Este projeto é ideal para praticar manipulação do DOM e uso de arrays em JavaScript.** Divirta-se adicionando e sorteando seus amigos! 🚀

