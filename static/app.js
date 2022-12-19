// JAVIER_MORET_GALAN

// Ventana modal
function showModal() {
    document.getElementById('cuadro-modal').style.display = 'block';
    document.getElementById('cuadro-principal').style.display = 'none';
  }
  
  function closeModal() {
    document.getElementById('cuadro-modal').style.display = 'none';
    document.getElementById('cuadro-principal').style.display = 'block';
  }

  // enviar datos


    function enviarForm(){
        alert('El formulario ha sido enviado con éxito')
    }