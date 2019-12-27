import React from 'react';
import MenuAppBar from '../Home/NavBar'
import Footer from '../Home/Footer'
import Slide from './Slide'
import Slider from './Slider'
import { connect } from "react-redux"
import * as medical_information from "../../Redux/Medical_info/Medical_action"

class Medical extends React.Component {

    componentWillMount(){
       this.props.load_mediacl();
    }

    render() {
        console.log(this.props.medical_info)
        return (
            <div>
                <div >
                    <MenuAppBar />
                </div>
                <br /><br /><br/>
                <div style={{paddingRight : "20%", paddingLeft : " 20%"}}>
                    <Slider/>
                </div>
                <div>
                </div >
                <div style={{paddingRight : "10%", paddingLeft : " 10%"}}>
                    <Slide/>

                </div>
                <br/><br /><br />
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state,
    medical_info: state.medical_reducer.medical_info,
});
const mapDispatchToProps = dispatch => ({
    load_mediacl : () => dispatch(medical_information.load_mediacl())
});
export default connect(mapStateToProps, mapDispatchToProps)(Medical)