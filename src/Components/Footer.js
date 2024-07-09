import React, { Component } from 'react'
export class Footer extends Component {
  render() {
    return (
      <>
       <div className="later font-source-sans-pro">
        <div className="element">INVENT</div>
     </div>
        <div className="footer">
        <div className="line1"></div>
        <div className="content">INSTITUTION’S INNOVATION COUNCIL</div>
        <div className="line2"></div>
        <div className="foot-content">
            <div className="box1 font-source-sans-pro">
                <div className="c1">Quick Links</div>
                <div className="line3"></div>
                <hr />
                <div className="links">
                   <div className="b1"><a href="">Home</a></div>
                   <div className="b1"><a href="">About Us</a></div>
                    <div className="b1"><a href="">Members</a></div>
                    <div className="b1"><a href="">Events</a></div>
                    <div className="b1"><a href="">Contact Us</a></div>
                </div>
            </div>
            <div className="box2 font-source-sans-pro">
                <div className="c2">Connect</div>
                <div className="line3"></div>
                <hr />
                <div className="socials">
                    <div className="b2"><i className="fa-brands fa-facebook-f "></i> </div>
                    <div className="b3"><i className="fa-brands fa-instagram "></i></div>
                    <div className="b4"><i className="fa-brands fa-linkedin-in "></i></div>
                </div>
            </div>
            <div className="box3 ">
                <div className="c3">Contact</div>
                <div className="line3"></div>
                <hr />
                <div className="contact">
                    <div className="box4">
                        <b>Address :</b> New IT Building, N-602, MIT ADT University, Rajbaugh, Solapur - Pune Hwy, near Bharat Petrol Pump, Loni Kalbhor, Maharashtra 412201
                    </div>
                    <div className="box5">
                        <b>Contact :</b> innovation@mituniversity.edu.in
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }
}

export default Footer
