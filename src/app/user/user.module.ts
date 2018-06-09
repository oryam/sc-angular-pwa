import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './service/user.service';
import { UserListComponent } from './view/list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UserListComponent],
  providers: [UserService]
})
export class UserModule {}
