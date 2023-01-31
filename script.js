var numSecreto = 581 

while (chute != numSecreto) {
   var chute = prompt('Digite um numero entre 1 e 1000')

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