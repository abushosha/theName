import { Component, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit  {
  title = 'angular9';
  @ViewChild('container', { read: ViewContainerRef }) container;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const resolver = this.resolver.resolveComponentFactory(PostsComponent);
    console.log(resolver);
    this.container.createComponent(resolver);
    // this.container.createComponent(resolver);
    // const siglePostRef = this.container.createComponent(PostsComponent);
    // siglePostRef.instance.postNumber = 'Shosha';

    console.log('after view init');
  }
  ngAfterContentInit() {
    console.log('after content init');
  }
}
