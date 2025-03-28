import { Flex, Heading, Separator, Select, Text } from "@radix-ui/themes";
import { useRef, useState, useEffect } from "react";
import SettingTile from "../../components/SettingTile";

export default function SettingsScreen() {
  const versionRef = useRef<HTMLDivElement>(null);
  const [theme] = useState<string>("system");

  useEffect(() => {
    if (window.electron) {
      window.app.version().then((version) => {
        if (versionRef.current) {
          versionRef.current.innerText = version;
        }
      });
    }
  }, []);

  return (
    <Flex direction="column" align="baseline" gap="2">
      <Heading>Configuración</Heading>
      <Separator
        style={{
          opacity: 0,
        }}
      />
      <Flex direction="column" gap="4" width="100%">
        <SettingTile title="Tema" description="Elige el tema de la aplicación">
          <Select.Root value={theme}>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="light" disabled>
                Claro
              </Select.Item>
              <Select.Item value="dark" disabled>
                Oscuro
              </Select.Item>
              <Select.Item value="system">Sistema</Select.Item>
            </Select.Content>
          </Select.Root>
        </SettingTile>
        <Separator size="4" />
        <SettingTile
          title="Idioma"
          description="Elige el idioma de la aplicación"
        >
          <Select.Root value="es">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="es">Español</Select.Item>
              <Select.Item value="en" disabled>
                Inglés
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </SettingTile>
        <Separator size="4" />
        <SettingTile
          title="Versión"
          description="Versión actual de la aplicación"
        >
          <Text ref={versionRef}></Text>
        </SettingTile>
      </Flex>
    </Flex>
  );
}
