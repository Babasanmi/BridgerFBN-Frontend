import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFileEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  _tableHeaders: any = [];
  _tableContents: any = [];
  _tableData: any = [];

  deleteModalOpen : boolean = false

  edit = faFileEdit as IconProp;
  del = faTrashCan as IconProp;

  detailsModal: Boolean = false;
  role: string = "";
  public toggleModal(role: string){
    this.detailsModal = !this.detailsModal;
    this.role = role;
  }
  get tableHeaders(): [] {
    return this._tableHeaders;
  };

  @Input()
  set tableHeaders(tableHeaders: []) {
    this._tableHeaders = tableHeaders;
  };

  get tableContents(): [] {
    return this._tableContents;
  };

  @Input()
  set tableContents(tableContents: []) {
    this._tableContents = tableContents;
  };

  toggleDeleteModal(){
    this.deleteModalOpen =!this.deleteModalOpen;
  };
  constructor() { }

 
  ngOnInit(): void {
    console.log(this._tableContents)
  }

}
