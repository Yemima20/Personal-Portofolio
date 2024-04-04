import "../css/About.css";

const About = () => {
  return (
    <>
      <main className="about">
        <div className="texts">
          <div className="headingAbout">
            <h1>GLORIAZA YEMIMA</h1>
            <h1>LAWRANCE ODYARDY</h1>
          </div>
          <p className="text">
            Currently a student majoring in Information Systems at the
            Universitas Terbuka. Started learning about the web on HTML and PHP
            in vocational high school, time flies... currently focusing on
            honing skills in UI/UX design, Javascript, ReactJS, NodeJS, and CSS
            frameworks such as Tailwind CSS and Bootstrap. I will add more!
          </p>
          <p className="text">
            Since I majored in information systems, I opened myself up and tried
            to learn more about back-end and databases like ExpressJS, MySQL,
            MongoDB. Some people say add NextJS, okay you're on my list :D <br/>
            Open to work with you! connect with
            <a
              className="text-[var(--yellow)] cursor-pointer"
              href="https://www.linkedin.com/in/gloriazayemimalo/"
            >
              {" "}
              me
            </a>
          </p>
        </div>
        <div>
          <img
            className="image"
            src="https://imgur.com/tJouO1y.jpeg"
            alt="about-image"
          />
        </div>
      </main>
    </>
  );
};

export default About;
