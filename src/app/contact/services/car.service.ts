import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = `http://127.0.0.1:8000/api/cars`;
  constructor(private http:HttpClient) { }
  getCategories() {
    return this.http.get(this.apiUrl);
  }
  getCars(): Observable<any>  {
    const url = `${this.apiUrl}`;
    return this.http.get(url); 
   }
   addCars(CarData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}`, CarData, httpOptions);
  }
  getCarById(carId: number) {
    return this.http.get(`${this.apiUrl}/${carId}`);
  }

  updateCategory(id: number, CarData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.put(url, CarData, httpOptions)
      .pipe(
        catchError((error: any) => {
          // Handle error (log, display message, etc.)
          return throwError(error);
        })
      );
  }

  deleteOrder(id: number): Observable<void> {
    const url = ` ${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getcars(): Observable<any> {
    const url = `${this.apiUrl}`;
   
  
    return this.http.get(url)
      .pipe(
        catchError((error: any) => {
          // Handle error (log, display message, etc.)
          return throwError(error);
          console.error('Errorrrr',error)
        })
      );
  }

}
