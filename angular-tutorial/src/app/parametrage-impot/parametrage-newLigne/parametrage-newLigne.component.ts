import { Component, OnInit, Optional, Inject, Input, EventEmitter } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParametrageImpotComponent } from '../parametrage-impot.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SDetLigneService } from 'src/app/WSservices/sdet-ligne.service';
import { Router } from '@angular/router';
import { detailLigne } from 'src/app/classes/detailLigne';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parametrage-newLigne',
  templateUrl: './parametrage-newLigne.component.html',
  styleUrls: ['./parametrage-newLigne.component.css']
})
export class ParametrageNewLigneComponent implements OnInit {

 recivedRow;
 selectedImpotId: any;

  constructor(public dialogConfig: MatDialogRef<ParametrageImpotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private detligService: SDetLigneService , private router: Router , private formBuilder: FormBuilder , public dialogRef: MatDialogRef<ParametrageImpotComponent>) 
  {
    this.recivedRow = data.selectedImpotId;
    console.log(this.recivedRow);
  }

  addFormNewLig: FormGroup;

  ngOnInit(): void {
    this.addFormNewLig = this.formBuilder.group({
      KDetLigne: [null, Validators.required],
      libelleDetLigne: [null, Validators.required],
      ordreDetLigne: [null, Validators.required],
      kimpot: [null, Validators.required]
    });
  }

  onSubmitNewLig() {
    this.detligService.AjouterDetLig(this.addFormNewLig.value)
    .subscribe(res => {
      //this.addFormNewLig.patchValue({kimpot: this.recivedRow});
      console.log(res);
      console.log(this.addFormNewLig.value);
    }, (err) => {
      console.log(err);
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
