import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent implements OnInit {
  @Output('customerData') customerData: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Input('customerList') customerList: Customer[] = [];
  private fb = inject(FormBuilder);
  customer = this.fb.group({
    name: [''],
    age: [''],
    gender: [''],
    address: ['']
  });

  ngOnInit(): void {
      
  }

  addCustomer() {
    let cmr = this.customer.value;
    this.customerData.emit({id: this.customerList.length + 1, ...cmr});
  }
}
