import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AnimationController , Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categoria = ['Perro', 'Gato', 'Conejo', 'Hamster', 'Ave']

  horas = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00']

  mascota = {
    'duenio': '',
    'nombre': '',
    'categoria': '',
    'fecha': '',
    'hora': '',
  }

  fecha: Date;
  
  minDate : Date;
  animation : Animation;

  constructor(private alertCtrl: AlertController, private animationCtrl:AnimationController) {
    this.minDate = new Date();
    this.animation = this.animationCtrl.create()
    .addElement(document.querySelector('#titulo'))
    .duration(2500)
    .iterations(Infinity)
    // .fromTo('transform', 'translateX(0px)', 'translateX(20px)');
    .fromTo('color', 'red', 'green');
  }


  reservar(){
    if (this.validar()){
      let mens = `La reserva para la mascota ${this.mascota.nombre}
      ha sido registrada para el ${this.mascota.fecha} a las ${this.mascota.hora}`;
      this.showAlert(mens);
    } else{
      this.showAlert('Faltan Datos!');
    }
  }

  validar() {
    if (this.fecha == null){
      return false;
    }else{
      this.mascota.fecha = this.fecha.toLocaleDateString('en-GB'); 
    }
    let correcto = true;
    Object.values(this.mascota).forEach(val=>{
      if (val ===''){
        correcto = false;
      }
    });
    return correcto;
  }

  showAlert(mensaje:string) {
    
    this.alertCtrl.create({
      subHeader: mensaje,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  limpiar(){
    Object.keys(this.mascota).forEach(key =>{
      Object.defineProperty(this.mascota, key, {value: ''});
    })
  }

  ngOnInit(){
    this.animation.play();
  }

}
 