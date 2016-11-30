import {Component,OnInit} from '@angular/core';

import { TableJsonService } from './table-json.service';

@Component({
	moduleId: module.id,
	selector: 'tables-json',
	templateUrl: 'tables.json.component.html'
})

export class TableJsonComponent implements OnInit{

	constructor(service:TableJsonService){
		this.data = service.get();
	}

	data:TableJsonService[] = null;

}
