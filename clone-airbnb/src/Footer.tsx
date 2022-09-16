import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import linkedin from './Images/linkedin.png';
import twitter from './Images/twitter.png';

const Footer = () => {
    const sectionOne = ['Support', 'Help Center', 'AirCover', 'Safety Information', 'Cancellation options', 'our COVID-19 Response', 'Supporting People with disabilities', 'Report a neighborhood concern'];

    const sectionTwo = ['Hosting', 'Try hosting', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly'];

    const sectionThree = ['Community', 'Airbnb.org: disaster relief housing', 'Support Afghan refugees', 'Combating discrimination'];

    const sectionFour = ['About', 'Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors'];

    return (
        <>
            <footer className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 col-md-3">
                        {sectionOne.map((sectionOne, index) => {
                            return (
                                <ul className="footerList" key={index}>
                                    <li className="nav-item" style={{listStyle: 'none'}}><a className="nav-link" href="#">{sectionOne}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-3">
                        {sectionTwo.map((sectionTwo, index) => {
                            return (
                                <ul className="footerList" key={index}>
                                    <li className="nav-item" style={{listStyle: 'none'}}><a className="nav-link" href="#">{sectionTwo}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-3">
                        {sectionThree.map((sectionThree, index) => {
                            return (
                                <ul className="footerList" key={index}>
                                    <li className="nav-item" style={{listStyle: 'none'}}><a className="nav-link" href="#">{sectionThree}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-3">
                        {sectionFour.map((sectionFour, index) => {
                            return (
                                <ul className="footerList" key={index}>
                                    <li className="nav-item" style={{listStyle: 'none'}}><a className="nav-link" href="#">{sectionFour}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="col-12" id="textContainer">
                        <p className="footerText ms-5 ps-5" style={{fontSize: '12px', fontWeight: 'bold'}}>Disclaimer</p>
                        <p className="footerText ms-5 ps-5"  style={{fontSize: '12px'}}>The Airbnb Newsroom is aimed at journalists. All Homes and Experiences referenced on the Airbnb Newsroom are intended<br/> purely to inspire and illustrate. Airbnb does not recommend or endorse specific Home or Experience listings on the Airbnb<br/> platform.</p>
                    </div>
                </div>
                <hr style={{maxWidth: '1700px', marginLeft: '5.5rem'}}/>
                <div className="col-12" id='rightsContainer'>
                    <p className="allRights">© 2022 Airbnb, Inc. All rights reserved . <a className="footerLink" href="#">Privacy</a>  .  <a className="footerLink" href="#">Terms</a>  .  <a className="footerLink" href="#">Sitemap</a><a className="socialMedia" id='twitter' href='#'><img src={twitter}/></a>
                    <a className="socialMedia" id='instagram' href='#'><img src={instagram}/></a>
                    <a className="socialMedia" id='linkedin' href='#'><img src={linkedin}/></a>
                    <a className="socialMedia" id='facebook' href='#'><img src={facebook}/></a></p>
                </div>
            </footer>
        </>
    )
}


export default Footer;