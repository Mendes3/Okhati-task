function validation(userRegistration) {
    
    let newError=(false);
       

   if(!userRegistration.name){
       newError=(true);
   }
   if(!userRegistration.userid){
       newError=(true);
   }
   if(!userRegistration.password){
       newError=(true);
   }else if(userRegistration.password.length < 6){
       newError=(true);
   }
   if(userRegistration.password!==userRegistration.confirmpass){
       newError=(true);
   } 
   if(!userRegistration.emaiil){
       newError=(true);
   }else if(!/\S+@\S+\.\S+/.test(userRegistration.emaiil)){
       newError=(true);
   }
   
   if(!userRegistration.contactnum){
       newError=(true);
   }
   if(!userRegistration.address){
       newError=(true);
   }
   return (newError);        
}
export default validation;