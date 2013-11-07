$(function() {

	form = $('#contact-form').validate({
		focusCleanup: true,

		errorElement: 'div',
		errorClass: 'alert alert-danger',
		validClass: 'alert alert-success',

		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
				number: true
			},
		},

		messages: {
			name: {
				required: '<strong>Error</strong> This field is required',
			},
			email: {
				required: '<strong>Error</strong> This field is required',
				email: '<strong>Error</strong> This is not a valid email',
			},
			phone: {
				required: '<strong>Error</strong> This field is required',
			},
		},

		highlight: function( element ) {
			$(element).removeClass('alert-danger')
			$(element).removeClass('alert-success');
		},
		unhighlight: function( element ) {
			$(element).removeClass('alert-danger')
			$(element).removeClass('alert-success');
		},

		submitHandler: function() {

			// Hide loading image
			$('#loader').show();

			// Send data via AJAX
			$.ajax({
				type: 'POST',
				url: 'contact.php',
				data: $('#contact-form').serialize(),
				dataType: 'json',
				success: function( message ) {

					$('#messages').append('<div class="alert alert-dissmisable alert-'+ message.type +'"><button type="button" class="close">&times;</button><strong>'+ message.title +'</strong> '+ message.content +'</div>').hide().fadeToggle('slow');

				},
				error: function( data ) {
					alert(JSON.stringify(data));
					$('#messages').append('<div class="alert alert-danger"><button type="button" class="close">&times;</button><strong>Error:</strong> There has been an unknown error, please let us know immediately. Thank you.</div>').hide().fadeToggle('slow');

				}
			});

			// Hide loading image
			$('#loader').hide();

		}
	});

});

$(function() {

	form = $('#contact-home').validate({
		focusCleanup: true,

		errorElement: 'div',
		errorClass: 'alert alert-danger',
		validClass: 'alert alert-success',

		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
				number: true
			},
		},

		messages: {
			name: {
				required: '<strong>Error</strong> This field is required',
			},
			email: {
				required: '<strong>Error</strong> This field is required',
				email: '<strong>Error</strong> This is not a valid email',
			},
			phone: {
				required: '<strong>Error</strong> This field is required',
			},
		},

		highlight: function( element ) {
			$(element).removeClass('alert-danger')
			$(element).removeClass('alert-success');
		},
		unhighlight: function( element ) {
			$(element).removeClass('alert-danger')
			$(element).removeClass('alert-success');
		},

		submitHandler: function() {

			// Hide loading image
			$('#loader').show();

			// Send data via AJAX
			$.ajax({
				type: 'POST',
				url: 'contact.php',
				data: $('#contact-form').serialize(),
				dataType: 'json',
				success: function( message ) {

					$('#messages').append('<div class="alert alert-dissmisable alert-'+ message.type +'"><button type="button" class="close">&times;</button><strong>'+ message.title +'</strong> '+ message.content +'</div>').hide().fadeToggle('slow');

				},
				error: function( data ) {
					alert(JSON.stringify(data));
					$('#messages').append('<div class="alert alert-danger"><button type="button" class="close">&times;</button><strong>Error:</strong> There has been an unknown error, please let us know immediately. Thank you.</div>').hide().fadeToggle('slow');

				}
			});

			// Hide loading image
			$('#loader').hide();

		}
	});

});