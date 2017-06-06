import { Component, OnInit, AfterViewInit, ViewChild, DoCheck, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Component({
	selector: 'wc-pie',
	templateUrl: './pie.component.html',
	styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, AfterViewInit, DoCheck {

	@ViewChild('pieContainer') pieContainer: ElementRef;

	constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		// Set a callback to run when the Google Visualization API is loaded.
		google.charts.setOnLoadCallback(() => this.drawChart());
	}

	ngDoCheck(){
		//this.renderer.
	}

	// Callback that creates and populates a data table,
	// instantiates the pie chart, passes in the data and
	// draws it.
	drawChart() {

		// Create the data table.
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		data.addRows([
			['Mushrooms', 3],
			['Onions', 1],
			['Olives', 1],
			['Zucchini', 1],
			['Pepperoni', 2]
		]);

		// Set chart options
		var options = {
			'title': 'How Much Pizza I Ate Last Night',
			//'width': 400,
			'is3D':true//,
			//'height': 300
		};

		//Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.PieChart(this.pieContainer.nativeElement);
		chart.draw(data, options);
	}

}
