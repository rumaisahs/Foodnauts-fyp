import Footer from '../../components/footer/Footer';
import React from 'react';
import Blog from '../../components/blog/blog';
import BlogModal from '../../components/blog/BlogModal';

function MyBlogs() {
  return (<>
    <div className='row justify-content-end min-vh-100 m-5'>

      <div className="col-10">
        <div className="">
          {/*Page Title */}
          <h1 className="fw-bold pb-3">My Blogs</h1>
          <hr />
<BlogModal/>
          {/*Table Section*/}
          <div className=" ms-auto pt-3">
            <table className=" table table-hover mt-2 mb-4 custom-table">
              <thead className="table-dark">
                <tr className='text-center'>
                  <th className="col-1" scope="col">
                    #
                  </th>
                  <th className="col-5" scope="col">
                    Title
                  </th>
                  <th className="col-5" scope="col">
                    Description
                  </th>
                  <th className="col-2" scope="col">
                    Likes
                  </th>
                  <th className="col-2" scope="col">
                    Dislikes
                  </th>
                  <th className="col-3" scope="col">
                    Comments
                  </th>
                  <th className="col-1" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>A PLANT-BASED COMMUNITY FOCUSE...</td>
                  <td>The Food Studio is a community-bas...</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>2</td>
                  <td>
                    <button className="btn button btn-sm text-light ms-2">
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td >2</td>
                  <td>Recipe: Easy Peanut Butter Cups</td>
                  <td>These little cups of delight are so eas...</td>
                  <td className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td className="d-flex">
                    <button className="btn button btn-sm text-light ms-2">
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td >3</td>
                  <td>abc</td>
                  <td>abc</td>
                  <td className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td className="d-flex">
                    <button className="btn button btn-sm text-light ms-2">
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
    </div>   <Footer /></>
  );
}

export default MyBlogs;
