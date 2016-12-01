import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TableJsonRecord } from './tableJsonRecord';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TableJsonService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {TableJsonRecord[]} The Observable for the HTTP request.
   */
  get(): Observable<TableJsonRecord[]> {
    return this.http.get('/assets/table-data.json')
                    .map((res: Response) => res.json() as TableJsonRecord[])
                    .catch(this.handleError);
  }

  getData(): TableJsonRecord[] {
    return RECORDS;
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

export const RECORDS:TableJsonRecord[] = [
  {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }, {
    "id": 1,
    "col1": "col1",
    "col2": "col2",
    "col3": "col3",
    "col4": "col4",
    "col5": "col5"
  }
];
