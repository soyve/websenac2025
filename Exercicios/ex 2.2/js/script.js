/*
Exercício 2.2
Para um jogo, precisamos saber se um personagem morreu 
ou não depois de sofrer um ataque. Faça uma função que 
receba 2 parâmetros, 'dano' e 'saude'. A função deve 
retornar '1' se o dano for matar o personagem (ou seja, 
deixar sua saúde menor ou igual a zero) e '0' caso 
contrário.
*/

function personagemMorreu (dano, saude) 
{
    return dano >= saude ? "Morreu" : "Vivo";

}

// Alguns teste gerados pelo Chat GPT.
console.log("Teste 01:", personagemMorreu(15,10));  //MORREU    
console.log("Teste 02:", personagemMorreu(10, 10));  //MORREU  
console.log("Teste 03:", personagemMorreu(5, 10));  //VIVO
console.log("Teste 04:", personagemMorreu(1000000, 999999));  //  MORREU
console.log("Teste 05:", personagemMorreu(999999, 1000000));  //VIVO
console.log("Teste 06:", personagemMorreu(0, 10));  // VIVO
console.log("Teste 07:", personagemMorreu(1, 0));  // MORREU