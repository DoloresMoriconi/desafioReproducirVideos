// Patrón Módulo mediante IIFE
let reproductor = (function () {

   //función privada para insertar videos en el html
   function mostrarVideo(url, id) {
      let iframe = document.getElementById(id);
      iframe.setAttribute('src', url);
   };
   
   //función pública que llama a la función interna para insertar videos
   return {
      setUrl: (url, id) => {
         mostrarVideo(url, id);
      }
   };
})();

// Clase Multimedia
class Multimedia {
   constructor(url) {
      this._url = url;
   };

   setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
   }
}


// Clase Reproductor
class ReproductorVideos extends Multimedia {
   constructor(url, id) {
      super(url);
      this._id = id;
   }

   playMultimedia() {
      reproductor.setUrl(this._url, this._id);
   }

   setInicio(segundos) {
      this._url = `${this._url}&amp;start=${segundos}`
   }
}

// Crear una instancia de Reproductor para cada video
let reproductorMusica = new ReproductorVideos("https://www.youtube.com/embed/1zEIuTPho34?si=OQZdvc_5xcKZFPQw", "musica");
let reproductorPelicula = new ReproductorVideos("https://www.youtube.com/embed/RI7e1IksKEQ?si=q54idkat5PZeELds", "peliculas");
let reproductorSerie = new ReproductorVideos("https://www.youtube.com/embed/9GgxinPwAGc?si=F2nE1yndTNhBKOIK", "series");

//Reproducir los videos
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();


// Modificar el inicio de algún video
reproductorPelicula.setInicio(30); // Iniciar película en el segundo 30
