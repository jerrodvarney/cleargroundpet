import './footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      {/* <div className="footer__links">
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/business">Business Info</NavLink>
        <NavLink to="/legal">Legal</NavLink>
      </div> */}

      <div className="footer__copyright">
        {`© ${year} ClearGround • All rights reserved`}
      </div>
    </footer>
  );
}
