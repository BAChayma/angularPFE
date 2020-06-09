import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { Contribuable } from 'src/app/classes/Contribuable';

@Component({
  selector: 'app-contribuable-update',
  templateUrl: './contribuable-update.component.html',
  styleUrls: ['./contribuable-update.component.css']
})
export class ContribuableUpdateComponent implements OnInit {

  c: Contribuable;

  contribuables: any;
  nif: string;
  //editForm: FormGroup;

  aeItems = [];
  selectedAeId: number;

  fjItems = [];
  selectedFjId: number;

  paysItems = [];
  selectedPaysId: number;

  constructor(private formBuilder: FormBuilder ,private contribuableService: ScontribuableService , private router: Router , private route: ActivatedRoute) 
  {
    this.contribuableService.LOVAE().subscribe(data => {  
      this.aeItems = data;
      this.aeItems = Array.of(this.aeItems); 
      console.log(data);
      console.log(this.aeItems);
    });

  this.contribuableService.LOVFJ().subscribe(data => {  
    this.fjItems = data;
    this.fjItems = Array.of(this.fjItems); 
    console.log(data);
    console.log(this.fjItems);
  });

  this.contribuableService.LOVPays().subscribe(data => {  
    this.paysItems = data;
    this.paysItems = Array.of(this.paysItems); 
    console.log(data);
    console.log(this.paysItems);
  });

  }

    editForm = this.formBuilder.group({
      nif: [''],
      nomCommerciale: [null, Validators.required],
      raisonSociale: [null, Validators.required],
      registreCommerce: [null, Validators.required],
      dateDebExp: [null, Validators.required],
      capitalSociale: [null, Validators.required],
      aeName: [null, Validators.required],
      fjName: [null, Validators.required],
      paysName: [null, Validators.required]
    });

  ngOnInit(): void {
    this.c = new Contribuable();

    this.nif = this.route.snapshot.params['nif'];
    
    this.contribuableService.getContriByNif(this.nif)
      .subscribe(data => {
        this.c = data;
        console.log(data);
        console.log(this.c);
      }, 
      error => console.log(error));
  }

  updateContri() {
    this.contribuableService.updateContribuable(this.c) 
    .subscribe(
      data => {
        this.editForm.patchValue({nif: this.c.nif , nomCommerciale: this.c.nomCommerciale ,
          raisonSociale: this.c.raisonSociale , registreCommerce: this.c.raisonSociale ,
          dateDebExp: this.c.dateDebExp , capitalSociale: this.c.capitalSociale ,
          aeName: this.c.kActEnt, fjName: this.c.kFormJuri ,
          paysName: this.c.kpays });
        console.log(data);
      },
      error => {
        alert(error);
      });
    this.gotoList();
  }

  onSubmit() {
    this.updateContri();
    /*this.contribuableService.updateContribuable(this.editForm.value)
      .subscribe(
        data => {
            alert('Contribuable updated successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });*/
  }

  gotoList() {
    alert('Contribuable updated successfully.');
    this.router.navigate(['contribuable']);
  }

  

}
