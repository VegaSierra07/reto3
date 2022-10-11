function leerClientes() {
	//FUNCION GET

	$.ajax({
		url : 'http://150.136.254.231:8080/api/Client/all',
		type : 'GET',
		dataType : 'json',

		success : function(clientes) {
			$("#listaClientes").empty();
			for(i=0; i<clientes.length;i++){
				$("#listaClientes").append(
					"<tr><td style='border: 1px solid black;'>"+clientes[i].idClient+
					"</td><td style='border: 1px solid black;'>"+clientes[i].name+
					"</td><td style='border: 1px solid black;'>"+clientes[i].email+
					"</td><td style='border: 1px solid black;'>"+clientes[i].age
					/*"</td>"+"<td style='border: 1px solid black;'><button onclick='borrarCliente("+clientes[i].idClient+")'>BORRAR</button></td></tr>"*/);
			}
		},
		error : function(xhr, status) {
			alert('ha sucedido un problema');
		},		
	});
}

function guardarCliente(){
	let nombre=$("#nombreCliente").val();
	let correo=$("#mailCliente").val();
	let contraseña=$("#passwordCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		name:nombre,
		email:correo,
		password:contraseña,
		age:edad
	};

	let dataToSend=JSON.stringify(data);


	$.ajax({
		url : 'http://150.136.254.231:8080/api/Client/save',
		type : 'POST',
		data : dataToSend,
		contentType : 'application/json',

		success : function(json) {
			$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#passwordCliente").val("");
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

function editarCliente(){
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let correo=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:correo,
		age:edad
	};

	let dataToSend=JSON.stringify(data);

	$.ajax({
		url : 'https://gb11ca747cb8a6c-t1zbfiek8k6n1gg5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
		type : 'PUT',
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

function borrarCliente(idCliente){
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