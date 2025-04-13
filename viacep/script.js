const cep = document.getElementById("cep");
const btnBuscar = document.getElementById("btnBuscar")
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");
const estado = document.getElementById("estado");


btnBuscar.addEventListener('click', (event) => {
     
     event.preventDefault(); 
     const cepValue = cep.value;
     
     const validacep = /^[0-9]{8}$/;
     if (!validacep.test(cepValue)) {
        alert('CEP inválido. O CEP deve ter 8 dígitos numéricos.');
        return;  
    }
     const url = 'https://viacep.com.br/ws/' + cepValue + '/json/';
     
     fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('Erro ao solicitar dados');
            }

            return response.json();
        })
        .then(data => {

            if(data.erro){
                alert('CEP não enontrado');
                return;
            }
            
            logradouro.innerHTML = "<strong>Logradouro:</strong> " + data.logradouro;
            bairro.innerHTML = "<strong>Bairro:</strong> " + data.bairro;
            localidade.innerHTML = "<strong>Localidade:</strong> " + data.localidade;
            uf.innerHTML = "<strong>UF:</strong> " + data.uf;
            estado.innerHTML = "<strong>Estado:</strong> " + data.estado;
            
        })
        .catch(error => {
          console.error(error);
        });
});


