function calcularRank(win, loser) {
    let total = win - loser;
    let rank;
  
    if (total <= 10) {
      rank = "Ferro";
    } else if (total <= 20) {
      rank = "Bronze";
    } else if (total <= 50) {
      rank = "Prata";
    } else if (total <= 80) {
      rank = "Ouro";
    } else if (total <= 90) {
      rank = "Diamante";
    } else if (total <= 100) {
      rank = "Lendário";
    } else if (total > 100) {
      rank = "Imortal";
    } else {
      console.log("Erro");
    }
  
    return rank;
  }
  
  let win = 1233;
  let loser = 2;
  let playerRank = calcularRank(win, loser);
  console.log(`Olá Herói, seu saldo de vitórias é ${win - loser} e você está no nível ${playerRank}.`);
  