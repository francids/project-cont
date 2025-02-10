import { Flex, Heading, Separator, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function RNC() {
  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>Consulta RNC</Heading>
      <Separator style={styles.separator} />
      <TextField.Root
        placeholder="Escribe un RNC o nombre de empresa"
        style={styles.search}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
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
