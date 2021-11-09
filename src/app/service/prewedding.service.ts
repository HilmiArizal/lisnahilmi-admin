import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreweddingService {

  public API_URL: any = '';

  constructor(private http: HttpClient) {
    this.API_URL = environment.url.local;
  }

  getListPrewedding(dataPrewedding: any) {
    let params = new HttpParams()
      .set("currentPage", dataPrewedding.currentPage)
      .set("perPage", dataPrewedding.perPage)
    return this.http.get(this.API_URL + `prewedding/getListPrewedding?${params}`).pipe(
      tap((res) => console.log(res))
    )

  }

}
