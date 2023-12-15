# TIC-TAC-TOE

## Sobre :question:

Esse é um projeto da disciplina de **Desenvolvimento de Sistemas WEB 1** (IMD0404)  do Instituto Metrópole Digital (IMD). Tal projeto consiste em um jogo tic-tac-toe (jogo da velha) em que os jogadores podem selecionar o tamanho do tabuleiro, variando de 3x3 a 10x10. Além disso, oferece diferentes modalidades de jogo, permitindo partidas entre dois jogadores ou jogador contra BOT.

## Funcionalidades

- Escolha do tamanho do tabuleiro: O jogador pode selecionar o tamanho do tabuleiro antes de começar o jogo, escolhendo entre 3 e 10.
- Modalidades de jogo:
  - Jogador contra jogador: Dois jogadores podem competir um contra o outro no mesmo dispositivo.
  - Jogador contra BOT: O jogador pode desafiar o computador em uma partida.
- Interface gráfica: Uma interface intuitiva que permite aos jogadores interagirem facilmente com o jogo.

## Como Jogar

1. **Escolha do Tamanho do Tabuleiro:**
   - Ao iniciar o jogo, será solicitado que o jogador selecione o tamanho do tabuleiro desejado.
2. **Escolha da Modalidade de Jogo:**
   - O jogador pode optar por jogar contra outro jogador ou contra o computador (BOT).
3. **Jogando o Jogo:**
   - Se for uma partida entre dois jogadores, eles alternam entre suas jogadas, marcando o tabuleiro com seu símbolo (X ou O).
   - Se for jogador contra BOT, o jogador faz sua jogada e o BOT responde automaticamente.

## Como Acessar o Projeto na Internet
O projeto está hospedado no **GitHub Pages** de um dos autores do projeto. Para acessá-lo acesse o link https://rubenfilipe07.github.io/tic-tac-toe/

## Como Executar o Projeto Localmente ▶️

Para executar este projeto localmente, siga estas etapas:

### Passos
1. Baixe o projeto em ``.zip``;
![download_zip_tictactoe](https://github.com/hugofsantos/tic-tac-toe/assets/74878213/d6f0889a-abd9-427f-a5c1-e36dcd1aa803)
2. Extraia o arquivo ``.zip`` utilizando algum programa/ferramenta de sua prefência;
3. Navegue até a pasta do projeto que acabou de ser extraída;
4. Acesso Local via Servidor de Arquivos:
  
    Devido às restrições de importação de arquivos usando o protocolo ``file://``, é necessário executar o projeto por meio de um servidor local. Existem várias maneiras de fazer isso:
    * Usando Python (para Python 3):
       ```bash
       python3 -m http.server
       ```
    * Usando Node.js (com http-server):
      ```bash
      npm install -g http-server 
      ```
      
      Depois execute:
      ```bash
      http-server
      ```
  
    * Usando outras ferramentas:
    Você pode optar por qualquer outra ferramenta de servidor de arquivos que preferir, como parcel, lite-server, entre outros. Basta instalar a ferramenta desejada e executar o projeto a partir do diretório clonado.
    > **OBS**: Caso você utilize *Visual Studio Code*, você pode instalar a extensão *Live Server* e clicar com o botão direito no arquivo "index.html" do projeto e clicar na opção de abrir com o *Live Server*.
5. Acesse o Projeto:
  
    Depois de iniciar o servidor local, abra o navegador e acesse o seguinte endereço:
    ```
    http://localhost:8000/
    ```
    > **OBS**: Lembre de verificar a porta padrão da ferramenta utilizada para subir o servidor local do projeto.
    > Por exemplo, caso esteja utilizando a extensão *Live Server* do *VSCode*, o projeto, por padrão, estará disponível em `http://localhost:5500/`

## Autores
| [<img alt="Hugofsantos" src="https://github.com/hugofsantos.png?size=115" width="115"><br><sub>@Hugofsantos</sub>](https://github.com/hugofsantos)<p>Hugo Santos</p>| [<img alt="Rubenfilipe07" src="https://github.com/rubenfilipe07.png?size=115" width="115"><br><sub>@Rubenfilipe07</sub>](https://github.com/rubenfilipe07)<p>Rúben Filipe</p>| [<img alt="Vanessa-Maria2" src="https://github.com/Vanessa-Maria2.png?size=115" width="115"><br><sub>@Vanessa-Maria2</sub>](https://github.com/Vanessa-Maria2)<p>Vanessa Maria</p>| 
| :---: |:---: |:---: |
