import React from 'react'
import Footer from '../../components/footer/Footer'
import PostGigModal from '../../components/postgig/PostGigModal'

function MyGigs () {
  return (
    <>
    <div className='container min-vh-100'>

    <div className="main-content ">
      <div className=" ">
        {/*Page Title */}
        <h1 className="fw-bold pt-5 pb-2">My Gigs</h1>
        <hr/>
<PostGigModal/>
     
        {/* Search Section

        <div className="row align-items-center mb-3">
          <div className="col-2 col-xxl-1 me-xxl-4">
            <h6 className="mb-0 text-nowrap">Filter: </h6>
          </div>
          <div className="col-4 col-xxl-3 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select Province--</option>
              <option value="1">Sindh</option>
              <option value="2">Punjab</option>
              <option value="3">Balochistan</option>
              <option value="4">Khyber Pakhtunkhwa</option>
            </select>
          </div>
        </div> */}

        {/*Table Section*/}
  
        <div className="col-12 text-nowrap">
          <table className="table table-hover mt-2 mb-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-5" scope="col">
                 Title
                </th>
                <th className="col-3" scope="col">
                  Description
                </th>
                <th className="col-3" scope="col">
                  Value
                </th>
                <th className="col-3" scope="col">
                  Date
                </th>
                <th className="col-1" scope="col">
                  Status
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Weekly Marketing</td>
                <td>2 social posts, 3 blogs</td>
                <td>Rs. 20000/week</td>
                <td>12/10/2023</td>
                <td>Active</td>

                <td>
                <button className="btn button btn-sm text-light">Edit</button>

                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Social Daily Post</td>
                <td>Insta story for 24 hours</td>
                <td>Rs. 20000/week</td>
                <td>12/10/2023</td>
                <td>Disabled</td>
                <td className="d-flex"> 
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>abcd</td>
                <td>abcdabcdabcd</td>
                <td>3000</td>
                <td>12/12/2023</td>
                <td>Disabled</td>
                <td className="d-flex"> 
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn button px-4">Add</button>
        </div>
      </div>
    </div></div>
    <Footer/> 
    </>
  )
}
export default MyGigs