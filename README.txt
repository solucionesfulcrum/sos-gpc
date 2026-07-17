PORTAL DE APLICATIVOS
======================

Contenido:
- index.html
- styles.css
- app.js

Cómo usar:
1. Abra el archivo app.js.
2. Busque la constante: const aplicativos = [ ... ].
3. Reemplace los nombres, descripciones y URL de ejemplo.
4. Abra index.html en el navegador.

Para agregar otro aplicativo, copie un bloque como este:

{
  nombre: "Nombre del aplicativo",
  descripcion: "Descripción breve.",
  categoria: "Área",
  url: "https://direccion-del-aplicativo",
  sigla: "NA"
}

Todos los enlaces se abren en una pestaña nueva mediante:
target="_blank" y rel="noopener noreferrer".

Publicación en Nginx:
Copie index.html, styles.css y app.js dentro de la carpeta html de Nginx.
Luego ingrese desde el navegador usando la dirección configurada en Nginx.
