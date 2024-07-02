

function validarFormulario() {
   
    var formaSeleccionada = document.querySelector('input[name="forma"]:checked');
    var capasSeleccionadas = document.querySelector('select[name="capas"]').value;
    var bizcochueloSeleccionado = document.querySelector('input[name="bizcochuelo"]:checked');
    var rellenoSeleccionado = document.querySelector('input[name="relleno"]:checked');
    var coberturaSeleccionada = document.querySelector('input[name="cobertura"]:checked');
    var disenoSeleccionado = document.querySelector('input[name="diseno"]:checked');
    var ok = 0;
    if (!formaSeleccionada) {
        //alert('Por favor, seleccione la forma de la torta.');
        mensajeError.innerHTML = 'Por favor, seleccione la forma de la torta.';
        return false;
    }
    else { ok = ok+1;}
    if (!capasSeleccionadas) {
        //alert('Por favor, seleccione la cantidad de capas.');
        mensajeError.innerHTML = 'Por favor, seleccione la cantidad de capas.';
        return false;
    }
    else { ok = ok+1;}

    if (!bizcochueloSeleccionado) {
        //alert('Por favor, seleccione el tipo de bizcochuelo.');
        mensajeError.innerHTML = 'Por favor, seleccione el tipo de bizcochuelo.';
        return false;
    }
    else { ok = ok+1;}
    if (!rellenoSeleccionado) {
        //alert('Por favor, seleccione el relleno.');
        mensajeError.innerHTML = 'Por favor, seleccione el relleno.';
        return false;
    }
    else { ok = ok+1;}
    if (!coberturaSeleccionada) {
        //alert('Por favor, seleccione la cobertura.');
        mensajeError.innerHTML = 'Por favor, seleccione la cobertura.';
        return false;
    }
    else { ok = ok+1;}
   
    if (!disenoSeleccionado) {
        
        //alert('Por favor, seleccione el diseño.');
        mensajeError.innerHTML = 'Por favor, seleccione el diseño.';
        return false;
    }
    else { ok = ok+1;}

    // Si todas las validaciones pasan
   
    var camposSeleccionados = {
        forma: formaSeleccionada.value,
        capas: capasSeleccionadas,
        bizcochuelo: bizcochueloSeleccionado.value,
        relleno: rellenoSeleccionado.value,
        cobertura: coberturaSeleccionada.value,
        diseno: disenoSeleccionado.value
    };

    // Puedes usar esta variable para cualquier propósito necesario, por ejemplo, enviarla al servidor
    console.log(camposSeleccionados);

    // Por ahora, solo muestra los campos seleccionados en un alert
    if(ok == 6){
    alert('Formulario válido. Campos seleccionados:\n' +
          'Forma: ' + camposSeleccionados.forma + '\n' +
          'Capas: ' + camposSeleccionados.capas + '\n' +
          'Bizcochuelo: ' + camposSeleccionados.bizcochuelo + '\n' +
          'Relleno: ' + camposSeleccionados.relleno + '\n' +
          'Cobertura: ' + camposSeleccionados.cobertura + '\n' +
          'Diseño: ' + camposSeleccionados.diseno);
    
    return true;
    }
    else { return false;

    }

        

    
    
}