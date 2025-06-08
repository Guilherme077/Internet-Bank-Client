import { Component } from '@angular/core';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginComponent,
    ReactiveFormsModule,
    InputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  SignupForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.SignupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.SignupForm.value.email, this.SignupForm.value.password).subscribe({
      next: () => console.log("Success"),
      error: () => console.log("Error")
    })

  }
  navigate(){
    this.router.navigate(["/login"])
  }
}
