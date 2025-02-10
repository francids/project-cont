import { Button, Flex, Heading, Separator, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function RNC() {
  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>Consulta RNC</Heading>
      <Separator style={styles.separator} />
      <Flex width="100%" align="center" gap="2">
        <TextField.Root
          placeholder="Buscar por RNC o nombre de empresa"
          style={styles.search}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button variant="surface">Buscar</Button>
      </Flex>
      <Separator style={styles.separator} />
    </Flex>
  );
}

const styles: Styles = {
  search: {
    width: "100%",
  },
  separator: {
    opacity: 0,
  },
};
