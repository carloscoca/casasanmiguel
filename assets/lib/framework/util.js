
function loadToForm(form, data)
{
	
	for(var id in data) {
		
		if(jQuery(form).is('form'))
		{
			var element = jQuery(form).find('[name='+id+']').length ? jQuery(form).find('[name='+id+']') : jQuery(form).find('#'+id+'');
			
			if( element.hasClass("datepicker")) 
			{
				element.val(data[id]);
				element.datepicker({dateFormat: 'M dd, yy',prevText:"",nextText:"", defaultDate: Date(data[id])});
				
			} else if( element.is(':checkbox')) {
				
				if(data[id] == '1') {
					element.attr( 'checked', true );
				} else {
					element.attr( 'checked', false );
				}
				
				
				jQuery('.cust_checkbox').remove();
				jQuery("input[type='radio'],input[type='checkbox']").custCheckBox(
				{callback:function(input) {
					if( jQuery(input).hasClass('despliega') ) {
						if( jQuery(input).attr('checked') == true ) {
							jQuery('#' + jQuery(input).attr('name') +'_depend').fadeIn(1000);
						} else {
							jQuery('#' + jQuery(input).attr('name') +'_depend').fadeOut(1000);
						}
					}
				}});
				
			} else if(element.is('select')) {
				
				var select = jQuery(form).find('select[name='+id+']');
				select.html( fillOptions(data.select[id]) );
				
				//jQuery(form).find('select[name='+id+'] option[selected]').removeAttr("selected");
                //jQuery(form).find('select[name='+id+'] option[value=').attr("selected", "selected");
				jQuery(form).find('select[name='+id+'] option[value='+data[id]+']').attr("selected", "selected");
				
				select.chosen();

                if( jQuery.trim(data[id]) == '' ) {
                    jQuery(form).find('select[name='+id+'] option[value=').attr("selected", "selected");
                }
				
			} else if ( element.hasClass('upload_image') ) {
				
				if( jQuery.trim( data[id] ) ) {
					
					element.parent().find('img').attr('src', data[id]);
                    element.parent().find('a.file').attr('href', data[id]).html(data[id]);
					element.val(data[id]);
				}
				
			} else {

				if(!element.is('select')) {
					element.val( data[id] );
				} else {
					//console.log(id);
					element.val( data[id] );
				}
			}
			
		} else {
			
			if( element.hasClass('conditional')) {
				
				element.html( (data[id]=='0' || data[id]=='')?'No':'Yes' );
				
			} else if( element.is('img') ) {
				
				element.attr('src', data[id]);
				
			}  else if( element.is('a') ) {
				
				element.attr('href', data[id]);
				element.html(data[id]);
				
			} else {
				
				element.html( data[id + ''] );
			}
			
		}
	}
	
}

function initialize_modal_links() {
	
	$('.modal .close').unbind('click').bind('click', function(){
		hideModal( $(this).attr('rel') );
	});
	
	$('.popup-link').unbind('click').bind('click', function(){
		
		showModal( $(this).attr('rel') );
	});
}

function showModal( modalID ) {
	$(modalID).fadeIn(250);
}

function hideModal( modalID ) {
	$(modalID).fadeOut(250);
}

function showMap(event) {
	$(event.target).parent();
	$(modalID).fadeIn(250);
}
/*
function initialize_map() {

	$('.map_button').each(function(){
		
		var template = '<div class="map_modal">\
							<h3>Select Location</h3>\
							<div id="step_1_map" class="map"></div>\
							<button type="button" class="select-marker">Select</button>\
						</div>';
						
		
	});

	map = new google.maps.Map(document.getElementById(id), mapOptions);
	
	google.maps.event.addListener(map, 'click', function(e) {
		console.log("map click");        
		map.deleteOverlays();
		addMarker(e.latLng);
	});

	addMarker(new google.maps.LatLng(40.7142, -74.0064));
	
	geocoder = new google.maps.Geocoder();
}*/

