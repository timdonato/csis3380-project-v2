import react from 'react';

function Signup() {
    return (
        <div className="signup-section pt-120 pb-120">
            <img alt="image" src="assets/images/bg/section-bg.png" className="section-bg-top" />
            <img alt="image" src="assets/images/bg/section-bg.png" className="section-bg-bottom" />
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="form-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                    <div className="form-title">
                        <h3>Sign Up</h3>
                        <p>Do you already have an account? <a href="/login">Log in here</a>
                        </p>
                    </div>
                    <form className="w-100">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-inner">
                            <label>Frist Name *</label>
                            <input type="email" placeholder="Frist Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner">
                            <label>Last Name *</label>
                            <input type="email" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-inner">
                            <label>Enter Your Email *</label>
                            <input type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-inner">
                            <label>Password *</label>
                            <input type="password" name="password" id="password" placeholder="Create A Password" />
                            <i className="bi bi-eye-slash" id="togglePassword"></i>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                            <div className="form-group">
                                <input type="checkbox" id="html" />
                                <label for="html">I agree to the Terms & Policy</label>
                            </div>
                            </div>
                        </div>
                        </div>
                        <button className="account-btn">Create Account</button>
                    </form>
                    
                    <div className="form-poicy-area mt-3">
                        <p>By clicking the "signup" button, you create a Cobiro account, and you agree to Cobiro's <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy.</a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Signup;