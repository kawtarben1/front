import {Component, OnInit} from '@angular/core';
import {EtatDeclarationService} from "../../../controler/service/etatDeclaration.service";
import {EtatDeclaration} from "../../../controler/model/etatDeclaration.model";

@Component({
  selector: 'app-etatDeclaration-create',
  templateUrl: './etatDeclaration-create.component.html',
  styleUrls: ['./etatDeclaration-create.component.css']
})
export class EtatDeclarationCreateComponent implements OnInit {

  constructor(private etatDeclarationService: EtatDeclarationService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.etatDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.etatdeclarations.push({...this.etatdeclaration});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get etatdeclaration(): EtatDeclaration {

    return this.etatDeclarationService.etatdeclaration;
  }

  set etatdeclaration(value: EtatDeclaration) {
    this.etatDeclarationService.etatdeclaration = value;
  }

  get etatdeclarations(): Array<EtatDeclaration> {

    return this.etatDeclarationService.etatdeclarations;
  }

  set etatdeclarations(value: Array<EtatDeclaration>) {
    this.etatDeclarationService.etatdeclarations = value;
  }

}
