import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-for-vs-for.component.html',
  styleUrl: './structural-directive-ng-for-vs-for.component.scss',
})
export class StructuralDirectiveNgForVsForComponent {
  employees: any[] = [
    {
      empName: 'John',
      empNumber: '101',
      empEmail: 'john@gmail.com',
      empDept: 'IT',
    },
    {
      empName: 'Bob',
      empNumber: '102',
      empEmail: 'bob@gmail.com',
      empDept: 'HR',
    },
    {
      empName: 'Peter',
      empNumber: '103',
      empEmail: 'peter@gmail.com',
      empDept: 'QA',
    },
  ];

  companyList: string[] = ['AtoS', 'Capgemini', 'Accenture', 'TCS'];
}
