import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ],
  exports:[AddEmployeeComponent, EditEmployeeComponent, EmployeeListComponent]
})
export class CrudModule { }
