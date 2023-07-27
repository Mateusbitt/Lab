const minhaPromise = new Promise((resolve, reject) => {
  // Aqui você realiza uma operação assíncrona, por exemplo, uma requisição HTTP
  // Se a operação for bem-sucedida, chame 'resolve' e passe o resultado
  // Se ocorrer um erro, chame 'reject' e passe o motivo do erro
})

minhaPromise
  .then((resultado) => {
    // Manipule o resultado caso a Promise seja resolvida com sucesso
  })
  .catch((erro) => {
    // Trate o erro caso a Promise seja rejeitada
  })

async function minhaFuncao() {
  try {
    const resultado = await minhaPromise // O código aguarda a resolução da Promise
    // Faça algo com o 'resultado' aqui
  } catch (erro) {
    // Trate o erro, caso a Promise seja rejeitada
  }
}

function obterDados() {
  return new Promise((resolve, reject) => {
    // Simulando uma requisição assíncrona que retorna dados após 2 segundos
    setTimeout(() => {
      const dados = { id: 1, nome: "Usuário" }
      // Resolvendo a Promise com os dados
      resolve(dados)
      // Caso ocorra algum erro, rejeitamos a Promise
      // reject(new Error("Erro ao obter dados"));
    }, 2000)
  })
}

async function processarDados() {
  try {
    // Espera até que a Promise seja resolvida e recebe o resultado em 'dados'
    const dados = await obterDados()
    console.log("Dados obtidos:", dados)
  } catch (erro) {
    console.error("Erro ao obter dados:", erro.message)
  }
}

processarDados()
