import { Flex, Heading, Separator } from "@radix-ui/themes";
import PurchasingFormatTable from "../../components/PurchasingFormatTable";

export default function PurchasingFormatScreen() {
  return (
    <Flex direction="column" align="baseline" gap="2" style={styles.container}>
      <Heading>Compras de bienes y servicios</Heading>
      <Separator style={styles.separator} />
      <PurchasingFormatTable />
    </Flex>
  );
}

const styles: Styles = {
  container: {
    height: "100%",
    width: "100%",
  },
  separator: {
    opacity: 0,
  },
};
