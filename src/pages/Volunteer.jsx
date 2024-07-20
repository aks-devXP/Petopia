import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import vol from '../assets/images/volunteer.jpg'

const Volunteer = () => {

    const[selectedFile, setSelectedFile] = useState(null);

    const handleFile = (e)=>{
        setSelectedFile(e.target.files[0]);
    }

  return (
    <>
        <section className="volunteer-section section-padding" id="section_4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h2 className="text-white mb-4">Volunteer</h2>

                    <form className="custom-form volunteer-form mb-5 mb-lg-0" action="#" method="post" role="form">
                        <h3 className="mb-4">Become a NGO volunteer today</h3>

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <input type="text" name="volunteer-name" id="volunteer-name" className="form-control" placeholder="Jack Doe" required=""/>
                            </div>

                            <div className="col-lg-6 col-12">    
                                <input type="email" name="volunteer-email" id="volunteer-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com" required=""/>
                            </div>

                            <div className="col-lg-6 col-12">
                                <input type="text" name="volunteer-subject" id="volunteer-subject" className="form-control" placeholder="Subject" required=""/>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="input-group input-group-file">
                                    <input type="file" className="form-control" id="inputGroupFile02"
                                    onChange={handleFile}/>
                                    
                                    <label className="input-group-text" style={{cursor:'pointer'}} for="inputGroupFile02">Upload your CV</label>

                                    <i className="bi-cloud-arrow-up ms-auto"></i>
                                </div>
                            </div>
                        </div>

                        <textarea name="volunteer-message" rows="3" className="form-control" id="volunteer-message" placeholder="Comment (Optional)"></textarea>

                        <button type="submit" className="form-control">Submit</button>
                    </form>
                </div>

                <div className="col-lg-6 col-12">
                    <img src={vol} className="volunteer-image img-fluid" alt=""/>

                    <div className="custom-block-body text-center">
                        <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>

                        <p className="text-white">Become a volunteer today and make a difference in the lives of animals in need. Help us with rescue operations, provide care and love to our furry friends, and assist in organizing community awareness events. Your passion and dedication can help create a better world for animals. Sign up today and be a part of our compassionate team!</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Volunteer