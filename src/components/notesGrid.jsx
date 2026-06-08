import "./notes-grid.css";

const notes = [
  {
    title: "Thinking In Regads To Human Input And Errors",
    description:
      "Why arbitrary goals in context to theoretical optimal performance is fundamentally flawed."
  },
  {
    title: "Approaching Practice With Intent",
    description:
      "How to structure practice sessions to maximize learning and improvement through short term goals and long term vision."
  },
  {
    title: "Why Meta Cognition Is The Most Important Skill To Develop",
    description:
      "The symbiotic relationship between cognition, visual processing and motor function."
  }
];

export default function NotesGrid() {
  return (
    <section className="notes-grid">
      <div className="container">

        {notes.map((note) => (
          <article key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </article>
        ))}

      </div>
    </section>
  );
}