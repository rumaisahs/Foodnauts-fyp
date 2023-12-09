import "./bloggerIcon.css";
import influencer from "../../images/influence.jpeg";
import { Link } from "react-router-dom";
import defaultImage from "../../images/defaultimage.png";
const bloggerIcon = (props) => {
  const defaultData = props?.defaultData;

  return (
    <>
      {defaultData.length > 0 ? (
        defaultData?.map((dt) => {
          return (
            <>
              <div
                className="mx-3"
                style={{ position: "relative", display: "inline-block" }}
              >
                <Link to={`/profile/${dt?._id}`}>
                  <img
                    className="rounded-circle text-center"
                    src={dt?.profile_image ? dt?.profile_image : defaultImage}
                    height={180}
                    width={180}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                      width: "100%",
                    }}
                  >
                    <div
                      className="w-100 rounded-4 text-center mx-auto p-2 influencer-bg-color"
                      style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                    >
                      <p className="fw-bold">{dt?.name}</p>
                      <p style={{ lineHeight: "1px" }}>@{dt?.username}</p>
                      <i
                        style={{
                          position: "absolute",
                          top: "0%",
                          left: "95%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 1,
                          width: "100%",
                        }}
                        className="bi bi-patch-check-fill fs-1 text-primary"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })
      ) : (
        <>{"No Data Found"}</>
      )}
    </>
  );
};

export default bloggerIcon;
