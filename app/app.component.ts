import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
	message: string = 'Hello!';
	users: User[] = [
		{ id: 1, name: 'Juan', username: 'juanmb' },
		{ id: 2, name: 'Marcos', username: 'marcosmb' },
		{ id: 3, name: 'Sara', username: 'saramb' }
	];
	activeUser: User;

	selectUser(user: User) {
		this.activeUser = user;
		console.log(this.activeUser);	
	}

	onUserCreated(event) {
		this.users.push(event.user);
	}
}