import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();
  public createUserForm!: FormGroup;
  public loading: boolean = false;
  public validUsername: boolean = false;

  public isWarning: boolean = false;
  public titleWarning: string = '';

  constructor(/* private _userService: RegisterService, */ private _router: Router) { }

  ngOnInit(): void {
    this.createUserForm = this.createFormUserBuilder(this.fb);
  }

  async registerUser() {
    try {
      this.loading = true;
      /* const res = await this._userService.register(this.createUserForm.value);
      if (res) this.loading = false;
      this._router.navigate(['/private']); */
    } catch (error: any) {
      this.loading = false;
      this.isWarning = true;
      this.titleWarning = `${error.message}`
      setTimeout(() => this.isWarning = false, 2000);
    }
  }

  createFormUserBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      role: ['user'],
    });
  }


  async validUsernameCliente(user: string) {
    try {
      /* const res = await this._userService.validUsername(user);
      if (!res.success) {
        this.validUsername = false;
        this.isWarning = true;
        this.titleWarning = `${res.message}`
        setTimeout(() => this.isWarning = false, 2000);
      } */
      /* if (res.success) {
        this.validUsername = true;
      } */
    } catch (error: any) {
      console.log('***Error creado en usuario');
      this.isWarning = true;
      this.titleWarning = `${error.message}`
      setTimeout(() => this.isWarning = false, 2000);
    }
  }
}
