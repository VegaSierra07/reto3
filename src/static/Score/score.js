function leerScore() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Score/all',
		type : 'GET',
		dataType : 'json',

		success : function(scores) {
			$("#listaScores").empty();
			for(i=0; i<scores.length;i++){
				$("#listaScores").append(
					"<tr><td style='border: 1px solid black;'>"+scores[i].scoreId+
					"</td><td style='border: 1px solid black;'>"+scores[i].puntaje+
					"</td><td style='border: 1px solid black;'>"+scores[i].description
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarScore("+categoria[i].id+")'>BORRAR</button></td></tr>"*/);
			}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
	});
}

function guardarScore() {
	let puntaje = $("#puntaje").val();
	let descripcion = $("#descripcionScore").val();


	let data={
		puntaje:puntaje,
		description:descripcion,
	};

	let dataToSend=JSON.stringify(data);


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Score/save',
		type : 'POST',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#puntaje").val("");
			$("#descripcionScore").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerScore();
		}		
	});
}

function editarScore(){
	let id = $("#idCategoria").val();
	let nombre = $("#nombreCategoria").val();
	let descripcion = $("#descripcionCategoria").val();


	let data={
		id:id,
		name:nombre,
		description:descripcion,
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
		type : 'PUT',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idCategoria").val("");
			$("#nombreCategoria").val("");
			$("#descripcionCategoria").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerCategoria();
		}		
	});
}

function borrarScore(idCliente){
	let data={
		id:idCliente
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
		type : 'DELETE',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
		complete: function(){
			leerClientes();
		}	
	});
}