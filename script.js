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
	
	//add hover styles to donation amount labels
	$('.donation-level-input-container label')
		.on('mouseenter', function() {
			$(this).css({
				'color': '#ed2432',
				'border': '1px #ed2432 solid'
			});
    	})
		.on('mouseleave', function() {
			$(this).css({
				'color': '',
				'border': ''
			});
		});
	
	
});
