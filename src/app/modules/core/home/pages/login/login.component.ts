import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { UserDTO } from '../../../DTOs/user.dto';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  form = this.fb.group({
    email: [null, [
      Validators.required,
      Validators.email
    ]],
    password: [null, [
      Validators.required,
      Validators.minLength(5)
    ]],
  });

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
  ) {}

  async login() {
    try {
      if(this.form.invalid) {
        return alert('Credenciales no válidas');
      }

      const data: UserDTO = {
        email: String(this.form.controls['email'].value).trim(),
        password: String(this.form.controls['password'].value).trim()
      }

      const user = await this._auth.getAuthUser(data);

      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Sesion iniciada'
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Credenciales incorrectas'
      });
    }


  }

}
