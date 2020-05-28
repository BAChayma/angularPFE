import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Adresse } from 'src/app/classes/Adresse';

@Component({
  selector: 'app-adresse-update',
  templateUrl: './adresse-update.component.html',
  styleUrls: ['./adresse-update.component.css']
})
export class AdresseUpdateComponent implements OnInit {

  sadrItems = [];
  selectedStructId: number;
  adr: Adresse;
  adr1: Adresse[];
  kadresse: number;
  id: number;

  constructor(private formBuilder: FormBuilder ,private contribuableService: ScontribuableService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) { 
  
    this.contribuableService.LOVSADR().subscribe(data => {  
      this.sadrItems = data;
      this.sadrItems = Array.of(this.sadrItems); 
      console.log(data);
      console.log(this.sadrItems);
  });
  }

  editForm1 = this.formBuilder.group({
    id: [null, Validators.required],
    numRue: [null, Validators.required],
    rue: [null, Validators.required],
    cp: [null, Validators.required],
    sadrName: [null, Validators.required]
  });

  ngOnInit(): void {
    this.adr = new Adresse();

    this.kadresse = this.route.snapshot.params['kadresse'];
    
    this.contribuableService.getADRById(this.kadresse)
      .subscribe(data => {
        this.adr = data;
        console.log(data);
        console.log(this.adr);
      }, 
      error => console.log(error));
  }

  updateAdr() {
    this.contribuableService.modifierAdr(this.adr) 
    .subscribe(
      data => {
        this.editForm1.patchValue({id: this.adr.kadresse , numRue: this.adr.numRue , rue: this.adr.rue , cp: this.adr.cp , sadrName: this.adr.kStructureAdr });
        console.log(data);
      },
      error => {
        alert(error);
      });
    this.gotoList();
  }

  onSubmit() {
    this.updateAdr();
  }
  gotoList() {
    alert('Adresse contribuable updated successfully.');
    this.router.navigate(['contribuable']);
  }

}
