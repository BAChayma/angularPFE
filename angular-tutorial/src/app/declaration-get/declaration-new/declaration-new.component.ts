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
  i:number;
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

  form: FormGroup;

  constructor(public dialogConfig: MatDialogRef<DeclarationGetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeclarationGetComponent>, private detligService: SDetLigneService ,private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService  ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  { 
      this.recivedRow = data.selectedImpotId;
      console.log(this.recivedRow);
  }

  ngOnInit(): void {

this.addForm =  new FormGroup({ 
  kimpot : new FormControl('') ,
  KDetLigne : new FormControl('') ,
  valeur : new FormControl('') 
})
    this.list();

    this.getDetLigtByImpot();
   
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
    console.log(this.DetailLigne[0]['detailLigne'].length)
  for (var j=0;j<this.DetailLigne[0]['detailLigne'].length;j++) {

    this.addForm.controls['KDetLigne'].setValue(this.DetailLigne[0]['detailLigne'][j]['KDetLigne'])
  console.log(this.DetailLigne[0]['detailLigne'][j]['KDetLigne']);
  var inputValue = (<HTMLInputElement>document.getElementById(this.DetailLigne[0]['detailLigne'][j]['KDetLigne'])).value;

    this.addForm.controls['valeur'].setValue(inputValue)

this.cdeclarationService.AjouterDclMvt(this.addForm.value)
    .subscribe(res => {
      console.log(res);
      console.log(this.addForm.value);
    }, (err) => {
      console.log(err);
    });
   
  }
  }

  onClose() {
    this.dialogRef.close();
  }

  
}
