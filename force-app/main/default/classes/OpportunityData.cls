public with sharing class OpportunityData {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String actId){
        return [Select Id, Name, Amount from Opportunity where AccountId =: actId];
    }
}
