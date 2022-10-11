function leerReservacion() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Reservation/all',
		type : 'GET',
		dataType : 'json',

		success : function(resevaciones) {
			$("#listaReservaciones").empty();
			for(i=0; i<resevaciones.length;i++){
				$("#listaReservaciones").append(
					"<tr><td style='border: 1px solid black;'>"+resevaciones[i].idReservation+
					"</td><td style='border: 1px solid black;'>"+resevaciones[i].startDate+
					"</td><td style='border: 1px solid black;'>"+resevaciones[i].devolutionDate+
					"</td><td style='border: 1px solid black;'>"+resevaciones[i].client.name+
					"</td><td style='border: 1px solid black;'>"+resevaciones[i].boat.name
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarCliente("+resevaciones[i].idMessage+")'>BORRAR</button></td></tr>"*/);
				}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
	});
}

function guardarReservacion(){
	let fechaInicial=$("#fechaInicial").val();
	let fechaFinal=$("#fechaFinal").val();
	let idClient=$("#idCliente").val();
	let idBarco=$("#idBarco").val();

	let data={
		startDate:fechaInicial,
		devolutionDate: fechaFinal,
		client:{"idClient":idClient},
		boat:{"id":idBarco},
	};

	let dataToSend=JSON.stringify(data);


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Reservation/save',
		type : 'POST',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#fechaInicial").val("");
			$("#fechaFinal").val("");
			$("#idCliente").val("");
			$("#idBarco").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerReservacion();
		}		
	});
}

function editarReservacion(){
	let idMessage=$("#idMensaje").val();
	let message=$("#mensajeText").val();

	let data={
		id:idMessage,
		messagetext:message
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
		type : 'PUT',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idMensaje").val("");
			$("#mensajeText").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerMensaje();
		}		
	});
}

function borrarReservacion(idMessage){
	let data={
		id:idMessage
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
		type : 'DELETE',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idMensaje").val("");
			$("#mensajeText").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
		complete: function(){
			leerMensaje();
		}	
	});
}