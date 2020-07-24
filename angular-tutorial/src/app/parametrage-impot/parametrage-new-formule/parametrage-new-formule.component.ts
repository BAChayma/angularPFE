import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ParametrageImpotComponent } from '../parametrage-impot.component';
import { ScelluleService } from 'src/app/WSservices/scellule.service';
import { CelluleDetail } from 'src/app/classes/CelluleDetail';
import { Cellule } from 'src/app/classes/Cellule';
import { Operateur } from 'src/app/classes/Operateur';
import { OperateurDetail } from 'src/app/classes/OperateurDetail';
import { SoperateurService } from 'src/app/WSservices/soperateur.service';
import { SformuleService } from 'src/app/WSservices/sformule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parametrage-new-formule',
  templateUrl: './parametrage-new-formule.component.html',
  styleUrls: ['./parametrage-new-formule.component.css']
})
export class ParametrageNewFormuleComponent implements OnInit {

  addFormFormule: FormGroup;

  recivedRow;
  selectedImpotId: any;

  selectedCelluleId: any;
  celluleItems : CelluleDetail[];
  cellule : Cellule[];

  selectedOpId: any;
  opItems : OperateurDetail[];
  opDet : Operateur[];
  
  constructor(public dialogConfig: MatDialogRef<ParametrageImpotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient, private formBuilder: FormBuilder , public dialogRef: MatDialogRef<ParametrageImpotComponent> ,  private celService: ScelluleService , private opService: SoperateurService , private formuleService: SformuleService) 
    {
      this.recivedRow = data.selectedImpotId;
     console.log(this.recivedRow);
    }

  ngOnInit(): void {
    this.addFormFormule = this.formBuilder.group({
      //KFormule: ['', Validators.required],
      kimpot: ['', Validators.required],
      KCellule: [null, Validators.required],
      KOperateur: [null, Validators.required],
      ordreFormule: [null, Validators.required], 

      //cellules: new FormArray([ this.addFormuleFormGroup() ])
    });

    this.getCellule();
    this.getOperateur();

  }

  onSubmitFormule(){
    this.formuleService.AjouterFormule(this.addFormFormule.value)
    .subscribe(res => {
      console.log(res);
      console.log(this.addFormFormule.value);
    }, (err) => {
      console.log(err);
    });
    this.viderForm();
  }

  addFormuleBtn(){
    (<FormArray>this.addFormFormule.get('cellules')).push(this.addFormuleFormGroup())
  }

  viderForm(){
    //this.addFormFormule.reset()
    let KCellule = this.addFormFormule.get('KCellule');
    let KOperateur = this.addFormFormule.get('KOperateur');
    let ordreFormule = this.addFormFormule.get('ordreFormule');
    KCellule.reset();
    KOperateur.reset();
    ordreFormule.reset();
  }

  addFormuleFormGroup() : FormGroup{
    return this.formBuilder.group({
      kimpot: ['', Validators.required],
      KCellule: [null, Validators.required],
      KOperateur: [null, Validators.required],
      ordreFormule: [null, Validators.required]
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  getCellule(){
    this.celService.LOVCellule().subscribe(data => {  
      this.celluleItems = data.cellule;
      console.log(data);
      console.log(this.celluleItems); 
  });
  }

  getOperateur(){
    this.opService.LOVOp().subscribe(data => {  
      this.opItems = data.operateur;
      console.log(data);
      console.log(this.opItems); 
  });
  }

}
