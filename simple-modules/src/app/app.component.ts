import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center" class="content">
        <app-curso-list></app-curso-list>
        <app-component1></app-component1>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "simple-modules";
}
