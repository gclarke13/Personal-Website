import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadScripts() {
    document.getElementById("site").remove();
    var scr = document.createElement("script");
    scr.setAttribute("id", "site");
    scr.setAttribute("src", "assets/site.js");
    document.head.appendChild(scr);
  }

  refresh() {
    window.location.reload();
  }
}
