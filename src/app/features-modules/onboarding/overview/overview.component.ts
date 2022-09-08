import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/core/services/crudServices/crud.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  searchIcon = faSearch as IconProp;
  filterIcon = faFilter as IconProp;
  constructor(
    private router : Router,
    private crudServices : CrudService
    ) { }
  
  


  tableHeaders = [
    {
      name: "Date Added"
    },
    {
      name: "TIN"
    },
    {
      name: "Company"
    },
    {
      name: "Role"
    },
    {
      name: "Company Email"
    },
    {
      name: "Actions"
    },
  ]
  tableContents = [
    {
     dateAdded: "22/06/21",
     tin: 'FBN1201',
     company: 'chc kimited',
     role: 'buyer',
     comapnyEmail: 'chc@gmail'

    },
    {
     dateAdded: "22/06/21",
     tin: 'FBN1201',
     company: 'chc kimited',
     role: 'supplier',
     comapnyEmail: 'chc@gmail'

    },
    {
     dateAdded: "22/06/21",
     tin: 'FBN1201',
     company: 'chc kimited',
     role: 'buyer',
     comapnyEmail: 'chc@gmail'

    },
    {
     dateAdded: "22/06/21",
     tin: 'FBN1201',
     company: 'chc kimited',
     role: 'buyer',
     comapnyEmail: 'chc@gmail'

    },
    {
     dateAdded: "22/06/21",
     tin: 'FBN1201',
     company: 'chc kimited',
     role: 'supplier',
     comapnyEmail: 'chc@gmail'

    },

  ]

  navigate() {
    this.router.navigateByUrl('/dashboard/onboarding/pages');
    this.crudServices.updateHeaderTitle("All Customers");
  }

  navigateToBuyer(){
    this.router.navigateByUrl('dashboard/onboarding/pages');
    this.crudServices.updateHeaderTitle("Buyers")
    this.crudServices.updatetabNumber(2)
  }
  navigateToSupplier(){
    this.router.navigateByUrl('dashboard/onboarding/pages');
    this.crudServices.updateHeaderTitle("Suppliers")
    this.crudServices.updatetabNumber(3)
  }

  ngOnInit(): void {
  }

}
