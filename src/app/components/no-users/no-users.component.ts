import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-users',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './no-users.component.html',
  styleUrl: './no-users.component.css'
})
export class NoUsersComponent {

constructor( public dialogRef: MatDialogRef<NoUsersComponent>){
  
}

  closeDialog(): void{
    this.dialogRef.close()
  }
}
