// Cotação de moedas do dia.
const USD = 5.67
const EUR = 6.44
const GBP = 7.67

// Obtendo os elementos do formulário

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () =>{
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = () => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        // Calcula o total.
        let total = amount * price

        // Verifica se o resultado não é um número.

        if(isNaN(total)){
            return alert("Por favor, digite o valor corretamente para converter.")
        }
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total.

        result.textContent = `${total} Reais`
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")


    } catch(error){
        // Remove a classe na
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel converter. Tente novamente mais tarde.")
    }
}

// Formata a moeda em Real Brasileiro para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}