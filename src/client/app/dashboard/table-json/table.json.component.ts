import {Component,OnInit} from '@angular/core';

import { TableJsonService } from './table-json.service';
import { Observable } from 'rxjs/Observable';
import { TableJsonRecord } from './tableJsonRecord';

@Component({
	moduleId: module.id,
	selector: 'tables-json',
	templateUrl: 'tables.json.component.html',
	providers:[TableJsonService]
})

export class TableJsonComponent implements OnInit{

	constructor(private service:TableJsonService){
	}

	data: Observable<TableJsonRecord[]>;

ngOnInit(){
	this.data = this.service.get();
}
}
