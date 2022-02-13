// Problem 1 
function anaToVori(ana){

    // Error Handling
    if(typeof ana!="number"){
    return 'Please Give A Number';
    }
    else if(ana <= 0){
    return "Please dont give Zero or negative Number";
    }
        
    else{
    //Since 1 ana=16 Vori
    var vori=(ana/16); 
     return vori;
    }
    }
      
    
    var myAna=-2.5;
    var convertedVori=anaToVori(myAna);
    console.log(convertedVori);

    // Problem 2
    


function pandaCost(singara,samusa,jilapi){


    //    Error Handling
       if(typeof singara!="number"&&  typeof samusa!="number" && typeof jilapi!="number"){
        return 'Please Give A Number';
    }
    else if(singara <0 || samusa<0 || jilapi<0){
        return "Please enter a valid quantity";
      }
    else{
        
    
     // singaraPrice=7 taka/singara;
        const perSingaraCost=7; 
         // somusaPrice=10 taka/somusa;    
        const perSamusaCost=10; 
       // jilapiPrice=15 taka/jilapi;    

        const perJilapiCost=15;         
        const singaraQuantityCost=(singara*perSingaraCost);
        const samusaQuantityCost=(samusa*perSamusaCost);
        const jilapiQuantityCost=(jilapi*perJilapiCost);
    
        const totalCost=(singaraQuantityCost+samusaQuantityCost+jilapiQuantityCost);
    
        return totalCost;
    }
    }
    
    
    const myCost=pandaCost(-1,-1,-1);
    
    console.log(myCost);

    // Problem 3
    function picnicBudget(studentNumber){


        if(typeof studentNumber!="number"){
            console.log("Please Enter Number!!!! Don't Enter String")
        }
    else if(studentNumber<=0){
        console.log("Student Number cannot be Negative or Zero!!!!");
    }
    else{
        let bill;
    
        if(studentNumber<=100){
            bill=studentNumber*5000;
           return bill;
       }
    
         
       else if(studentNumber<=200){
        //For 100 above and equal to 200
        let firstBill= 100*5000;
        let remainingBill=(studentNumber-100)*4000;
        bill=firstBill+remainingBill;
        return bill;
            }
       else {
            // for 200  above 
    
            let first100Bill=100*5000;
            let second100Bill=100*4000;
            let remainingBill=(studentNumber-200)*3000;
            bill=first100Bill+second100Bill+remainingBill;
            
            return bill;
            
            }
           
    
       
    
    
           
    
    }
    }
    
    
    const a=picnicBudget(-11);
    console.log(a);
// problem 4
function oddFriend(friends){
    
    for(let i = 0; i < friends.length; i++){
    if(friends[i].length % 2 != 0){
    return friends[i];
    }
    }
    }
    const friends = ['abc','abcd','abcde'];
    const oddFriendName = oddFriend(friends);
    
    console.log(oddFriendName);