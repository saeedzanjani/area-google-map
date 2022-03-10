import { Injectable } from '@angular/core';
import * as angersiedlung_bike from '../../assets/angersiedlung_bike.json'
import * as angersiedlung_walk from '../../assets/angersiedlung_walk.json'
import * as hatric_bike from '../../assets/hatric_bike.json'
import * as hatric_walk from '../../assets/hatric_walk.json'
import * as hauptplatz_bike from '../../assets/hauptplatz_bike.json'
import * as hauptplatz_walk from '../../assets/hauptplatz_walk.json'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor() { }

  getAngersiedlungBike():Observable<Object> {
    return new Observable(observer => {
      observer.next(angersiedlung_bike)
    })
  }

  getAngersiedlungWalk():Observable<Object> {
    return new Observable(observer => {
      observer.next(angersiedlung_walk)
    })
  }

  getHatricBike():Observable<Object> {
    return new Observable(observer => {
      observer.next(hatric_bike)
    })
  }

  getHatricWalk():Observable<Object> {
    return new Observable(observer => {
      observer.next(hatric_walk)
    })
  }

  getHauptplatzBike():Observable<Object> {
    return new Observable(observer => {
      observer.next(hauptplatz_bike)
    })
  }

  getHauptplatzWalk():Observable<Object> {
    return new Observable(observer => {
      observer.next(hauptplatz_walk)
    })
  }
}
