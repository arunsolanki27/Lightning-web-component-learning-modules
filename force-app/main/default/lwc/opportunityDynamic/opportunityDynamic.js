import { LightningElement, api, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityData.getOpportunities';

export default class OpportunityDynamic extends LightningElement {
    @api recordId;
    @api amount;
    @wire(getOpportunities, {actId: '$recordId',amt: '$amount'})
    opportunitites;
}