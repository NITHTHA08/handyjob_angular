/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Handy Service Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2024-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerRequestRoutingModule } from './freelancer-request-routing.module';
import { FreelancerRequestComponent } from './freelancer-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    FreelancerRequestComponent
  ],
  imports: [
    CommonModule,
    FreelancerRequestRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark' }),
    TabsModule,
    ModalModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class FreelancerRequestModule { }