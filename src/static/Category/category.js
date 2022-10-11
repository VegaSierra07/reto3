function leerCategoria() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Category/all',
		type : 'GET',
		dataType : 'json',

		success : function(categoria) {
			$("#listaCategorias").empty();
			for(i=0; i<categoria.length;i++){
				$("#listaCategorias").append(
					"<tr><td style='border: 1px solid black;'>"+categoria[i].id+
					"</td><td style='border: 1px solid black;'>"+categoria[i].name+
					"</td><td style='border: 1px solid black;'>"+categoria[i].description
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarCategoria("+categoria[i].id+")'>BORRAR</button></td></tr>"*/);
			}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
	});
}

function guardarCategoria() {
	let nombre = $("#nombreCategoria").val();
	let descripcion = $("#descripcionCategoria").val();


	let data={
		name:nombre,
		description:descripcion,
	};

	let dataToSend=JSON.stringify(data);


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Category/save',
		type : 'POST',
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
			//leerClientes();
		}		
	});
}

function editarCategoria(){
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

function borrarCategoria(idCliente){
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