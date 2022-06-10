import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url = 'http://localhost:4000/api/contacto/';

  constructor(private http: HttpClient) {}

    // Metodo que permitirá obtener los contactos registrados en la BD consumiendo la api
    // El observable permite decirle a Angular que será una funcion asincrona
    getContactos(): Observable<any> {
      return this.http.get(this.url);
    }
    
    deleteContacto(id:String): Observable<any>{
      return this.http.delete(this.url + id);
    }

    postContacto(contacto: Contacto): Observable<any>{
      return this.http.post(this.url, contacto)
    }

    getContacto(id: String): Observable<any>{
      return this.http.get(this.url + id)
    }
    
    putContacto(id: String, contacto: Contacto): Observable<any>{
      return this.http.put(this.url + id, contacto)
    }

}
