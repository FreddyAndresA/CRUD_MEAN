import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contacto'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {

  listadoContactos: Contacto[] = []

  constructor(private _contactoService: ContactoService) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }

  obtenerContactos() {
    this._contactoService.getContactos().subscribe(data => {
      console.log(data);
      this.listadoContactos = data; // Guardamos en el atributo listadoContactos la data recibida de la BD 
    }, error => {
      console.log(error);
    });
  }

  eliminarContacto(id: any) {
    Swal.fire({
      title: "Confirma la eliminación del contacto ?",
      text: "Esta acción no se podrá deshacer !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#0d6efd",
      confirmButtonText: "Si, eliminar !",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result)
        this._contactoService.deleteContacto(id).subscribe(data => {
          Swal.fire({
            title: "Contacto eliminado satisfactoriamente !",
            icon: "success"
          });
          this.obtenerContactos();
        }, error => {
          console.log(error)
        })
      }
    })
  }


  /* actualizarContacto(id: any) {
    Swal.fire({
      title: "Confirma la modificación del contacto ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#0d6efd",
      confirmButtonText: "Si, modificar información !",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result)
        this._contactoService.putContacto(id,).subscribe(data => {
          Swal.fire({
            title: "Contacto modificado satisfactoriamente !",
            icon: "success"
          });
          this.obtenerContactos();
        }, error => {
          console.log(error)
        })
      }
    })
  } */

}
