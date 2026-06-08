import "./header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">

          <div className="branding">
            <h1>Aim Vault</h1>

            <p>
              My systems for aiming, practice principles, and my own findings.
            </p>
          </div>

          <button className="search-button">
            ⌕
          </button>

        </div>
      </div>
    </header>
  );
}