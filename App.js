import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from './Widget'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
        {/* Widgets */}
      <Widget/>
      </div>
      
    </div>
  );
}

export default App;
