import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SaeService } from 'src/app/WSservices/sae.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ActiviteEntreprise } from 'src/app/classes/ActiviteEntreprise';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActiviteEseGetComponent } from '../activite-ese-get.component';

@Component({
  selector: 'app-activite-ese-new',
  templateUrl: './activite-ese-new.component.html',
  styleUrls: ['./activite-ese-new.component.css']
})
export class ActiviteEseNewComponent implements OnInit {

  //addForm: FormGroup;

  constructor( public dialogConfig: MatDialogRef<ActiviteEseGetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ActiviteEseGetComponent>, private formBuilder: FormBuilder ,private aeService: SaeService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) 
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
            //alert('activite entreprise create successfully.');
            //this.toastr.success('Hello world!', 'Toastr fun!');
            this.router.navigate(['ActiviteEse']);
        },
        error => {
          alert(error);
        });
  }

  onClose() {
    this.dialogRef.close();
  }


}
