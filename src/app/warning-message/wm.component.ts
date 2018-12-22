import { Component } from '@angular/core'

@Component({
    selector: 'warning-message',
    templateUrl: './warningmessages.html',
    styles: [`
        p {
            color: blue,
            background-color: lightblue;
        }
    `]
})
export class WarningMessageComponent {
    
}