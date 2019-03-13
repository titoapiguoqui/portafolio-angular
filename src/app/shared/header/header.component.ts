import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public service: PageInfoService, private router: Router ) { }

  ngOnInit() {
  }

  productSearch( term: string ) {
    if (term.length < 1) {
      return;
    }
    this.router.navigate(['/search', term]);
  }

}
