// Arrays armazenando os ceps de cada Hospital

var hospBV = ('01317000').split('');
var hospVM = ('01420000').split('');
var hospLM = ('02720000').split('');
var hospTP = ('03036000').split('');

// ======== Objetos ====================

var belaVista = {
	idd : 1,
	nome : ' Hospital Estadual Pérola Byington',
	endereco : ' Av. Brigadeiro Luís Antônio, 683 – Bela Vista',
	telefone : ' (11) 3248-8000',
	pontos: 0
}

var vilaMariana = {
	idd : 2,
	nome : ' Casa de Saúde da Mulher Professor Domingos Delascio',
	endereco : ' Rua Borges Lagoa, 418 – Vila Mariana',
	telefone : ' (11) 5084-4997',
	pontos: 0
}

var limao = {
	idd : 3,
	nome : ' Hospital Municipal Dr. Mario de Moraes Altenderfelder Silva',
	endereco : ' Av. Dep. Emílio Carlos, 3100 – Limão',
	telefone : ' (11) 3986-1128',
	pontos: 0
}

var tatuape = {
	idd : 4,
	nome : ' Hospital Municipal Carminho Carichio',
	endereco : ' Av. Celso Garcia, 4815 - Tatuapé',
	telefone : ' (11) 3394-6980',
	pontos: 0
}

// ========== Verifica quantas semelhanças há entre os ceps ==================

function verifica(hosp){

	//preventDefault(event);

	let meuCep = document.getElementById('meuCepHospitais').value; //CEP do Cliente
	let cep = meuCep.split('');

	let point = 0;

	for(let i = 0; i<=7; i++){
		if(hosp[i] == cep[i]){
			point ++;
		}else{
			i = 8;
		}
	}

	return point;
}

// ============= Adiciona uma linha à tela ===============

function newLine(hospital){

	let line = 
		`
		<ul>
			<li> ${hospital.nome}</li>
			<li> ${hospital.endereco}</li>
			<li> ${hospital.telefone}</li>
        </ul>`	
	;

	let listItem = document.createElement('li');
	listItem.setAttribute("class", "lineHosp");

	document.getElementById('lista-hospitais').appendChild(listItem).innerHTML = line;

}

// ============= Organiza os valores e chama a função que adiciona as linhas ===============

document.getElementById('hospConfirm').addEventListener('click', buscaCep);

$(document).keydown(function (e) {
	if(e.keyCode == 13){
		buscaCep();
	}
});

function buscaCep(){

	$('.lineHosp').remove();

	belaVista.pontos = verifica(hospBV);

	vilaMariana.pontos = verifica(hospVM);

	limao.pontos = verifica(hospLM);

	tatuape.pontos = verifica(hospTP);

// ============= Organiza as linhas em ordem de semelhança ===============

	var sorteio = [
		belaVista.pontos,
		vilaMariana.pontos,
		limao.pontos,
		tatuape.pontos
	]; 

	function sortfunction(a, b){
	  return (b - a)
	}

	sortlist = sorteio.sort(sortfunction);

	console.log(sortlist);

// ============= Organiza as linhas em ordem de semelhança ===============

	let lastID = [];

	for(let i=0; i<4; i++){
		switch (sortlist[i]){

			case belaVista.pontos:

				if(lastID.indexOf(belaVista.idd) == -1){
					newLine(belaVista);
					lastID.push(belaVista.idd);
					break;
				}
				
			case vilaMariana.pontos:

				if(lastID.indexOf(vilaMariana.idd) == -1){
					newLine(vilaMariana);
					lastID.push(vilaMariana.idd);
					break;
				}
				
			case limao.pontos:

				if(lastID.indexOf(limao.idd) == -1){
					newLine(limao);
					lastID.push(limao.idd);
					break;
				}
				
			case tatuape.pontos:

				if(lastID.indexOf(tatuape.idd) == -1){
					newLine(tatuape);
					lastID.push(tatuape.idd);
					break;
				}
		}
	}

	document.getElementById('meuCepHospitais').value = '';

};





