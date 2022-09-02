import { Component, OnInit, TemplateRef } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(public _finaldataservice: FinalDataService,private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  modalRef?: BsModalRef;

  display = "none";

  openModal() {
    this.display = "block";

    

  }
  onCloseHandled() {
    this.display = "none";
  }

  
}