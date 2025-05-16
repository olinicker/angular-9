import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  name: string = 'FEDLearning';
  topic: string = 'Data Binding';
  image: string =
    'https://imgs.search.brave.com/RDEnAMzCky0ubUGgD13P1Z-7mDFGbFypgxCdxiTqJfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b2xvcmZ1bC1tYWpl/c3RpYy13YXRlcmZh/bGwtbmF0aW9uYWwt/cGFyay1mb3Jlc3Qt/YXV0dW1uLWltYWdl/XzU1NDgzNy02NDEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA';

  random = '';

  onSave() {
    console.log('teste');
    alert('Data saved Successfully');
  }

  onChange() {
    alert('Country has change!');
  }
}
