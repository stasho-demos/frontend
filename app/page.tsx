const routes = [
  {
    name: "Carrock Ridge",
    distance: "18.4 km",
    ascent: "940 m",
    grade: "Hard",
  },
  {
    name: "Ullswater Shore Path",
    distance: "11.2 km",
    ascent: "210 m",
    grade: "Easy",
  },
  {
    name: "Blencathra via Hall's Fell",
    distance: "9.6 km",
    ascent: "780 m",
    grade: "Hard",
  },
  {
    name: "Loweswater Round",
    distance: "13.0 km",
    ascent: "425 m",
    grade: "Moderate",
  },
  {
    name: "Wasdale Head to Black Sail",
    distance: "7.8 km",
    ascent: "395 m",
    grade: "Moderate",
  },
];

export default function Home() {
  return (
    <main>
      <div className="hero">
        <span className="eyebrow">Northern fells</span>
        <h1>Route cards for the long ridges.</h1>
        <p className="lede">
          We walk these paths and write down what we find. Distances measured on
          foot, ascent from the barometer, grades argued about afterwards in the
          car park.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#routes">
            Browse routes
          </a>
          <a className="btn" href="/field-notes/">
            Read field notes
          </a>
        </div>
      </div>

      <section id="routes">
        <h2>Routes</h2>
        <p className="section-note">
          Five cards to start with. Each one has been walked at least twice.
        </p>
        <div className="route-list">
          {routes.map((route) => (
            <div className="route" key={route.name}>
              <span className="route-name">{route.name}</span>
              <span className="route-meta">
                {route.distance} &middot; {route.ascent} &middot; {route.grade}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>How the cards work</h2>
        <p className="section-note">
          Nothing clever. Three numbers and an honest opinion.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Measured, not estimated</h3>
            <p>
              Distance comes off the track log, not the map. The two disagree
              more than you would think, especially on switchbacks.
            </p>
          </div>
          <div className="card">
            <h3>Grades are subjective</h3>
            <p>
              Hard means hands out of pockets. Moderate means you will notice
              the ascent. Easy means you can hold a conversation.
            </p>
          </div>
          <div className="card">
            <h3>Updated after weather</h3>
            <p>
              River crossings and scree change. When a route stops matching its
              card, the card gets rewritten rather than deleted.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
