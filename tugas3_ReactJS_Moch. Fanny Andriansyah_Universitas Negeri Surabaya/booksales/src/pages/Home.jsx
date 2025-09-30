import { Link } from "react-router-dom";
import booksData from "../Utils/books";

function Home() {
  const topBooks = [...booksData].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Merubah Hidup dengan Membaca</h1>
            <p className="lead">
              Membaca adalah jendela dunia yang membuka wawasan tanpa batas.
            </p>
            <Link to="/books" className="btn btn-primary btn-lg me-2">
              Beli Sekarang
            </Link>
            <Link to="/books" className="btn btn-outline-secondary btn-lg">
              Detail
            </Link>
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
            {topBooks.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <div className="card shadow border-0 h-100">
                  <img
                    src={book.img}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">
                      {book.author} • Rp {book.price.toLocaleString()}
                    </p>
                    <Link to="/books" className="btn btn-sm btn-primary">
                      View
                    </Link>
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
