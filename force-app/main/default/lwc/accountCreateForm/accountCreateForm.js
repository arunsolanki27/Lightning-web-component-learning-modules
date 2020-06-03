import { 
    LightningElement 
} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

/** 
* Create Account Records 
*/
export default class AccountCreateForm extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    handleFormSubmitted(event){
        
    }

}