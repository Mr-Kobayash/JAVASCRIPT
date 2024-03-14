function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
      var genero = "";
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = "Homem";
        if (idade >= 0 && idade < 10) {
            //
            img.setAttribute("src", "testedeima.png");
        } else if (idade < 20) {
            //jovem
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src", "tamanho.png");
        } else {
            //idoso
        }
    } else if (fsex[1].checked) {
        genero = "mulher";
        if (idade >= 0 && idade < 10) {
          //crianca
        } else if (idade < 20) {
          //jovem
        } else if (idade < 50) {
          //adulto
        } else {
          //idoso
        }
    }
    res.style.textAlign = "center";
      res.innerHTML = `voce é ${genero} com ${idade} anos.`;
      res.appendChild(img)
  }
}
