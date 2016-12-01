import {Component,OnInit} from '@angular/core';

//import { RECORDS } from './table-json.service';
//import { Observable } from 'rxjs/Observable';
import { TableJsonRecord } from './tableJsonRecord';
import { TableJsonService } from './table-json.service';

@Component({
	moduleId: module.id,
	selector: 'tables-json',
	templateUrl: 'tables.json.component.html',
	providers:[TableJsonService]
})

export class TableJsonComponent implements OnInit {
	data: TableJsonRecord[];
	constructor(private service:TableJsonService) {
	}

	ngOnInit() {
		this.data = this.service.getData();
	}
}
