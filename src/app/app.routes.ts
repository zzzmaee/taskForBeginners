import { Routes } from '@angular/router'
import { UserListComponent } from './components/users-list/users-list.component'
import { AppComponent } from './app.component'

export const routes: Routes = [
	{path: '', component: AppComponent, title: 'home'},
	{path: 'users', component: UserListComponent, title: 'users'},
	{path: '**', redirectTo: '', component: AppComponent}
]
