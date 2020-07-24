import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { SdeclarationService } from 'src/app/WSservices/sdeclaration.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DeclarationGetComponent } from '../declaration-get.component';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { detailLigne } from 'src/app/classes/detailLigne';
import { SDetLigneService } from 'src/app/WSservices/sdet-ligne.service';
import { Subscription } from 'rxjs';
import { detailLigneDet } from 'src/app/classes/detailLigneDet';


@Component({
  selector: 'app-declaration-new',
  templateUrl: './declaration-new.component.html',
  styleUrls: ['./declaration-new.component.css']
})
export class DeclarationNewComponent implements OnInit {

  impotsItems = [];
  selectedImpotId: number;
  addForm: FormGroup;
  filedName: any;
  recivedRow;
  lig: detailLigne[];
  DetailLigne: any;
  numberLigne : any ;
  private libCount: number = 1;

  selectedDetLigId: any;
  detLigItems : detailLigneDet[];
  ligne : detailLigne[];

  constructor(public dialogConfig: MatDialogRef<DeclarationGetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeclarationGetComponent>, private detligService: SDetLigneService ,private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService  ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  { 
      this.recivedRow = data.selectedImpotId;
      console.log(this.recivedRow);
  }

  ngOnInit(): void {/**
    
    
    this.addForm = this.formBuilder.group({
     
      kimpot: ['', Validators.required],
      //libelleDetLigne: ['', Validators.required]
       KDclMvt: [null, Validators.required],
      KDetLigne: [null, Validators.required],
      valeur: [null, Validators.required],
    });
*/

this.addForm =  new FormGroup({ 
  kimpot : new FormControl('') ,
  lignes: new FormArray([
    this.initLignes(),
  ])
})
    this.list();

    this.getDetLigtByImpot();
   
  }

  initLignes(): FormGroup{
    return new FormGroup({
      //KDclMv: new FormControl(''),
      KDetLigne: new FormControl(''),
      valeur: new FormControl('')
     
    });

  }

  addLigne() {
    const control = <FormArray>this.addForm.get('lignes');
    control.push(this.initLignes());
  }

  getLignes(form) {
    //console.log(form.get('sections').controls);
    return form.controls.lignes.controls;
  }

  getLignesFormControls(): AbstractControl[] {
    return (<FormArray> this.addForm.get('lignes')).controls
  }

  list(){
    this.detligService.LOVLigneByImpot(this.recivedRow).subscribe(
    (data) => {
      this.DetailLigne = data;
      this.DetailLigne = Array.of(this.DetailLigne); 
      console.log(this.DetailLigne);
     
    },
    err => console.error(err) ,
    () => console.log('LOVLigneByImpot') 
    )
    return this.DetailLigne;
  }

  getDetLigtByImpot(){ 
    this.detligService.LOVLigneByImpot(this.recivedRow).subscribe(data => {  
      this.detLigItems = data.detailLigne;
      console.log(data);
      console.log(this.detLigItems); 
  });
  }

  onSubmit() {  
    this.cdeclarationService.AjouterDclMvt(this.addForm.value)
    .subscribe(res => {
      console.log(res);
      console.log(this.addForm.value);
      console.log('#username'.valueOf());
    }, (err) => {
      console.log(err);
    });
  }

  addControl(){
    this.libCount++;
    this.addForm.addControl('libelleDetLigne' + this.libCount, new FormControl('', Validators.required));
  }

  onClose() {
    this.dialogRef.close();
  }

}
