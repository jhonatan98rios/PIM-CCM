$(document).ready(function(){

	var ativa = "inicio";
	var acessivel = false;

	$('#btn-serv, #inicio > h2').click(abrirServ);

	function abrirServ(){
		$('#inicio').hide();
		$('#servicos').fadeIn();
		$('.page-control').fadeIn();
		ativa = 'servicos';
		$('header').css('height', '100px');
	};

	$('#back-page').click(voltar);

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

			$('#meuCepHospitais').val('');
			$('.lineHosp').remove();

			$('#meuCepDelegacias').val('');
			$('.lineDeleg').remove();

			ativa = 'servicos';

		};
	};

	$('#btn-palestras').click(abrirPalestra);

	function abrirPalestra(){
		$('#servicos').hide();
		$('#palestras').fadeIn();
		$('.page-control').fadeIn();
		ativa = 'palestras';
	};

	$('#btn-hospitais').click(abrirHospitais);

	function abrirHospitais(){
		$('#servicos').hide();-
		$('#hospitais').fadeIn();
		$('.page-control').fadeIn();
		$('#meuCepHospitais').focus();
		ativa = 'hospitais';
				
	};

	$('#btn-delegacias').click(abrirDelegacias);

	function abrirDelegacias(){
		$('#servicos').hide();
		$('#delegacias').fadeIn();
		$('.page-control').fadeIn();
		$('#meuCepDelegacias').focus();
		ativa = 'delegacias';
		
	};

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