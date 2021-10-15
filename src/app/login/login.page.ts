import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = 'vet123';
  contraseña = 'vet123';

  user={
    nombre:'',
    pass:'',
  }

  constructor(private router: Router, private alertController: AlertController) { 
    
  }

  login(){
    if (this.user.nombre !== this.usuario){
      this.showAlert('Usuario Incorrecto');
    }else if (this.user.pass !== this.contraseña){
      this.showAlert('Contraseña Incorrecta');
    }else{
      Object.keys(this.user).forEach(key =>{
        Object.defineProperty(this.user, key, {value: ''});
      });
      this.router.navigate(['/home']);
    }
  }

  showAlert(mensaje:string) {
    
    this.alertController.create({
      header: 'Datos Inválidos',
      subHeader: mensaje,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  }

  ngOnInit() {
    
  }

}
