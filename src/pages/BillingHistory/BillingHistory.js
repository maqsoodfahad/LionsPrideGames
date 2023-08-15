import React from 'react' 
import HeaderLobby from '../../components/Layout/Header/HeaderLobby';
import Footer from '../../components/Layout/Footer/Footer';
import billingsearch from './../../assets/HomeAssets/assets/images/billing-search.png' 
import Invoice from './../../assets/HomeAssets/assets/images/Invoice.png' 
import { Link } from 'react-router-dom';


function BillingHistory() {
  
  return (
    <>
          <section className="banner-wrap Billing_History_wrap">
            <div className="theme-container z-9">
             <HeaderLobby /> 
             <div className='theme-container table-billing-wrap mt-60'>
             <h1 className='blu f48'>Billing History</h1>
             <p className='f16 text_lt '>Billing history will only be available for 14 days</p> 
              <div className='table_width'>
              <div className='custom_table    table-wrapper'>
                <table class="table giro-table table-bordered">
                  <thead>   
                    <tr>
                      <th className='br-r-8 w-153'>
                        <Link className='Invoice_link'><img src={Invoice} alt='Invoice'/>
                        Invoice</Link>
                      </th>
                      <th className='w-19 '>Payment date</th>
                      <th className='w-18 pl-0 '>Duration</th>
                      <th className='pl-0'>Amount</th>
                      <th className='pl-custom'> Payment method</th>
                      <th className='bl-r-8 text-end'>
                      <div className="search_wrap billing_search">
                      <div className="form-group icon_wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="icon">
                          <img src={billingsearch} alt="search" className="search" />
                        </div>
                      </div>
                    </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='scroll_bar  '>
                    <tr >
                      <td className='br-r-8 w-153'   >
                      <div className='redio_wrap'>
                        <input type="checkbox" id="one" name="gender" />
                        <label for="one">#49583</label>
                      </div>
                      </td>
                      <td className="w-19" >May 18, 2023, 5:45 PM</td>
                      <td className='w-18' >3h 15m</td>
                      <td className=''  >$240</td>
                      <td className='pl-0'  >Paypal</td> 
                      <td className='bl-r-8' ></td> 
                    </tr>
                    <tr>
                      <td className='br-r-8 w-153'>
                      <div className='redio_wrap'>
                        <input type="checkbox" id="two" name="gender" />
                        <label for="two">#49583</label>
                      </div>
                      </td>
                      <td className="w-19">May 18, 2023, 5:45 PM</td>
                      <td className='w-18 '>3h 15m</td>
                      <td className=''>$240</td>
                      <td className='pl-0'>Visa ending in **1862</td> 
                      <td className='bl-r-8'></td> 
                    </tr> 
                    <tr>
                      <td className='br-r-8 w-153'>
                      <div className='redio_wrap'>
                        <input type="checkbox" id="two" name="gender" />
                        <label for="two">#49583</label>
                      </div>
                      </td>
                      <td className="w-19 ">May 18, 2023, 5:45 PM</td>
                      <td className='w-18'>3h 15m</td>
                      <td className=''>$240</td>
                      <td className='pl-0'>Visa ending in **1862</td> 
                      <td className='bl-r-8'></td> 
                    </tr> 
                    <tr>
                      <td className='br-r-8 w-153'>
                      <div className='redio_wrap'>
                        <input type="checkbox" id="two" name="gender" />
                        <label for="two">#49583</label>
                      </div>
                      </td>
                      <td className="w-19 ">May 18, 2023, 5:45 PM</td>
                      <td className='w-18'>3h 15m</td>
                      <td className=''>$240</td>
                      <td className='pl-0'>Visa ending in **1862</td> 
                      <td className='bl-r-8'></td> 
                    </tr> 
                    <tr>
                      <td className='br-r-8 w-153' >
                      <div className='redio_wrap'>
                        <input type="checkbox" id="two" name="gender" />
                        <label for="two">#49583</label>
                      </div>
                      </td>
                      <td className="w-19 ">May 18, 2023, 5:45 PM</td>
                      <td className='w-18 '>3h 15m</td>
                      <td className=''>$240</td>
                      <td className='pl-0'>Visa ending in **1862</td> 
                      <td className='bl-r-8'></td> 
                    </tr> 
                    <tr>
                      <td className='br-r-8 w-153'>
                      <div className='redio_wrap'>
                        <input type="checkbox" id="two" name="gender" />
                        <label for="two">#49583</label>
                      </div>
                      </td>
                      <td className="w-19">May 18, 2023, 5:45 PM</td>
                      <td className='w-18  '>3h 15m</td>
                      <td className=''>$240</td>
                      <td className='pl-0'>Visa ending in **1862</td> 
                      <td className='bl-r-8'></td> 
                    </tr> 
                    
                  </tbody>
                </table>
                <button className='load_more'>Load more invoices</button>
              </div>
              </div>
             
              </div>

            </div>
      </section>

      <Footer />
    </>
  )
}

export default BillingHistory