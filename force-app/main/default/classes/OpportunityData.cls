public with sharing class OpportunityData {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String actId, Decimal amt){
        return [Select Id, Name, Amount from Opportunity where AccountId =: actId and Amount <:amt];
    }
}
