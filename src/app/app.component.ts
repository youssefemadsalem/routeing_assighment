import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assighment1';
}
