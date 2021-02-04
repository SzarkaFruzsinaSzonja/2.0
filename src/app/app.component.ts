import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'The good Angular programmer';

    users: User[] = this.userService.list;

    currentUser: User = new User();

    constructor(
        private userService: UserService) { }

    selectButtonClick(user: User): void {
        this.currentUser = user;
    }

    onUpdateButtonClick(user: User): void {
        this.userService.updateUser(user)
    }
    onDeleteButtonClick(user: User): void {
        this.userService.removeUser(user);
    }


}
