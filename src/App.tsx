import { Button, Flex, Text } from "@radix-ui/themes";

export default function App() {
  function handleClick() {
    alert("Hello");
  }

  return (
    <Flex>
      <Text>Hi</Text>
      <Button onClick={handleClick}>Click me</Button>
    </Flex>
  );
}
