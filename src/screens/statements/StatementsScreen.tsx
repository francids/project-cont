import { Flex, Heading, Select, Separator, Link } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export default function StatementsScreen() {
  return (
    <Flex direction="column" align="baseline" gap="2">
      <Flex align="center" justify="between" gap="2" width="100%">
        <Heading>Declaraciones</Heading>
        <Select.Root defaultValue="2025">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Item value="2025">2025</Select.Item>
              <Select.Item value="2024">2024</Select.Item>
              <Select.Item value="2023">2023</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Separator style={styles.separator} />

      {/* Compras de bienes y servicios */}
      <Link>
        <RouterLink to="/statements/purchases" style={styles.link}>
          <Heading size="5">Compras de bienes y servicios</Heading>
        </RouterLink>
      </Link>
      <Separator size="4" my="1" style={styles.separator} />

      {/* Ventas de bienes y servicios */}
      <Link>
        <RouterLink to="/statements/shipping" style={styles.link}>
          <Heading size="5">Ventas de bienes y servicios</Heading>
        </RouterLink>
      </Link>
      <Separator size="4" my="1" style={styles.separator} />
    </Flex>
  );
}

const styles: Styles = {
  separator: {
    opacity: 0,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};
