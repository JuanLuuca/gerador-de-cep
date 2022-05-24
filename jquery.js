$("#cep").on('blur', function () {
    const valor = $(this).val();
    $.get("https://viacep.com.br/ws/" + valor + "/json/", function (dados, status) {
        $('#cidade').val(dados.localidade);
        $('#estado').val(dados.uf);
    });
})