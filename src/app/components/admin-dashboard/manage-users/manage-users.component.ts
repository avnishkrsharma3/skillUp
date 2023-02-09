import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  constructor(private route: ActivatedRoute, private router : Router){}
  showEdit(){
    this.router.navigate(['edit', 1], {relativeTo: this.route} );
  }
  showView(){
    this.router.navigate(['view'], {relativeTo: this.route} );
  }

}
