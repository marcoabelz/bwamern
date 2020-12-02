import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'



export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We Capture Your Beauty Holiday Instantly and Memorable
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy Policy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Term & Condition
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:cs@staycation.com">
                                    cs@staycation.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+62217504358">
                                    021 - 750 4358
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation Corp, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright © 2020 Marco Abel Zefanya. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
