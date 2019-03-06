import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  loaded = false;

  team: any[] = [];

  constructor( private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    // Read JSON file
    this.http.get('assets/data/page-data.json')
             .subscribe( (resp: PageInfo) => {
               this.info = resp;
               this.loaded = true;

               console.log( resp );
             });
  }

  private loadTeam() {
    this.http.get('https://angular-html-efe8c.firebaseio.com/team.json')
             .subscribe( (resp: any) => {
               this.team = resp;

               console.log( resp );
             });
  }
}
