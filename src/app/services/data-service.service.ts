import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}
  getData() {
    return [
      { id: 1, firstName: 'eli', lastName: 'metreveli', workingYears: 1 },
      { id: 2, firstName: 'gela', lastName: 'urushadze', workingYears: 2 },
      { id: 3, firstName: 'bela', lastName: 'zoidze', workingYears: 3 },
      { id: 4, firstName: 'lela', lastName: 'abesadze', workingYears: 2 },
      { id: 5, firstName: 'maxo', lastName: 'barabqadze', workingYears: 3 },
      { id: 6, firstName: 'zviadi', lastName: 'gnolidze', workingYears: 5 },
      { id: 7, firstName: 'gio', lastName: 'vardia', workingYears: 7 },
      { id: 8, firstName: 'keta', lastName: 'orashia', workingYears: 14 },
      { id: 9, firstName: 'iosebi', lastName: 'beladze', workingYears: 3 },
      { id: 10, firstName: 'nona', lastName: 'koridze', workingYears: 11 },
    ];
  }
}
