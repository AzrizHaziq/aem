import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthenticateGuard } from './guard/authenticate-guard';
import { NotAuthenticateGuard } from './guard/not-authenticate.guard';

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        DashboardComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [
        NotAuthenticateGuard,
        AuthenticateGuard,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
