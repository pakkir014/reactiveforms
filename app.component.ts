import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as validatorsRequired from './validatorsRequired';
import { CustomValidator } from './validatorsRequired';
import { CountriesService } from './countries.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'forms';
  getallcountries: any = [];
  selectCountry: any;
  addForm: FormGroup;

  countries: any = [];
  countryCode: any;
  states: any;
  cities: any;
  countryName: any;
  stateName: any;
  cityName: any;
  // error_messages = {
  //   name: [{ type: 'required', message: 'Name is required.' }],
  //   phoneNo: [{ type: 'required', messege: 'phone number is required' }],
  //   panNo: [{ type: 'required', messege: 'Pan number is required' }],
  //   adharNo: [{ type: 'required', messege: 'Adhar number is required' }],
  //   imageupload: [{ type: 'required', messege: 'Image is required' }],
  //   adress: [{ type: 'required', messege: 'Address number is required' }],
  //   country: [{ type: 'required', messege: 'Country name is required' }],
  //   state: [{ type: 'required', messege: 'State  is required' }],
  //   district: [{ type: 'required', messege: 'District is required' }],
  //   pincode: [{ type: 'required', messege: 'Pincode is required' }],
  // };
  ngOnInit(): void {
    this.getcountries();
  }

  constructor(private http: CountriesService) {
    this.addForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        CustomValidator.noWhitespaceValidator,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      phoneNo: new FormControl('', [
        Validators.required,
        CustomValidator.phoneNumberValidator,
        
      ]),
      panNo: new FormControl('', [
        Validators.required,
        CustomValidator.panValidator,
      ]),
      adharNo: new FormControl('', [
        Validators.required,
        CustomValidator.aadharValidator,
      ]),
      imageupload: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [
        Validators.required,
       CustomValidator.pinCodeValidator
      ]),
    });
  }
  submit() {
    console.log(this.addForm.value);
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    alert('file uploaded suscussfully');
  }
  someMethod(event: any) {
    this.selectCountry = event;
  }
  getcountries() {
    this.http.getAllCountries().subscribe({
      next: (res: any) => {
        this.getallcountries = res.data;
        console.log(res.data);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }


  CONSOLE3(a: any) {}


  CONSOLE1(a: any) {
    console.log(a.value)
    this.getAllState(a.value);
    this.countryCode=a;
  }


  CONSOLE2(a: any) {
    
    let body = { _id: this.countryCode, index: a };
    this.getAllCities1(body);
  }

  getAllCountrys() {
    this.http.getAllCountries().subscribe({
      next: (res: any) => {
        this.countries = res.data;
      },
    });
  }

  getAllState(id: any) {
    this.http.getAllStates(id).subscribe({
      next: (res: any) => {
        this.states = res.data;
        // console.log(this.states)
      },
    });
  }

  getAllCities1(body: any) {
    console.log(body)
    this.http.getAllCities(body).subscribe({
      next: (res: any) => {
        this.cities = res;
      },
    });
  }


  ABC(){
    console.log(this.addForm.get('name')?.errors)
  }


}
