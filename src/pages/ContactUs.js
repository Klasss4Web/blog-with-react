import myImage from '../assets/qlow-220px-Gordon_Brown_official.jpg';
const ContactPage = () => (
  <>
    <div className="flex-container">
      <div className="flex-child display-image">
        <h1>Contact Us</h1>
        <img src={myImage} alt="sample"/>
      </div>
      <div className="flex-child form-section">
      <p className="contact-us">Please fill the Form Below, and we will get back to you as soon as possible</p>
      <form>
        <label>Name: </label><br />
        <input type="text" placeholder="Enter your full name" /><br />       
        <label>Email: </label><br />
        <input type="text" placeholder="name@email.com" /><br />      
        <textarea rows="10" cols="30" placeholder="Type your comments here" /><br />
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </div>
      </div>
  </>
);

export default ContactPage;