import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <main className="connect">
        <h1 className="connectHeading">Connect with me!</h1>
        <div className="icons">
          <FontAwesomeIcon icon={faGithub} className="icon cursor-pointer"><a href="https://github.com/Yemima20/"></a></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin} className="icon cursor-pointer"><a href="https://www.linkedin.com/in/gloriazayemimalo/"></a></FontAwesomeIcon>
        </div>
      </main>
    </>
  );
}

export default Contact;
