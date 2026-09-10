/*
  EDITE ÚNICAMENTE ESTA LISTA PARA AGREGAR O CAMBIAR APLICATIVOS.

  Campos:
  - nombre: nombre que se muestra.
  - descripcion: texto breve.
  - categoria: grupo o área.
  - url: enlace completo del aplicativo.
  - sigla: 1 a 3 letras para el ícono.
*/
const aplicativos = [
  {
    nombre: "OpenProject",
    descripcion: "Planificación, tareas, cronogramas y seguimiento de proyectos.",
    categoria: "Administrativos",
    url: "http://10.0.62.174:8080/",
    sigla: "CP"
  },
  {
    nombre: "Observatorio de adherencia",
    descripcion: "Visualización de indicadores y seguimiento de guías de práctica clínica.",
    categoria: "Indicadores",
    url: "http://intranet-ietsi.essalud.gob.pe/observatorio-adherencia-gpc/",
    sigla: "OA"
  },
  {
    nombre: "Ayuda Ficha Adherencia",
    descripcion: "Cantidad de Diagnosticos, medicamentos y ayudas diagnósticas.",
    categoria: "Gestión",
    url: "http://10.0.62.174:5080/",
    sigla: "AFA"
  },
  {
    nombre: "Reporte de GPC, Metabase",
    descripcion: "Explotación de datos y generación de reportes.",
    categoria: "Reportes",
    url: "http://10.0.62.174:3000/public/dashboard/b678253b-9ced-47d5-aa36-580be8b372c2?filtro_fecha=&n%25C3%25BAmero=1000",
    sigla: "RM"
  },
  {
    nombre: "Seguimiento metodológico de GPCs",
    descripcion: "Seguimiento metodológico de guías de práctica clínica desde RedCap.",
    categoria: "Reportes",
    url: "http://10.0.62.174:5050/",
    sigla: "RR"
  },
  {
    nombre: "Plataforma GPC",
    descripcion: "Plataforma de guías de práctica clínica, mapa de recomendaciones y versión navegable.",
    categoria: "GPC",
    url: "http://10.0.62.174:4000/",
    sigla: "GPC"
  },
  {
    nombre: "Mensajes automáticos REDCap",
    descripcion: "Servicio para mensajes automáticos REDCap.",
    categoria: "REDCap",
    url: "http://10.0.62.174:5000/",
    sigla: "MAR"
  }
];

const lista = document.getElementById("lista-aplicativos");
const buscador = document.getElementById("buscador");
const contador = document.getElementById("contador");
const sinResultados = document.getElementById("sin-resultados");

function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderizarAplicativos(datos) {
  lista.innerHTML = "";

  datos.forEach((app) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "app-card";

    tarjeta.innerHTML = `
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${escaparHtml(app.sigla)}</div>
        <div>
          <h2>${escaparHtml(app.nombre)}</h2>
          <span class="app-category">${escaparHtml(app.categoria)}</span>
        </div>
      </div>

      <p class="app-description">${escaparHtml(app.descripcion)}</p>

      <a
        class="app-link"
        href="${escaparHtml(app.url)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir ${escaparHtml(app.nombre)} en una pestaña nueva"
      >
        Abrir aplicativo
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 5h5v5"/>
          <path d="M10 14 19 5"/>
          <path d="M19 13v6H5V5h6"/>
        </svg>
      </a>
    `;

    lista.appendChild(tarjeta);
  });

  contador.textContent = `${datos.length} ${datos.length === 1 ? "aplicativo" : "aplicativos"}`;
  sinResultados.hidden = datos.length !== 0;
}

function filtrarAplicativos() {
  const texto = buscador.value.trim().toLocaleLowerCase("es");

  const resultado = aplicativos.filter((app) => {
    const contenido = `${app.nombre} ${app.descripcion} ${app.categoria}`.toLocaleLowerCase("es");
    return contenido.includes(texto);
  });

  renderizarAplicativos(resultado);
}

buscador.addEventListener("input", filtrarAplicativos);
renderizarAplicativos(aplicativos);
