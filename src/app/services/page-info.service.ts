import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  loaded = false;

  constructor( private http: HttpClient) {
    // Read JSON file
    this.http.get('assets/data/page-data.json')
             .subscribe( (resp: PageInfo) => {
               this.info = resp;
               this.loaded = true;

               console.log( resp );
             });
  }
}
