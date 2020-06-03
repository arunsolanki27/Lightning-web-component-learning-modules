import { LightningElement, api} from 'lwc';

export default class CurrentDate extends LightningElement {
    @api tdate;
    tdate = new Date().toDateString();
}