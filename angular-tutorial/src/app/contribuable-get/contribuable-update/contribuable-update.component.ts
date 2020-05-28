import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-contribuable-update',
  templateUrl: './contribuable-update.component.html',
  styleUrls: ['./contribuable-update.component.css']
})
export class ContribuableUpdateComponent implements OnInit {

  contribuables: any;
  nif: string;
  editForm: FormGroup;

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

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nif: [''],
      nomCommerciale: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      registreCommerce: ['', Validators.required],
      dateDebExp: ['', Validators.required],
      capitalSociale: ['', Validators.required],
      aeName: ['', Validators.required],
      fjName: ['', Validators.required],
      paysName: ['', Validators.required]
    });
    
  }


  onSubmit() {
    this.contribuableService.updateContribuable(this.editForm.value)
      .subscribe(
        data => {
            alert('Contribuable updated successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });
  }

  

}
