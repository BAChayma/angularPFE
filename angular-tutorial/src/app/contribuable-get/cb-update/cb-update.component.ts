import {Component, NgModule, ViewChild, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contribuable } from 'src/app/classes/Contribuable';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/classes/ComteBancaire';

@Component({
  selector: 'app-cb-update',
  templateUrl: './cb-update.component.html',
  styleUrls: ['./cb-update.component.css']
})
export class CbUpdateComponent implements OnInit {

  banquesItems = [];
  selectedBankId: number;

  contribuable : any;
  kbanque: number;
  kcompte: number;
  id: number;

  agencesItems = [];
  selectedAgenceId: number;

  editForm1: FormGroup;
  contribuables: Contribuable;
  cb: CompteBancaire;

  constructor(private formBuilder: FormBuilder ,private contribuableService: ScontribuableService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) { 
  
    this.contribuableService.LOVBanque().subscribe(data => {  
      this.banquesItems = data;
      this.banquesItems = Array.of(this.banquesItems); 
      console.log(data);
      console.log(this.banquesItems);
  });
  this.LOVAgences();
  }

  ngOnInit(): void {
    this.cb = new CompteBancaire();

    this.kcompte = this.route.snapshot.params['kcompte'];
    
    this.contribuableService.getCBById(this.kcompte)
      .subscribe(data => {
        this.cb = data;
        console.log(data);
        console.log(this.cb);
      }, 
      error => console.log(error));

    /*this.kcompte = this.route.snapshot.params.id;
    this.contribuableService.getCBById(this.kcompte).subscribe( 
      data => {
        this.editForm1.setValue(data);
      });*/

    this.editForm1 = this.formBuilder.group({
      bankName: [''],
      agenceName: ['', Validators.required],
      RIB: ['', Validators.required],
      id: ['', Validators.required],
      selectedBankId: ['', Validators.required],
      selectedAgenceId: ['', Validators.required]
    });
  }

  LOVAgences(){
    this.contribuableService.LOVAgence(this.selectedBankId).subscribe(res => {
      this.agencesItems = res;
      this.agencesItems = Array.of(this.agencesItems); 
      console.log(res);
      console.log(this.agencesItems);
    });
  }

  updateCb() {
    this.contribuableService.updateCB(this.cb) 
    .subscribe(
      data => {
        this.editForm1.patchValue({id: this.cb.kcompte , 
          RIB: this.cb.rib , 
          selectedBankId: this.cb.kbanque , 
          selectedAgenceId: this.cb.kagence });
        console.log(data);
      },
      error => {
        alert(error);
      });
    this.gotoList();
  }


  onSubmit() {
    this.updateCb();
    /*this.contribuableService.updateCB(this.editForm1.value)
      .subscribe(
        data => {
            alert('Compte bancaire contribuable updated successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });*/
  }

  gotoList() {
    alert('Compte bancaire contribuable updated successfully.');
    this.router.navigate(['contribuable']);
  }

}
