import { insertRow, deleteRow, updateRow, RowElement, RowID } from './interface';

describe('interface.ts', () => {
  const row: RowElement = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  it('insertRow should return a number between 0 and 999', () => {
    const id = insertRow(row);
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThanOrEqual(0);
    expect(id).toBeLessThan(1000);
  });

  it('deleteRow should not throw and return undefined', () => {
    expect(() => deleteRow(123)).not.toThrow();
    expect(deleteRow(123)).toBeUndefined();
  });

  it('updateRow should return the RowID', () => {
    const id: RowID = 456;
    expect(updateRow(id, row)).toBe(id);
  });
});