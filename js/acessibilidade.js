/*
$(document).ready(function(){

	var teclaVoltar = 107;
	var teclaContraste = 109;

	//107 = +
	//109 = -
*/

	/* [NumPad 0] 96 [NumPad 1] 97 [NumPad 2] 98 [NumPad 3] 99 [NumPad 4] 100 [NumPad 5] 101 [NumPad 6] 102 [NumPad 7] 103 [NumPad 8] 104 [NumPad 9] 105 */


/*
	var ativa = 'inicio';
	
	var descricaoServicos = 'Pressione 1 para ver as Palestras agendadas! Pressione 2 para ver, qual o hospital especializado, mais próximo de você. Pressione 3 para ver, qual a delegacia especializada, mais próxima de você. Pressione menos para acessar o modo de alto contraste. Pressione mais para voltar';

	$(document).keydown(function (e) {

		if(ativa == 'inicio'){

//==================================================================================================================================================================================

			if(e.keyCode == teclaContraste){
				altoContraste();
				responsiveVoice.speak('Alto Contraste Ativado. ' + descricaoServicos, 'Brazilian Portuguese Male', {rate: 1.2});
			}

			for(var i= 96; i<= 107; i++){

				if(e.keyCode == i){
					responsiveVoice.speak("Seja bem vinda à central de serviços do Centro de Cidadania das Mulheres." + descricaoServicos ,'Brazilian Portuguese Male', {rate: 1.2});
					abrirServ();
				}

			}

//==================================================================================================================================================================================
			
		}else

		if(ativa == 'servicos'){
			
			if(e.keyCode == teclaVoltar){
				voltar();
				responsiveVoice.speak('Precione qualquer tecla para ver os serviços!', 'Brazilian Portuguese Male', {rate: 1.2});
			};

			if(e.keyCode == 97){
				abrirPalestra();
				responsiveVoice.speak('Palestras: As palestras agendadas são: 1. - Título: Violência doméstica. Descrição: A Vida da mulher e a violência doméstica. Palestrante: Hugo Barros. Local: Unip Tatuapé. Data: 07/12/2019 às 18 horas. Pressione mais para voltar', 'Brazilian Portuguese Male',{rate: 1.2});
			};

			if(e.keyCode == 98){
				abrirHospitais();
				responsiveVoice.speak('Busca por hospitais: Insira seu CEP para saber quais são os hospitais especializados, mais proximos de você! Pressiona Enter para confirmar! Pressione mais para voltar ', 'Brazilian Portuguese Male', {rate: 1.2});
				document.getElementById('meuCepHospitais').focus();
				setTimeout(function(){ document.getElementById('meuCepHospitais').value = ''; }, 100);
			};

			if(e.keyCode == 99){
				abrirDelegacias();
				responsiveVoice.speak('Busca por delegacias: Insira seu CEP para saber quais são as delegacias especializadas, mais proximas de você! Pressiona Enter para confirmar! Pressione mais para voltar ', 'Brazilian Portuguese Male', {rate: 1.2});
				document.getElementById('meuCepDelegacias').focus();
				setTimeout(function(){ document.getElementById('meuCepDelegacias').value = ''; }, 100);
			};

			if(e.keyCode == teclaContraste){
				altoContraste();
				responsiveVoice.speak('Alto Contraste Ativado.' + descricaoServicos, 'Brazilian Portuguese Male', {rate: 1.2});
			};

		}else

		if(ativa == 'palestras' || ativa == 'hospitais' || ativa == 'delegacias'){
			
			if(e.keyCode == teclaVoltar){
				voltar();
				responsiveVoice.speak('Voltar. Pressione 1 para ver as Palestras agendadas! Pressione 2 para ver, qual o hospital especializado, mais próximo de você.	Pressione 3 para ver, qual a delegacia especializada, mais próxima de você.	Pressione menos para acessar o modo de alto contraste. Pressione mais para voltar!', 'Brazilian Portuguese Male', {rate: 1.2});
			};

			if(e.keyCode == teclaContraste){
				altoContraste();
				responsiveVoice.speak('Alto Contraste Ativado', 'Brazilian Portuguese Male', {rate: 1.2});
			};

		};


				
	});


// ===================================================================

	function abrirServ(){
		$('#inicio').hide();
		$('#servicos').fadeIn();
		$('.page-control').fadeIn();
		ativa = 'servicos';
		$('header').css('height', '100px');
	};

	function voltar(){
		if( ativa == 'servicos' ){
			$('#inicio').fadeIn();
			$('#servicos').hide();
			$('.page-control').hide();
			ativa = 'inicio';
			$('header').css('height', '300px');
		}else{
			$('#servicos').fadeIn();
			$('#palestras, #hospitais, #delegacias').hide();
			ativa = 'servicos';
		};
	};

	function abrirPalestra(){
		$('#servicos').hide();
		$('#palestras').fadeIn();
		$('.page-control').fadeIn();
		ativa = 'palestras';
	};

	function abrirHospitais(){
		$('#servicos').hide();
		$('#hospitais').fadeIn();
		$('.page-control').fadeIn();
		$('#meuCepHospitais').focus();
		ativa = 'hospitais';
		document.getElementById('meuCepHospitais').value = '';
	};

	function abrirDelegacias(){
		$('#servicos').hide();
		$('#delegacias').fadeIn();
		$('.page-control').fadeIn();
		$('#meuCepDelegacias').focus();
		ativa = 'delegacias';
		document.getElementById('meuCepDelegacias').value = '';
	};

// ===================================================================

	let acessivel = false;

	function altoContraste(){

		if(acessivel == false){

			$("header").css("background-image", "url('#')");
			$("header").css("background-color", "#000");

			$("#fundo").css("background-image", "url('#')");
			$("#fundo").css("background-color", "#000");

			$("#inicio > h2").css("background-image", "url('#')");
			$("#inicio > h2").css("background-color", "#000");

			$("#btn-serv").css("background-image", "url('#')");
			$("#btn-serv").css("background-color", "#000");

			$("#btn-palestras").css("background-color", "#000");
			$("#btn-hospitais").css("background-color", "#000");
			$("#btn-delegacias").css("background-color", "#000");

			$('#inicio > p').css('background-color', '#000');
			$('#inicio').css('color', '#fff');

			$('#hospitais').css('background-color', '#000');
			$('#hospitais').css('color', '#fff');

			$('#delegacias').css('background-color', '#000');
			$('#delegacias').css('color', '#fff');

			$("footer").css("background-image", "url('#')");	
			$('footer').css('backgrund-color', '#000');

			$("#servicos").css("color", "#fff");

			$("#back-page").css("background-color", "#000");

			
			

			acessivel = true;

		}else{
			location.reload();
		}

	};

	$('#altoContraste').click(altoContraste);

});

*/