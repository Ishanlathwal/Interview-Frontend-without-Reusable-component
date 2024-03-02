import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Component2 from "./Components/Component2";
import Component1 from "./Components/Component1";
import Component3 from "./Components/Component3";
import { layouts } from "./Components/LayoutOptions";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  return (
    // UsedReact grid-layout library

    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
      margin={[15, 20]}
      rowHeight={30}
      isDraggable={false}
      width={1200}>
      <div key="a" className="component">
        <div className="content">
          <Component1 />
        </div>
      </div>
      <div key="b" className="component">
        <div className="content">
          <Component2 />
        </div>
      </div>
      <div key="c" className="component">
        <div className="content">
          <Component3 />
        </div>
      </div>
    </ResponsiveGridLayout>
  );
}

export default App;
