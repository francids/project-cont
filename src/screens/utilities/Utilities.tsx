import { Card, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Utilities() {
  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>Utilidades</Heading>
      <Separator
        style={{
          opacity: 0,
        }}
      />
      <Grid columns="2" gap="3" width="100%">
        <Card asChild>
          <Link to="/utilities/rnc">
            <Text as="div" size="2" weight="bold">
              Consulta RNC
            </Text>
            <Text as="div" color="gray" size="2">
              Consulta el Registro Nacional de Contribuyentes.
            </Text>
          </Link>
        </Card>
        <Card asChild>
          <Link to="utilities/ncf">
            <Text as="div" size="2" weight="bold">
              Consulta NCF
            </Text>
            <Text as="div" color="gray" size="2">
              Consulta el Número de Comprobante Fiscal.
            </Text>
          </Link>
        </Card>
      </Grid>
    </Flex>
  );
}
