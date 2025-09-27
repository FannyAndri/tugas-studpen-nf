function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Merubah Hidup dengan Membaca</h1>
            <p className="lead">Membaca adalah jendela dunia yang membuka wawasan tanpa batas.</p>
            <button className="btn btn-primary btn-lg me-2">Beli Sekarang</button>
            <button className="btn btn-outline-secondary btn-lg">Detail</button>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://picsum.photos/600/400"
              alt="Books"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Best Seller */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Best Seller</h2>
          <div className="row">
            {[1, 2, 3].map((i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card shadow border-0 h-100">
                  <img
                    src={`https://picsum.photos/400/300?random=${i}`}
                    className="card-img-top"
                    alt="Book"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Book Title {i}</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="btn btn-sm btn-primary">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
