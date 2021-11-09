import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ComponentRoutingModule } from './component-routing.module';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PreweddingComponent } from './pages/prewedding/prewedding.component';
import { AngularMaterialModule } from 'src/app/material/material';
import { DeleteComponent } from './dialog/reservation/delete/delete.component';
import { AddComponent } from './dialog/prewedding/add/add.component';
import { EditComponent } from './dialog/prewedding/edit/edit.component';
import { DeletePrewedding } from './dialog/prewedding/delete/delete.component';



@NgModule({
  declarations: [HomeComponent, ReservationComponent, PreweddingComponent, DeleteComponent, AddComponent, EditComponent, DeletePrewedding],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    AngularMaterialModule
  ]
})
export class ComponentModule { }
