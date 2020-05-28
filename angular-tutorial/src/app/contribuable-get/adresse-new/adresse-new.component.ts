import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScontribuableService } from 'src/app/WSservices/scontribuable.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse-new',
  templateUrl: './adresse-new.component.html',
  styleUrls: ['./adresse-new.component.css']
})
export class AdresseNewComponent implements OnInit {

  sadrItems = [];
  selectedkStructureAdr: number;
  editForm1: FormGroup;
  contribuable : any;
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

  ngOnInit(): void {
  }

  onSubmit() {
    this.contribuableService.AjouterAdr(this.editForm1.value)
      .subscribe(
        data => {
            alert('Adresse contribuable insert successfully.');
            this.router.navigate(['contribuable']);
        },
        error => {
          alert(error);
        });
  }

}
