import React from 'react'
import axios from 'axios'
import Pr1 from './../images/product-1.jpg'
import Footer from './Footer'
import { useEffect,useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
function Pricelist() {
//get details
const[productlist,setproductlist]=useState([])
let customerItems = productlist.filter((list)=>list.cost>0)
const fetchproductlist = async()=>{
  const res = await axios.get('http://localhost:7000/get/all/crackers',);
  if(res.data.status===1){
    setproductlist(res.data.response)
  }


};
useEffect(()=>{
  fetchproductlist();
},[]);
  //object for saving the  customer data
  const [customer,setcustomer]= useState ({
    name:'',
    mobilenumber:'',
    email:'',
    address:'',
    district:'',
    city:'',
    pincode:'',
    state:'',
    crackerItems:[]
  });
  //handlechange declaration
  const handleChange=(e) =>{
    setcustomer((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const toastoption = {
    duration: 5000,
    position: 'bottom-right',
    style: {
      color: '#fff',
      background: '#000',
    },
  };
  

  const handleSubmit = async () => {
    customer.crackerItems=customerItems
    if (customer.name === '') {
      toast.error('Enter your Name', toastoption);
      return;
    } else if (customer.name.length < 3) {
      toast.error('Enter Atleast 4 Characters', toastoption);
      return;
    }
    if (customer.mobilenumber === '') {
      toast.error('Enter your Mobile Number', toastoption);
      return;
    }else if (customer.mobilenumber.length < 10) {
      toast.error('Enter Valid Mobile Number', toastoption);
      return;
    }
    if (customer.address === '') {
      toast.error('Enter your Address', toastoption);
      return;
    }
    if (customer.district === '') {
      toast.error('Enter your District', toastoption);
      return;
    }
    if (customer.city === '') {
      toast.error('Enter your City', toastoption);
      return;
    }
    if (customer.pincode === '') {
      toast.error('Enter your Pincode', toastoption);
      return;
    }
    if (customer.state === '') {
      toast.error('Enter your State', toastoption);
      return;
    }
    
    console.log(customer)
    const res = await axios.post('http://localhost:7000/create/new/customer',customer);
    if(res.data.status===1){
      toast.success("Order placed successfully!")
      fetchproductlist()
      setcustomer({...customer,
        name:'',
        mobilenumber:'',
        email:'',
        address:'',
        district:'',
        city:'',
        pincode:'',
        state:'',
        carkerItems:[]
      })
    }
    
  }

  const handlePriceChange=(e,index)=>{
    let price =productlist[index].price
    let cost = price*(e.target.value)
    let itemQuantity = e.target.value
    productlist[index].cost = cost
    productlist[index].itemQuantity = itemQuantity
    setproductlist([...productlist])
  }




  let totalAmount = customerItems.reduce((prev,curr)=>prev+curr.cost,0)

  return (
    <>
      <div className='container-fluid bg-warning p-0'>
        <div className='m-auto w-50 p-3'>
          <div className='row tot'>
            <div className='col-4 '>
              Total item :{customerItems.length}
            </div>
            <div className='col-4'>
              Discount total :
            </div>
            <div className='col-4'>
              total amount :{totalAmount}
            </div>
          </div>
        </div>
        <div className='row des text-white border border-3 border-dark'>
          <div className='col-1 p-2 text-center  border-3 border-end border-dark'>
            Image
          </div>
          <div className='col-1 p-2 text-center border-3 border-end border-dark'>
            Code
          </div>
          <div className='col-4 p-2 text-center border-3 border-end border-dark'>
            Product Name
          </div>
          <div className='col-1 p-2 text-center border-3 border-end border-dark'>
            Content
          </div>
          <div className='col-2 p-2 text-center border-3 border-end border-dark'>
            Actual Price
          </div>
          <div className='col-1 p-2 text-center border-3 border-end border-dark'>
            Amount
          </div>
          <div className='col-1 p-2 text-center border-3 border-end border-dark'>
            Quantity
          </div>
          <div className='col-1 p-2 text-center'>
            Total
          </div>
        </div>
        <div className='one text-center py-2'>
          ONE SOUND CRACKERS
        </div>
        {
          productlist.map((item,i)=>{
            return <div className='row details text-dark  border border-3 border-bottom-0 border-dark'>
            <div className='col-1 p-2 text-center  border-3 border-end border-dark'>
              <img className='product-1' src={`http://localhost:7000/${item.image}`} />
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center border-3 border-end border-dark'>
              {item.pr_no}
            </div>
            <div className='col-4 d-flex align-items-center justify-content-center border-3 border-end border-dark'>
              {item.name}
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center  border-3 border-end border-dark'>
              1PKT
            </div>
            <div className='col-2 strike d-flex align-items-center justify-content-center  border-3 border-end border-dark'>
              {item.price}
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center border-3 border-end border-dark'>
             {item.amount}
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center border-3 border-end border-dark'>
              <input className='form-control quantity' type='number' placeholder='QTY' min={"0"} max={"100"} onChange={(e)=>handlePriceChange(e,i)}></input>
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center'>
              <input className='form-control total' type='number' value={item?.cost}></input>
            </div>
          </div>
          })
        }
        
        
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 mt-5 bg-white'>
            <div className='row'>
              <div className='col-12 mt-4'>
                <input type='text' id='name' class="form-control" value={customer.name} placeholder='Name *' onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='col-6 mt-4'>
                <input type='number' id='mobilenumber' class="form-control" value={customer.mobilenumber} placeholder='Mobile Number *' onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='col-6 mt-4'>
                <input type='email' id='email' class="form-control" value={customer.email} placeholder='Email' onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='col-12 mt-4'>
                <textarea class="form-control" id='address' rows={5} cols={85} value={customer.address} placeholder='Address *'onChange={(e)=>handleChange(e)}></textarea>
              </div>
               <div className='col-6 mt-4'>
                <input type='text' id='district' class="form-control" value={customer.district}  placeholder='District' onChange={(e)=>handleChange(e)} />
              </div>
              <div className='col-6 mt-4'>
                <input type='text' id='city' class="form-control" value={customer.city} placeholder='City' onChange={(e)=>handleChange(e)}/>
              </div>
               <div className='col-6 mt-4'>
                <input type='number' id='pincode' class="form-control" value={customer.pincode} placeholder='Pincode' onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='col-6 mt-4'>
                <input type='text' id='state' class="form-control"  value={customer.state} placeholder='State' onChange={(e)=>handleChange(e)}/>
              </div>
            </div> 
          </div>
          <div className='col-6 bg-white mt-5'>
            <div className='row'>
              <div className='col-6 text-end'>
                <div className='mt-3'>Net Total:</div>
                <div className='mt-3'>Discount Total:</div>
                <div className='mt-3'>Sub Total: </div>
                <div className='mt-3'><b className='text-danger'>Min.Order Amount:</b></div>
                <div className='mt-3'>Packing Charges:  </div>
                <div className='mt-3'>Round OFF:</div>
                <div className='mt-3'>Overall Total:</div>
              </div>
              <div className='col-6 text-end'>
                <div className='mt-3'>.</div>
                <div className='mt-3'>.</div>
                <div className='mt-3'>Rs. {totalAmount}</div>
                <div className='mt-3'>.</div>
                <div className='mt-3'>-</div>
                <div className='mt-3'>.</div>
                <div className='mt-3'>Rs .{totalAmount}</div>
                <button className='btn btn-success mt-5' onClick={handleSubmit}>Submit</button>
               
              </div>
            </div>

          </div>
        </div>
      </div>
      <Toaster/>
      <Footer/>
    </>
  )
}

export default Pricelist
