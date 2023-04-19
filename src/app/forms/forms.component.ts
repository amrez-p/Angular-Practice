import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  reactiveForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.reactiveForm) {
      console.log(this.reactiveForm.value);
    }
  }
}
