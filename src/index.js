import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';
import { AlertComponent } from './components/AlertComponent';
import HeaderHome from './components/HeaderHome';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './DataBinding/DataBinding';

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
  
  <div className='abc'>
    {/* <HomeLayout/> */}
    <DataBinding/>

  </div>
);



