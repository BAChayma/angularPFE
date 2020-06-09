import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SdeclarationService } from 'src/app/WSservices/sdeclaration.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declaration-new',
  templateUrl: './declaration-new.component.html',
  styleUrls: ['./declaration-new.component.css']
})
export class DeclarationNewComponent implements OnInit {

  impotsItems = [];
  selectedImpotId: number;
  addForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService  ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) { 
  
    this.cdeclarationService.LOVImpot().subscribe(data => {  
      this.impotsItems = data;
      this.impotsItems = Array.of(this.impotsItems); 
      console.log(data);
      console.log(this.impotsItems);
  });

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      kdcl: ['', Validators.required],
      kcnc: ['', Validators.required],
      impotName: ['', Validators.required],
      mantantDeclarer: ['', Validators.required],
      mantantDeclaration: ['', Validators.required],
      datedcl: ['', Validators.required]
    });
  }

  onSubmit() {
    this.cdeclarationService.AjouterDcl(this.addForm.value)
      .subscribe(
        data => {
            alert('Declaration insert successfully.');
            this.router.navigate(['declaration']);
        },
        error => {
          alert(error);
        });
  }

}
