console.log("Para iniciar digite: start(1,2,3,4)");
console.log("Para ver as instruções digite: help()");

let mapaOculto = [];
let mapaVisivel = [];
let tantosPorTantos = 0;
let bombas = 0;
let bandeiras = 0;
let colunaBugada = 0;
let linha = 0;
let coluna = 0;
let derrota = 0;
let numeroDeJogadas = 0;

function start(dificuldade) {
  console.clear();

  if (dificuldade == 1) {
    tantosPorTantos = 15;
    colunaBugada = 15;
    coluna = 14;
    linha = 14;
    bombas = 25;
    bandeiras = 25;
    derrota = 1;
  } else if (dificuldade == 2) {
    tantosPorTantos = 20;
    colunaBugada = 19;
    linha = 19;
    coluna = 19;
    bombas = 40;
    bandeiras = 40;
    derrota = 1;
  } else if (dificuldade == 3) {
    tantosPorTantos = 25;
    colunaBugada = 19;
    coluna = 19;
    linha = 24;
    bombas = 100;
    bandeiras = 100;
    derrota = 1;
  } else if (dificuldade == 4) {
    tantosPorTantos = 30;
    linha = 29;
    coluna = 19;
    colunaBugada = 19;
    bombas = 150;
    bandeiras = 150;
    derrota = 1;
  } else {
    return "Por favor, insira um valor de dificuldade válido";
  }

  for (let i = 0; i < tantosPorTantos; i++) {
    let oculto = [];
    let visivel = [];
    for (let j = 0; j < colunaBugada; j++) {
      oculto.push(0);
      visivel.push("□");
    }
    mapaOculto.push(oculto);
    mapaVisivel.push(visivel);
  }
  for (let b = 0; b < bombas; b++) {
    let bool = false;
    while (bool == false) {
      let coluna = Math.floor(Math.random() * colunaBugada);
      let linha = Math.floor(Math.random() * tantosPorTantos);
      if (mapaOculto[linha][coluna] == 0) {
        mapaOculto[linha][coluna] = "X";
        bool = true;
      }
    }
  }
  for (let i = 0; i < mapaOculto.length; i++) {
    for (let j = 0; j < mapaOculto[i].length; j++) {
      if (mapaOculto[i][j] == "X") {
        if (i == 0 && j == 0) {
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i + 1][j + 1] != "X") {
            mapaOculto[i + 1][j + 1] += 1;
          }
        } else if (i == 0 && j != coluna) {
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i + 1][j + 1] != "X") {
            mapaOculto[i + 1][j + 1] += 1;
          }
          if (mapaOculto[i + 1][j - 1] != "X") {
            mapaOculto[i + 1][j - 1] += 1;
          }
        } else if (i == 0 && j == coluna) {
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i + 1][j - 1] != "X") {
            mapaOculto[i + 1][j - 1] += 1;
          }
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
        } else if (j == 0 && i != linha) {
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i + 1][j + 1] != "X") {
            mapaOculto[i + 1][j + 1] += 1;
          }
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i - 1][j + 1] != "X") {
            mapaOculto[i - 1][j + 1] += 1;
          }
        } else if (i == linha && j == 0) {
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i - 1][j + 1] != "X") {
            mapaOculto[i - 1][j + 1] += 1;
          }
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
        } else if (i == linha && j != coluna) {
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
          if (mapaOculto[i - 1][j + 1] != "X") {
            mapaOculto[i - 1][j + 1] += 1;
          }
          if (mapaOculto[i - 1][j - 1] != "X") {
            mapaOculto[i - 1][j - 1] += 1;
          }
        } else if (j == coluna && i != linha) {
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i + 1][j - 1] != "X") {
            mapaOculto[i + 1][j - 1] += 1;
          }
          if (mapaOculto[i - 1][j - 1] != "X") {
            mapaOculto[i - 1][j - 1] += 1;
          }
        } else if (j == coluna && i == linha) {
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i - 1][j - 1] != "X") {
            mapaOculto[i - 1][j - 1] += 1;
          }
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
        } else {
          if (mapaOculto[i][j + 1] != "X") {
            mapaOculto[i][j + 1] += 1;
          }
          if (mapaOculto[i][j - 1] != "X") {
            mapaOculto[i][j - 1] += 1;
          }
          if (mapaOculto[i + 1][j + 1] != "X") {
            mapaOculto[i + 1][j + 1] += 1;
          }
          if (mapaOculto[i + 1][j - 1] != "X") {
            mapaOculto[i + 1][j - 1] += 1;
          }
          if (mapaOculto[i + 1][j] != "X") {
            mapaOculto[i + 1][j] += 1;
          }
          if (mapaOculto[i - 1][j] != "X") {
            mapaOculto[i - 1][j] += 1;
          }
          if (mapaOculto[i - 1][j + 1] != "X") {
            mapaOculto[i - 1][j + 1] += 1;
          }
          if (mapaOculto[i - 1][j - 1] != "X") {
            mapaOculto[i - 1][j - 1] += 1;
          }
        }
      }
    }
  }
  console.log(`Numero de bandeiras: ${bandeiras}`);
  console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
  console.table(mapaVisivel);
}

