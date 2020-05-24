import {Component, NgModule, ViewChild, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contribuable } from 'src/app/classes/Contribuable';
import { Observable } from 'rxjs';

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
    this.kcompte = this.route.snapshot.params.id;
    /*if(!this.kcompte) {
      alert("Invalid action.")
      this.router.navigate(['contribuable']);
      return;
    }*/
    this.contribuableService.getCBById(this.kcompte).subscribe( 
      data => {
        this.editForm1.setValue(data);
      });

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

  onSubmit() {
    this.contribuableService.updateCB(this.editForm1.value)
    //this.contribuableService.updateCB(this.contribuables, this.contribuables.kcompte)
      .subscribe(
        data => {
            alert('Compte bancaire contribuable updated successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });
  }

}
