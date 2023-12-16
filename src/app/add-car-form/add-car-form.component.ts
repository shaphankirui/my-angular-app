import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.scss']
})
export class AddCarFormComponent {
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm): void {
    const formData = new FormData();
    console.log('sent data',formData)

    // Append form values to FormData
    Object.keys(form.value).forEach(key => {
      formData.append(key, form.value[key]);
    });
    console.log('sent data',formData)

    this.http.post('http://127.0.0.1:8000/api/cars', formData)
      .subscribe((response: any) => {
        console.log('Car added');
        this.clearForm(form);
      }, (error: any) => {
        console.error('Failed to add car', error);
      });
  }

  clearForm(form: NgForm): void {
    form.resetForm();
  }
}
