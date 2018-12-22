import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreatedStatus = 'server was not created'
  serverName:string
  constructor() { }
  allowNewServer: boolean = false
  ngOnInit() {
    setTimeout(()=>{
        this.allowNewServer = true;
    }, 2000)
    
  }
  onServerCreation() {
    this.serverCreatedStatus = 'server was  created'

  }
  onNameEntered(event: any) {
    
    this.serverName = event.target.value;
    console.log(event)
  }

}
