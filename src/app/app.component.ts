import { Component} from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { CategoriesComponent } from './components/categories/categories.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavigationComponent, ButtonComponent, CategoriesComponent],
})
export class AppComponent {
  buttonStyle = 'width:220px; height:75px; color:white; padding: 25px 50px; background-color: var(--primary);'
}
