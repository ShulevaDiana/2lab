var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_lab1highway_3 = new ol.format.GeoJSON();
var features_lab1highway_3 = format_lab1highway_3.readFeatures(json_lab1highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1highway_3.addFeatures(features_lab1highway_3);
var lyr_lab1highway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1highway_3, 
                style: style_lab1highway_3,
                interactive: true,
                title: '<img src="styles/legend/lab1highway_3.png" /> lab1 — highway'
            });
var format_lab1building_4 = new ol.format.GeoJSON();
var features_lab1building_4 = format_lab1building_4.readFeatures(json_lab1building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1building_4.addFeatures(features_lab1building_4);
var lyr_lab1building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1building_4, 
                style: style_lab1building_4,
                interactive: false,
                title: '<img src="styles/legend/lab1building_4.png" /> lab1 — building'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_lab1highway_3.setVisible(true);lyr_lab1building_4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_lab1highway_3,lyr_lab1building_4];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab1highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'maxspeed': 'maxspeed', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'oneway': 'oneway', 'surface': 'surface', 'lanes': 'lanes', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_lab1building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shop': 'shop', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_lab1highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'maxspeed': '', 'horse': '', 'foot': '', 'bicycle': '', 'oneway': '', 'surface': '', 'lanes': '', 'ref': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_lab1building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'shop': 'TextEdit', 'payment:cash': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'maxspeed': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'oneway': 'no label', 'surface': 'no label', 'lanes': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_lab1building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shop': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_lab1building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});