import { Component } from '@angular/core'
import { Router, RouterLink, RouterOutlet } from '@angular/router'


@Component({
	selector: 'app-root',
	standalone: true,
	providers: [],
	imports: [RouterOutlet, RouterLink],
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private router: Router) {}
	goToHome() {
		this.router.navigate(['/']);
	}
}
