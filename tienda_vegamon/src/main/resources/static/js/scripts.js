



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
	    success: function(r) {
	        if (r === "OK") {
	            form_1.style.display = "none";
	            form_2.style.display = "block";
	            form_1_btns.style.display = "none";
	            form_2_btns.style.display = "flex";
	            form_2_progessbar.classList.add("active");
	        } else {
	            alert("Error en servidor");
	        }
	    },
	    error: function(xhr) {
	        alert("Error " + xhr.status + " al conectar con el servidor");
	    }
	});
	

			
}
else if (telefono.length > 10){
 alert('No has llenado los campos necesarios');
}

/*			var datos=$('#primero').serialize();
			$.ajax({
				type:"POST",
				url:"registrar.php",
				data:datos,
				success:function(r){
					if(r==1){
					//	alert("agregado con exito");
						
form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;
		
*/



/*let formulario = new FormData(document.getElementById('primero'));

	fetch('registrar.php',
	{
		method:'POST',
		body:formulario,
	}
	)
	.then(res => res.json())
	.then(data => 
	{
		if(data == 'true')
		{
		alert('se inserto correctamente');
		}
		else
		{
			console.log(data);
		}

	});

	
	var usuario = document.getElementById('nombre2').value;
  if(usuario.length == 0) {
	

    alert('No has llenado los campos necesarios');
    
   
  }

  var usuario = document.getElementById('apellido2').value;
  if(usuario.length == 0) {
    alert('No has llenado los campos necesarios');
    return;
  }

  */

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
  if(uno == 1) {
      //	window.open('https://vegamon.com/landing-veh/','self',' , scrollbars=yes,menubar=yes,location=yes,resizable=no');
      window.location.href='https://vegamon.com/landing-veh/','_self';
var datos=$('#segundo').serialize();
			$.ajax({
				type:"POST",
				url:"registra2.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;

/*	swal.fire({

		width: 400,
		title: ' <h4 style=font-size:18px;color:black>Es un placer atenderlo, agradecemos contactarse con un asesor.</h4>',
		//html:'<div class=datagrid align=center><table align=center style=font-size:12px;color:black><tr><td><strong><img src="wpp.png" name="imagen" id="imagen" width="30" heigth="30"></img></strong></td><td><a href="https://walink.co/8fca0f">0990246666</a></td></tr><tr><td> <strong>IVA:  </strong></td><td><h3></body><?php echo $IVA1 ?></h3></td></tr><tr><td> <strong>GAST. ADMINISTRACION:  </strong></td><td><h3><?php echo $ADMIN1 ?></h3></td></tr><tr><td> <strong>VALOR PÓLIZA:  </strong></td><td><h3><?php echo $VALORTOTAL1 ?></h3></td></tr></table></div>',
		icon: 'error',
		imageWidth: 400,
		imageHeight: 206,
		
		allowOutsideClick:false,
		showDenyButton:true,
		 //showCancelButton: true,
		confirmButtonColor: '#BB2739',
		confirmButtonText: '<img src="wpp1.png" alt="x"  width="30" height="30" align="left"/>Whatsapp',
		cancelButtonColor:'#BB2739',
		denyButtonText:'<img src="form.png" alt="x"  width="30" height="30" align="left"/>Formulario'
		}).then((result) => {
		  if (result.isConfirmed) {
		
		window.open('https://walink.co/8b6d98','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		
		
		  }else if (result.isDenied){

			window.open('https://vegamon.com/contacto/','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		  }
		})
*/

	
    //return;
  }else if (uno == 0)
  {
	
	var datos=$('#segundo').serialize();
			$.ajax({
				type:"POST",
				url:"registra2.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	
	form_2.style.display = "none";
	form_3.style.display = "block";
	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";
	form_3_progessbar.classList.add("active");
	
					}else{
					//	alert("Fallo el server");
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
  if(uno == 0) {
      
       window.location.href='https://vegamon.com/landing-veh/','_self';
	var datos=$('#tercero').serialize();
			$.ajax({
				type:"POST",
				url:"registra_3.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;

  

	}else if (uno == 1){


	var datos=$('#tercero').serialize();
			$.ajax({
				type:"POST",
				url:"registra_3.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_4_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_4_progessbar.classList.add("active");
	
					}else{
					//	alert("Fallo el server");
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
  if(uno == 0) {
       window.location.href='https://vegamon.com/landing-veh/','_self';
       
       var datos=$('#cuarto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_4.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;
       
/*	swal.fire({

		width: 400,
		title: ' <h4 style=font-size:18px;color:black>Es un placer atenderlo, agradecemos contactarse con un asesor.</h4>',
		//html:'<div class=datagrid align=center><table align=center style=font-size:12px;color:black><tr><td><strong><img src="wpp.png" name="imagen" id="imagen" width="30" heigth="30"></img></strong></td><td><a href="https://walink.co/8fca0f">0990246666</a></td></tr><tr><td> <strong>IVA:  </strong></td><td><h3></body><?php echo $IVA1 ?></h3></td></tr><tr><td> <strong>GAST. ADMINISTRACION:  </strong></td><td><h3><?php echo $ADMIN1 ?></h3></td></tr><tr><td> <strong>VALOR PÓLIZA:  </strong></td><td><h3><?php echo $VALORTOTAL1 ?></h3></td></tr></table></div>',
		icon: 'error',
		imageWidth: 400,
		imageHeight: 206,
		
		allowOutsideClick:false,
		showDenyButton:true,
		 //showCancelButton: true,
		confirmButtonColor: '#BB2739',
		confirmButtonText: '<img src="wpp1.png" alt="x"  width="30" height="30" align="left"/>Whatsapp',
		cancelButtonColor:'#BB2739',
		denyButtonText:'<img src="form.png" alt="x"  width="30" height="30" align="left"/>Formulario'
		}).then((result) => {
		  if (result.isConfirmed) {
		
		window.open('https://walink.co/8b6d98','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		
		
		  }else if (result.isDenied){

			window.open('https://vegamon.com/contacto/','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		  }
		})

*/
	
    //return;

	}else if (uno == 1){

var datos=$('#cuarto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_4.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");

	form_4.style.display = "none";
	form_5.style.display = "block";

	form_5_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_5_progessbar.classList.add("active");
	
					}else{
					//	alert("Fallo el server");
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
  if(uno == 1) {
  
   window.location.href='https://vegamon.com/landing-veh/','_self';
	
	var datos=$('#quinto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_5.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;
	
	/*swal.fire({

		width: 400,
		title: ' <h4 style=font-size:18px;color:black>Es un placer atenderlo, agradecemos contactarse con un asesor.</h4>',
		//html:'<div class=datagrid align=center><table align=center style=font-size:12px;color:black><tr><td><strong><img src="wpp.png" name="imagen" id="imagen" width="30" heigth="30"></img></strong></td><td><a href="https://walink.co/8fca0f">0990246666</a></td></tr><tr><td> <strong>IVA:  </strong></td><td><h3></body><?php echo $IVA1 ?></h3></td></tr><tr><td> <strong>GAST. ADMINISTRACION:  </strong></td><td><h3><?php echo $ADMIN1 ?></h3></td></tr><tr><td> <strong>VALOR PÓLIZA:  </strong></td><td><h3><?php echo $VALORTOTAL1 ?></h3></td></tr></table></div>',
		icon: 'error',
		imageWidth: 400,
		imageHeight: 206,
		
		allowOutsideClick:false,
		showDenyButton:true,
		 //showCancelButton: true,
		confirmButtonColor: '#BB2739',
		confirmButtonText: '<img src="wpp1.png" alt="x"  width="30" height="30" align="left"/>Whatsapp',
		cancelButtonColor:'#BB2739',
		denyButtonText:'<img src="form.png" alt="x"  width="30" height="30" align="left"/>Formulario'
		}).then((result) => {
		  if (result.isConfirmed) {
		
		window.open('https://walink.co/8b6d98','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		
		
		  }else if (result.isDenied){

			window.open('https://vegamon.com/contacto/','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		  }
		})

    */
	
    //return;

	}else if (uno == 0){

    var datos=$('#quinto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_5.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");

	form_5.style.display = "none";
	form_6.style.display = "block";

	form_6_btns.style.display = "flex";
	form_5_btns.style.display = "none";

	form_6_progessbar.classList.add("active");
	
					}else{
					//	alert("Fallo el server");
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
	
var nombre1 = document.getElementById('nombre2').value;
var apellido1 = document.getElementById('apellido').value;
var telefono1 = document.getElementById('telefono').value;
var email1 = document.getElementById('email').value;
var codigo1 = document.getElementById('codigo').value;
	

	var uno = document.getElementById('uno5').value;
	if(uno == 1) {
	     window.location.href='https://vegamon.com/landing-veh/','_self';
	     
	     var datos=$('#sexto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_6.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;
	     
	  /*swal.fire({
  
		  width: 400,
		  title: ' <h4 style=font-size:18px;color:black>Es un placer atenderlo, agradecemos contactarse con un asesor.</h4>',
		  //html:'<div class=datagrid align=center><table align=center style=font-size:12px;color:black><tr><td><strong><img src="wpp.png" name="imagen" id="imagen" width="30" heigth="30"></img></strong></td><td><a href="https://walink.co/8fca0f">0990246666</a></td></tr><tr><td> <strong>IVA:  </strong></td><td><h3></body><?php echo $IVA1 ?></h3></td></tr><tr><td> <strong>GAST. ADMINISTRACION:  </strong></td><td><h3><?php echo $ADMIN1 ?></h3></td></tr><tr><td> <strong>VALOR PÓLIZA:  </strong></td><td><h3><?php echo $VALORTOTAL1 ?></h3></td></tr></table></div>',
		  icon: 'error',
		  imageWidth: 400,
		  imageHeight: 206,
		  
		  allowOutsideClick:false,
		  showDenyButton:true,
		   //showCancelButton: true,
		  confirmButtonColor: '#BB2739',
		  confirmButtonText: '<img src="wpp1.png" alt="x"  width="30" height="30" align="left"/>Whatsapp',
		  cancelButtonColor:'#BB2739',
		  denyButtonText:'<img src="form.png" alt="x"  width="30" height="30" align="left"/>Formulario'
		  }).then((result) => {
			if (result.isConfirmed) {
		  
		  window.open('https://walink.co/8b6d98','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
		  
		  
			}else if (result.isDenied){
  
			  window.open('https://vegamon.com/contacto/','blank',' width=1200 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');
			}
		  })
  
  
	  */
	  //return;
  
	  }else if (uno == 0){
//  window.open('diagnostico.php?aseg='+aseguradora+'&sucursal='+sucursal+'&cod_aseguradora='+cod_aseg+'&orden='+orden+'&tipo='+tipo,'Generar','width=1000,height=500,scrollbars=yes,menubar=yes,location=yes,resizable=yes');
//		window.close();
  

 // window.open('https://veraneraink.com/tienda_vegamon/tienda-4/form_solo_compra.php/?cedula=<?php echo $cedula_cot;?>&nombre=<?php echo $nombre;?>&apellido=<?php echo $apellido;?>&genero=<?php echo $genero; ?>&nacimiento=<?php echo $fechanacimiento; ?>&celular=<?php echo $telefono; ?>&email=<?php echo $email; ?>&marcaveh=<?php echo $marca; ?>&modeloveh=<?php echo $modelo; ?>&tipo=<?php echo $tipo; ?>&valorveh=<?php echo $valorvehiculo; ?>&color=<?php echo $color; ?>&anio=<?php echo $ano; ?>&placa=<?php echo $placa; ?>&valorseguro=<?php echo $VALORTOTAL1; ?>&iva=<?php echo $IVA1; ?>&admin=<?php echo $ADMIN1; ?>&prima=<?php echo $VALOR1; ?>&super_banco=<?php echo $SUPER_BANCO; ?>&seguro_campesino=<?php echo $SEGURO_CAMPESINO; ?>   ','_self',' width=700 , height=1900 , scrollbars=yes,menubar=yes,location=yes,resizable=no');

window.location.href='https://veraneraink.com/tienda_vega_pruebas/tienda-4/form_responsive.php?nombre='+nombre1+'&apellido='+apellido1+'&telefono='+telefono1+'&email='+email1+'&codigo='+codigo1,'_self';
	//	window.location.href = 'https://vegamon.com/tienda-4-vegamon-pruebas/form_solo.php';
  
  
   var datos=$('#sexto').serialize();
			$.ajax({
				type:"POST",
				url:"registra_6.php",
				data:datos,
				success:function(r){
					if(r==0){
					//	alert("agregado con exito");
	

					}else{
					//	alert("Fallo el server");
					}
				}
			});

			return false;
  
  
	  }
  });






shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})


