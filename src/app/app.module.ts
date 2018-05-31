import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { directiveCreate } from '@angular/core/src/render3/instructions';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ServiceInfoComponent } from './services/service-info/service-info.component';
import { BindingComponent } from './binding/binding.component';
import { AttributeBindingComponent } from './binding/attribute-binding/attribute-binding.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { StyleBindingComponent } from './binding/style-binding/style-binding.component';
import { ClassBindingComponent } from './binding/class-binding/class-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ParentToChildComponent } from './heroes/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './heroes/child-to-parent/child-to-parent.component';
import { ServiceInfo2Component } from './services/service-info2/service-info2.component';
import { ServiceInfo3Component } from './services/service-info3/service-info3.component';


const routes: Routes = [
  { path : '', component : HeaderComponent},
  { path : 'banner', component : BannerComponent},
  { path : 'price', component : PriceComponent},
  { path : 'services', component : ServicesComponent,
    children : [
      { path : 'service1', component : ServiceInfoComponent},
      { path : 'service2', component : ServiceInfo2Component},
      { path : 'service3', component : ServiceInfo3Component}
    ]
  },
  { path : 'directives', component : DirectivesComponent},
  { path : 'heroes', component : HeroesComponent}
];

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
    StructuralDirectiveComponent,
    HeroesComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    ServiceInfo2Component,
    ServiceInfo3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
