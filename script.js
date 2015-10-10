
$(document).ready(function() {
$('input[type=radio]:checked').parent().siblings('label').addClass('checked');
$('#level_flexibleduration').val('M:0');
$('.donation-level-user-entered input').attr('placeholder', 'Other');
$('label[for=responsive_payment_typecc_numbername]').text('Card Number');
$('label[for=responsive_payment_typecc_exp_date_MONTH] span').text('Exp. Date');
$('label[for=responsive_payment_typecc_cvvname] span').text('Security Code');
$('.donation-levels input[type=radio]').change(function() {
        $('label').removeClass('checked');
        $(this).parent().siblings('label').addClass('checked');
    });  
$('.donation-level-input-container label').click(function() {
		$('label').removeClass('checked');
		$(this).addClass('checked');
	});
	$('.donation-level-input-container:last > label').click(function() {
        $(this).siblings().find('input[type=text]').focus();
      
	});
	$('.donation-level-user-entered input').focus(function() {
		$('label').removeClass('checked')
		$(this).parent().siblings('label').addClass('checked');		
	});
});
