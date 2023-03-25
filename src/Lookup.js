import React,{useState} from 'react';

function Lookup(){
    const[pin,setPin]=useState('');
    const[pinError,setPinError]=useState(false);


    function pinHandler(e){
        
        let item=e.target.value;
        if(item.length<6 || item.length>6){
            setPinError(true);
        }
        else{
            setPinError(false);
        }
        setPin(item);
    }
    // function loginHandler(e){
    //     e.preventDefault();
    //     let item=e.target.value
    //     if(item.length<6 && item.length>6){
    //         alert("Pincode must be 6 Digits");
    //     }
    //     else{
    //         alert("Great!!");
    //     }
    // }

    
    console.log({pin});
    return(
        <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'flex-start', padding:'20px'}}>
            <h1 style={{textAlign:'left'}}>Enter Pincode</h1>
            <input type="number" onChange={pinHandler} className="pincode" style={{border:'2px solid', width:'95%', padding:'5px', margin:'20px 0', fontSize:'30px', borderRadius:'5px'}} />
            {pinError?<span style={{color:'red',fontSize:'26px',}}>Not Valid Pincode</span>:""} 
            <br></br><button className="lookup"  style={{backgroundColor:'black', color:'white',fontSize:'30px',padding:'5px',width:'300px',borderRadius:'5px',cursor:'pointer'}}>Lookup</button>
        </div>
    );
}
export default Lookup;