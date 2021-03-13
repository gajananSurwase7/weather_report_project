import './App.css';
import  WeatherDetails  from "../src/WeatherDetails/WeatherDetails";

function App() {
  return (
    // <div className="app_css">
    // <h3>Enter City Name to see weather Details</h3>
    // <br/>
    //   <div className=" col-lg-8">
    //     <Input
    //       className="form-control"
    //       style={{width:"260px"}}
    //       refs="email"
    //       type="text"
    //       placeholder="Enter Email-ID"
    //     // onChange={this.handleChange.bind(
    //     //   this,
    //     //   "email"
    //     // )}
    //     // value={this.state.fields["email"]}
    //     />
    //   </div>
    //   <br/><br/>

    //   <div className="form-group submit">
    //     <button
    //       type="submit"
    //       // onClick={this.handleLoginSubmit}
    //       className="ps-btn" style={{width:"300px"}}
    //     >
    //       Login
    //     </button>
    //   </div>
    // </div>
    <div>
      <WeatherDetails />
    </div>
  );
}

export default App;
