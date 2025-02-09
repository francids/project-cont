import { Container, Flex } from "@radix-ui/themes";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" height="100vh" width="100vw" style={styles.layout}>
      <Header></Header>
      <Flex style={{ backgroundColor: "var(--accent-2)", flex: 1 }}>
        <Container style={{}}>{children}</Container>
      </Flex>
    </Flex>
  );
}

const styles: Styles = {
  layout: {
    userSelect: "none",
  },
};
