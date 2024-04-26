import "../App.css";

function AboutPage() {
  return (
    <div className="full-page-container">
      <div className="cocktail-page">
        <div className="left-section">
          <p className="text-about-page">
            {/* We are a group of friends that opened a bar, when we realized, that
            an app where Bartenders get to add their recipes and discover new
            ones from other Bartenders was long overdue. */}
            We love drinking so we started an app that helps bartenders get
            organized and perfect their kraft.
          </p>
        </div>
        <div className="right-section">
          <img className="image-half" src="../../public/drink2.png" />
        </div>
      </div>
      <div className="strip-container">
        <p>WE LOVE DRINKING</p>
      </div>
      <div className="down-container">
        <div className="line-top-container"></div>
        <div className="line-down-container"></div>
      </div>
    </div>
  );
}
export default AboutPage;
