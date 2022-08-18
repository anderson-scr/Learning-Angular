import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  enableAddServer = false;
  serverNameValue = '';
  serversList: string[] = ["Server-01"];

  constructor() {}
  ngOnInit(): void {}

  userEntry(event: any) {
    if(((<HTMLInputElement>event.target).value).length > 0) {
      this.enableAddServer = true
    } else {
      this.enableAddServer = false
    }
  }
  addServer() {
    this.serversList.push(this.serverNameValue)
  }
}
