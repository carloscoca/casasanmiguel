(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

var isMobile = jQuery.browser.mobile;

var departamento;

$(function(){
    var unslider = $('#main-slider').unslider({
        fluid: true,
        dots: true,
        speed: 500
    });

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });


    $('.sliderhome').bxSlider({
        auto: true,
        infiniteLoop: true,
        /*slideWidth: '100%',*/
        minSlides: 1,
        /*maxSlides: 6,*/
        slideMargin: 0,
        autoHover: true,
        pager: false,
        pause: 6000,
        moveSlides:1
    });

    $('.bxslider2').bxSlider({
        auto: true,
        infiniteLoop: true,
        slideWidth: 289,
        minSlides: 1,
        maxSlides: 6,
        slideMargin: 3,
        autoHover: true,
        pager: false,
        pause: 6000,
        moveSlides:1
    });

    $('.crucenos').bxSlider({
        auto: true,
        infiniteLoop: true,
        slideWidth: 182,
        minSlides: 1,
        maxSlides: 6,
        slideMargin: 3,
        autoHover: true,
        pager: false,
        pause: 6000,
        moveSlides:1
    });

    $('.bxslider3').bxSlider({
        auto: true,
        infiniteLoop: true,
        /*slideWidth: 289,*/
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 3,
        autoHover: true,
        pager: true,
        pause: 6000,
        moveSlides:1,
        controls: false
    });

    $('a[href^="#"]').click(function() {
        //  Find the target element
        var target = $($(this).attr('href'));

        //  And get its position
        var pos = target.offset(); // fallback to scrolling to top || {left: 0, top: 0};

        //  jQuery will return false if there's no element
        //  and your code will throw errors if it tries to do .offset().left;
        if(pos) {
            //  Scroll the page
            $('html, body').animate({
                scrollTop: pos.top,
                scrollLeft: pos.left
            }, 1000);
        }

        //  Don't let them visit the url, we'll scroll you there
        return false;
    });


    $('ul.menu.principal > li').each(function(){
        $(this).mouseover(function(){

            $('ul.submenu').hide();
            $(this).find('.submenu').show();

        }).mouseout(function(){

            $(this).find('.submenu').hide();
        });
    });

    initialize_validations();
});



function gotoPage(select) {
    
    window.location.href=BASE_URL + "home/index/" + $(select).val();
}


function initialize_validations() {

    $('#form-contacto').validate(
        {
            rules:
            {
                'contacto[nombre]':{
                    required:true
                },
                'contacto[asunto]':{
                    required:true
                },
                'contacto[telefono]':{
                    required:true
                },
                'contacto[correo_electronico]':{
                    required:true,
                    email:true
                },
                'contacto[mensaje]':{
                    required:true
                }
            },
            messages:
            {
                'contacto[nombre]':{
                    required:'Nombre es requerido'
                },
                'contacto[asunto]':{
                    required:'Asunto es requerido'
                },
                'contacto[telefono]':{
                    required:'Teléfono es requerido'
                },
                'contacto[correo_electronico]':{
                    required:'Correo electrónico es requerido',
                    email:'Direccion de correo inválida'
                },
                'contacto[mensaje]':{
                    required:'Debe escribir un mensaje'
                }
            },
            submitHandler: function (form) {

                loadJSON(BASE_URL + 'home/registrar_contacto', serializeObject('#form-contacto'), function(response){

                    if(response.success) {

                        $('#form-contacto').html('<h3>Gracias su formulario fue enviado exitosamente.</h3>');

                    } else {

                        //alert('Hubo un problema al obtener los barrios');
                    }

                }, true, function(){

                });
            },
            invalidHandler: function(e, validator) {},
            validHandler: function(e, validator) {


            }
        }
    );
}


