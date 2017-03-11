import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent} from './intro/intro.component';
import { BlockComponent } from './block/block.component';
import { SjHeaderComponent } from './sj-header/sj-header.component';
import { SjBannerComponent } from './sj-banner/sj-banner.component';

const appRoutes: Routes = [
  { path: 'introductie', component: IntroComponent }
  // { path: 'werkwijze',      component: HeroDetailComponent },
  // { path: '**', component:  }
];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BlockComponent,
    SjHeaderComponent,
    SjBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
