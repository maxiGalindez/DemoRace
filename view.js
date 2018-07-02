
function bootstrap() {

    // Ubicación de la UNGS.
    var ungsLocation = [-34.5221554, -58.7000067];
    var hSanIsidroLocation = [-34.4799808,-58.5243952];

    // Creación del componente mapa de Leaflet.
    // var map = L.map('mapid').setView(ungsLocation, 15);
    var map = L.map('mapid').setView(hSanIsidroLocation, 15);

    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregamos el control para seleccionar Layers al mapa
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    // hack:
    map.layersControl = layersControl;

    // Creamos un círculo con centro en la UNGS.
    // var circle = L.circle(ungsLocation, {
    //     color: '#0000AA',
    //     fillColor: '#0000CC',
    //     fillOpacity: 0.2,
    //     radius: 300
    // }).addTo(map);

    // Creamos un polígono.
    // L.polygon([
    //     L.latLng(-34.515594, -58.705654),
    //     L.latLng(-34.523503, -58.714062),
    //     L.latLng(-34.519177, -58.719890),
    //     L.latLng(-34.511089, -58.711374),
    //     L.latLng(-34.514062, -58.707909),
    //     L.latLng(-34.513824, -58.707584),
    // ]).addTo(map);

    // Creamos un marker sobre la UNGS.
    var ungsMarker = L.marker(ungsLocation);
    ungsMarker.addTo(map);

    // Creamos una carrera
    // var race1K = new Race("1K", map);

	// // Pietro!	
    // var pietro = new Runner("Maximoff Pietro", 'blue', [
	// 	{lat: -34.524309, lon: -58.695315},
	// 	{lat: -34.524048, lon: -58.695630},
	// 	{lat: -34.523720, lon: -58.696011},
	// 	{lat: -34.523464, lon: -58.696311},
	// 	{lat: -34.523076, lon: -58.696773},
	// 	{lat: -34.522426, lon: -58.697540},
	// 	{lat: -34.522420, lon: -58.697544},
	// 	{lat: -34.522102, lon: -58.697934},
	// 	{lat: -34.521860, lon: -58.698216},
	// 	{lat: -34.521464, lon: -58.698688}
    //     ]);
	// //
    // race1K.addRunner(pietro);

	// // Barry!
    // var barry = new Runner("Bartholomew Allen", 'red', [
	// 	{lat: -34.524309, lon: -58.695315},
	// 	{lat: -34.524105, lon: -58.695573},
	// 	{lat: -34.523739, lon: -58.695986},
	// 	{lat: -34.523371, lon: -58.696419},
	// 	{lat: -34.523371, lon: -58.696419},
	// 	{lat: -34.523371, lon: -58.696419},
	// 	{lat: -34.523371, lon: -58.696419},
	// 	{lat: -34.523371, lon: -58.696419},
	// 	{lat: -34.523371, lon: -58.696419},	
	// 	{lat: -34.523371, lon: -58.696419}	
    //     ]);
    // //
    // race1K.addRunner(barry);
	
    // // Bolt!
    // var bolt = new Runner("Usain Bolt", 'green', [
	// 	{lat: -34.524309, lon: -58.695315},
	// 	{lat: -34.524085, lon: -58.695596},
	// 	{lat: -34.523832, lon: -58.695882},
	// 	{lat: -34.523431, lon: -58.696354},
	// 	{lat: -34.523107, lon: -58.696740},
	// 	{lat: -34.522747, lon: -58.697168},
	// 	{lat: -34.522540, lon: -58.697409},
	// 	{lat: -34.522162, lon: -58.697866},
	// 	{lat: -34.521860, lon: -58.698216},
	// 	{lat: -34.521390, lon: -58.698780}
    //     ]);
    // //
    // race1K.addRunner(bolt);

    // // START!
    // race1K.start();

    var corredor1 = [[-34.524309, -58.695315], [-34.521464, -58.698688]];

    var movil1 = [[-34.465234, -58.522382],[-34.467270, -58.519059],
    [-34.470046, -58.516694],[-34.474301, -58.512605],
    [-34.481897, -58.527503],[-34.481681, -58.527962],
    [-34.478252, -58.529436],[-34.474361, -58.522208],
    [-34.475076, -58.521711],[-34.475223, -58.521889],
    [-34.475928, -58.521149],[-34.473961, -58.517296],
    [-34.469806, -58.520371],[-34.470416, -58.521494],
    [-34.469701, -58.522017],[-34.469186, -58.520843],
    [-34.468418, -58.521404],[-34.474024, -58.532862],
    [-34.472383, -58.537340],[-34.465234, -58.522382]];

// -----------------Forma automatica de arranque del recorrido---------------

    // var marker2 = L.Marker.movingMarker(corredor1,
    //     [3000, 9000, 9000, 4000], {autostart: true}).addTo(map);
    // L.polyline(corredor1, {color: 'blue'}).addTo(map);
    // marker2.on('end', function() {
    //     marker2.bindPopup('<b>Finalize Recorrido!</b>', {closeOnClick: false})
    //     .openPopup();
    // });
    
    
    // var marker3 = L.Marker.movingMarker(movil1,
    //     [3000,3000,3000,3000,5000,7000,9000,3000,3000,
    //     3000,3000,3000,3000,3000,3000,3000,3000,3000,
    //     3000,3000,3000], {autostart: true}).addTo(map);
    // L.polyline(movil1, {color: 'blue'}).addTo(map);
    // marker3.on('end', function() {
    //     marker3.bindPopup('<b>Finalize Recorrido!</b>', {closeOnClick: false})
    //     .openPopup();
    // });
// ------------Forma manual de arranque del recorrido---------------------

//     var marker4 = L.Marker.movingMarker(movil1, [10000, 10000, 10000,
//         20000, 2000, 6000, 4500, 4500, 2000, 2000, 4500, 4500, 4500,
//          4500, 4500, 4500, 60000, 60000, 60000, 90000]).addTo(map);
//     L.polyline(movil4).addTo(map);
//     marker4.once('click', function () {
//     marker4.start();
//     marker4.closePopup();
//     marker4.unbindPopup();
//     marker4.on('click', function() {
//         if (marker4.isRunning()) {
//             marker4.pause();
//         } else {
//             marker4.start();
//         }
//     });
//     setTimeout(function() {
//         marker4.bindPopup('<b>Click Para pausar el recorrido! </b>').openPopup();
//     }, 6000);
//     });
//     marker4.on('end', function() {
//             marker4.bindPopup('<b>Finalize Recorrido!</b>', {closeOnClick: false})
//             .openPopup();
//         });
// marker4.bindPopup('<b>Click para empezar el recorrido !</b>', {closeOnClick: false});
// marker4.openPopup();
    
// ######################---Recorrido infinito---#########################

var marker1 = L.Marker.movingMarker(movil1,
    [10000, 10000, 10000, 20000, 2000, 6000, 4500, 
        4500, 2000, 2000, 4500, 4500, 4500,
    4500, 4500, 4500, 4000, 50000, 10000, 60000], 
    {autostart: true, loop: true}).addTo(map);
    L.polyline(movil1).addTo(map);
marker1.loops = 0;
marker1.bindPopup('', {closeOnClick: false});
marker1.on('end', function() {
                marker1.bindPopup('<b>Finalize Recorrido!</b>', {closeOnClick: false})
                .openPopup();
            });
    marker1.once('click', function () {
    marker1.on('click', function() {
        if (marker1.isRunning()) {
            marker1.pause();
            marker1.bindPopup('<b>Movil detenido </b>').openPopup();
        } else if(marker1.isPaused()){
            marker1.start();
            marker1.bindPopup('<b>Movil avanzando </b>').openPopup();
        }
    });


}

$(bootstrap);