import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private loadingController: LoadingController) {}

  async showLoader(message = 'Please wait...', duration = 3000) {
    const loader = await this.loadingController.create({
      message,
      duration,
      spinner: 'dots',
    });

    loader.present();
  }

  hideLoader() {
    this.loadingController.dismiss();
  }
}
