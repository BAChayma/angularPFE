import { Component, OnInit } from '@angular/core';
import { SfjService } from 'src/app/WSservices/sfj.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formejuridique-get',
  templateUrl: './formejuridique-get.component.html',
  styleUrls: ['./formejuridique-get.component.css']
})
export class FormejuridiqueGetComponent implements OnInit {

  FormeJuridique: any;
  kFormJuri: number;
  constructor(private fjService: SfjService , private router: Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.fjService.getFJ().subscribe(
    (data) => {
      this.FormeJuridique = data;
      this.FormeJuridique = Array.of(this.FormeJuridique); 
      console.log(this.FormeJuridique);
    },
    err => console.error(err) ,
    () => console.log('getAllFJ completed') 
    )
    return this.FormeJuridique;
  }

  supprimerFJ(kFormJuri) {
    this.fjService.SupprimerFJ(kFormJuri).subscribe(
      response => {
        console.log(response);
        this.FormeJuridique = Array.of(this.FormeJuridique); 
        this.list();
      }
    );
  }

update(kFormJuri) {
this.router.navigate(['updateFJ' , kFormJuri]);
}

ajouter() {
this.router.navigate(['newFJ' , 'new']);
}

}
