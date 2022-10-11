function leerBarcos() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Boat/all',
		type : 'GET',
		dataType : 'json',

		success : function(barcos) {
			$("#listaBarcos").empty();
			for(i=0; i<barcos.length;i++){
				$("#listaBarcos").append(
					"<tr><td style='border: 1px solid black;'>"+barcos[i].id+
					"</td><td style='border: 1px solid black;'>"+barcos[i].name+
					"</td><td style='border: 1px solid black;'>"+barcos[i].brand+
					"</td><td style='border: 1px solid black;'>"+barcos[i].year+
					"</td><td style='border: 1px solid black;'>"+barcos[i].category.name+
					"</td><td style='border: 1px solid black;'>"+barcos[i].description
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarBarcos("+barcos[i].id+")'>BORRAR</button></td></tr>"*/);
			}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
	});
}

function guardarBarcos(){
	let marca=$("#marcaBarco").val();
	let modelo=$("#modeloBarco").val();
	let categoria=$("#categoriaBarco").val();
	let nombre=$("#nombreBarco").val();
	let descripcion=$("#descBarco").val();

	let data={
		brand:marca,
		year:modelo,
		category:{"id":categoria},
		name:nombre,
		description:descripcion
	};

	let dataToSend=JSON.stringify(data);
	console.log(dataToSend)


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Boat/save',
		type : 'POST',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idBarco").val("");
			$("#marcaBarco").val("");
			$("#modeloBarco").val("");
			$("#categoriaBarco").val("");
			$("#nombreBarco").val("");
			$("#descBarco").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerBarcos();
		}		
	});
}

function editarBarcos(){
	let idBoat=$("#idBarco").val();
	let marca=$("#marcaBarco").val();
	let modelo=$("#modeloBarco").val();
	let categoria=$("#categoriaBarco").val();
	let nombre=$("#nombreBarco").val();

	let data={
		id:idBoat,
		brand:marca,
		model:modelo,
		category_id:categoria,
		name:nombre
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
		type : 'PUT',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idBarco").val("");
			$("#marcaBarco").val("");
			$("#modeloBarco").val("");
			$("#categoriaBarco").val("");
			$("#nombreBarco").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},
		complete: function(){
			leerBarcos();
		}		
	});
}

function borrarBarcos(idBarco){
	let data={
		id:idBarco
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
		type : 'DELETE',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idBarco").val("");
			$("#marcaBarco").val("");
			$("#modeloBarco").val("");
			$("#categoriaBarco").val("");
			$("#nombreBarco").val("");
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
		complete: function(){
			leerBarcos();
		}	
	});
}