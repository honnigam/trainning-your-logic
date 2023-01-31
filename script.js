var numSecreto = parseInt (Math.random()*1001);  //"1001 multiplicando pelo math.rando que é igual à 0,99999"

   while (chute != numSecreto) {
      var chute = prompt('Digite um numero entre 0 e 1000')

      if (chute == numSecreto) {
         alert ('você acertou o numero secreto com ' + tentativas + ' tentativas')
      }
      else if (chute >= 1001) {
         alert ('o numero ' + chute + ' não é válido' )
      }
      else if (chute < numSecreto) {
         alert ('errou... o numero é maior que ' + chute)
      }

      else if (chute > numSecreto) {
         alert ('errou... o numero é menor que ' + chute)
      }

   }
