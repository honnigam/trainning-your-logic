
var numSecreto = parseInt (Math.random()*1001);  //"1001 multiplicando pelo math.rando que é igual à 0,99999"
var tentativas = 0
var tentativasRest = 15

   while (chute != numSecreto) {
      var chute = prompt('Digite um numero entre 0 e 1000')
      tentativas = tentativas + 1;
      tentativasRest = tentativasRest - 1;

      if (chute == numSecreto) {
         alert ('parabéns! você acertou com '+ tentativas +' chutes :)')
      }
      

      else if (chute >= 1001) {
         alert ('o numero ' + chute + ' não é válido' )
      } 

      else if (chute < numSecreto) {
         alert ('errou... o numero é maior que ' + chute + '\n' +'você deu ' + tentativas + ' chutes até agora' + '\n' +  'você possui: ' + tentativasRest + ' tentativas')
      }

      else if (chute > numSecreto) {
         alert ('errou... o numero é menor que ' + chute+ '\n' +
         'chute: ' + tentativas + ' de ' + tentativasRest + ' restantes')
      }       


      if (tentativasRest < 1 ){
         alert('você atingiu o numero de tentativas, o jogo acabou e o numero secreto era ' + numSecreto)
         break
   } 
   }
