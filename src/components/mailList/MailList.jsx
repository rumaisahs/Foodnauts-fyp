import "./mailList.css"

const MailList = () => {
  return (
    <div className="row justify-content-center d-flex pb-5">
      <div className="col-10 mail bg-light rounded-2">
      <h2 className="mailTitle">Subscribe to our newsletter to recieve updates</h2>
      <div className="mailInputContainer">
        <input type="text" className="py-4" placeholder="Your Email" />
        <button className= "px-4">Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default MailList