function validationmsg(userRegistration){
    let errors={};
    

    if(!userRegistration.username){
        errors.username="Username is required";
    }
   
    if(!userRegistration.password){
        errors.password="Password is required";
        
    }else if(userRegistration.password.length < 6){
        errors.password="Password should be greater than 6 character";
        
    }
    if(userRegistration.password!==userRegistration.confirmpassword){
        errors.confirmpassword="Password does not match with confirm password";
    }
    
    if(!userRegistration.email){
        errors.email="email is required";
    }else if(!/\S+@\S+\.\S+/.test(userRegistration.email)){
        errors.email="Give a valid email";
    }
    
    if(!userRegistration.contactnum){
        errors.contactnum="Contact number is required";
    }
    if(!userRegistration.address){
        errors.address="Address is required";
    }
    return (errors);        
}

export default validationmsg;