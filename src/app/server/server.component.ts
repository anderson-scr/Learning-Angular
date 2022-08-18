import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  inputs: ['serverName']
})
export class ServerComponent {
  public status = '';
  @Input() serverName = '';

  constructor() {
    // this.serverName = serverName
    this.status = Math.random() > 0.5? 'Online' : 'Offline'
  }
  
  getColor() {
    if(this.status == 'Offline') {
      return 'red'
    } else return 'green'
  }
}