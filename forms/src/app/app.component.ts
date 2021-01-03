import { Component } from '@angular/core';
import { User } from './user'
import { EnregistrementService } from './enregistrement.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['T1','T2'];


  userModel = new User (' Abdelkarim', 'AZZAZ',624, 'abdelkarim@azzaz.dz','Jules Guesde','default', true)




  onSubmit()
{
 console.log(this.userModel) ;
}


}
