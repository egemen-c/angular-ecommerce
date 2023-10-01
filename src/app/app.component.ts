import { Component} from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonStyle = 'width:220px; height:75px; color:white; padding: 25px 50px; background-color: var(--primary);'
}
