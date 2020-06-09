import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SdeclarationService } from '../WSservices/sdeclaration.service';
import { Declaration } from '../classes/Declaration';

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
  
  //dcl: Declaration;
  //Declaration: any[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private cdeclarationService: SdeclarationService , private router: Router ,  private http: HttpClient) { }

  ngOnInit(): void {
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

}
