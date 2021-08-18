import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import Solarpanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item
          title="Model S"
          clsname="ModelS"
          desc="Order Online for "
          desc2="Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model 3"
          clsname="Model3"
          desc="Order Online for"
          desc2="Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          clsname="ModelX"
          desc="Order Online for "
          desc2="Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          clsname="ModelY"
          desc="Order Online for "
          desc2="Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          clsname="SolarRoof"
          desc="Order Online for "
          desc2="Touchless Delivery"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Lowest Cost Solar Panels in America"
          clsname="Solarpanels"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Solarpanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          clsname="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          // rightBtnTxt="LEARN MORE"
          // rightBtnLink=""
          // twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
