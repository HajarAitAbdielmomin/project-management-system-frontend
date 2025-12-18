import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl,Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  }
  );
  showPassword = false;

  constructor(private fb: FormBuilder) {

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
