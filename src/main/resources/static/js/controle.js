function validString(value, maxSize) { return value.length > 0 && value.length <= maxSize; }
function validNumber(value) { return Number(value) == value && value != '' && value >= 0; }
function validInteger(value) { return validNumber(value) && value % 1 === 0; }

function verificarCliente() {
	var cpf = document.getElementsByName("cpfCliente")[0];
	var nome = document.getElementsByName("nomeCliente")[0];
	var cep = document.getElementsByName("cepCliente")[0];
	
	var stateA = cpf.value.length == 11 && validNumber(cpf.value);
	var stateB = validString(nome.value, 50);
	var stateC = cep.value.length == 8 && validNumber(cep.value);
	
	habilitar([cpf, nome, cep], [stateA, stateB, stateC]);
}

function verificarFornecedor() {
	var cnpj = document.getElementsByName("cnpjFornecedor")[0];
	var nome = document.getElementsByName("nomeFornecedor")[0];
	
	var stateA = cnpj.value.length == 14 && validNumber(cnpj.value);
	var stateB = validString(nome.value, 50);
	
	habilitar([cnpj, nome], [stateA, stateB]);
}

function verificarProduto() {
	var nome = document.getElementsByName("nomeProduto")[0];
	var fornecedor = document.getElementsByName("cnpjFornecedor")[0];
	var preco = document.getElementsByName("precoProduto")[0];
	var estoque = document.getElementsByName("qntProduto")[0];
	
	var stateA = validString(nome.value, 50);
	var stateB = fornecedor.value.length > 0;
	var stateC = validNumber(preco.value);
	var stateD = validInteger(estoque.value);
	
	habilitar([nome, fornecedor, preco, estoque], [stateA, stateB, stateC, stateD]);
}

function verificarVenda() {
	var produto = document.getElementsByName("idProduto")[0];
	var quantidade = document.getElementsByName("qntCompra")[0];
	var cliente = document.getElementsByName("cpfCliente")[0];
	
	var stateA = produto.value.length > 0;
	var stateB = validInteger(quantidade.value);
	var stateC = cliente.value.length > 0;
	
	habilitar([produto, quantidade, cliente], [stateA, stateB, stateC]);
}

function habilitar(inputs, bools) {
	var state = true;
	for(var i = 0; i < inputs.length; i++) {
		state = state && bools[i];
		inputs[i].style.borderColor = bools[i] ? "black" : "red";
	}
	
	document.getElementById("btnSalvar").disabled = !state;
}