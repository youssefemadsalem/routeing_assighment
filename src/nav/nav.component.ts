import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  @ViewChild('nav') navelement!:ElementRef
  @HostListener('window:scroll') changeheight():void{
    if(scrollY > 100){
      this.navelement.nativeElement.classList.remove('py-4')

    }else{
      this.navelement.nativeElement.classList.add('py-4')
    }



  }

}
