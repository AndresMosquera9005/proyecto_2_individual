export const uploader = new Ng2FileUploader({
  url: 'http://localhost:3000/upload', // URL del endpoint para subir la imagen
  headers: [{ name: 'Content-Type', value: 'multipart/form-data' }] // Cabeceras HTTP necesarias
});
