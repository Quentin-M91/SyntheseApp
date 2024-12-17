import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SyntheseApp';

ngOnInit(){
  let userZ:User= new User(0, "Mario Bros", "MarioBros@gmail.com")
  let userX:User= new User(1, "Luigi Bros", "LuigiBros@oulook.fr")
  let userY:User= new User(2, "Wario Bros", "WarioBros@icloud.com")
    console.log(userZ)
    console.log(userX)
    console.log(userY)

}
}