import { Flex, Text } from "@radix-ui/themes";

interface SettingTileProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function SettingTile({
  title,
  description,
  children,
}: SettingTileProps) {
  return (
    <Flex direction="column" gap="2">
      <Flex align="center" justify="between" gap="3" py="2">
        <Flex direction="column" gap="1">
          <Text size="3" weight="medium">
            {title}
          </Text>
          <Text size="2" color="gray">
            {description}
          </Text>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
}
