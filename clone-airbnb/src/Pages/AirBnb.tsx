import mainPhoto from '../Images/mainPhoto.jpg';
import apartment from '../Images/apartment.jpg';
import remote from '../Images/remote.jpg';
import equity from '../Images/equity.jpg';
import vacation from '../Images/vacation.jpg';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';

const AirBnb = () => {
    return (
        <div className='container-fluid' id='hero'>
            <div className='row'>
                <div className='col-12 col-md-4 order-md-1' id='headerBox'>
                    <h6>September 17, 2022</h6>
                    <h2 className="mb-4"><a className="description" href="#">A new way to vacation, work remote, and thrive.</a></h2>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div className="col-12 col-md-8 order-md-2" id='hero2'>
                    <div className="aspectRatioBox mt-5">
                        <img className="heroImage img-fluid rounded" src={mainPhoto}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 news'>
                    <h3 className='pt-5 pb-3 mt-1'>Latest News</h3>
                </div>
            <div className='row'>
                <div className='col-12 col-md-9 ps-4 ms-sm-0'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='row'>
                                <div className='col-3 ps-0'>
                                    <a href='#'><img className='img-fluid w-100 rounded' src={apartment}/></a>
                                </div>
                                <div className='col-9 line-spacer'>
                                    <a className='headlineNews' href='#'>The 10 best New York airbnb's of 2022</a>
                                    <p className='date'><small>September 23, 2022</small></p>
                                </div>
                                <div className='col-3 ps-0 pt-4'>
                                    <a href='#'><img className='img-fluid w-100 rounded' src={vacation}/></a>
                                </div>
                                <div className='col-9 pt-4 line-spacer'>
                                    <a className='headlineNews' href='#'>Get ready to explore by booking your adventure<br/>today</a>
                                    <p className='date'><small>September 24, 2022</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='row bording'>
                                <div className='col-3 ps-0'>
                                    <a href='#'><img className='img-fluid w-100 rounded' src={equity}/></a>
                                </div>
                                <div className='col-9 line-spacer'>
                                    <a className='headlineNews' href='#'>An update on diversity and belonging progress<br/>at Airbnb</a>
                                    <p className='date'><small>September 25, 2022</small></p>
                                </div>
                                <div className='col-3 ps-0 pt-4'>
                                    <a href='#'><img className='img-fluid w-100 rounded' src={remote}/></a>
                                </div>
                                <div className='col-9 pt-4 line-spacer'>
                                    <a className='headlineNews' href='#'>How destinations can benefit from the rise in remote<br/>workers</a>
                                    <p className='date'><small>September 28, 2022</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3' id='mediaBox'>
                            <h2 className='media-texts'>Follow us</h2>
                            <p className='para-texts'>Get the latest news and travel inspiration.</p>
                            <a href='#'><img style={{padding: '0 10px'}} src={twitter}/></a>
                            <a href='#'><img style={{padding: '0 10px'}} src={instagram}/></a>
                            <a href='#'><img style={{padding: '0 10px'}} src={linkedin}/></a>
                            <a href='#'><img style={{padding: '0 10px'}} src={facebook}/></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AirBnb;