function resetForm(form) {
	
	jQuery(form).find('label.error').hide();
	jQuery(form).find('div.error').remove();
	jQuery(form).find('input[type=text]').val('').removeClass('error');
	jQuery(form).find('input[type=password]').val('').removeClass('error');
	jQuery(form).find('textarea').val('').removeClass('error');
	jQuery(form).find('input[type=hidden]').val('').removeClass('error');
    jQuery(form).find('select').val('').removeClass('error');
    jQuery(form).find('select options').attr('seleted', '').removeClass('error');
	
	jQuery(form).find('.upload_image').parent().find('img').attr('src','');
}

function serializeObject(form) {
	var o = {}; var a = jQuery(form).serializeArray();
	
    jQuery.each(a, function() {
		
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) { o[this.name] = [o[this.name]]; }
            o[this.name].push(this.value || '');
        } else { o[this.name] = this.value || ''; }
    });
	return o;
}

function loadJSON(url, data, callback, async, callback_before) {
	return jQuery.ajax({
		type: "POST",
		url: url/*+Math.random()*/,
		data: data,//_json_to_params(data),
		async: async,
		cache: false,
		beforeSend: function() 
		{
			if(callback_before) {
				//callback_before();
			}
		},
		success: function(res)
		{
            if(res.logged != undefined && res.logged == false ) {

                window.location.href = BASE_URL;

            } else {

                callback( res );
            }

		},
		error: function(res){
			//console.log(res);
		}
	});
}

function loadURL(url, data, callback, async, callback_before) {
	return jQuery.ajax({
		type: "POST",
		url: url,
		data: data/*_json_to_params(data)*/,
		async: async,
		cache: false,
		beforeSend: function() 
		{
			if(callback_before) {
				callback_before();
			}
		},
		success: function(res)
		{
			
			if(typeof(res['session_status']) != "undefined" && res['session_status'] == 'expired' )
				window.location.href = BASE_URL;
			else
				callback(res);				
		}
	});
}


function _json_to_params(a1, separator) 
{
	t=[];for(x in a1)t.push(x+"="+encodeURI(a1[x]));return t.join(separator?separator:"&");
}


function setTextFromSelect(source, input) {
	jQuery(input).val( jQuery(source).find('option:selected').text() );
}

function replaceAll(txt, replace, with_this)
{
	return txt.replace( new RegExp(replace, 'g'), with_this );
}

function openPopup(url, title) {
	//options = "fullscreen=" + 0 + ",toolbar=" + 0 + ",location=" + 0 + ",status=" + 0 + ",menubar=" + 0 + ",scrollbars=" + 1 + ",resizable=" + 0 + ",width=" + 800 + ",height=" + 650 + ",left=" + 0 + ",top=" + 0;
	
	//window.open(url,title,options,1);
	
	window.open(url,'Print',"resizable=1,width=800,height=650");
}


function limit_chars(txt, chars) {
	
	if(txt.length > chars ) {
		
		txt = txt.substring(0, chars) + '...';
	}
	return txt;
}

function createOptions(name, array, selectedValue, attrs) {
	
	var result = '<select name="' + name + '" id="' + name + '" ' + attrs + '>';
	
	for(var i in array) {
		
		result += '<option value="' + array[i]['id'] + '" '+ (jQuery.trim( array[i]['selected'] )=='selected'?'selected="selected"':'') +'>' + array[i]['name'] + '</option>';
	}
	
	return result + '</select>';
}
/*
function fillOptions(array, selectedValue) {

	var result = '';
	
	for(var i in array) {
		result += '<option value="' + array[i]['id'] + '" '+ (jQuery.trim( array[i]['selected'] )=='selected'?'selected="selected"':'') +'>' + array[i]['name'] + '</option>';
	}
	
	return result;
}*/

