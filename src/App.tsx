import { Button, Flex, Text } from "@radix-ui/themes";

function App() {
  function handleClick() {
    alert("Hello");
  }

  return (
    <Flex direction="row" gap="2">
      <Text>Hi</Text>
      <Button onClick={handleClick}>Click me</Button>
    </Flex>
  );
}

export default App;
