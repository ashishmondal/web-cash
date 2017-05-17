import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
	public menu: MenuGroup[] = [];

	constructor() {

	}
}

export class MenuGroup {

	constructor(public name: string,
		public order: number,
		public menuItems: MenuItem[]) {

	}
}

export class MenuItem {
	constructor(public text: string,
	public icon: string) {

	}
}