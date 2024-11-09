import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import Table from "./components/Table";
// import banner from "./asserts/banner.jpg"
function App() {
  return (
    <div className="bg-[url(./asserts/banner.jpg)] bg-cover bg-no-repeat">
      <Header />
      <section className="h-screen">
        <Book />
        <Table />
      </section>
    </div>
  );
}

export default App;