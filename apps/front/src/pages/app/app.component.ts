import { Component } from "@angular/core";
import { SearchComponent } from "../../components/search/search.component";
import { APP_TITLE } from "../../constans";

@Component({
  standalone: true,
  imports: [SearchComponent],
  selector: "electricity-tariffs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  appTitle = APP_TITLE;
}
