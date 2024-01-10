import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LicencesListComponent } from './components/licences-list/licences-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersActiveComponent } from './components/users-active/users-active.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LicencesListComponent, NavbarComponent, UsersActiveComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Licences Usage';
}
