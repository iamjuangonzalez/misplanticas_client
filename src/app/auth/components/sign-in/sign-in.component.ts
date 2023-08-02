import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  private fb: FormBuilder = new FormBuilder();
  public loginForm!: FormGroup;
  public loading: boolean = false;
  static loginForm: any;

  //Variables para manejar los errores
  public isError: boolean = false;
  public titleError: string = '';
  public isSuccess: boolean = false;
  public titleSuccess: string = '';
  public isWarning: boolean = false;
  public titleWarning: string = '';

  constructor(private _authService: AuthService, private _router: Router) {}

  async ngOnInit() {
    if (this._authService.getLogin()) {
      if (this._authService.isAuthenticated()) {
        /* const checkToken = await this._authService.checkToken();
        if (checkToken.check === 0) this._authService.logOut();
        if (checkToken.check === 1) this.loged(checkToken.user.token); */
      }
    }
    this.loginForm = this.createFormLoginBuilder(this.fb);
  }

  createFormLoginBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  async login() {
    try {
      this.loading = true;
      if (this.loginForm.invalid) {
        this.loading = false;
        return;
      }
      const res = await this._authService.login(this.loginForm.value)
        if (res) this.loading = false;
        this._authService.setLogin(res.data);
        this._router.navigate(['/private']); 
        /* this._authService.setLogin(res.data.jwtToken);
        */
    } catch (error: any) {
      this.loading = false;
      this.isWarning = true;
      this.titleWarning = `${error.message}`
      setTimeout(() => this.isWarning = false, 2000);
    }
  }

  async loginGoogle() {
    console.log('EE');
    try {
      /* const res = await this._LoginService.loginGoogle(); */
    } catch (error) { }
  }

  loged(token: string = '') {
    /* this._AuthService.setLogin(token);
    this._Router.navigate(['/private']); */
  }
}
