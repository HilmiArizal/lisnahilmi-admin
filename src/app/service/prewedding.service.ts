import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Prewedding } from '../content/interface/prewedding';

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

  addPrewedding(dataPrewedding: any) {
    let formData = new FormData();
    formData.append("data", JSON.stringify(dataPrewedding.data));
    formData.append("image", (dataPrewedding.image));
    return this.http.post(this.API_URL + `prewedding/addPrewedding`, formData).pipe(
      tap((res) => console.log(res))
    )
  }

  editPrewedding(dataPrewedding: any) {
    let formData = new FormData();
    formData.append("data", JSON.stringify(dataPrewedding.data));
    formData.append("image", (dataPrewedding.image));
    return this.http.put(this.API_URL + `prewedding/editPrewedding?id=${dataPrewedding.id}`, formData).pipe(
      tap((res) => console.log(res))
    )
  }

}
