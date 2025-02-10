import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import logo from "../assets/Logotipo.svg";

export default function Header() {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Project Cont" style={styles.logo} />
      <nav style={styles.nav}>
        <Link to="#">
          <Button variant="ghost">Declaraciones</Button>
        </Link>
        <Link to="#">
          <Button variant="ghost">Utilidades</Button>
        </Link>
      </nav>
    </header>
  );
}

const styles: Styles = {
  logo: {
    height: "1rem",
    pointerEvents: "none",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3.5rem",
    paddingInline: "2rem",
    borderBottom: "1px solid var(--accent-6)",
    backgroundColor: "var(--accent-2)",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
};
