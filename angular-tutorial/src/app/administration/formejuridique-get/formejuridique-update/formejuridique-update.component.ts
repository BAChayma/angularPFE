import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormeJuridique } from 'src/app/classes/FormeJuridique';
import { SfjService } from 'src/app/WSservices/sfj.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formejuridique-update',
  templateUrl: './formejuridique-update.component.html',
  styleUrls: ['./formejuridique-update.component.css']
})
export class FormejuridiqueUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,private fjService: SfjService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  {}

   fj: FormeJuridique;
   fj1: FormeJuridique[];
   kFormJuri: number;

   editForm2 = this.formBuilder.group({
    id: [null, [Validators.required]],
    lfj: [null, [Validators.required]]
  });

  ngOnInit(): void {
    this.fj = new FormeJuridique();

    this.kFormJuri = this.route.snapshot.params['kFormJuri'];
    
    this.fjService.getFJByID(this.kFormJuri)
      .subscribe(data => {
        this.fj = data;
        console.log(data);
        console.log(this.fj);
      }, 
      error => console.log(error));
  }

  updateFJ() {
    this.fjService.modifierFJ(this.fj) 
    .subscribe(
      data => {
        this.editForm2.patchValue({id: this.fj.kFormJuri , lae: this.fj.libelleFJ});
        console.log(data);
        console.log(this.editForm2);
        console.log(this.fj);
      },
      error => {
        alert(error);
      });
    this.gotoList();
  }

  onSubmit() {
    this.updateFJ();    
  }

  gotoList() {
    alert('forme juridique updated successfully.');
    this.router.navigate(['Formejuridique']);
  }


}
