import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { AppCars } from "./pages/AppCars";
import { SingleCar } from "./components/SingleCar.component";
import { AppAddCar } from "./pages/AppAddCar";
import { NavBar } from "./components/common/NavBar";
import GuardedRoute from "./components/common/GuardedRoute";
import { AppLogin } from "./components/auth/AppLogin";
import { AppRegister } from "./components/auth/AppRegister";
import GuestRoute from "./components/common/GuestRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <GuardedRoute component={AppCars} exact path="/cars" />
          <GuardedRoute component={SingleCar} path="/cars/:id" />
          <GuardedRoute component={AppAddCar} path="/edit/:id" />
          <GuardedRoute component={AppAddCar} path="/add" />
          <GuestRoute component={AppLogin} path="/login" />
          <GuestRoute component={AppRegister} path="/register" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/cars">cars</Link>
//             </li>
//             <li>
//               <Link to="/add">add</Link>
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path="/cars">
//             <AppCars />
//           </Route>
//           <Route path="/cars/:id">
//             <SingleCar />
//           </Route>
//           <Route path="/add">
//             <AppAddCar />
//           </Route>
//           <Route path="/edit/:id">
//             <AppAddCar />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
