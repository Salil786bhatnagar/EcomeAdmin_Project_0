function checkRequire(txt){
    if(txt.length==0)
    return false
    else
    return true
}

// function checkRequire(txt){
//   var reg=/^[A-Za-z ]+$/  
//     if(reg.test(txt)==false)
//     return false
//     else
//     return true
// }


function checkPassword(txt){
    if(txt.length<=5)
    return false
    else
    return true
}


function checkMobile(txt){
  var reg=/[0-9]{10}/
       //Alert.alert('cc '+reg.test(txt))
       if(reg.test(txt)==false)
        return false
        else
        return true
    
    }

function checkno(txt){
 var reg=/^[0-9]+$/
        //Alert.alert('cc '+reg.test(txt))
        if(reg.test(txt)==false)
        return false
        else
        return true
    
    }

function checkGstno(txt){
 var reg= /^[a-z0-9]+$/i
        //Alert.alert('cc '+reg.test(txt))
        if(reg.test(txt)==false)
        return false
        else
        return true
    
    }

       
    
function checkEmail(txt)
{if(checkRequire(txt))
 { var reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//  /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&^*])/;
    if(reg.test(txt)==false)
    {return false}
    else
    {return true}
}
else
{return false}

 }


export {checkRequire,checkMobile,checkEmail,checkPassword,checkno,checkGstno}