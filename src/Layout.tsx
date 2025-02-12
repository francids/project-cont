import { Container, Flex, ScrollArea } from "@radix-ui/themes";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" style={styles.layout}>
      <Header></Header>
      <ScrollArea style={styles.main}>
        <Container size="4">{children}</Container>
      </ScrollArea>
    </Flex>
  );
}

const styles: Styles = {
  layout: {
    userSelect: "none",
    overflow: "hidden",
    height: "100vh",
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
  },
  main: {
    flex: 1,
    width: "100%",
    height: "calc(100% - 3.5rem)",
    backgroundColor: "var(--accent-2)",
    paddingTop: "var(--space-4)",
    paddingInline: "var(--space-6)",
    marginTop: "3.5rem",
    overflowX: "hidden",
    boxSizing: "border-box",
  },
};
