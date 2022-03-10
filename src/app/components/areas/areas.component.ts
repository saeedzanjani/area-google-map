import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent implements OnInit {

  public placeIcon = '../../assets/images/pin-location-4355.png';

  public angersiedlungBike: any
  public angersiedlungWalk: any
  public hatricBike: any
  public hatricWalk: any
  public hauptplatzBike: any
  public hauptplatzWalk: any

  public showAngersiedlungBike = false
  public showAngersiedlungWalk = false
  public showHatricBike = false
  public showHatricWalk = false
  public showHauptplatzBike = false
  public showHauptplatzWalk = false


  hatricShoppingCentreLat: number = 47.2815118872144;
  hatricShoppingCentreLng: number = 15.990487812776836;

  angersiedlungLat: number = 48.2874698130766;
  angersiedlungLng: number = 16.979676523116735;

  hauptplatzLat: number = 47.28111248016136;
  hauptplatzLng: number = 15.969186572879872;

  constructor(
    private _service: AreasService
  ) { }

  ngOnInit(): void {
    this._service.getAngersiedlungBike().subscribe((res:any) => {
      this.angersiedlungBike = res
    })
    this._service.getAngersiedlungWalk().subscribe((res:any) => {
      this.angersiedlungWalk = res
    })
    this._service.getHauptplatzBike().subscribe((res:any) => {
      this.hauptplatzBike = res
    })
    this._service.getHauptplatzWalk().subscribe((res:any) => {
      this.hauptplatzWalk = res
    })
    this._service.getHatricBike().subscribe((res:any) => {
      this.hatricBike = res
    })
    this._service.getHatricWalk().subscribe((res:any) => {
      this.hatricWalk = res
    })
  }



}
