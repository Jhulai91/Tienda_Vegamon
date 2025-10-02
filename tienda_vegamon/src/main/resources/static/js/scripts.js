



var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");



var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");

var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");

var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");

var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");


var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");
var form_6_progessbar = document.querySelector(".form_6_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

var leadId=null;


form_1_next_btn.addEventListener("click", function(){
	var baseUrl = /*[[@{/}]]*/ '';
var primernombre = document.getElementById('primernombre').value;
var segundonombre = document.getElementById('segundonombre').value;
var apellidopaterno = document.getElementById('apellidopaterno').value;
var apellidomaterno = document.getElementById('apellidomaterno').value;
var telefono = document.getElementById('telefono').value;
var mail = document.getElementById('email').value;

if( primernombre.length !== 0 && segundonombre.length !== 0 && apellidopaterno.length !== 0 && apellidomaterno.length !== 0 && telefono.length <= 10 && mail.length !== 0 )
{
	
	
	
	$.ajax({
	    type: "POST",
	    url: "/cotizacion/registrarPaso1", // <-- con / al inicio
	    data: $("#primero").serialize(),
	    success: function(id) {
	       
				leadId = id;
				$("#id_lead").val(leadId); 
				$("#id_lead1").val(leadId);
				$("#id_lead2").val(leadId); 
				$("#id_lead3").val(leadId); 
				$("#id_lead4").val(leadId); 
	            form_1.style.display = "none";
	            form_2.style.display = "block";
	            form_1_btns.style.display = "none";
	            form_2_btns.style.display = "flex";
	            form_2_progessbar.classList.add("active");
	        
	          
	    },
	    error: function(xhr) {
	        alert("Error " + xhr.status + " al conectar con el servidor");
	    }
	});
	

			
}
else if (telefono.length > 10){
 alert('No has llenado los campos necesarios');
}



});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
    
    
   
	 var uno = document.getElementById('uno').value;
	
	  //  var datos = $('#segundo').serialize(); // serializa los campos del form 2
		var datos = $("#segundo").serialize() + "&id_lead=" + leadId;

	    if (uno == "PUBLICO") {
	        // caso cuando el valor es 1 → redirección + guardar datos
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso2",   // <-- tu endpoint en Spring
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    // redirigir si todo fue bien
	                    window.location.href = "https://vegamon.com/landing-veh/";
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    } else if (uno == "PARTICULAR") {
	        // caso cuando el valor es 0 → pasar al paso 3
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso2",
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    form_2.style.display = "none";
	                    form_3.style.display = "block";
	                    form_3_btns.style.display = "flex";
	                    form_2_btns.style.display = "none";
	                    form_3_progessbar.classList.add("active");
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    }
	});




form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});


form_3_next_btn.addEventListener("click", function(){
	
	

	 var uno = document.getElementById('uno1').value;

	  //  var datos = $('#segundo').serialize(); // serializa los campos del form 2
		var datos = $("#tercero").serialize() + "&id_lead=" + leadId;

	    if (uno == "SI") {
	        // caso cuando el valor es 1 → redirección + guardar datos
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso3",   // <-- tu endpoint en Spring
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    // redirigir si todo fue bien
	                    window.location.href = "https://vegamon.com/landing-veh/";
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    } else if (uno == "NO") {
	        // caso cuando el valor es 0 → pasar al paso 3
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso3",
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    form_3.style.display = "none";
	                    form_4.style.display = "block";
	                    form_4_btns.style.display = "flex";
	                    form_3_btns.style.display = "none";
	                    form_4_progessbar.classList.add("active");
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    }
	});



form_4_back_btn.addEventListener("click", function(){
	
	
	
	
	
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_4_progessbar.classList.remove("active");
});


form_4_next_btn.addEventListener("click", function(){
	
	var uno = document.getElementById('uno2').value;

	  //  var datos = $('#segundo').serialize(); // serializa los campos del form 2
		var datos = $("#cuarto").serialize() + "&id_lead=" + leadId;

	    if (uno == "SI") {
	        // caso cuando el valor es 1 → redirección + guardar datos
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso4",   // <-- tu endpoint en Spring
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    // redirigir si todo fue bien
	                    window.location.href = "https://vegamon.com/landing-veh/";
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    } else if (uno == "NO") {
	        // caso cuando el valor es 0 → pasar al paso 3
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso4",
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    form_4.style.display = "none";
	                    form_5.style.display = "block";
	                    form_5_btns.style.display = "flex";
	                    form_4_btns.style.display = "none";
	                    form_5_progessbar.classList.add("active");
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    }
	});


form_5_back_btn.addEventListener("click", function(){
	
	
	
	
	
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_4_btns.style.display = "flex";
	form_5_btns.style.display = "none";

	form_5_progessbar.classList.remove("active");
});

form_5_next_btn.addEventListener("click", function(){
	
	
	var uno = document.getElementById('uno3').value;

	  //  var datos = $('#segundo').serialize(); // serializa los campos del form 2
		var datos = $("#quinto").serialize() + "&id_lead=" + leadId;

	    if (uno == "NO") {
	        // caso cuando el valor es 1 → redirección + guardar datos
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso5",   // <-- tu endpoint en Spring
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    // redirigir si todo fue bien
	                    window.location.href = "https://vegamon.com/landing-veh/";
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    } else if (uno == "SI") {
	        // caso cuando el valor es 0 → pasar al paso 3
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso5",
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    form_5.style.display = "none";
	                    form_6.style.display = "block";
	                    form_6_btns.style.display = "flex";
	                    form_5_btns.style.display = "none";
	                    form_6_progessbar.classList.add("active");
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    }
	});


form_6_back_btn.addEventListener("click", function(){
	
	
	
	
	
	form_5.style.display = "block";
	form_6.style.display = "none";

	form_5_btns.style.display = "flex";
	form_6_btns.style.display = "none";

	form_6_progessbar.classList.remove("active");
});







btn_done.addEventListener("click", function(){
	
	var primernombre = document.getElementById('primernombre').value;
	var segundonombre = document.getElementById('segundonombre').value;
	var apellidopaterno = document.getElementById('apellidopaterno').value;
	var apellidomaterno = document.getElementById('apellidomaterno').value;
	var telefono = document.getElementById('telefono').value;
	var mail = document.getElementById('email').value;

	var uno = document.getElementById('uno4').value;
	
	var datos = $("#sexto").serialize() + "&id_lead=" + leadId;
	if (uno == "NO") {
	        // caso cuando el valor es 1 → redirección + guardar datos
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso6",   // <-- tu endpoint en Spring
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
	                    // redirigir si todo fue bien
	                    window.location.href = "https://vegamon.com/landing-veh/";
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    } else if (uno == "SI") {
	        // caso cuando el valor es 0 → pasar al paso 3
	        $.ajax({
	            type: "POST",
	            url: "/cotizacion/registrarPaso6",
	            data: datos,
	            success: function(r){
	                if(r === "OK"){
						
						window.location.href = "/cotizacion/vehiculo_form" 
						    + "?primernombre=" + encodeURIComponent(primernombre)
							+"&segundonombre=" + encodeURIComponent(segundonombre)
						    + "&apellidopaterno=" + encodeURIComponent(apellidopaterno)
							+ "&apellidomaterno=" + encodeURIComponent(apellidomaterno)
						    + "&telefono=" + encodeURIComponent(telefono)
						    + "&email=" + encodeURIComponent(mail);
						 
						
	                  
	                } else {
	                    alert("Error en servidor");
	                }
	            }
	        });
	        return false;
	    }
	});




shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})


