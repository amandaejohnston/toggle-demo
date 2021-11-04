import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController) {}

  async presentPrompt(handleConfirm, handleCancel) {
    const alert = await this.alertController.create({
      header: 'Create Todo',
      message: 'Please enter the todo name.',
      inputs: [
        {
          type: 'text',
          name: 'todo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: handleCancel
        },
        {
          text: 'Submit',
          handler: handleConfirm
        }
      ]
    });

    alert.present();
  }

  async handleChange(e) {
    if(e.detail.checked) {
      this.presentPrompt(data => {
        const todoName = data.todo;
        console.log('Todo submitted:', todoName);
        if(!todoName) {
          e.target.checked = false;
        }
      }, () => {
        console.log('Prompt cancelled');
        e.target.checked = false;
      });
    }
  }
}
