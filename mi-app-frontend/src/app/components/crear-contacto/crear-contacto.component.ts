import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {

  contactForm: FormGroup;
  tituloFormulario = "Crear Contacto"
  id: string | null
  
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  //regexNumero = /^[0-9]+$/;


  constructor(private fb:FormBuilder, private router: Router, private _contactoService: ContactoService, private idRoute: ActivatedRoute) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      telefono1: ['', Validators.required],
      telefono2: [''],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      categoria: ['']
    })

    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  crearContacto() {
    /* 
    console.log(this.contactForm);
    console.log(this.contactForm.get('nombre')?.value);
    console.log(this.contactForm.get('email')?.value);
    console.log(this.contactForm.get('telefono1')?.value);
    console.log(this.contactForm.get('telefono2')?.value);
    console.log(this.contactForm.get('ciudad')?.value);
    console.log(this.contactForm.get('direccion')?.value);
    console.log(this.contactForm.get('categoria')?.value); 
    */

    const CONTACTO: Contacto = {
      nombre: this.contactForm.get('nombre')?.value,
      email: this.contactForm.get('email')?.value,
      telefono1: this.contactForm.get('telefono1')?.value,
      telefono2: this.contactForm.get('telefono2')?.value,
      ciudad: this.contactForm.get('ciudad')?.value,
      direccion: this.contactForm.get('direccion')?.value,
      categoria: this.contactForm.get('categoria')?.value
    }

    if(this.id != null){
      this._contactoService.putContacto(this.id, CONTACTO).subscribe(data => {
        this.router.navigate(['/'])
        Swal.fire({
          title: "Perfecto !",
          text: "El contacto se modificó correctamente.",
          icon: "success",
          confirmButtonText: "Ok !"
        })
      }, error => {
      console.log(error)
      })   
    }else {
      this._contactoService.postContacto(CONTACTO).subscribe(data => {
        this.router.navigate(['/'])
        Swal.fire({
          title: "Perfecto !",
          text: "El contacto se agregó correctamente.",
          icon: "success",
          confirmButtonText: "Ok !"
        })
      }, error => {
        console.log(error)
        this.contactForm.reset();
      })
    }
    
    



    /* this._contactoService.postContacto(CONTACTO).subscribe(data => {
      this.router.navigate(['/'])
      Swal.fire({
        title: "Perfecto !",
        text: "El contacto se agrego correctamente.",
        icon: "success",
        confirmButtonText: "Ok !"
      })
    }, error => {
      console.log(error)
    }) */
    
    console.log(CONTACTO);
  }

  accionSolicitada() {
    if(this.id !== null) {
      this.tituloFormulario = "Editar Contacto";
      this._contactoService.getContacto(this.id).subscribe(data => {
        this.contactForm.setValue({
          nombre: data.nombre,
          email: data.email,
          telefono1: data.telefono1,
          telefono2: data.telefono2,
          ciudad: data.ciudad,
          direccion: data.direccion,
          categoria: data.categoria
        })
      })
    }
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }

}
