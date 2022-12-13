import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ipokeapi } from './Ipokemont';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {


  private apiUrl = "https://pokeapi.co/api/v2/"
  constructor(private httpcliente: HttpClient){}
  //CRUD
  private HttpOptions = {
  headers: new HttpHeaders({"Content-Type":
  "application/json"})

  }

  getpokemont(id:number| string ){}

  getpokemonts(): Observable<ipokeapi>{ 
    return this.httpcliente.get<ipokeapi>(`${this.apiUrl}pokemon/10`)//.pipe(catchError(this.manejarerror<ipokeapi>"Leer pokemont"))}//

//  manejarerror<T>(operacion = 'Operación', resultado?: T){
//     return (error: any) : Observable<T> => {
//     console.error(`La operación ${operacion} falló con el
//     siguiente codigo de error: ${error.message}`);
//     return of(resultado as T)
//     }
  }
 }
