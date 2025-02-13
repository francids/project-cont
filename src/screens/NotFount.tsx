import { Flex, Heading, Link, Text } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>404</Heading>
      <Text>
        La página que buscas no existe. Regresa al{" "}
        <RouterLink to="/">
          <Link>inicio</Link>
        </RouterLink>
        .
      </Text>
    </Flex>
  );
}
