import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { SettingsModule } from './settings/settings.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AuthModule } from './auth/auth.module';
import { AuthenticationGuard } from './@core/guards/authentication.guard';
import { CreatePostModule } from './create-post/create-post.module';
import { MyPostsModule } from './my-posts/my-posts.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SettingsModule,
    AuthModule,
    CreatePostModule,
    MyPostsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationGuard, multi: true }],
})
export class AppModule {}
