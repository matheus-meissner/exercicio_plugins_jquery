$('form').on('submit', function(e){
    e.preventDefault();
})


// Aplica máscara ao telefone
$('#tel').mask('(00) 00000-0000', {
    placeholder: '(__) _____-____'
});

// Aplica máscara ao CPF
$('#cpf').mask('000.000.000-00', {
    placeholder: '___.___.___-__'
});

//Aplica máscara ao CEP
$('#cep').mask('00000-000', {
    placeholder: '_____-___'
})

// Função para preencher o endereço completo com base no CEP
function preencherEndereco(cep) {
    // Faz requisição para a API dos Correios
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
        // Verificar se o CEP foi encontrado
        if (!("erro" in data)) {
            // Preencher os campos de endereço completo
            $('#endereco').val(data.logradouro);
            $('#bairro').val(data.bairro);
            $('#cidade').val(data.localidade);
            $('#estado').val(data.uf);
        } else {
            alert('CEP não encontrado.');
        }
    });
}

// Evento de mudança no campo de CEP
$('#cep').on('change', function() {
    // Obter o valor do campo de CEP
    var cep = $(this).val();
    // Chamar a função para preencher o endereço completo
    preencherEndereco(cep);
});
