export const Contact = () => {
  return (
    <>
      <h1>Get in touch!</h1>
      <div className="grid">
        <div className="col-6">
        <p>Thank you for your interest! Whether you have a project in mind, a question, or just want to say hello, I'd love to hear from you. Please feel free to use the contact form below to get in touch.</p>



<p>If you prefer, you can also connect with me on LinkedIn:</p>
<a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>

        </div>
        <form id="contact-form" className="col-6" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="" />
          </div>
          <div className="">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="" aria-describedby="emailHelp" />
          </div>
          <div className="">
            <label htmlFor="message">Message</label>
            <textarea className=""></textarea>
          </div>
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
