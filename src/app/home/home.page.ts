import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  ngOnInit(){
  }
  ionViewDidEnter(){
    this.map = L.map('mapId').setView([-7.78752056000459, 110.37327325619798], 13)
    const baseMaps = {
      'openstreetmap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
        'esri world iamgery': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'}),
          'stadia': L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }),
      'opentopomap': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'})
    }
    
  L.control.layers(baseMaps).addTo(this.map);
  
  // L.marker([-24.9545914341323, 134.28113103710967]).addTo(this.map)
  //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  //   .openPopup();
  
  const markerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CDN
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Ganti dengan URL ikon marker default 2x dari CDN
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Ganti dengan URL bayangan marker default dari CDN
    iconSize: [25, 41], // Sesuaikan dengan ukuran ikon Anda
    iconAnchor: [12, 41], // Sesuaikan dengan titik penunjuk ikon Anda
  });
  
  
  const marker = L.marker([-7.78752056000459, 110.37327325619798], { icon: markerIcon }).addTo(this.map).bindPopup('Yogyakarta').openPopup();
  const marker1 = L.marker([-7.784313570541377, 110.37618541869247], { icon: markerIcon }).addTo(this.map).bindPopup('Antah branta').openPopup();
  const marker2 = L.marker([-7.784810704248861, 110.37386847860239], { icon: markerIcon }).addTo(this.map).bindPopup('Antah branta').openPopup();

  
}


}
