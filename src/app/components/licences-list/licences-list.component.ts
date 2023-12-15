import { Component, Injectable, Injector } from '@angular/core';
import { LicenceService } from '../../services/licence.service';
import { ILicence } from '../../domains/licence.domain';

@Component({
  selector: 'app-licences-list',
  standalone: true,
  imports: [],
  templateUrl: './licences-list.component.html',
  styleUrl: './licences-list.component.css',
  providers: [LicenceService]
})
export class LicencesListComponent {

  licenceList: any;
 // private licenceList: ILicence[];

  constructor(private service: LicenceService){ 

  }

  ngOnInit(): void {
   
    this.loadLicences();
  }

  async loadLicences(){
    await this.service.getLicences().subscribe((data) =>{
      console.log(data)
      this.licenceList = data 
    })
  }


}
