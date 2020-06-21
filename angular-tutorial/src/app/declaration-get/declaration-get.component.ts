import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SdeclarationService } from '../WSservices/sdeclaration.service';
import { Declaration } from '../classes/Declaration';
import { Contribuable } from '../classes/Contribuable';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { contribuableImpot } from '../classes/contribuableImpot';

@Component({
  selector: 'app-declaration-get',
  templateUrl: './declaration-get.component.html',
  styleUrls: ['./declaration-get.component.css']
})
export class DeclarationGetComponent implements OnInit {

  contribuables: any;
  nif: string;
  Declaration: any[];
  Declarations: any[];

  impotsItems = [];
  selectedImpotId: number;
  addForm: FormGroup;
  addForm1: FormGroup;

  
  //dcl: Declaration;
  //Declaration: any[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //formBuilder: any;

  constructor(private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService , private router: Router ,  private http: HttpClient , private route: ActivatedRoute) 
  {
    
    /*this.cdeclarationService.LOVIC().subscribe(data => {  
      this.impotsItems = data;
      this.impotsItems = Array.of(this.impotsItems); 
      console.log(data);
      console.log(this.impotsItems);
    });*/

  }

  c: Contribuable;
  ngOnInit(): void {
    
    this.c = new Contribuable();
    this.nif = this.route.snapshot.params['nif'];
    this.rechercheContri(this.nif);

    this.addForm = this.formBuilder.group({
      impotContriName: ['', Validators.required],
      per: ['', Validators.required],
      moisEx: ['', Validators.required],
      echDec: ['', Validators.required]
    });

    this.addForm1 = this.formBuilder.group({
      md: ['', Validators.required],
      mv: ['', Validators.required],
      rp: ['', Validators.required]
    });

    this.cdeclarationService.LOVImpotContri(this.nif).subscribe(data => {  
      this.impotsItems = data;
      this.impotsItems = Array.of(this.impotsItems); 
      console.log(data);
      console.log(this.impotsItems);
    });

    this.disabledInput();

  }
 

  rechercheContri(nif)  
      {
        this.cdeclarationService.getContribuableById1(this.nif).subscribe(
          (data) => { 
            this.contribuables = data;
            this.contribuables = Array.of(this.contribuables); 
            console.log(this.contribuables);
           },
          err => console.error(err), 
          () => console.log('getContribuableById completed') 
          )
          this.recherche1(this.nif);
          return this.contribuables;
     }

     recherche1(nif)  
     {
       this.cdeclarationService.DclContriByNif(this.nif).subscribe(
         (data) => { 
           this.Declaration = data;
           this.Declaration = Array.of(this.Declaration); 
           console.log(this.Declaration);
          },
         err => console.error(err), 
         () => console.log('DclContriByNif completed') 
         )
         return this.Declaration;
    }

    /*editDcl(kdcl: number){
      this.router.navigate(['updateDcl', kdcl]);
    };*/

    ajouterdcl() {
      this.router.navigate(['newDCL']);
    }

    /*//declarations: Declaration[];
    deleteADR(dcl: Declaration): void {
      this.cdeclarationService.supprimerdcl(dcl.kdcl)
        .subscribe( data => {
          this.declarations = this.declarations.filter(u => u !== dcl);
        })
      };*/

      onSubmit() {
      }

      onSubmit1() {
      }

      disabledInput(){
        let impotContriName = this.addForm.get('impotContriName');
        let per = this.addForm.get('per');
        let moisEx = this.addForm.get('moisEx');
        let echDec = this.addForm.get('echDec');

        impotContriName.disable();
        per.disable();
        moisEx.disable();
        echDec.disable();

        let md = this.addForm1.get('md');
        let mv = this.addForm1.get('mv');
        let rp = this.addForm1.get('rp');

        md.disable();
        mv.disable();
        rp.disable();
      }

      enableInput(){
        let impotContriName = this.addForm.get('impotContriName');
        let per = this.addForm.get('per');
        let moisEx = this.addForm.get('moisEx');
        let echDec = this.addForm.get('echDec');

        impotContriName.enable();
        per.enable();
        moisEx.enable();
        echDec.enable();

        let md = this.addForm1.get('md');
        let mv = this.addForm1.get('mv');
        let rp = this.addForm1.get('rp');

        md.enable();
        mv.enable();
        rp.enable();
      }

}
