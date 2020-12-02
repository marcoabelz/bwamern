import React, {Component} from 'react'
import { connect } from "react-redux"

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'
import Example from '../pages/Example'

import { fetchPage } from 'store/actions/page'
// import landingPage from 'json/landingPage.json'

//... syntax ES6 seperate operator, ketika ada props di kelas LandingPages akan di passing ke komponen Header
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);

        if (!this.props.page.landingPage)
            this.props.fetchPage(
                `/landing-page`,
                "landingPage"
            );
    }
    
    render () {

        const { page } = this.props;

        // console.log(page);

        if(!page.hasOwnProperty("landingPage")) return null;
    
        // console.log(this.props);
        return (
            <>
                <Header {...this.props}></Header> 
                <Hero 
                    refMostPicked={this.refMostPicked} 
                    data={page.landingPage.hero} 
                />
                <MostPicked 
                    refMostPicked={this.refMostPicked} 
                    data={page.landingPage.mostPicked} 
                />
                <Categories data={page.landingPage.category} />

                <Testimony data={page.landingPage.testimonial}></Testimony>
                <Footer />
                
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);