function leerMensaje() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Message/all',
		type : 'GET',
		dataType : 'json',

		success : function(mensajes) {
			$("#listaMensajes").empty();	
			for(i=0; i<mensajes.length;i++){
				$("#listaMensajes").append(
					"<tr><td style='border: 1px solid black;'>"+mensajes[i].idMessage+
					"</td><td style='border: 1px solid black;'>"+mensajes[i].messageText+
					"</td><td style='border: 1px solid black;'>"+mensajes[i].client.name+
					"</td><td style='border: 1px solid black;'>"+mensajes[i].boat.name
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarCliente("+mensajes[i].idMessage+")'>BORRAR</button></td></tr>"*/);
				}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
	});
}

function guardarMensaje(){
	let message=$("#mensajeText").val();
	let idClient=$("#idCliente").val();
	let idBarco=$("#idBarco").val();

	let data={
		messageText:message,
		client:{"idClient":idClient},
		boat:{"id":idBarco},
	};

	let dataToSend=JSON.stringify(data);


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Message/save',
		type : 'POST',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idMensaje").val("");
			$("#mensajeText").val("");
			$("#idCliente").val("");
			$("#idBarco").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerMensaje();
		}		
	});
}

function editarMensaje(){
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

function borrarCliente(idMessage){
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