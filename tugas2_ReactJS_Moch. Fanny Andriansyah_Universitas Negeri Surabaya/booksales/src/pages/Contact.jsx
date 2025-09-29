function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        {/* Form */}
        <div className="col-md-6 mb-4">
          <form className="card shadow p-4 border-0">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card shadow p-4 border-0 h-100">
            <h5 className="mb-3">📍 Address</h5>
            <p>Jl. Kampus Surabaya No. 1</p>
            <h5 className="mb-3">📧 Email</h5>
            <p>info@bookstore.com</p>
            <h5 className="mb-3">📞 Phone</h5>
            <p>+62 812 3456 7890</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d112.7300!3d-7.2500"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
