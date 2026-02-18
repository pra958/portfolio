const About = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='about'></div>
      <div className='container card shadow p-4'>
        <h3 className='text-center'>About</h3>
        <hr />
        <div className='row'>
          <div className='col'>
            <div className='row px-3'>
              <div className='col'>
                <p className='text-muted m-0'>Date of Birth</p>
                <p>02 Nov 1997</p>
                <p className='text-muted m-0'>Permanent Address </p>
                <p>
                  B-301 Shankheshwar Pearls,
                  <br />
                  Adharwadi Road,
                  <br />
                  Kalyan West 421301,
                  <br />
                  Maharashtra, India
                </p>
              </div>
              <div className='col'>
                <p className='text-muted m-0'>Area Pin Code</p>
                <p>421301</p>
                <p className='text-muted m-0'>Marital Status</p>
                <p>Single / Unmarried</p>
                <p className='text-muted m-0'>Hometown</p>
                <p>Prayagraj</p>
              </div>
            </div>
            <div className='row px-3'>
              <div className='col'>
                <table className='table table-borderless'>
                  <thead>
                    <tr>
                      <th scope='col'>Languages</th>
                      <th scope='col'>Proficiency</th>
                      <th scope='col'>Speak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>English</td>
                      <td>Proficient</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Hindi</td>
                      <td>Proficient</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Marathi</td>
                      <td>Beginner</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
            <div
              className='LI-profile-badge'
              data-version='v1'
              data-size='large'
              data-locale='en_US'
              data-type='vertical'
              data-theme='light'
              data-vanity='saurabhrkp'
            >
              <a
                className='LI-simple-link'
                href='https://in.linkedin.com/in/saurabhrkp?trk=profile-badge'
              >
                Saurabh Patel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
