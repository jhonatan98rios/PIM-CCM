$(document).ready(function(){
// Arrays armazenando os ceps de cada Hospital

	var domPedro = ('01017-010').split('');
	var saude = ('04041-053').split('');
	var jaguare = ('05339-002').split('');
	var freguesia = ('02675-031').split('');
	var tatuape = ('03069-070').split('');
	var campoGrande = ('04675-050').split('');
	var itaquera = ('08210-790').split('');
	var marilia = ('03584-010').split('');
	var pirituba = ('02945-000').split('');

	// ======== Objetos ====================

	var ddm_domPedro = {
		idd : 1,
		nome : ' 1ª DDM - Centro',
		endereco : 'Rua Dr. Bittencourt Rodrigues, 200 – Pq. Dom Pedro',
		telefone : '(11) 3241-3328',
		pontos: 0
	}

	var ddm_saude  = {
		idd : 2,
		nome : ' 2ª DDM - Sul',
		endereco : 'Avenida Onze de julho, 89 – Saúde',
		telefone : '(11) 5084-2579',
		pontos: 0
	}

	var ddm_jaguare = {
		idd : 3,
		nome : ' 3ª DDM - Oeste',
		endereco : 'Avenida Corifeu de Azevedo Marques, 4300 - 2º andar – Jaguaré',
		telefone : '(11) 3768-4664',
		pontos: 0
	}

	var ddm_freguesia = {
		idd : 4,
		nome : ' 4ª DDM - Norte',
		endereco : 'Avenida Itaberaba, 731 - 1º andar – Freguesia do Ó',
		telefone : '(11) 3976-2908',
		pontos: 0
	}

	var ddm_tatuape = {
		idd : 5,
		nome : ' 5ª DDM - Leste',
		endereco : 'Rua Dr. Corinto Baldoíno Costa, 400 - 2º andar - Tatuapé',
		telefone : '(11) 2293-3816',
		pontos: 0
	}

	var ddm_campoGrande = {
		idd : 6,
		nome : ' 6ª DDM - Sul',
		endereco : 'Rua Sargento Manoel Barbosa da Silva, nº 115 - 2º andar – Campo Grande',
		telefone : '(11) 5521-6068 / 5686-8567',
		pontos: 0
	}

	var ddm_itaquera = {
		idd : 7,
		nome : ' 7ª DDM - Leste',
		endereco : "Rua Sabbado D'Angelo, 46 - Itaquera ",
		telefone : '(11) 2071-3488 / 2071-4707',
		pontos: 0
	}

	var ddm_marilia = {
		idd : 8,
		nome : ' 8ª DDM - Leste',
		endereco : 'Avenida Osvaldo do Valle Cordeiro, 190 - 2º andar – Jd. Marília',
		telefone : '(11) 2742-1701',
		pontos: 0
	}

	var ddm_pirituba = {
		idd : 9,
		nome : ' 9ª DDM - Oeste',
		endereco : 'Avenida Menotti Laudisio, 286 – 2º andar - Pirituba',
		telefone : '(11) 3974-8890',
		pontos: 0
	}

	// ========== Verifica quantas semelhanças há entre os ceps ==================

	function verifica(deleg){

		//preventDefault(event);

		let meuCep = document.getElementById('meuCepDelegacias').value; //CEP do Cliente
		let cep = meuCep.split('');

		let point = 0;

		for(let i = 0; i<=7; i++){
			if(deleg[i] == cep[i]){
				point ++;
			}else{
				i = 8;
			}
		}

		console.log(deleg + ' : ' + point);

		return point;
	}

	// ============= Adiciona uma linha à tela ===============

	function newLine(delegacias){

		let line = 
			`
			<ul>
				<li> ${delegacias.nome}</li>
				<li> ${delegacias.endereco}</li>
				<li> ${delegacias.telefone}</li>
			</ul>`	
		;

		let listItem = document.createElement('li');
		listItem.setAttribute("class", "lineDeleg");

		document.getElementById('lista-delegacias').appendChild(listItem).innerHTML = line;

	}

	// ============= Organiza os valores e chama a função que adiciona as linhas ===============

	document.getElementById('delegConfirm').addEventListener('click', buscaCep);

	$(document).keydown(function (e) {
		if(e.keyCode == 13){
			buscaCep();
		}
	});

	function buscaCep(){

		$('.lineDeleg').remove();

		ddm_domPedro.pontos = verifica(domPedro);
		ddm_saude.pontos = verifica(saude);
		ddm_jaguare.pontos = verifica(jaguare);
		ddm_freguesia.pontos = verifica(freguesia);
		ddm_tatuape.pontos = verifica(tatuape);
		ddm_campoGrande.pontos = verifica(campoGrande);
		ddm_itaquera.pontos = verifica(itaquera);
		ddm_marilia.pontos = verifica(marilia);
		ddm_pirituba.pontos = verifica(pirituba);

	// ============= Organiza as linhas em ordem de semelhança ===============

		var sorteio = [
			ddm_domPedro.pontos,
			ddm_saude.pontos,
			ddm_jaguare.pontos,
			ddm_freguesia.pontos,
			ddm_tatuape.pontos,
			ddm_campoGrande.pontos,
			ddm_itaquera.pontos,
			ddm_marilia.pontos,
			ddm_pirituba.pontos
		]; 

		function sortfunction(a, b){
		return (b - a)
		}

		sortlist = sorteio.sort(sortfunction);

		console.log(sortlist);

	// ============= Organiza as linhas em ordem de semelhança ===============

		let lastID = [];

		for(let i=0; i<9; i++){
			switch (sortlist[i]){

				case ddm_domPedro.pontos:

					if(lastID.indexOf(ddm_domPedro.idd) == -1){
						newLine(ddm_domPedro);
						lastID.push(ddm_domPedro.idd);
						break;
					}
					
				case ddm_saude.pontos:

					if(lastID.indexOf(ddm_saude.idd) == -1){
						newLine(ddm_saude);
						lastID.push(ddm_saude.idd);
						break;
					}
					
				case ddm_jaguare.pontos:

					if(lastID.indexOf(ddm_jaguare.idd) == -1){
						newLine(ddm_jaguare);
						lastID.push(ddm_jaguare.idd);
						break;
					}
					
				case ddm_freguesia.pontos:

					if(lastID.indexOf(ddm_freguesia.idd) == -1){
						newLine(ddm_freguesia);
						lastID.push(ddm_freguesia.idd);
						break;
					}

				case ddm_tatuape.pontos:

					if(lastID.indexOf(ddm_tatuape.idd) == -1){
						newLine(ddm_tatuape);
						lastID.push(ddm_tatuape.idd);
						break;
					}

				case ddm_campoGrande.pontos:

					if(lastID.indexOf(ddm_campoGrande.idd) == -1){
						newLine(ddm_campoGrande);
						lastID.push(ddm_campoGrande.idd);
						break;
					}

				case ddm_itaquera.pontos:

					if(lastID.indexOf(ddm_itaquera.idd) == -1){
						newLine(ddm_itaquera);
						lastID.push(ddm_itaquera.idd);
						break;
					}
				
				case ddm_marilia.pontos:

					if(lastID.indexOf(ddm_marilia.idd) == -1){
						newLine(ddm_marilia);
						lastID.push(ddm_marilia.idd);
						break;
					}
				
				case ddm_pirituba.pontos:

					if(lastID.indexOf(ddm_pirituba.idd) == -1){
						newLine(ddm_pirituba);
						lastID.push(ddm_pirituba.idd);
						break;
					}
					

			}
		}

		document.getElementById('meuCepDelegacias').value = '';

	};

});



