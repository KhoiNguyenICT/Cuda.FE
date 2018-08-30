import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity.component';
import { EntityListComponent } from './entity-list/entity-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntityComponent, EntityListComponent]
})
export class EntityModule { }
