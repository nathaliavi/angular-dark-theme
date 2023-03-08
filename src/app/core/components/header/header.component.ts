import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: string = ETheme.ICON_DARK
  public textTheme: string = ETheme.TEXT_DARK

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme')
    console.log(theme)
    if(theme){
      this.textTheme = ETheme.TEXT_LIGHT
      return this.icon = ETheme.ICON_LIGHT
    }

    this.textTheme = ETheme.TEXT_DARK
    return this.icon = ETheme.ICON_DARK
  }

}
