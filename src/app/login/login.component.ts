import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * 按下登入的按鈕時會觸發的函式
   *
   * @memberof LoginComponent
   */
  login(): void {

    this.router.navigate([''], {
      queryParams: {
        name: 'Leo'
      }
    });

  }

}
