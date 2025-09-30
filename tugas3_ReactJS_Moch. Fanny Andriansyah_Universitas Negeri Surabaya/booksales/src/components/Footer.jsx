function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; 2025 Bookstore. All Rights Reserved.</p>
        <small>
          <a href="/" className="text-decoration-none text-info me-3">Home</a>
          <a href="/team" className="text-decoration-none text-info me-3">Team</a>
          <a href="/contact" className="text-decoration-none text-info">Contact</a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
