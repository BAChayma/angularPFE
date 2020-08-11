import { Component, OnInit } from '@angular/core';
import { SaeService } from 'src/app/WSservices/sae.service';
import { Router } from '@angular/router';
import { ActiviteEntreprise } from 'src/app/classes/ActiviteEntreprise';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActiviteEseNewComponent } from './activite-ese-new/activite-ese-new.component';
import { ActiviteEseUpdateComponent } from './activite-ese-update/activite-ese-update.component';


@Component({
  selector: 'app-activite-ese-get',
  templateUrl: './activite-ese-get.component.html',
  styleUrls: ['./activite-ese-get.component.css']
})
export class ActiviteEseGetComponent implements OnInit {

  ae: ActiviteEntreprise[];
  ActiviteEntreprise: any;
  kActEnt: number;
  constructor(public dialog: MatDialog, private aeService: SaeService , private router: Router) { }

  ngOnInit(): void {
    this.list();
    
  }

  list(){
    this.aeService.getAE().subscribe(
    (data) => {
      this.ActiviteEntreprise = data;
      this.ActiviteEntreprise = Array.of(this.ActiviteEntreprise); 
      console.log(this.ActiviteEntreprise);
    },
    err => console.error(err) ,
    () => console.log('getAllAE completed') 
    )
    return this.ActiviteEntreprise;
  }

  supprimerAE(kActEnt) {
    this.aeService.SupprimerAE(kActEnt).subscribe(
      response => {
        console.log(response);
        this.ActiviteEntreprise = Array.of(this.ActiviteEntreprise); 
        this.list();
      }
    );
  }

update(KActEnt: number) {
//this.router.navigate(['updateAE']);
this.router.navigate(['updateAE' , KActEnt]);
}

ajouter() {
this.router.navigate(['newAE']);
//this.router.navigate(['newAE' , 'new']);
}

openDialogNew() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  this.dialog.open(ActiviteEseNewComponent,dialogConfig);
}

openDialogUpdate() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  this.dialog.open(ActiviteEseUpdateComponent,dialogConfig);
}

}
