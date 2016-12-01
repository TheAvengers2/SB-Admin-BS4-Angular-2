import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableJsonComponent } from './table.json.component';
import { TableJsonService } from './table-json.service';

@NgModule({
    imports: [RouterModule],
    declarations: [TableJsonComponent],
    exports: [TableJsonComponent],
    providers:[TableJsonService]
})

export class TableJsonModule { }