function help() {
  console.clear();
  console.log(
    "Para jogar em alguma posição digite: jogar(linha, coluna).\nPara colocar a bandeirinha ou retirar a bandeira digite: bandeira(linha, coluna).\nPara reiniciar o jogo aperte a tecla 'F5'.\nPara começar a jogar digite: iniciar(1,2,3,4)."
  );
}

function bandeira(linha, coluna) {
  console.clear();
  console.log(`Numero de bandeiras: ${bandeiras}`);
  console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
  if (mapaVisivel[linha][coluna] == "⚑" && bandeiras >= 0) {
    mapaVisivel[linha][coluna] = "□";
    bandeiras++;
    console.table(mapaVisivel);
    console.log(
      "Impossivel colcar bandeira na posição indicada! Verifique se a posição é um campo oculto."
    );
    console.table(mapaVisivel);
  } else if (bandeiras == 0) {
    console.table(mapaVisivel);
    console.log("Você não tem mais bandeiras!");
  } else if (mapaVisivel[linha][coluna] == "□") {
    mapaVisivel[linha][coluna] = "⚑";
    bandeiras--;
    console.table(mapaVisivel);
  } else {
    bandeira--;
  }
  if (mapaVisivel[linha][coluna] == "⚑" && mapaOculto[linha][coluna] == "X") {
    bombas += -1;
  }
  if (bombas == 0) {
    console.clear();
    console.log(`Numero de bandeiras: ${bandeiras}`);
    console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
    console.table(mapaVisivel);
    return "PARABÉNS! Você Venceu! Aperte F5 para reiniciar.";
  }
}

function jogar(linha, coluna) {
  console.log(`Numero de bandeiras: ${bandeiras}`);
  console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
  if (linha >= 0 && coluna >= 0) {
    if (derrota == 1 && bombas > 0) {
      console.clear();
      if (mapaVisivel[linha][coluna] == "⚑") {
        console.log(
          "PRESTE ATENÇÃO ONDE VOCÊ JOGA! Esta posição está marcada!"
        );
      } else if (
        mapaOculto[linha][coluna] == 0 &&
        mapaVisivel[linha][coluna] == "□"
      ) {
        console.log(`Numero de bandeiras: ${bandeiras}`);
        numeroDeJogadas++;
        console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
        mapaVisivel[linha][coluna] = 0;
      } else if (mapaOculto[linha][coluna] == "X") {
        mapaVisivel[linha][coluna] = "X";
        derrota--;
        console.table(mapaOculto);
        return "Você Perdeu! Aperte F5 para retornar ao início";
      } else {
        console.log(`Numero de bandeiras: ${bandeiras}`);
        numeroDeJogadas++;
        console.log(`Numero de jogadas realizadas: ${numeroDeJogadas}`);
        mapaVisivel[linha][coluna] = mapaOculto[linha][coluna];
      }
      expandir();
    } else {
      console.log("Você não pode mais jogar!");
    }
  }
}
// break

function expandir() {
  for (let loop = 0; loop < 30; loop++) {
    for (let i = 0; i < mapaVisivel.length; i++) {
      for (let j = 0; j < mapaVisivel[i].length; j++) {
        if (mapaVisivel[i][j] == 0) {
          if (i == 0 && j == 0) {
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i + 1][j + 1] = mapaOculto[i + 1][j + 1];
          } else if (i == 0 && j != coluna) {
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i + 1][j + 1] = mapaOculto[i + 1][j + 1];
            mapaVisivel[i + 1][j - 1] = mapaOculto[i + 1][j - 1];
          } else if (i == 0 && j == coluna) {
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i + 1][j - 1] = mapaOculto[i + 1][j - 1];
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
          } else if (j == 0 && i != linha) {
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i + 1][j + 1] = mapaOculto[i + 1][j + 1];
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i - 1][j + 1] = mapaOculto[i - 1][j + 1];
          } else if (i == linha && j == 0) {
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i - 1][j + 1] = mapaOculto[i - 1][j + 1];
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
          } else if (i == linha && j != coluna) {
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
            mapaVisivel[i - 1][j + 1] = mapaOculto[i - 1][j + 1];
            mapaVisivel[i - 1][j - 1] = mapaOculto[i - 1][j - 1];
          } else if (j == coluna && i != linha) {
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i + 1][j - 1] = mapaOculto[i + 1][j - 1];
            mapaVisivel[i - 1][j - 1] = mapaOculto[i - 1][j - 1];
          } else if (j == coluna && i == linha) {
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i - 1][j - 1] = mapaOculto[i - 1][j - 1];
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
          } else {
            mapaVisivel[i][j + 1] = mapaOculto[i][j + 1];
            mapaVisivel[i][j - 1] = mapaOculto[i][j - 1];
            mapaVisivel[i + 1][j + 1] = mapaOculto[i + 1][j + 1];
            mapaVisivel[i + 1][j - 1] = mapaOculto[i + 1][j - 1];
            mapaVisivel[i + 1][j] = mapaOculto[i + 1][j];
            mapaVisivel[i - 1][j] = mapaOculto[i - 1][j];
            mapaVisivel[i - 1][j + 1] = mapaOculto[i - 1][j + 1];
            mapaVisivel[i - 1][j - 1] = mapaOculto[i - 1][j - 1];
          }
        }
      }
    }
  }
  console.table(mapaVisivel);
}

let boby = document.querySelector(".container");
let h1 = document.querySelector(".title");
let p = document.querySelector(".p");

// set invals
// set time alt

