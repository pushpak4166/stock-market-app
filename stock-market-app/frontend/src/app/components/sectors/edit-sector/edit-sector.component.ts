import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';
@Component({
  selector: 'app-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css']
})
export class EditSectorComponent implements OnInit {

  id="";
  sector:Sector

  constructor(private route: ActivatedRoute, private sectorService: SectorService) { 
    this.route.params.subscribe( params => this.id=params.id );
  }
  
  ngOnInit(): void {
    this.sectorService.getSector(this.id)
    .subscribe((response) => {
      this.sector = response;
    });
  }
  onSubmit({value, valid}: {value: Sector, valid: boolean}) {
    console.log("update Sector")
    if(!valid) {

    }
    else {
      this.sector.name=value.name
      this.sector.description=value.description
      this.sectorService.updateSector(this.sector);
    }
  }
}
