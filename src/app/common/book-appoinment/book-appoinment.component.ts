import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.scss']
})
export class BookAppoinmentComponent {
  // constructor(private builder:FormBuilder){}
  // submitform=this.builder.group({
  //   fullName:this.builder.control('',Validators.required),
  //   email:this.builder.control('',Validators.required),
  //   message:this.builder.control('',Validators.required),
  //   phoneNumber:this.builder.control('',Validators.required),
  //   captcha:this.builder.control(''),
    
  // });
  onSubmit(form: NgForm){
    
    if(form.valid){
      console.log(form.value);
    }
    
  }
}
