import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SaeService } from 'src/app/WSservices/sae.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ActiviteEntreprise } from 'src/app/classes/ActiviteEntreprise';

@Component({
  selector: 'app-activite-ese-new',
  templateUrl: './activite-ese-new.component.html',
  styleUrls: ['./activite-ese-new.component.css']
})
export class ActiviteEseNewComponent implements OnInit {

  //addForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,private aeService: SaeService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  {

   }

   //private addForm: FormGroup;
   ae: ActiviteEntreprise;
   ae1: ActiviteEntreprise[];
   errorMessage: string;
   id: string;
   editMode = true;

  ngOnInit(){

  }

  addForm = new FormGroup({
    lae : new FormControl()
   });

  onSubmit() {
    this.aeService.AjouterAE(this.addForm.value)
      .subscribe(
        data => {
            alert('activite entreprise create successfully.');
            this.router.navigate(['ActiviteEse']);
        },
        error => {
          alert(error);
        });
  }

}
