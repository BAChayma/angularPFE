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
import { SformuleService } from 'src/app/WSservices/sformule.service';

export type Operator = '-' | '+' | '*' | '/' | '(' | ')';
export function isOperator(token: string): token is Operator {
  return token === '-' || token === '+' || token === '*' || token === '/' || token === '(' || token === ')';
}

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
  DetailLigne: detailLigne;
  numberLigne : any ;
  private libCount: number = 1;

  selectedDetLigId: any;
  detLigItems : detailLigneDet[];
  ligne : detailLigne[];

  form: FormGroup;

  Formule: any[];

  formuleTemplate: any;
  detailLigneTemplate: any;
  formuleCaalcule='';
  resultat:any;
  tokens: string[] = [];
 group={};
 DetailLigneChayma: any[];

  constructor(public dialogConfig: MatDialogRef<DeclarationGetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeclarationGetComponent>, private formuleService:SformuleService , private detligService: SDetLigneService ,private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService  ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  { 
    //this.recivedRow = this.DetailLigne;
      this.recivedRow = data.selectedImpotId;
      console.log(this.recivedRow);
  }

  ngOnInit(): void {

/*this.addForm =  new FormGroup({ 
  kimpot : new FormControl('') ,
  KDetLigne : new FormControl('') ,
  valeur : new FormControl('') 
})*/
     /// this.list();


   /* const group = {};
    this.list()?.detailLigne.forEach( (inputTemplate) => {
      
        group[inputTemplate.KDetLigne] = new FormControl();   
     
    })
    console.log(group)
    this.addForm =  new FormGroup(  group  )
 console.log(this.addForm)
   */

  this.list();
    
    
       
    
  
    
    this.addForm =  new FormGroup(this.group)
    this.getDetLigtByImpot();

    this.listFormule();

    
   
  }

  list(){
    this.detligService.LOVLigneByImpot(this.recivedRow).subscribe(
    (data) => {
      this.DetailLigne = data;
      
      this.DetailLigne.detailLigne.forEach(elem => {
        this.group[elem.KDetLigne] = new FormControl(); 
      });
      this.addForm =  new FormGroup(this.group) ;
       
      this.DetailLigneChayma = Array.of(this.DetailLigne); 
     // console.log(this.DetailLigne);
    
    },
    err => console.error(err) ,
    () => console.log('LOVLigneByImpot') 
    )
    
   
  }

  getDetLigtByImpot(){ 
    this.detligService.LOVLigneByImpot(this.recivedRow).subscribe(data => {  
      this.detLigItems = data.detailLigne;
      console.log(data);
      console.log(this.detLigItems); 
  });
  }

  listFormule(){
    this.formuleService.CalculFormuleByImpot(this.recivedRow).subscribe(
    (data: any[]) => {
      this.Formule = data;
     
    
    
    
      this.Formule = Array.of(this.Formule); 
      this.Formule.forEach(
        item =>{
            item.formule.sort((a, b) => (b.ordreFormule - a.ordreFormule));
        this.formuleCaalcule= item.formule.reduce( (current, value, index) => {
          if(index > 0)
              current += value.signeoperateur;
          return current + value.ordreFormule;
        }, ''
        )
        }
      );
      console.log(this.Formule);
    },
    err => console.error(err) ,
    () => console.log('CalculFormuleByImpot') 
    )
    return this.Formule;
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


  evaluate(){
    this.resultat=Number(this.addForm.get([this.formuleCaalcule[0]]).value)
     for(let i=0 ; i<(this.formuleCaalcule.length)-1; i++){
       if(this.formuleCaalcule[i] === '+'){
     this.resultat+=Number(this.addForm.get([this.formuleCaalcule[i+1]]).value)
       }
        if(this.formuleCaalcule[i] === '-'){
     this.resultat-=Number(this.addForm.get([this.formuleCaalcule[i+1]]).value)
       }
        if(this.formuleCaalcule[i] === '*'){
     this.resultat*=Number(this.addForm.get([this.formuleCaalcule[i+1]]).value)
       }
       if(this.formuleCaalcule[i] === '/'){
      this.resultat/=Number(this.addForm.get([this.formuleCaalcule[i+1]]).value)
       }
        if(this.formuleCaalcule[i] === '='){
    break
       }
       
      
     }
   }

  
}
