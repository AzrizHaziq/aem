import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../service/authenticate.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: [ 'sign-up.component.scss' ]
})
export class SignUpComponent {

    state = {
        email: 'admin@mail.com',
        password: 'admin123',
    };

    constructor(private router: Router,
                private authenticateService: AuthenticateService) {
    }

    onSubmit() {
        const { email, password } = this.state;

        this.authenticateService.login(email, password)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.token);
                    this.router.navigate(['dashboard']);
                }
            );
    }
}
