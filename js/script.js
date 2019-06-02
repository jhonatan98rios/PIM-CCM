$(document).ready(function(){

	var ativa = "inicio";

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

			$('#script_hosp').attr('src','js/cepDeleg.js');
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
		
		$('#script_hosp').attr('src','js/cepHosp.js');
	};

	/*

	$('#script').append('<script id="script_hosp" src="js/cepHosp.js"></script>');
	$('#script_hosp').remove();

	$('#script').append('<script id="script_deleg" src="js/cepDeleg.js"></script>');
	$('#script_deleg').remove();

	$('#script').append('<script id="script_acess" src="js/acessibilidade.js"></script>');
	$('#script_acess').remove();

	$('#script').append('<script id="script_api" src="https://code.responsivevoice.org/responsivevoice.js"></script>');
	$('#script_api').remove();

	

	$(document).keydown(function (e) {
		if(e.keyCode == 48){
			if($('#meuCepHospitais').is(':focus')){
				alert('FocusOn');
			}else{
				alert('FocusOut')
			}
		}
	});
	*/

});