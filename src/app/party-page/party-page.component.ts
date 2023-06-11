import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {
  myForm!: FormGroup;
  paramValue: any;
  myDetails:any
  peersDetails:any
  showSuccessPopup: boolean = false;
  trxSuccessMessage: any;

  constructor(private route: ActivatedRoute,private dataService:DataServiceService,private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      amount: ['', Validators.required],
      recipient: ['', Validators.required]
    });
   this.paramValue = this.route.snapshot.paramMap.get('name');
    console.log("param", this.paramValue);

    this.dataService.getCurrentPartyDetails(this.paramValue).subscribe(
      (response) => {
        // Handle the response data
        this.myDetails=response;
        console.log(response);
      },
      (error) => {
        // Handle the error
        console.error(error);
      }
    );

    this.dataService.getPeersDetails(this.paramValue).subscribe(
      (response) => {
        // Handle the response data
        this.peersDetails=response;
        console.log(response);
      },
      (error) => {
        // Handle the error
        console.error(error);
      }
    );
  }
  onSubmit(){
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.dataService.createTransaction(this.paramValue,this.myForm.value.recipient,this.myForm.value.amount).subscribe(
        (response) => {
          // Handle the response data
          this.trxSuccessMessage=response;
          console.log(response);
          this.showSuccessPopup = true;
        },
        (error) => {
          // Handle the error
          this.trxSuccessMessage=error.error.text;
          this.showSuccessPopup = true;
          console.log(error);
        }
      );
      
    } else {
      console.log('Form invalid');
    }
  }
  showSuccess() {
    this.showSuccessPopup = true;
  }

  hideSuccess() {
    this.showSuccessPopup = false;
  }
}
