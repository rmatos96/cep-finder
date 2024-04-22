import api from "./services/api"
import "./style.css"


const input = document.querySelector('#input')
const button = document.querySelector('#button')

// 01310930

async function handleSearchCep(){
    if(input.value === ''){
        alert('Digite um CEP válido')
        return
    }

    try{
        const response = await api.get(`${input.value}/json`)
        console.log(response.data);
        document.querySelector('#main').innerHTML = `
        <h2 class="my-4 mx-0 text-[39px]">CEP: ${response.data.cep}</h2>

        <span class="mb-4 font-bold">${response.data.logradouro}</span>
        <span class="mb-4 font-bold">Comlemento: ${response.data.complemento}</span>
        <span class="mb-4 font-bold">${response.data.bairro}</span>
        <span class="mb-4 font-bold">${response.data.localidade} - ${response.data.uf}</span>
        `
        input.value = ''
    }catch{
        alert('Ops, erro ao buscar')
        input.value = ''
    }
}

button.addEventListener('click', function() {
    handleSearchCep()
})

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearchCep()
    }
})