import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
    static noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string)?.startsWith(' ')) {
            return { noWhitespaceValidator: true };
        }
        return null;
    }

    // validate negative number
    static negativeNumberValidator(control: AbstractControl): ValidationErrors | null {
        if (control.value < 0) {
            return { negativeNumberValidator: true };
        }
        return null;
    }

    // min value 1 
    static minValueValidator(min: number): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value < min) {
                return { minValueValidator: true };
            }
            return null;
        };
    }       
    
    // phone number validation
    static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
        if (!/^[0-9]{10}$/.test(control.value)) {
            return { phoneNumberValidator: true };
        }
        return null;
    }
    
     // phone number validation
     static pinCodeValidator(control: AbstractControl): ValidationErrors | null {
        if (!/^[0-9]{6}$/.test(control.value)&& control.value) {
            return { pinCodeValidator: true };
        }
        return null;
    }

    // PAN validation
    static panValidator(control: AbstractControl): ValidationErrors | null {
        // 5 characters followed by 4 numbers followed by 1 character validation
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(control.value)&&control.value) {
            return { panValidator: true };
        }
        return null;
    }

    // aadharValidator validation
    static aadharValidator(control: AbstractControl): ValidationErrors | null {
        if (!/^[0-9]{12}$/.test(control.value) &&control.value) {
            return { aadharValidator: true };
        }
        return null;
    }

    // IDValidator validation with Alphanumeric with - and _ allowed
    static IDValidator(control: AbstractControl): ValidationErrors | null {
        if (!/^[a-zA-Z0-9_-]*$/.test(control.value)) {
            return { IDValidator: true };
        }
        return null;
    }
    // pincodeValidator with numbers only allowed

    // static pincodeValidator(control:AbstractControl):ValidationErrors|null{
    //     if(!^[1-9][0-9]{5}$/.test(control.value)){
    //         return {pincodeValidator:true}
    //     }
    // }

}