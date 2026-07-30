import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field notes | Northbound",
  description: "Short entries written up after the walk, while it is still accurate.",
};

const notes = [
  {
    date: "2026-07-30",
    title: "Wasdale Head reroutes around the Black Sail slip",
    body: "A scree slip took out about sixty metres of the direct line below the col. The detour adds fifteen minutes and one easy stream crossing; distance and ascent on the card now include it. Old line is still walkable but loose underfoot, not recommended after rain.",
  },
  {
    date: "2026-07-12",
    title: "The Carrock cairn has moved again",
    body: "Third time in two years. It now sits about forty metres north of where the card says, which matters in cloud. Card updated, old position left in the text so nobody thinks they are lost.",
  },
  {
    date: "2026-06-28",
    title: "Black Sail beck is crossable again",
    body: "The spring melt had it impassable through May. Back to a straightforward step across on the usual line. Boots stayed dry, which is the whole test.",
  },
  {
    date: "2026-06-03",
    title: "On downgrading Loweswater",
    body: "We had this as Hard for a year on the strength of one bad day in wind. Walked it twice more in ordinary weather and it is plainly Moderate. Grades should describe the route, not the day we happened to pick.",
  },
  {
    date: "2026-05-19",
    title: "Barometer against phone GPS",
    body: "Ran both up Hall's Fell for comparison. The barometer came in 30 m under the GPS figure and was almost certainly the honest one. All ascent numbers on the cards come from the barometer.",
  },
];

export default function FieldNotes() {
  return (
    <main>
      <div className="hero">
        <span className="eyebrow">Field notes</span>
        <h1>Written up the same week.</h1>
        <p className="lede">
          Short entries, posted while the detail is still accurate. When a note
          contradicts a route card, the note is newer and the card is wrong.
        </p>
      </div>

      <section>
        {notes.map((note) => (
          <article className="note" key={note.date}>
            <span className="note-date">{note.date}</span>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