function seleccionarLatLong(latlong) {
    var j = 0;
    for(var i in latlong) {
        if(j++ == 0) {
            $('#lat').val(latlong[i]);
        } else {
            $('#lng').val(latlong[i]);
        }
    }
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


function _json_to_params(a1, separator)
{
    t=[];for(x in a1)t.push(x+"="+encodeURI(a1[x]));return t.join(separator?separator:"&");
}



var map_ubicacion;
var map_seleccion;
var comercios = [{lat: -17.75473, long:-63.22183, nombre: 'Central 2do anillo', direccion: 'Av. Cristóbal de Mendoza # 1355'}];

var latlng_pos = Array();
var info_windows = Array();
//var marker;

var markersArray = [];
var currentMarker;
var mapOptions = {
    center: new google.maps.LatLng(-17.77116,-63.18484),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var geocoder;

function reloadMap(comercios) {

    map_ubicacion.deleteOverlays();
    map_ubicacion.deleteAllMarkers();

    for(var i in comercios) {

        comercio = comercios[i];
        latlong = new google.maps.LatLng(comercio.lat, comercio.long);
        /*latlong.nb = ;
         latlong.ob = ;*/
        addMarker(latlong, '<h3>'+comercio.nombre+'</h3><p>'+comercio.direccion+'</p>', map_ubicacion, true);
    }

    //centerMap(map_ubicacion);
}


function initialize_map_ubicacion() {
    map_ubicacion = new google.maps.Map(document.getElementById("map"), mapOptions);

    geocoder = new google.maps.Geocoder();
}

function initialize_map_seleccion(callback) {
    map_seleccion = new google.maps.Map(document.getElementById("map-seleccion"), mapOptions);

    google.maps.event.addListener(map_seleccion, 'click', function(e) {
        map_seleccion.deleteLastMarker();
        addMarker(e.latLng, '', map_seleccion, false);

        callback(e.latLng);
    });

    //addMarker(new google.maps.LatLng(40.7142, -74.0064));
}

function centerMap(map) {
    var latlngbounds = new google.maps.LatLngBounds( );
    for ( var i = 0; i < latlng_pos.length; i++ ) {
        latlngbounds.extend( latlng_pos[ i ] );
    }
    map_ubicacion.fitBounds( latlngbounds );
}

function addMarker(latLng, title, map, enable_ballon) {
    var marker;

    if(enable_ballon == true) {

        marker = new google.maps.Marker({
            map: map,
            //position: new google.maps.LatLng(lat, lng),
            title: title,
            //icon: image,
            //shadow: shadow,
            //shape: shape
            position: latLng
            //animation:google.maps.Animation.DROP,
            //draggable:true
        });

        /*google.maps.event.addListener(marker, 'click', function() {

            if(info_windows.length > 0) {
                for(var i in info_windows) {
                    info_windows[i].close();
                }
            }

            var infowindow = new google.maps.InfoWindow({
                content: marker.title
            });

            info_windows.push(infowindow);

            infowindow.open(map_ubicacion,marker);
        });*/

        var infowindow = new google.maps.InfoWindow({
            content: marker.title
        });

        info_windows.push(infowindow);

        infowindow.open(map_ubicacion,marker);

    } else {

        var marker = new google.maps.Marker({
            map: map,
            //position: new google.maps.LatLng(lat, lng),
            title: "move this marker",
            //icon: image,
            //shadow: shadow,
            //shape: shape
            position: latLng,
            animation:google.maps.Animation.DROP,
            draggable:true
        });

        var infowindow = new google.maps.InfoWindow({
            content: " Mov&eacute; el marcador "
        });

        infowindow.open(map,marker);

        currentMarker = marker;
    }

    markersArray.push(marker);
    latlng_pos.push(latLng);
}


function selectMapLocation() {
    if( currentMarker != undefined ) {
        var lat = currentMarker.position.lat();
        var lng = currentMarker.position.lng();

        var latLong = new google.maps.LatLng(lat, lng);

        var $form = jQuery("#new-group-form");
        $form.find("input[name='lat']").val(lat);
        $form.find("input[name='lng']").val(lng);

        geocoder.geocode( { 'latLng': latLong}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    $('input[name=location]').val(results[1].formatted_address);
                }
            }
            else {
                $('input[name=location]').val("Unknown");
                console.log("Geocoder failed due to: " + status);
            }
        });

    }
}

google.maps.Map.prototype.deleteLastMarker = function() {

    if( currentMarker != undefined ) {
        currentMarker.setMap(null);
    }

    currentMarker = undefined;
}

google.maps.Map.prototype.deleteAllMarkers= function() {

    if( markersArray != undefined ) {
        for(var i in markersArray) {
            markersArray[i].setMap(null);
        }
    }

    markersArray = [];
}

google.maps.Map.prototype.deleteOverlays = function() {
    if (markersArray.length) {
        var i;
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }

        markersArray.length = 0;
    }

    latlng_pos = Array();
}

//google.maps.event.addDomListener(window, 'load', initialize_map);