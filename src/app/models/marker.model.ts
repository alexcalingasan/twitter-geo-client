interface MarkerInterface {
  lat: number;
	lng: number;
	text: string;
}

export class Marker implements MarkerInterface {
	lat: number;
	lng: number;
    text: string;

  public constructor(marker?: Marker) {
    this.lat = marker.lat;
    this.lng = marker.lng;
    this.text = marker.text;
  }
}
