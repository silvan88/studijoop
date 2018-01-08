import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {IntroComponent} from './intro/intro.component';
import {BlockComponent} from './block/block.component';
import {SjHeaderComponent} from './sj-header/sj-header.component';
import {SjBannerComponent} from './sj-banner/sj-banner.component';
import {ProcessComponent} from './process/process.component';
import {RecordingComponent} from './recording/recording.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {OverviewComponent} from './overview/overview.component';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'introductie', component: IntroComponent},
  {path: 'werkwijze', component: ProcessComponent},
  {path: 'opname', component: RecordingComponent},
  {path: 'over', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BlockComponent,
    SjHeaderComponent,
    SjBannerComponent,
    ProcessComponent,
    RecordingComponent,
    ContactComponent,
    AboutComponent,
    OverviewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
