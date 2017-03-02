export class FundData {  
  
    fundName: string;
    fundNav: number;
  
 
    constructor() {
        this.fundName = 'Blank';
        this.fundNav = 0;
    }
  
    setFundInfo(fundName, fundNav) {
        this.fundName = fundName;
        this.fundNav = fundNav;       
    }
  
    getFundName() {
        return this.fundName;
    }   

    getFundNav(){
        return this.fundNav;
    }
}