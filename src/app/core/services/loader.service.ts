import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private loadingController: LoadingController) {}

  async showLoader(message = 'Please wait...') {
    const loader = await this.loadingController.create({
      message,
      spinner: 'dots',
    });

    loader.present();
  }

  hideLoader() {
    this.loadingController.dismiss();
  }
}
