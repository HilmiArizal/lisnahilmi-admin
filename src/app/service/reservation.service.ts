import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_URL: any;

  constructor(private http: HttpClient) {
    this.API_URL = environment.url.server;
  }

  getListWish(dataWish: any) {
    let params = new HttpParams()
      .set("search", dataWish.search)
      .set("currentPage", dataWish.currentPage)
      .set("perPage", dataWish.perPage)
    return this.http.get(this.API_URL + `wish/getListWish?${params}`).pipe(
      tap((res) => console.log(res))
    )
  }

  getReservation(dataWish: any) {
    return this.http.post(this.API_URL + `wish/getReservation`, dataWish).pipe(
      tap((res) => console.log(res))
    )
  }

  deleteReservation(dataWish: any){
    return this.http.delete(this.API_URL + `wish/deleteWish?id=${dataWish._id}`).pipe(
      tap((res) => console.log(res))
    )
  }

}
