import { Component, OnInit } from '@angular/core';
import { FormeJuridique } from 'src/app/classes/FormeJuridique';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SfjService } from 'src/app/WSservices/sfj.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formejuridique-new',
  templateUrl: './formejuridique-new.component.html',
  styleUrls: ['./formejuridique-new.component.css']
})
export class FormejuridiqueNewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,private fjService: SfjService  ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  { }

   fj: FormeJuridique;
   fj1: FormeJuridique[];
   errorMessage: string;
   id: string;
   editMode = true;

  ngOnInit(): void {
  }

  addForm = new FormGroup({
    lfj : new FormControl()
   });

  onSubmit() {
    this.fjService.AjouterFJ(this.addForm.value)
      .subscribe(
        data => {
            alert('forme juridique create successfully.');
            this.router.navigate(['Formejuridique']);
        },
        error => {
          alert(error);
        });
  }

}
