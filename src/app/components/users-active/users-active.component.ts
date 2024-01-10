import { Component, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LicencesListComponent } from './../licences-list/licences-list.component'
import { IDialogData } from '../../domains/user.domain';
import { LoadingComponent } from '../loading/loading.component';
import { NoUsersComponent } from '../no-users/no-users.component';


@Component({
  selector: 'app-users-active',
  standalone: true,
  imports: [MatDividerModule, LicencesListComponent, LoadingComponent, NoUsersComponent],
  templateUrl: './users-active.component.html',
  styleUrl: './users-active.component.css',
  providers: [UserService]
})
export class UsersActiveComponent {
  usersList: any;
  license!: string;
  loading = true
  
  constructor(private service: UserService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: IDialogData,public dialogRef: MatDialogRef<UsersActiveComponent>){
  }

  ngOnInit(): void { 
    this.loadUsers(this.data.licenceName);
  }

  async loadUsers(licence: string){
    await this.service.getUsersByLicense(licence).subscribe((data) =>{
      this.usersList = data 
      this.license = this.data.licenceName;
      this.loading = false;

    })
  }
  
    closeDialog(): void{
      this.dialogRef.close()
    }


}
