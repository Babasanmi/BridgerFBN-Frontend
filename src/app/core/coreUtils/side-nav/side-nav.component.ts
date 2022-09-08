import { Component, OnInit } from '@angular/core';
import { faAngleDown, faMoneyBill, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  icon1 = faThLarge;
  invoice = faMoneyBill;
  settings =  faGear;
  icon2 = faFileLines;
  add = faPlus;
  more = faAngleDown;
  closeMore = faAngleUp;

  scmIcon = this.more;
  openScmBar : Boolean = false;
  
  toggleScm(){
    this.openScmBar = !this.openScmBar;

    if(this.openScmBar === true){
      this.scmIcon =  this.closeMore
    }else{
      this.scmIcon = this.more
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
