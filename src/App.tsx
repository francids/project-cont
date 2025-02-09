import { Button, Flex, Text } from "@radix-ui/themes";

function App() {
  function handleClick() {
    alert("Hello");
  }

  return (
    <Flex
      direction="column"
      gap="2"
      align="center"
      justify="center"
      height="100vh"
    >
      <Text>Hi</Text>
      <Button onClick={handleClick}>Click me</Button>
    </Flex>
  );
}

export default App;
