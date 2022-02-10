import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  close: boolean = false;
  constructor() { }
  toggle() {
    this.close = !this.close
  }
  ngOnInit(): void {
  }

}
