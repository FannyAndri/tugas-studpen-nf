import { useState } from "react";

function Books() {
  const allBooks = [
    { title: "Book A", category: "Fiction", img: "https://picsum.photos/300/200?1" },
    { title: "Book B", category: "Non-Fiction", img: "https://picsum.photos/300/200?2" },
    { title: "Book C", category: "Fiction", img: "https://picsum.photos/300/200?3" },
  ];
  const [filter, setFilter] = useState("All");

  const filteredBooks = filter === "All" ? allBooks : allBooks.filter(b => b.category === filter);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Books</h1>
      <div className="d-flex justify-content-center mb-4">
        {["All", "Fiction", "Non-Fiction"].map(cat => (
          <button
            key={cat}
            className={`btn me-2 ${filter === cat ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredBooks.map((b, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow border-0 h-100">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <p className="text-muted">{b.category}</p>
                <button className="btn btn-sm btn-primary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
