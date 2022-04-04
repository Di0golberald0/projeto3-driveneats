let pedidos = 0;

function selectprato(elemento) {
  
  const botao = document.querySelector(".botao");
  
  const escolha = document.querySelector(".pratos").querySelector(".selecionado");

  if (escolha !== null) {
          const oldvetor = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".vector");
          oldvetor.classList.toggle("display");
          
          escolha.classList.toggle("selecionado");
          
          pedidos = pedidos - 1;

          const botaoverde = document.querySelector(".fechar");

          if(botaoverde !== null) {  
            botao.classList.toggle("fechar");
            botao.innerHTML = `Selecione os 3 itens para fechar o pedido`;
          }
  }

  if(escolha !== elemento) {
            elemento.classList.toggle("selecionado");

            const newvetor = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".vector");
            newvetor.classList.toggle("display");

            pedidos = pedidos + 1;

            if(pedidos === 3) {    
              botao.classList.toggle("fechar");
              botao.innerHTML = `Fechar pedido`;
            }
  }

  console.log(pedidos)

}

function selectbebida(elemento) {
  
  const botao = document.querySelector(".botao");
  
  const escolha = document.querySelector(".bebidas").querySelector(".selecionado");

  if (escolha !== null) {
    const oldvetor = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".vector");
    oldvetor.classList.toggle("display");

    escolha.classList.toggle("selecionado");

    pedidos = pedidos - 1;

    const botaoverde = document.querySelector(".fechar");

    if(botaoverde !== null) {
      botao.classList.toggle("fechar");
      botao.innerHTML = `Selecione os 3 itens para fechar o pedido`;
    }
  }

  if(escolha !== elemento) {
      elemento.classList.toggle("selecionado");
      
      const newvetor = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".vector");
      newvetor.classList.toggle("display");
      
      pedidos = pedidos + 1;

      if(pedidos === 3) {
        botao.classList.toggle("fechar");
        botao.innerHTML = `Fechar pedido`;
      }      
  }

  console.log(pedidos)

}

function selectsobremesa(elemento) {
  
  const botao = document.querySelector(".botao");

  const escolha = document.querySelector(".sobremesas").querySelector(".selecionado");

  if (escolha !== null) {
    const oldvetor = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".vector");
    oldvetor.classList.toggle("display");
    
    escolha.classList.toggle("selecionado");

    pedidos = pedidos - 1;
    
    const botaoverde = document.querySelector(".fechar");

    if(botaoverde !== null) {
      botao.classList.toggle("fechar");
      botao.innerHTML = `Selecione os 3 itens para fechar o pedido`;
    }
  }

  if(escolha !== elemento) {
      elemento.classList.toggle("selecionado");

      const newvetor = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".vector");
      newvetor.classList.toggle("display");
      
      pedidos = pedidos + 1;

      if(pedidos === 3) {
        botao.classList.toggle("fechar");
        botao.innerHTML = `Fechar pedido`;
      }
  }

  console.log(pedidos)

}

function finalizarPedido() {
  const intermediario = document.querySelector(".intermediario");
  const confirmacao = document.querySelector(".confirmacao");
  let ponto;
  let numeroprato;
  let numerobebida;
  let numerosobremesa;

  let acharprato = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".nome-item");
  let prato = document.querySelector(".prato");
  prato.innerHTML = `${acharprato.innerHTML}`;


  let acharvalorprato = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".preco");
  let valorprato = document.querySelector(".valor-prato");
  valorprato.innerHTML = `${acharvalorprato.innerHTML}`;
  
  ponto = acharvalorprato.innerHTML.replace(',','.');
  console.log(ponto)
  numeroprato = ponto.replace('R$ ','');
  console.log(numeroprato)


  let acharbebida = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".nome-item");
  let bebida = document.querySelector(".bebida");
  bebida.innerHTML = `${acharbebida.innerHTML}`;


  let acharvalorbebida = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".preco");
  let valorbebida = document.querySelector(".valor-bebida");
  valorbebida.innerHTML = `${acharvalorbebida.innerHTML}`;
  
  ponto = acharvalorbebida.innerHTML.replace(',','.');
  console.log(ponto)
  numerobebida = ponto.replace('R$ ','');
  console.log(numerobebida)


  let acharsobremesa = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".nome-item");
  let sobremesa = document.querySelector(".sobremesa");
  sobremesa.innerHTML = `${acharsobremesa.innerHTML}`;


  let acharvalorsobremesa = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".preco");
  let valorsobremesa = document.querySelector(".valor-sobremesa");
  valorsobremesa.innerHTML = `${acharvalorsobremesa.innerHTML}`;

  ponto = acharvalorsobremesa.innerHTML.replace(',','.');
  console.log(ponto)
  numerosobremesa = ponto.replace('R$ ','');
  console.log(numerosobremesa)



  let valor = Number(numeroprato) + Number(numerobebida) + Number(numerosobremesa);
  console.log(valor)

  let valortotal = document.querySelector(".valor-total"); 
  valor = valor.toFixed(2);
  valortotal.innerHTML = `R$ ${valor}`;
  valortotal.innerHTML = valortotal.innerHTML.replace('.',',');

  if(pedidos === 3) {

    intermediario.classList.toggle("display");
    confirmacao.classList.toggle("display");
    pedidos = pedidos + 1;

  }

}

function cancelar() {
  const intermediario = document.querySelector(".intermediario");
  const confirmacao = document.querySelector(".confirmacao");

  intermediario.classList.toggle("display");
  confirmacao.classList.toggle("display");
  pedidos = pedidos - 1;
}

function terminar() {
  let prato = document.querySelector(".prato");
  let bebida = document.querySelector(".bebida");
  let sobremesa = document.querySelector(".sobremesa");
  let valortotal = document.querySelector(".valor-total");
  let textoWhats = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${prato.innerHTML}
  - Bebida: ${bebida.innerHTML}
  - Sobremesa: ${sobremesa.innerHTML}
  Total: ${valortotal.innerHTML}`);
  let link = document.querySelector(".linkwhats");
  link.href = `https://wa.me/5571999511712?text=${textoWhats}`;
}