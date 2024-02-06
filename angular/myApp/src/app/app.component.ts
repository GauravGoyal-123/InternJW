import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MessagesService]
})
export class AppComponent {
  message : string[] = [];
  data!: any[];
  constructor(private messageservice : MessagesService) {
    this.message = messageservice.getMessage();
    // this.messageservice.getData().subscribe(res => {
    //   this.data = res;
    // }, (error) => {
    //   console.error(error);
    // })
  }

  ngOnInit() {
    this.messageservice.getData().subscribe({
      next : (res) => (this.data = res),
      error : (err) => (console.log(err))

    })
  }

}
