import React,{useState,useEffect} from 'react';
import logo from '../content/ibbs-logo.png'
import axios from 'axios'






function Main() {

    // States
    const [total,setTotal] = useState(0)

    // Getting Date & Time For Entry

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var dateString = dateTime.toString()
    
    // Initial State

    const initialState = {
        timestamp:dateString,
        OT_name:'',
        customer_tel:'',
        customer_name:'',
        shop_name:'',
        shop_address:'',
        corrected:'',
        location:'',
        business_type:'',
        quantity:'',
        rate:'',
        total:total ,
        delivered:'',
        received:'',
        cash:'',
        offer_package:'',
        credit:''
    }

    const [data,setData] = useState(initialState)
    

    useEffect(() => {
      setTotal(data.quantity * data.rate)
    }, [total,data.rate,data.quantity]);
    

    const onChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value})
    }

    function onSubmitHandler(e){
        e.preventDefault();
        axios.post('https://sheet.best/api/sheets/017075ab-b0de-4854-8148-6c985f892928', data)
        .then(response => {
            console.log(response)
        })
        .then(
            setData({...initialState}),
            console.log(data)
        )
       
    }

    



  return <div className='form-container'>

      <img src={logo} />

      <hr/>

      <form>

        <select name='OT_name' onChange={onChange} value={data.OT_name} defaultValue={{label:"Asif",value:"Asif"}} >
            <option value="" disabled selected hidden>OT Name...</option>
            <option value="Asif">Asif</option>
            <option value="Adnan Shah">Adnan Shah</option>
            <option value="Basit Ali Shah">Basit Ali Shah</option>
            <option value="M Idrees">M Idrees</option>
            <option value="Malik Usman">Malik Usman</option>
            <option value="Rashid Kiyani">Rashid Kiyani</option>
            <option value="Rashid Sheikh">Rashid Sheikh</option>
            <option value="Other 1">Other 1</option>
            <option value="Other 2">Other 2</option>
        </select>

        

        <div className='group'>
            <input type='number' placeholder='Customer Tel' name='customer_tel' onChange={onChange} value={data.customer_tel}/>
            <input type='text' placeholder='Customer Name' name='customer_name' onChange={onChange} value={data.customer_name}/>
        </div>

        <div className='group'>
            <input type='text' placeholder='Shop Name' name='shop_name' onChange={onChange} value={data.shop_name}/>
            <input type='text' placeholder='Shop Address' name='shop_address' onChange={onChange} value={data.shop_address}/>
        </div>

        <select name='corrected' onChange={onChange} value={data.corrected} defaultValue={{label:"Yes",value:"Yes"}}>
            <option value="" disabled selected hidden>Corrected...</option>
            <option value="Yes">Yes</option>
            <option value="No" selected>No</option>
        </select>

        <div className='group'>
        <select name='location' onChange={onChange} value={data.location} defaultValue={{label:"ISB",value:"ISB"}}>
            <option value="" disabled selected hidden>Location...</option>
            <option value="ISB" selected>ISB</option>
            <option value="RWP">RWP</option>
        </select>

        <select name='business_type' onChange={onChange} value={data.business_type} defaultValue={{label:"GS",value:"GS"}}>
            <option value="" disabled selected hidden>Business Type</option>
            <option value="GS" selected>GS</option>
            <option value="SS">SS</option>
            <option value="C&amp;C">C&amp;C</option>
            <option value="Bakers">Bakers</option>
            <option value="Chemist">Chemist</option>
            <option value="Restaurants">Restaurants</option>
        </select>
        </div>

        <hr />

        <div className='group'>
            <input type='number' placeholder='19L Qty' name='quantity' onChange={(e)=> {
                onChange(e)
                setTotal(() => data.rate * data.quantity)}
                } value={data.quantity}/>
            <input type='number' placeholder='19L Rate' name='rate' onChange={(e)=> {
                onChange(e)
                setTotal(() => data.rate * data.quantity)}
                }  value={data.rate}/>
            <input type='number' placeholder='Total' name='total' onChange={(e) => {
                onChange(e)
                setTotal(total)}} value={data.rate * data.quantity}  />
        </div>

        <div className='group'>
            <input type='number' placeholder='Bottles Delivered' name='delivered' onChange={onChange} value={data.delivered}/>
            <input type='number' placeholder='Bottles Received'  name='received' onChange={onChange} value={data.received}/>
        </div>

        
        <input type='number' placeholder='Cash' name='cash' onChange={onChange} value={data.cash}/>
        <input type='text' placeholder='Offer / Package' name='offer_package' onChange={onChange} value={data.offer_package}/>
        <input type='number' placeholder='Credit' name='credit' onChange={onChange} value={data.credit}/>
        
        <button type='submit' onClick={(e) =>onSubmitHandler(e)}>Submit</button>

      </form>
  </div>;
}

export default Main;
