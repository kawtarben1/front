import {Component, OnInit} from '@angular/core';
import {Comptable} from "../../../controler/model/comptable.model";
import {ComptableService} from "src/app/controler/service/comptable.service";


@Component({
  selector: 'app-comptable-create',
  templateUrl: './comptable-create.component.html',
  styleUrls: ['./comptable-create.component.css']
})
export class ComptableCreateComponent implements OnInit{
constructor(private ComptableService: ComptableService) {
}

ngOnInit(): void {
}

public save(): void {
  this.ComptableService.save().subscribe(data => {
    if (data != null) {
      this.comptables.push({...this.comptable});
      alert('SAVE SUCCESS');
    } else {
      alert('SAVE ERROR ::: CIN EXIST');
    }
  });
}

get comptable(): Comptable {

  return this.ComptableService.comptable;
}

set comptable(value: Comptable) {
  this.ComptableService.comptable = value;
}

get comptables(): Array<Comptable> {

  return this.ComptableService.comptables;
}

set comptables(value: Array<Comptable>) {
  this.ComptableService.comptables = value;
}

}
