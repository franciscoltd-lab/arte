import { Component, inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonContent, IonButton, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {

  constructor() { }

  private readonly modalCtrl = inject(ModalController);

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
