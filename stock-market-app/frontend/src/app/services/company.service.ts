import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPO } from '../models/IPO';

//const BACKEND_URL = environment.apiUrl + '/company-service/companies/';

@Injectable({providedIn: 'root'})
export class CompanyService {

  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/companies/';
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.url + id);
  }

  getCompanyIpoDetails(id: string): Observable<IPO> {
    return this.http.get<IPO>(this.url + id + "/ipos");
  }

  addCompany(company: Company) {
    this.http.post<Company>(this.url, company)
      .subscribe((responseData) => {
        this.router.navigate(['/companies']);
      });
  }

  updateCompany(id:String,company: Company) {
    this.http.put(this.url+id, company)
      .subscribe(response => {
        this.router.navigate(['/companies']);
      });
  }

  deleteCompany(id: string) {
    console.log(id);
    this.http.delete(this.url + id)
      .subscribe(response => {
        this.router.navigate(['/companies']);
      });
  }
}

