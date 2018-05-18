import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ServiceInfoComponent } from './services/service-info/service-info.component';
import {FormsModule} from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { AttributeBindingComponent } from './binding/attribute-binding/attribute-binding.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { StyleBindingComponent } from './binding/style-binding/style-binding.component';
import { ClassBindingComponent } from './binding/class-binding/class-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ServicesComponent,
    PriceComponent,
    ServiceInfoComponent,
    BindingComponent,
    AttributeBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    DirectivesComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
