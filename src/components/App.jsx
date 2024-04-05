import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.jsx";

function createItem(noteItem){
  return(
    <Note 
    key = {noteItem.id}
    title = {noteItem.title}
    content = {noteItem.content}
     />
)
};

function App() {
  return (
    <>
      <Header/>
      {notes.map(createItem)}
      <Footer/>
    </>
  );
}

export default App;
