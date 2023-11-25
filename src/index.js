import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import { AlertComponent } from "./components/AlertComponent";
import HeaderHome from "./components/HeaderHome";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./DataBinding/DataBinding";

//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
//Tạo root trên thẻ div#root
import "./assets/scss/style.scss";
import StyleComponent from "./StyleComponent/StyleComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChangeFontSize from "./StateDemo/ChangeFontSize";
import ChangeColor from "./StateDemo/ChangeColor";
import ChangeAvatar from "./StateDemo/ChangeAvatar";
import ChangeCarColor from "./StateDemo/ChangeCarColor";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import EXRenderProductList from "./Props/EXRenderProductList/EXRenderProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";

const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX
root.render(
  // <div className="abc">
  //   {/* <HomeLayout/> */}
  //   <DataBinding />
  //   <p className="text-red">demo scss</p>
  //   <StyleComponent />
  // </div>
  <div className="abc">
    {/* <HandleEvent />
    <ChangeFontSize />
    <ChangeColor /> */}
    {/* <ChangeAvatar /> */}
    {/* <ChangeCarColor /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoProps /> */}
    {/* <EXRenderProductList /> */}
    {/* <BaiTapXemChiTiet /> */}
    <BaiTapGioHang />
  </div>
);
