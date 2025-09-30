import { useState } from "react";
import booksData from "../Utils/books";


function Books() {
  const [books, setBooks] = useState(booksData);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addBook = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      alert("Judul dan Penulis wajib diisi!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      category: form.category || "Umum",
      price: Number(form.price) || 0,
      rating: 0,
      img: "https://picsum.photos/300/200?random=" + Date.now(),
      description: "Buku baru ditambahkan."
    };

    setBooks([newBook, ...books]); // prepend ke daftar
    setForm({ title: "", author: "", category: "", price: "" }); // reset form
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Daftar Buku</h1>

      {/* Form Tambah Buku */}
      <form onSubmit={addBook} className="row g-2 mb-4">
        <div className="col-md-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Judul"
          />
        </div>
        <div className="col-md-3">
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className="form-control"
            placeholder="Penulis"
          />
        </div>
        <div className="col-md-3">
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="form-control"
            placeholder="Kategori"
          />
        </div>
        <div className="col-md-2">
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Harga"
          />
        </div>
        <div className="col-md-1 d-grid">
          <button className="btn btn-primary" type="submit">
            Tambah
          </button>
        </div>
      </form>

      {/* Daftar Buku */}
      <div className="row">
        {books.map((b) => (
          <div className="col-md-4 mb-4" key={b.id}>
            <div className="card shadow border-0 h-100">
              <img
                src={b.img}
                alt={b.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{b.title}</h5>
                <p className="text-muted mb-1">
                  {b.author} • {b.category}
                </p>
                <p className="mb-2" style={{ flexGrow: 1 }}>
                  {b.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>Rp {b.price.toLocaleString()}</strong>
                  <button className="btn btn-sm btn-success">Beli</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
