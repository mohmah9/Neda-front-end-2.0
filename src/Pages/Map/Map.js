import React, { Component } from 'react'
import Mapir from 'mapir-react-component';
import { connect } from "react-redux";
import * as location_on_map from "../../Redux/Map/Map_action";
import './mapir.css'

const Map = Mapir.setToken({
    style: `https://map.ir/vector/styles/main/mapir-xyz-style.json`,
    transformRequest: (url) => {
        return {
            url: url,
            headers: { 'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlMDE2OTQ3MmJiZjdhYzcyNzRlN2Q4NjcxNTQ0ZjJiMWFiZTAxYTc4MjYxYzk5Y2VmMWJlZTU3ZDU1MjAyOTk2NGY2YjBiMWFkYTc4NjQ3In0.eyJhdWQiOiI2ODIxIiwianRpIjoiYWUwMTY5NDcyYmJmN2FjNzI3NGU3ZDg2NzE1NDRmMmIxYWJlMDFhNzgyNjFjOTljZWYxYmVlNTdkNTUyMDI5OTY0ZjZiMGIxYWRhNzg2NDciLCJpYXQiOjE1NzQ3NzQwNjcsIm5iZiI6MTU3NDc3NDA2NywiZXhwIjoxNTc3Mjc5NjY3LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.Dq08g5mhtiG7ivHQ-gsQW2uCCHRW8Y916tdkUco1tJd1JyjBkyYQmhpCv5JqjNW1rDg5ZeFCRvH1HpL94QszhwJUUgLD4LKrxoDcMdvy-_HSWlctpzmp8v7BUQ8Njc3hw0qSm-nO7vFtQyYKKxLEKBRc77hA1v9lGkikoJSo5GojCR_Th260TgOQb1TMquIE43qWyrCpcm_56Zssg1G2SyHEDndpNJXzg_04APle7ae617gLjdyvn_Xp0vfQagsJNNsSNM8oBT196nzZifUNN-E4xXob_sUUPVIyEZdCNVxmYdMfXzXmBdQfcy2O_kIBtVgd6y8LEbLJCWnMytTy9Q' },//Mapir access token
        }
    }
});

class App extends Component {


    componentWillMount(){
        this.props.doctor.doctor_clinics.map(clinic =>
            this.props.load_clinic_loction(clinic.location)
        )
    }

    render() {
        console.log(this.props.doctor)
        return (
            <div className="App">

                <Mapir
                    center={[ 51.49546910733048 , 35.73409791809134]}
                    minZoom={[15]}
                    scrollZoom={false}
                    hash={true}
                    Map={Map}
                    interactive={true}
                    movingMethod='jumpTo'   
                >

                    <Mapir.Layer
                            type="symbol"
                            layout={{ "icon-image": "harbor-15" }}>
                    </Mapir.Layer>

                    {this.props.doctor.doctor_clinics.map(clinic =>
                        <Mapir.Marker
                            coordinates={[ localStorage.getItem(clinic.location+"longitude") , localStorage.getItem(clinic.location+"latitude")]}
                            anchor="bottom">
                            <img style={{ width: "3rem" }} onClick = {this.handleclick} alt = "Map" 
                            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojMjE5NkYzOyIgZD0iTTI1NiwwQzE1MC4xMTIsMCw2NCw4Ni4xMTIsNjQsMTkyYzAsMTMzLjA4OCwxNzMuMzEyLDMwNy45MzYsMTgwLjY3MiwzMTUuMzI4ICBDMjQ3LjgwOCw1MTAuNDMyLDI1MS45MDQsNTEyLDI1Niw1MTJjNC4wOTYsMCw4LjE5Mi0xLjU2OCwxMS4zMjgtNC42NzJDMjc0LjY4OCw0OTkuOTM2LDQ0OCwzMjUuMDg4LDQ0OCwxOTIgIEM0NDgsODYuMTEyLDM2MS44ODgsMCwyNTYsMHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik0zNDYuMDE2LDE2My40ODhsLTgwLTY0Yy01Ljg1Ni00LjY3Mi0xNC4xNDQtNC42NzItMjAsMGwtODAsNjQgIGMtNS4zMTIsNC4yNTYtNy4zNiwxMS4zOTItNS4xMiwxNy44MjRTMTY5LjIxNiwxOTIsMTc2LDE5MmgxNnY4MGMwLDguODMyLDcuMTY4LDE2LDE2LDE2aDk2YzguODMyLDAsMTYtNy4xNjgsMTYtMTZ2LTgwaDE2ICBjNi43ODQsMCwxMi44MzItNC4yODgsMTUuMTA0LTEwLjY4OFMzNTEuMzI4LDE2Ny43NDQsMzQ2LjAxNiwxNjMuNDg4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                        </Mapir.Marker>
                        )}

                    <Mapir.ZoomControl position={'top-right'} />
                    <Mapir.ScaleControl />

                </Mapir>

            </div >
        )
    }
}
const mapStateToProps = state => ({
    ...state,
    doctor: state.Viewinfo_reducer.doctor_info,
});

const mapDispatchToProps = dispatch => ({
    load_clinic_loction : (url) => dispatch(location_on_map.load_clinic_loction(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(App)

