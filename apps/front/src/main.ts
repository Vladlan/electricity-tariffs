import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./pages/app/app.component";

bootstrapApplication(AppComponent, {
  providers: [],
}).catch((err) => console.error(err));
