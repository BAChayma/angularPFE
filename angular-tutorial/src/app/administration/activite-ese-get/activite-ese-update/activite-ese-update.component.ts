import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SaeService } from 'src/app/WSservices/sae.service';
import { ActiviteEntreprise } from 'src/app/classes/ActiviteEntreprise';

@Component({
  selector: 'app-activite-ese-update',
  templateUrl: './activite-ese-update.component.html',
  styleUrls: ['./activite-ese-update.component.css']
})

export class ActiviteEseUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,private aeService: SaeService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
  {}

   ae: ActiviteEntreprise;
   ae1: ActiviteEntreprise[];
   kActEnt: number;

   /*editForm2 = new FormGroup({
    id : new FormControl(),
    lae : new FormControl()
   });*/

   editForm2 = this.formBuilder.group({
    id: [null, [Validators.required]],
    lae: [null, [Validators.required]]
  });

  ngOnInit(): void {
    this.ae = new ActiviteEntreprise();

    this.kActEnt = this.route.snapshot.params['kActEnt'];
    
    this.aeService.getAEByID(this.kActEnt)
      .subscribe(data => {
        this.ae = data;
        console.log(data);
        console.log(this.ae);
      }, error => console.log(error));
    }
    updateAE() {
      this.aeService.modifierAE(this.ae) //this.kActEnt,  this.editForm2.value this.ae
      .subscribe(
        data => {
          this.editForm2.patchValue({id: this.ae.kActEnt , lae: this.ae.libelleAE});
          console.log(data);
          console.log(this.ae.kActEnt);
          console.log(this.ae.libelleAE);
          console.log(this.editForm2);
          console.log(this.ae);
        },
        error => {
          alert(error);
        });
      //this.ae = new ActiviteEntreprise();
      this.gotoList();
    }

    onSubmit() {
      this.updateAE();    
    }
  
    gotoList() {
      alert('activite entreprise updated successfully.');
      this.router.navigate(['ActiviteEse']);
    }

}
