import { Component } from '@angular/core';
import { User } from './user' ;
import { EnregistrementService } from './enregistrement.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['T1','T2'];


  userModel = new User (' Abdelkarim', 'AZZAZ',624, 'abdelkarim@azzaz.dz','Jules Guesde','default', true)

    submitted = false;

 constructor(private _enregistrementService: EnregistrementService) {}


  onSubmit() {
     this.submitted = true;

    this._enregistrementService.register(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error),
      )
  }


}
