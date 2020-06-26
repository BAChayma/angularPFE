import { Component, OnInit } from '@angular/core';
import { Contribuable } from '../classes/Contribuable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SdeclarationService } from '../WSservices/sdeclaration.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  contribuables: any;
  nif: string;
  c: Contribuable;
  addForm1: FormGroup;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService , private router: Router ,  private http: HttpClient , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.c = new Contribuable();
    this.nif = this.route.snapshot.params['nif'];
    this.rechercheContri(this.nif);

    this.addForm1 = this.formBuilder.group({
      dr: ['', Validators.required],
      nt: ['', Validators.required],
      mp: ['', Validators.required],
      banq: ['', Validators.required],
      nc: ['', Validators.required]

    });
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
      return this.contribuables;
  }

  onSubmit1() {
  }


}
