import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { allExpenses } from './mock-expenses';

@Injectable()
export class ExpenseService {

  addExpense(expense: Expense): void {
    allExpenses.push(expense);
  }

  getExpenses(): Promise<Expense[]> {
    return Promise.resolve(allExpenses); 
  }

  getExpense(id: number): Promise<Expense> {
    return this.getExpenses().then(expenses =>
      expenses.find(expense => expense.id === id)
    )
  }

  getNextId(): number {
    var highest = 0;

    for (var i = 0; i < allExpenses.length; i++) {
      if (i > highest) {
        highest = i;
      }
    } 

    return highest + 1;
  }

  removeExpense(expense: Expense): void {
    this.getExpenses().then(expenses => {
      const index = expenses.indexOf(expense);
      expenses.splice(index, 1);
    })
  }   
}
