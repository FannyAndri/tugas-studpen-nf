function Team() {
  const members = [
    { name: "Alice", role: "Founder", img: "https://picsum.photos/200/200?1" },
    { name: "Bob", role: "Designer", img: "https://picsum.photos/200/200?2" },
    { name: "Charlie", role: "Developer", img: "https://picsum.photos/200/200?3" },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Meet Our Team</h1>
      <div className="row">
        {members.map((m, i) => (
          <div className="col-md-4 text-center mb-4" key={i}>
            <div className="card shadow border-0 rounded-3 p-3">
              <img
                src={m.img}
                className="card-img-top rounded-circle mx-auto"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt={m.name}
              />
              <div className="card-body">
                <h5 className="card-title">{m.name}</h5>
                <p className="card-text text-muted">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
