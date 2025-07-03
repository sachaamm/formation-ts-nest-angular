import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ajout-animal-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatError,
  ],
  templateUrl: './ajout-animal-dialog.component.html',
  styleUrl: './ajout-animal-dialog.component.scss',
})
export class AjoutAnimalDialogComponent {
  form: FormGroup; // Notre formulaire de creation d'animal

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AjoutAnimalDialogComponent>
  ) {
    // On initialise notre formulaire avec les champs name, species et health
    this.form = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      health: [
        50,
        [Validators.required, Validators.min(10), Validators.max(100)],
      ], // On initialise la valeur de health a 50 et on ajoute les validators min et max, health doit etre entre 10 et 100
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // On envoie le formulaire comme objet au destinataire (ListeAnimauxComponent)
    }
  }
}
