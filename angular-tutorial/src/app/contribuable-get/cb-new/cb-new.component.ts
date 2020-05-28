import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Contribuable } from 'src/app/classes/Contribuable';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cb-new',
  templateUrl: './cb-new.component.html',
  styleUrls: ['./cb-new.component.css']
})
export class CbNewComponent implements OnInit {

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
    this.contribuableService.AjouterCB(this.editForm1.value)
      .subscribe(
        data => {
            alert('Compte bancaire contribuable insert successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });
  }

}