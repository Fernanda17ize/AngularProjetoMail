import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  titulo: string = 'Página de login';
  // Preencher os valores
  formLogin = new FormGroup({
    login: new FormControl('fernanda17ize@cmail', [ Validators.email, Validators.required ]),
    senha: new FormControl('123', [ Validators.required ]),
  })

  constructor(
    private loginService: LoginService,
    private router: Router) {}

  // dar submit no form
  handleLoginUsuario() {
    if(this.formLogin.invalid) { // Fail Fast Validations
      return false;
    }
    const loginDTO = { // Data Transfer Object
      email: this.formLogin.get('login').value,
      password: this.formLogin.get('senha').value,
    };

    // pergunta pro server, se a pessoa pode logar
    this.loginService
      .logar(loginDTO)
      .then((respostaDoServerEmObjeto) => { // Deu certo!
        // redirect para tela de inbox ou home
        this.router.navigate(['/home'])
        console.log(respostaDoServerEmObjeto);
      })
      .catch((erro) => { // Deu errado!
        // Você pode mandar uma mensagem pra tela do usuário
        console.log(erro);
      });
  }
}
