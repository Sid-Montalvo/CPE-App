if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registrado  => console.log('Service Worker registrado con éxito:', registrado))
        .catch(error => console.log('Error al registrar el Service Worker:', error));
    } else {
      console.log('Service Workers no soportados');
    }
  