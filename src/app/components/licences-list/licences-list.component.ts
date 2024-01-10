import { Component } from '@angular/core';
import { LicenceService } from '../../services/licence.service';
import { UsersActiveComponent } from '../users-active/users-active.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../loading/loading.component';
import { MatButtonModule } from '@angular/material/button';
import { ILicence } from '../../domains/licence.domain';


@Component({
  selector: 'app-licences-list',
  standalone: true,
  imports: [UsersActiveComponent, LoadingComponent,MatButtonModule],
  templateUrl: './licences-list.component.html',
  styleUrl: './licences-list.component.css',
  providers: [LicenceService]
})
export class LicencesListComponent {

  licenceName!: string;

  licenceList!: ILicence[];

  loading = true

  constructor(private service: LicenceService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.loadLicences();
  }

  async loadLicences(){
    await this.service.getLicences().subscribe((data) =>{
      console.log(data)
      this.licenceList = data
      this.loading = false;
    })
  }

  openDialog(licenceName: string): void {
    this.licenceName = licenceName;
    console.log(this.licenceName)
    this.dialog.open(UsersActiveComponent, {
      data: { licenceName: this.licenceName }
    })};
}