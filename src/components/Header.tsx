import { Button } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logotipo.svg";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <NavLink to="/">
          <img src={logo} alt="Project Cont" style={styles.logo} />
        </NavLink>
        <nav style={styles.nav}>
          <NavLink to="statements">
            <Button variant="ghost">Declaraciones</Button>
          </NavLink>
          <NavLink to="utilities">
            <Button variant="ghost">Utilidades</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

const styles: Styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "var(--accent-2)",
    borderBottom: "1px solid var(--accent-6)",
    height: "3.5rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    paddingInline: "var(--space-6)",
  },
  logo: {
    height: "1rem",
    pointerEvents: "none",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    gap: "var(--space-5)",
  },
};
