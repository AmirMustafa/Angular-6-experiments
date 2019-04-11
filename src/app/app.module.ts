import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// For using ngModel - two way binding we need this module
import { FormsModule } from '@angular/forms';

// importing this to use our custom pipe
// import { CustomSlice } from './customslice.pipe';

// import { ReverseStr } from './reverse-str.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ServicesComponent } from './services/services.component';
import { BioDataService } from './bio-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NewcomponentComponent,
    SimpleFormComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      // Using FormsModule included above
   // CustomSlice        // We register our custom pipe class name after importing above
   // ReverseStr
  ],
  providers: [BioDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
