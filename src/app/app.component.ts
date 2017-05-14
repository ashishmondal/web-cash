import { Component } from '@angular/core';
import { DataService } from "./shared/data.service";
import { AccountService } from "app/shared/account.service";
import { CommodityService } from "app/shared/commodity.service";

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, CommodityService, AccountService]
})
export class AppComponent {
}
