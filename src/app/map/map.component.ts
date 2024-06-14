import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;
  data: any;
  property: any;
  index: any;
  headers: any;
  form: any;
  markers: any;

  lastZoom = {
    latitude: 0,
    longtude: 0,
    zoom: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "type": new FormControl(),
      "latitude": new FormControl(),
      "longitude": new FormControl(),
      "label": new FormControl(),
    })

    this.form.valueChanges.subscribe((value: any) => {
      this.drawCharts(this.data, value);
    })
  }

  init(): void {

    console.log(this.lastZoom);

    if (this.map) {
      this.map.remove()
    }
    let lat = 0, long = 0, zoom = 10;

    if (this.data && this.property !== undefined) {
      lat = this.data[0][this.property.latitude]
      long = this.data[0][this.property.longitude]
      this.form.patchValue(this.property);

      // if (this.lastZoom.latitude > 0 && this.lastZoom.longtude > 0) {
      //   lat = this.lastZoom.latitude;
      //   long = this.lastZoom.longtude;
      //   if (this.lastZoom.zoom !== 0) {
      //     zoom = this.lastZoom.zoom
      //   }
      // }
    }

    this.map = L.map(('map_' + this.index)).setView([lat, long], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.drawCharts(this.data, this.property)

    // // Event listener for zoom end
    // this.map.on('zoomend', () => {
    //   this.lastZoom.zoom = this.map!.getZoom();
    // });

    // // Event listener for map move end
    // this.map.on('moveend', () => {
    //   let lastLatLng = this.map!.getCenter();
    //   this.lastZoom.latitude = lastLatLng.lat;
    //   this.lastZoom.longtude = lastLatLng.lng;
    //   this.lastZoom.zoom = this.map!.getZoom();
    // });
  }

  drawCharts(data: any, property: MapInterface) {
    if (this.map) {
      if (this.markers) this.markers.clearLayers();
      else this.markers = L.layerGroup().addTo(this.map!);

      data.forEach((each: any) => {
        if (!isNaN(each[property.latitude]) && !isNaN(each[property.longitude])) {
          const marker = L.marker([+each[property.latitude], +each[property.longitude]]).addTo(this.map!);
          marker.bindPopup(`${property.label} : ${each[property.label]}`)
          marker.addTo(this.markers)
        }
      });
    }
  }

  public downloadMapAsImage(): void {
    // if (this.map) {
    //   leafletImage(this.map, (err: any, canvas: HTMLCanvasElement) => {
    //     if (err) {
    //       console.error('Error generating image', err);
    //       return;
    //     }

    //     const img = document.createElement('img');
    //     const dimensions = this.map?.getSize();
    //     img.width = dimensions?.x || 0;
    //     img.height = dimensions?.y || 0;
    //     img.src = canvas.toDataURL();

    //     const link = document.createElement('a');
    //     link.href = img.src;
    //     link.download = 'map.png';
    //     link.click();
    //   });
    // }
  }

}


interface MapInterface {
  "type": string,
  "latitude": string,
  "longitude": string,
  "label": string
}