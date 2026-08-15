document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Inicializar o mapa na div #mapa-interativo (coordenadas de imagem)
  var map = L.map('mapa-interativo', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2,
    zoomControl: true,
    attributionControl: false
  });

  // 2. Dimensões virtuais da planta DO EVENTO (nova planta baixa)
  var w = 900, h = 570;
  var bounds = [[0, 0], [h, w]];

  // ATENÇÃO: para mudar a imagem do "mapa" é só colocar o caminho dentro das aspas: L.imageOverlay('...', bounds)
  var image = L.imageOverlay('src/mapa_final.png', bounds).addTo(map);
  map.fitBounds(bounds);


  // 3. Marcadores (apenas os pop-ups, sem camadas/filtros)
  var wcEsq = L.circleMarker([487, 293], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  wcEsq.bindPopup("<b>W.C.</b><br>Banheiro masculino e feminino.");

  var wcDir = L.circleMarker([257, 745], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  wcDir.bindPopup("<b>W.C.</b><br>Banheiro masculino e feminino.");

  var diretoria = L.circleMarker([485, 491], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  diretoria.bindPopup("<b>Diretoria</b><br>Sala da diretoria.");

  var confucio = L.circleMarker([301, 151], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  confucio.bindPopup("<b>Instituto Confúcio</b><br>Espaço do Instituto Confúcio.");

  var patio = L.circleMarker([315, 319], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  patio.bindPopup("<b>Pátio</b><br>Área central de convivência.");

  var seara = L.circleMarker([327, 567], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  seara.bindPopup("<b>Espaço SEARA</b>");

  var exposicao = L.circleMarker([373, 689], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  exposicao.bindPopup("<b>Exposição de Projetos</b>");

  var oficinas = L.circleMarker([121, 281], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  oficinas.bindPopup("<b>Oficinas</b><br>Salas de oficinas.");

  var auditorio = L.circleMarker([95, 491], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  auditorio.bindPopup("<b>Auditório</b><br>Auditório principal.");

  var entrada = L.circleMarker([117, 685], {
    radius: 8,
    color: '#FFFFFF',
    weight: 2,
    fillColor: '#E854C9',
    fillOpacity: 0.5
  }).addTo(map);
  entrada.bindPopup("<b>Entrada</b><br>Entrada principal do prédio.");


  // FERRAMENTA DE DESENVOLVEDOR: Descobrir coordenadas ao clicar
  // Deixe descomentado para ajustar a posição de cada marcador clicando na imagem

  /*map.on('click', function(e) {
    var y = Math.round(e.latlng.lat);
    var x = Math.round(e.latlng.lng);
    alert("Coordenada: [" + y + ", " + x + "]");
    console.log("Coordenada copiada: [" + y + ", " + x + "]");
  });
});*/
