import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/core/services/menu.service";

@Component({
	selector: 'wc-left-menu',
	templateUrl: './left-menu.component.html',
	styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

	public get menu(){
		return this.menuService.menu
			.sort((a, b) => a.order - b.order);
	}

	constructor(private menuService: MenuService) { }

	ngOnInit() {
	}

}
