import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company: Company = {
    name: '',
    turnover: '',
    ceo: '',
    boardOfDirectors: '',
    sectorname: '',
    companyBrief: ''
  };
  id="";
  constructor(private route: ActivatedRoute, private companyService: CompanyService) { this.route.params.subscribe( params => this.id=params.id );}
 

  ngOnInit(): void {
    this.companyService.getCompany(this.id)
      .subscribe((response) => {
        this.company = response;
      });
  }
  onSubmit({value, valid}: {value: Company, valid: boolean}) {
    console.log("update")
    if(!valid) {

    }
    else {
      this.companyService.updateCompany(this.id,value);
    }
  }
}
