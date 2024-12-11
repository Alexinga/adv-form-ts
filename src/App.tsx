import "./App.css";
// import Button from "./components/UI/Button";
// import Input from "./components/UI/Input";
// import Form from "./components/UI/Form";
import Header from "./components/Header";
import AddTimes from "./components/AddTimes";
import Timers from "./components/Timers";
import TimerProvider from "./store/TimersContext";

function App() {
  // function handleSave(data: unknown) {
  //   const extractedData = data as { fullName: string; age: string };
  //   console.log(extractedData);
  // }
  return (
    <>
      {/* <main>
        <h1>Hello World</h1>
        <Form onSave={handleSave}>
          <Input label="Name" id="fullName" type="text" name="fullName" />
          <Input label="Age" id="age" type="number" name="age" />
          <Button el="button">Save Form</Button>
        </Form>
      </main> */}
      {/* Bottom half showing react context */}
      <TimerProvider>
        <Header />
        <main>
          <AddTimes />
          <Timers />
        </main>
      </TimerProvider>
    </>
  );
}

export default App;
