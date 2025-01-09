import "./Footer.scss";
import Link, { LINK_TYPES } from "../Link/Link";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer__title">ohmyfood</p>
      </div>
      <div className="footer__links-container">
        <ul className="footer__ul">
          <li>
            <Link
              type={LINK_TYPES.ICON}
              icon={"fa-solid fa-utensils"}
              href={"#"}
              content={"Proposer un restaurant"}
            />
          </li>
          <li>
            <Link
              type={LINK_TYPES.ICON}
              icon={"fa-solid fa-handshake-angle"}
              href={"#"}
              content={"Devenir partenaire"}
            />
          </li>
        </ul>
        <ul className="footer__ul">
          <li>
            <Link
              type={LINK_TYPES.NOICON}
              href={"#"}
              content={"Mentions légales"}
            />
          </li>
          <li>
            <Link type={LINK_TYPES.NOICON} href={"#"} content={"Contact"} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
