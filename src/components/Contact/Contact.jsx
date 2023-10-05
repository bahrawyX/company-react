import React, { useState } from 'react';

function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Your form submission logic here
    window.alert(`My name is ${data.name}. My email is ${data.email}. My phone number is ${data.phone}. My message is ${data.message}.`);
  };

  return (
    <div className="my-5">
      <section id="header" className="container">
        <h1 className="text-center ContactText">Contact Us</h1>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}> {/* Use onSubmit for the form */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> Full Name</label>
                <input name='name' value={data.name} onChange={InputEvent} type="text" className="form-control" placeholder='Enter Your Name' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> Email</label>
                <input name='email' value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                <div id="emailHelp" className="form-text mb-4">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input name='phone' value={data.phone} onChange={InputEvent} type="password" className="form-control" id="exampleInputPassword1" placeholder='Phone Number' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                <textarea name='message' value={data.message} onChange={InputEvent} type="password" rows={5} className="form-control" id="exampleInputPassword1" placeholder='Write your message' />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button> {/* Button for form submission */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
