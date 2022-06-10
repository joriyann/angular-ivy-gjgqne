import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    dateNaissance: [
      '',
      [
        Validators.required,
        (c: AbstractControl) =>
          c.value !== '2022-06-01' ? { required: true } : null,
      ],
    ],
    secu: [''],
    adresse: [''],
    codePostal: [''],
    pays: [''],
  });

  visible = false;
  toggled = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.statusChanges.subscribe((s) => {
      if (this.toggled) {
        if (s === 'VALID') this.visible = true;
      } else {
        this.visible = s === 'VALID';
      }
    });
  }
}
