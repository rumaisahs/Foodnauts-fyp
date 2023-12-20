import Footer from '../../components/footer/Footer';
import React, { useEffect, useState } from "react";
import Blog from '../../components/blog/blog';
import BlogModal from '../../components/blog/BlogModal';
import { GetAllBlogs } from '../../services/blog/blog';
import { GetAuthUserLocalStorage } from '../../services/localStorage/localStorage';
import { GetSingleUser, UserFollowers } from '../../services/user/user';

function MyBlogs() {
  const authUser = GetAuthUserLocalStorage()
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const getAllBlogs = async () => {
      const params = {
        user: authUser._id,
        paginate: false,
        sort: 'desc',
        sortBy: 'createdAt',
      }
      const res = await GetAllBlogs(params)
      setBlogData(res?.data?.data)
    }
    getSingleUser()
    getAllBlogs()

  }, [])
    const getSingleUser = async () => {
      const res = await GetSingleUser(authUser._id)
      setUser(res?.data?.data)
    }
  const getAllBlogs = async () => {
    try {
      const res = await GetAllBlogs();
      setBlogData(res?.data?.data);
      console.log(blogData);
    } catch (e) {
      console.log(e.message);
    }
  };
console.log(blogData)

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
                    Image
                  </th>
                  <th className="col-2" scope="col">
                    ID
                  </th>
                  <th className="col-2" scope="col">
                    Title
                  </th>
                  <th className="col-3" scope="col">
                    Description
                  </th>
                  <th className="col-1" scope="col">
                    Likes
                  </th>
                  <th className="col-1" scope="col">
                    Dislikes
                  </th>
                  <th className="col-1" scope="col">
                    Comments
                  </th>
                  <th className="col-1" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
              {blogData?.length > 0 &&
              blogData?.map((dt, index) => {
                return (
                <tr key={index}>
                  {console.log("dt",dt)}
                  <td>
                      <div
                        className="fixed-size-container"
                        style={{ width: "120px", height: "120px" }}
                      >
                        <img
                          src={dt?.images[0]}
                          className="object-fit-cover w-100 h-100"
                          alt="review-img"
                        />
                      </div>
                    </td>
                    <td>{dt?._id}</td>

                    <td className="">{dt?.title}</td>
                  <td  style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{dt?.description}</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>0</td>
                  <td  className='text-center'>2</td>
                  <td>
                    <button className="btn button btn-sm text-light ms-2">
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
                 );
                })}
         
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
    </div>   <Footer /></>
  );
}

export default MyBlogs;
