import React, { PureComponent } from "react";


class WeatherDetails extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {

            city_name: "",
            isLoaded: false,
            undefined_response: false,
            weather_information: []

        }
    }

    handleLoginSubmit() {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city_name}&appid=094aa776d64c50d5b9e9043edd4ffd00`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else if (res.status === 401) {
                    console.log("SOMETHING WENT WRONG")
                }
            })
            .then((result) => {

                if (result == undefined) {
                    this.setState({
                        undefined_response: true
                    })
                }
                else {
                    this.setState({
                        isLoaded: true,
                        weather_information: result,
                        undefined_response: false
                    })
                }
            });
    }

    handleChange = (e) => {

        let tstate = this.state

        tstate.city_name = e.target.value

        this.setState({ tstate });
        // console.log("city value "+JSON.stringify(this.state.city_name))

    }

    render() {

        return (

            <div className="app_css">
                <h3>Enter City Name to see weather Details</h3>
                <br />
                <div className=" col-lg-8">
                    <form>
                        <input
                            className="form-control"
                            style={{ width: "260px" }}
                            type="text"
                            name="city name"
                            placeholder="Enter City Name"
                            required autocomplete="name"
                            onChange={this.handleChange}

                        />
                        {this.state.undefined_response ? (
                            <div>
                                <p style={{ color: "red" }}>please enter valid city name</p>
                            </div>
                        ) : ""}
                    </form>
                </div>
                <br /><br />

                <div className="form-group submit">
                    <button
                        type="submit"
                        onClick={this.handleLoginSubmit.bind(this)}
                        className="ps-btn" style={{ width: "300px" }}
                    >
                        See Weather Details
                </button>
                </div>

                {this.state.isLoaded ? (
                    <div>
                        <h4>Weather Details</h4>
                        <table style={{ border: "1px solid #ddd", textAlign: "left", borderCollapse: "collapse", width: "100%" }}>
                            <tr>
                                <th style={{ padding: "15px" }}>
                                    City Name:
                               </th>
                                <th style={{ padding: "15px" }}>
                                    Minimum Temperature:
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Maximum Temperature:
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Sunrise time:
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Sunset time:
                                </th>
                            </tr>
                            <tr >
                                <td style={{ padding: "15px" }}>{this.state.weather_information.name}</td>
                                <td style={{ padding: "15px" }}>{this.state.weather_information.main.temp_min}</td>
                                <td style={{ padding: "15px" }}>{this.state.weather_information.main.temp_max}</td>
                                <td style={{ padding: "15px" }}>{this.state.weather_information.sys.sunrise}</td>
                                <td style={{ padding: "15px" }}>{this.state.weather_information.sys.sunset}</td>

                            </tr>
                        </table>
                    </div>
                ) : ""}
            </div>
        );
    }


}

export default WeatherDetails;