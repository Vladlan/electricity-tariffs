import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./pages/app/app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(ToastrModule.forRoot()),
  ],
}).catch((err) => console.error(err));
