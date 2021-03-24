import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  URL_API = '';
  desarrollo = true;

  constructor(private http: HttpClient) {
    if(this.desarrollo){
      this.URL_API = 'http://localhost:5001/reporteslaborales-eeff3/us-central1/app/';
    }
    else{
      this.URL_API = 'https://us-central1-inscripciones-6247c.cloudfunctions.net/app/';
    }
  }

  leerReportes(): Observable<any>{
    let info;
    
    this.http.get(this.URL_API + 'reportes').pipe(data => info=data);
    
    return info;
  }
}
