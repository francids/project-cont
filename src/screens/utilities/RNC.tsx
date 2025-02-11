import { Button, Flex, Heading, Separator, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

declare global {
  interface Window {
    electron: {
      queryRNC: (search: string) => Promise<string>;
    };
  }
}

export default function RNC() {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<string>("");

  async function handleSearch() {
    try {
      if (!window.electron) {
        throw new Error("La API de Electron no está disponible");
      }
      const data = await window.electron.queryRNC(search);
      setResult(data);
    } catch (error) {
      console.error("Error al consultar RNC", error);
    }
  }

  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>Consulta RNC</Heading>
      <Separator style={styles.separator} />
      <Flex width="100%" align="center" gap="2">
        <TextField.Root
          placeholder="Buscar por RNC o nombre de empresa"
          style={styles.search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button variant="surface" onClick={handleSearch}>
          Buscar
        </Button>
      </Flex>
      <Separator style={styles.separator} />

      <Flex direction="column" gap="2">
        <pre>
          <code>{search}</code>
        </pre>
        <pre>
          <code>{result}</code>
        </pre>
      </Flex>
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
