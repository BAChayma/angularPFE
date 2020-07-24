import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ParametrageImpotComponent } from '../parametrage-impot.component';
import { SDetColonneService } from 'src/app/WSservices/sdet-colonne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametrage-new-colonne',
  templateUrl: './parametrage-new-colonne.component.html',
  styleUrls: ['./parametrage-new-colonne.component.css']
})
export class ParametrageNewColonneComponent implements OnInit {

  recivedRow;
  selectedImpotId: any;

  constructor(public dialogConfig: MatDialogRef<ParametrageImpotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private detcolService: SDetColonneService , private router: Router ,private formBuilder: FormBuilder , public dialogRef: MatDialogRef<ParametrageImpotComponent>) 
    {
      this.recivedRow = data.selectedImpotId;
      console.log(this.recivedRow);
    }

    addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      KDetColonne: [null, Validators.required],
      libelledetcolonne: [null, Validators.required],
      ordredetcol: [null, Validators.required],
      kimpot: [null, Validators.required]
    });
  }

  /*addForm = new FormGroup({
    idcol : new FormControl(),
    libcol : new FormControl(),
    rangcol : new FormControl()
   });*/

   onSubmit() {
    this.detcolService.AjouterDetCol(this.addForm.value)
    .subscribe(
      data => {
          alert('detail colonne create successfully.');
          //this.router.navigate(['ActiviteEse']);
      },
      error => {
        alert(error);
      });
  }

  onClose() {
    this.dialogRef.close();
  }

}
