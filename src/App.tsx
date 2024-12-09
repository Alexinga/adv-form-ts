import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { fullName: string; age: string };
    console.log(extractedData);
  }
  return (
    <main>
      <h1>Hello World</h1>
      <Form onSave={handleSave}>
        <Input label="Name" id="fullName" type="text" name="fullName" />
        <Input label="Age" id="age" type="number" name="age" />
        <Button el="button">Save Form</Button>
      </Form>
    </main>
  );
}

export default App;
