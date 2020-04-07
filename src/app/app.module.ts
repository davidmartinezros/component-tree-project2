import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeTreeComponent } from './node-tree/node-tree.component';
import { TreeComponent } from './tree/tree.component';
import { LoadComponent } from './load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeTreeComponent,
    TreeComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
