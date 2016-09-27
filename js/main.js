$(document).ready(function() {


	$('.gal_img').hover(function() {
		var	galId = $(this).attr('data-galId');
		$('#'+galId).css("visibility", "visible");
		/* Stuff to do when the mouse enters the element */
	}, 
	function() { 
		var	galId = $(this).attr('data-galId');
		$('#'+galId).css("visibility", "hidden");
		/* Stuff to do when the mouse leaves the element */
	});

//---------------------------------------------
    	$('.quoteAndText p').hide();
    	$('.quote_name p').hide();
    	$('.nAndq0').show();

    	
    

		$('.quote_dots ul li a').click(function(){
		$('.quote_dots ul li a').removeClass("active").addClass('default');
    	$(this).addClass("active");
    	$('.NveQ').hide(500);
    	var panelId = $(this).attr('data-panelId');
    	$('.'+panelId).fadeIn(1000);


	});		
		

	  	



	
	
	

    


    
    
   
             
    





/*-

Avropanin migrant siyasetinde hakli terefleri de var.
Meselen Almaniyada xristianligi yeni qebul eden miqrantlar daha yuksek sosial teminatli olur.
Bu movzuda qerb olkeleri haqlidir.
Tramp da mueyyen qeder migrantlara qarsi cixislarinda haqli sayila biler.
Meselen eger bir muselman ve ya hindli ve ya buddist yuksek sosial-iqtisadi muhite sahib olan qerb olkelerine
gelib dini tebligatla mesgul olacaqdisa bunu daha yaxsi olar ki, oz olkesinde etsin.Cunki onu daha cox dinleyen olacaq.
Cox sade mentiqdir.Eger dindar olan semimi ve agli basinda biridirse bunu derhal anlayacaq ve olkesine geri qayidib,
fealiyyetini davam etdirecek.
Eger bu dediyime gore meni din dusmeni elan etmek fikrine dusdunuzse yanildiniz.Cunki bu dediklerim yalniz qerb 
olkelerindeki dini tebligat aparanlara aiddir.Oz olkelerinde ise onlar tam haqlidirlar.Hansi dine qulluq etmelerinden
ferqli olmayaraq inandiqlari ve gordukleri isler duzdur.
Amma olke deyisdikde artiq bu bele deyil.
Bu cur baxdiqda goruruk ki, bir problem yoxdur :)
Ammaa ... Meseleni murekkeblesdiren insanlarin ozlerine beli mehz ozlerini aldatmalaridir. 

-*/











});