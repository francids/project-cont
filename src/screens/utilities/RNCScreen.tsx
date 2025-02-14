import {
  Button,
  Table,
  Flex,
  Heading,
  Separator,
  TextField,
  DataList,
  Badge,
  Box,
  Dialog,
  Spinner,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import type RNC from "../../interfaces/RNC";

export default function RNCScreen() {
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<RNC[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  async function handleSearch() {
    if (search.length < 3) {
      setErrorMessage("Por favor, ingrese al menos 3 caracteres para buscar");
      return;
    }

    try {
      setIsLoading(true);
      if (!window.electron) {
        throw new Error("electron_not_available");
      }
      const data = await window.electron.queryRNC(search);
      setResult(data);
      setErrorMessage("");
    } catch (error) {
      console.error("Error al consultar RNC", error);
      const mensaje =
        (error as { message: string }).message === "electron_not_available"
          ? "Lo sentimos, hay un problema técnico con la aplicación. Por favor, reiníciela."
          : "No pudimos realizar la consulta en este momento. Por favor, inténtelo de nuevo.";
      setErrorMessage(mensaje);
    } finally {
      setIsLoading(false);
      searchInputRef.current?.focus();
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter" && !isLoading) {
      handleSearch();
    }
  }

  return (
    <Flex direction="column" align="baseline" gap="2" style={styles.container}>
      <Heading>Consulta RNC</Heading>
      <Separator style={styles.separator} />
      <Flex width="100%" align="center" gap="2">
        <TextField.Root
          placeholder="Buscar por RNC o nombre de empresa"
          style={styles.search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyUp={handleKeyPress}
          disabled={isLoading}
          ref={searchInputRef}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button variant="surface" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? (
            <Flex gap="2" align="center">
              <Spinner size="1" />
              Buscando...
            </Flex>
          ) : (
            "Buscar"
          )}
        </Button>
      </Flex>

      <Separator style={styles.separator} />

      <Box style={styles.content}>
        {result.length === 1 && (
          <DataList.Root style={styles.dataList}>
            <DataList.Item>
              <DataList.Label>RNC</DataList.Label>
              <DataList.Value style={styles.selectable}>
                {result[0].rnc}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Razón Social</DataList.Label>
              <DataList.Value style={styles.selectable}>
                {result[0].razonSocial}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Nombre Comercial</DataList.Label>
              <DataList.Value style={styles.selectable}>
                {result[0].nombreComercial}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Actividad</DataList.Label>
              <DataList.Value style={styles.selectable}>
                {result[0].actividad}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Fecha</DataList.Label>
              <DataList.Value style={styles.selectable}>
                {result[0].fecha}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Estado</DataList.Label>
              <DataList.Value>
                <Badge
                  color={
                    result[0].estado === "ACTIVO"
                      ? "green"
                      : result[0].estado === "SUSPENDIDO" ||
                        result[0].estado === "DADO DE BAJA" ||
                        result[0].estado === "CESE TEMPORAL" ||
                        result[0].estado === "ANULADO" ||
                        result[0].estado === "RECHAZADO"
                      ? "red"
                      : "gray"
                  }
                  variant="soft"
                >
                  {result[0].estado}
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Regimen</DataList.Label>
              <DataList.Value>{result[0].regimen}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        )}

        {result.length > 1 && (
          <Table.Root style={styles.dataTable} variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>RNC</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Razón Social</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {result.map((item) => (
                <Table.Row key={item.rnc}>
                  <Table.Cell style={styles.selectable}>{item.rnc}</Table.Cell>
                  <Table.Cell style={styles.selectable}>
                    {item.razonSocial}
                  </Table.Cell>
                  <Table.Cell>
                    <Badge
                      color={
                        item.estado === "ACTIVO"
                          ? "green"
                          : item.estado === "SUSPENDIDO" ||
                            item.estado === "DADO DE BAJA" ||
                            item.estado === "CESE TEMPORAL" ||
                            item.estado === "ANULADO" ||
                            item.estado === "RECHAZADO"
                          ? "red"
                          : "gray"
                      }
                      variant="soft"
                    >
                      {item.estado}
                    </Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </Box>

      {errorMessage && (
        <Dialog.Root open={Boolean(errorMessage)}>
          <Dialog.Content>
            <Dialog.Title>¡Ups! Algo salió mal</Dialog.Title>
            <Dialog.Description>{errorMessage}</Dialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button onClick={() => setErrorMessage("")}>Entendido</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </Flex>
  );
}

const styles: Styles = {
  container: {
    height: "100%",
    width: "100%",
  },
  search: {
    width: "100%",
  },
  separator: {
    opacity: 0,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  dataList: {
    width: "100%",
  },
  dataTable: {
    width: "100%",
  },
  selectable: {
    userSelect: "text",
    cursor: "text",
  },
};
