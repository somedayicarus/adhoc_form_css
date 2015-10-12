$(document).ready(function() {
	//add style to preselected buttons on load
	$('input[type=radio]:checked').parent().siblings('label').addClass('checked');
	
	//default to 'ongoing' for recurring gifts
	$('#level_flexibleduration').val('M:0');
	
	//add 'other' as input placeholder text
	$('.donation-level-user-entered input').attr('placeholder', 'Other');
	
	//Change text on labels
	$('label[for=responsive_payment_typecc_numbername]').text('Card Number');
	$('label[for=responsive_payment_typecc_exp_date_MONTH] span').text('Exp. Date');
	$('label[for=responsive_payment_typecc_cvvname] span').text('Security Code');
	
	//add and remove styles with click
	$('.donation-levels input[type=radio]').change(function() {
		$('label').removeClass('checked');
        $(this).parent().siblings('label').addClass('checked');
    }); 
	
	//
	//$('.donation-level-input-container label').click(function() {
		//$('label').removeClass('checked');
		//$(this).addClass('checked');
	//});
	//$('.donation-level-input-container:last > label').click(function() {
        //$(this).siblings().find('input[type=text]').focus();
      
	//});
	//$('.donation-level-user-entered input').focus(function() {
		//$('label').removeClass('checked')
		//$(this).parent().siblings('label').addClass('checked');		
	//});
//});
