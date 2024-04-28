declare var google: any;

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '357749651319-0s3o8kq6kkm98ljut1r9eeg2a2eajt0d.apps.googleusercontent.com',

      callback: (resp: any) => this.handleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 280,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem('loggesInUser', JSON.stringify(payload));
      //navigate to home page
      this.router.navigate(['browse']);
    }
  }
}
