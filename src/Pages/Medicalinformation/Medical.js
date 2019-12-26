import React from 'react';
import MenuAppBar from '../Home/NavBar'
import Footer from '../Home/Footer'
import Slide from './Slide'
import Slider from './Slider'



export default class Medical extends React.Component {

    render() {
        
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
                <br /><br /><br />
                <Footer/>
            </div>
        );
    }
}