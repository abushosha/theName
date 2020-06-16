import { Component, OnInit, AfterContentInit, ViewChild, Directive, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'child-directive'
})
class ChildDirective {

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  @ViewChild(ChildDirective) child!: ChildDirective;

  constructor(@Inject(PLATFORM_ID) private plateformId) { }
  logItem =  9;
  ngOnInit(): void {
    
    console.log('ng on init');

    if (isPlatformBrowser(this.plateformId)) {
      console.log('da browser !');
    }
    console.log(this.plateformId)
  }

  ngAfterContentInit() {
    console.log('ng aftre');
  }
}
