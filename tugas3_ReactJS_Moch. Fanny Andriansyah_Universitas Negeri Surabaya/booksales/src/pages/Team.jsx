function Team() {
  const members = [
    { name: "Alice", role: "Founder", img: "https://picsum.photos/200/200?1", linkedin: "#", twitter: "#" },
    { name: "Bob", role: "Designer", img: "https://picsum.photos/200/200?2", linkedin: "#", twitter: "#" },
    { name: "Charlie", role: "Developer", img: "https://picsum.photos/200/200?3", linkedin: "#", twitter: "#" },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Amazing Team</h1>
      <div className="row g-4">
        {members.map((m, i) => (
          <div className="col-md-4" key={i}>
            <div className="card text-center shadow border-0 p-3 h-100">
              <img
                src={m.img}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt={m.name}
              />
              <h5 className="fw-bold">{m.name}</h5>
              <p className="text-muted">{m.role}</p>
              <div>
                <a href={m.linkedin} className="btn btn-sm btn-outline-primary me-2">LinkedIn</a>
                <a href={m.twitter} className="btn btn-sm btn-outline-info">Twitter</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
