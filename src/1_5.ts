{

    type AlphaNumeric =string |number;

    const add = (param1: AlphaNumeric,
         param2: AlphaNumeric)
          :AlphaNumeric =>{
        if ( typeof param1 ==="number" && typeof param2==="number"){
            return param1+param2
        } else{
            param1.toString()+ param2.toString();
        }
    }

    const result = add (4,6)
    console.log(result);








}