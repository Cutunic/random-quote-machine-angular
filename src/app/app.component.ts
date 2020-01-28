import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-quote-machine';
  color: string;

  @HostBinding("attr.style")
    public get valueAsStyle(): any {
      return this.sanitizer.bypassSecurityTrustStyle(`--bg-color: ${this.color}`);
    }
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(){
  }
  onColor(color: string){
    this.color = color;
  }
}
