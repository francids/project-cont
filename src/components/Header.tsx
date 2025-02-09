import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <span>Cont</span>
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
