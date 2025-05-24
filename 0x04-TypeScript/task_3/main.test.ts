import { RowElement, RowID } from './interface';
import * as CRUD from './crud.js';

describe('main.ts logic', () => {
  const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
  };

  it('should insert, update, and delete a row', () => {
    // Insert row
    const newRowID: RowID = CRUD.insertRow(row);
    expect(typeof newRowID).toBe('number');

    // Update row
    const updatedRow: RowElement = {
      ...row,
      age: 23
    };
    const updateResult = CRUD.updateRow(newRowID, updatedRow);
    expect(updateResult).toBe(newRowID);

    // Delete row
    const deleteResult = CRUD.deleteRow(newRowID);
    expect(deleteResult).toBeUndefined();
  });
});