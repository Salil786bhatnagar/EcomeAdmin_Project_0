//gst validation
if(!checkRequire(getGstNo))
{
  err=true
  setErrGstNo('image/cross.png')
}

if(checkRequire(getGstNo))
 {
   setErrGstNo('image/tick.png')
 }

//address validation
 if(!checkRequire(getAddress))
 {
   err=true
   setErrAddress('image/cross.png')
 }

 if(checkRequire(getAddress))
  {
   setErrAddress('image/tick.png')
  }

  //state validation
 if(!checkRequire(getState))
 {
   err=true
   setErrState('image/cross.png')
 }

 if(checkRequire(getState))
  {
   setErrState('image/tick.png')
  }

 //city validation
 if(!checkRequire(getCity))
 {
   err=true
   setErrCity('image/cross.png')
 }

 if(checkRequire(getCity))
  {
   setErrCity('image/tick.png')
  }

  //location validation
 if(!checkRequire(getLocation))
 {
   err=true
   setErrLocation('image/cross.png')
 }

 if(checkRequire(getLocation))
  {
   setErrLocation('image/tick.png')
  }


 //photograph validation
 if(!checkRequire(getIcon))
 {
   err=true
   setErrIcon('image/cross.png')
 }

 if(checkRequire(getIcon))
  {
   setErrIcon('image/tick.png')
  }


 //email validation
 if(!checkRequire(getEmail))
 {
   err=true
   setErrEmail('image/cross.png')
 }

 if(checkRequire(getEmail))
  {
   setErrEmail('image/tick.png')
  }


 //password validation
 if(!checkRequire(getPassword))
 {
   err=true
   setErrPassword('image/cross.png')
 }

 if(checkRequire(getPassword))
  {
   setErrPassword('image/tick.png')
  }


 //description validation
 if(!checkRequire(getDescription))
 {
   err=true
   setErrDescription('image/cross.png')
 }

 if(checkRequire(getDescription))
  {
   setErrDescription('image/tick.png')
  }

//averageprice validation
if(!checkRequire(getAveragePrice))
{
  err=true
  setErrAveragePrice('image/cross.png')
}

if(checkRequire(getAveragePrice))
 {
  setErrAveragePrice('image/tick.png')
 }


 //rating validation
 if(!checkRequire(getRating))
 {
   err=true
   setErrRating('image/cross.png')
 }

 if(checkRequire(getRating))
  {
   setErrRating('image/tick.png')
  }


 //lat validation
 if(!checkRequire(getLat))
 {
   err=true
   setErrLat('image/cross.png')
 }

 if(checkRequire(getLat))
  {
   setErrLat('image/tick.png')
  }


 //lan validation
 if(!checkRequire(getLng))
 {
   err=true
   setErrLng('image/cross.png')
 }

 if(checkRequire(getLng))
  {
   setErrLng('image/tick.png')
  }


 //status validation
 if(!checkRequire(getStatus))
 {
   err=true
   setErrStatus('image/cross.png')
 }

 if(checkRequire(getStatus))
  {
   setErrStatus('image/tick.png')
  }