function fillOptions(array) {

	var result = '';
	
	for(var i in array) {
		result += '<option value="' + array[i]['id'] + '" '+ ( (jQuery.trim( array[i]['selected'] )=='selected' ) ? 'selected="selected"' : '') +'>' + array[i]['name'] + '</option>';
	}
	return result;
}

function fillRadios(array, name) {
	
	var result = '';
	
	for(var i in array) {
		result += '<Label for="option_'+ array[i]['id'] +'" >' + array[i]['name'] + '</label><input id="option_'+ array[i]['id'] +'" type="radio" value=' + array[i]['id'] + ' '+ ( (jQuery.trim( array[i]['selected'] )=='selected' ) ? 'checked="checked"' : '') + ' name="'+ name +'"" />';
	}
	return result;
}

function fill(array, tag, onlySelected, none) {
	
	var result = '';
	var totalItems = 0;
	for(var i in array) {
		if(onlySelected && array[i]['selected']!='undefined' && jQuery.trim( array[i]['selected'] ) != '' ) {
			
			result += '<'+tag+'>' + array[i]['name'] + '</'+tag+'>';
			totalItems ++;
			
		} else if( !onlySelected ){
			
			result += '<'+tag+'>' + array[i]['name'] + '</'+tag+'>';
			totalItems ++;
		}
	}
	
	if( totalItems == 0 ) {
		result += '<'+tag+'>' + none + '</'+tag+'>';
	}
	
	return result;
}


function blockUI(div, b, html) {

	if(div != "undefined") {
		if(b) {

            jQuery(div).block({message: html == undefined ? '<div class="preloader"><img src="'+BASE_URL+'assets/images/preloader.gif"></>' : html});

        } else {

            jQuery(div).unblock();
        }
	} else {
		if(b) {
			//jQuery('body').css({width: '100%', height:'100%'});
			jQuery.blockUI();
		} else {
			//jQuery('body').css({width: '100%', height:'100%'});
			jQuery.unblockUI();
		}
	}
}



/*Placeholder function*/
(function($){
  $.fn.placeholder = function(){
	// Ingnoramos si el navegador soporta nativamente esta funcionalidad
	if ($.fn.placeholder.supported()){
	  return $(this);
	}else{
	  
//	  console.log("test");
	  
	  // En el evento submit del formulario reseteamos los values de los inputs
	  // cuyo value es igual al placeholder
	  $(this).parent('form').submit(function(e){
		$('input[placeholder].placeholder', this).val('');
		$('textarea[placeholder].placeholder', this).val('');
	  });

	  // activamos el placeholder
	  $(this).each(function(){
		$.fn.placeholder.on(this);
	  });

	  return $(this)
		// Evento on focus
		.focus(function(){
		  // Desactivamos el placeholder si vamos a introducir nuevo texto
		  if ($(this).hasClass('placeholder')){
			$.fn.placeholder.off(this);
		  }
		})
		// Evento on blur
		.blur(function(){
		  // Activamos el placeholder si no tiene contenido
		  if ($(this).val() == ''){
			$.fn.placeholder.on(this);
		  }
		});
	}
  };

  // Funci�n que detecta si el navegdor soporta el placeholder nativamente
  // Extraida de: http://diveintohtml5.org/detect.html#input-placeholder
  $.fn.placeholder.supported = function(){
	var input = document.createElement('input');
	return !!('placeholder' in input);
  };

  // A�ade el contenido del placeholder en el value del input
  $.fn.placeholder.on = function(el){
	var $el = $(el);
	$el.val($el.attr('placeholder')).addClass('placeholder');
	
  };
  // Borra el contenido del value
  $.fn.placeholder.off = function(el){
	$(el).val('').removeClass('placeholder');
  };
})(jQuery);



function init_fields() {
	jQuery('input[placeholder]').placeholder();
	jQuery('textarea[placeholder]').placeholder();

	jQuery('input.date').datepicker();
	jQuery('input.time').each(function(){
		jQuery(this).timeEntry({show24Hours: true, showSeconds: true}).change(function() { } );
	});
}