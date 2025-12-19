import Menu from "./Menu";

export default function Footer() {
  return(
    <footer>
      <ul className="social">
        <li>
          <a id="mailto" href="mailto:monsieurchauvel22@gmail.com">E-mail</a>
          </li>
        <li>
          <a id="github" href="https://github.com/SebastienCHAUVEL">Github</a>
        </li>
        <li>
          <a id="linkedin" href="https://www.linkedin.com/in/s%C3%A9bastien-chauvel/">Linkedin</a>
        </li>
      </ul>
      <Menu 
        className="footer__menu"
        onMenuOpen={()=>{}}
      />
      <p className="copyright">
        © Sébastien Chauvel - {new Date().getFullYear()}
      </p>
    </footer>
  )
}