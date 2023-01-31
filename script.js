var numSecreto = parseInt (Math.random()*1001);  //"1001 multiplicando pelo math.rando que é igual à 0,99999"

while (chute != numSecreto) {
   var chute = prompt('Digite um numero entre 0 e 1000')

   if (chute == numSecreto) {
      alert ('você acertou o numero secreto')
   }
   else if (chute < numSecreto) {
      alert ('errou... o numero é maior')
   }

   else if (chute > numSecreto) {
      alert ('errou... o numero é menor')
   }
}