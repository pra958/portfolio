const About = () => {
  const socialLinks = [
    {
      icon: "bi-linkedin",
      url: "https://linkedin.com/in/prakash-umbare",
      color: "text-primary",
    },
    {
      icon: "bi-facebook",
      url: "https://facebook.com/Prakash Umbare",
      color: "text-primary",
    },
    {
      icon: "bi-twitter-x",
      url: "https://twitter.com/prakashumbare07",
      color: "text-dark",
    },
    {
      icon: "bi-instagram",
      url: "https://instagram.com/prakashumbare07",
      color: "text-danger",
    },
  ];

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
                <p>20 July 1995</p>
                <p className='text-muted m-0'>Permanent Address </p>
                <p>
                  101 CO GIRASE Lokmanya Nagar Thane,
                  <br />
                  Pada No 3, Lokmanya Nagar
                  <br />
                  Thane West 400606,
                  <br />
                  Maharashtra, India
                </p>
              </div>
              <div className='col'>
                <p className='text-muted m-0'>Area Pin Code</p>
                <p>400606</p>
                <p className='text-muted m-0'>Marital Status</p>
                <p>Married</p>
                <p className='text-muted m-0'>Hometown</p>
                <p>Chatrapati Sambhaji Nagar</p>
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
                      <td>Proficient</td>
                      <td>Yes</td>
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
              data-vanity='prakash-umbare'
            >
              <a
                className='LI-simple-link'
                href='https://in.linkedin.com/in/prakash-umbare?trk=profile-badge'
              >
                Prakash Umbare
              </a>
            </div>
          </div>          
        </div>
        
 <div className="row mt-4">
  <div className="col text-center">
    <div className="d-flex justify-content-center">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="mx-2 d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{ width: "45px", height: "45px" }}
        >
          <i className={`bi ${item.icon} fs-4 ${item.color}`}></i>
        </a>
      ))}
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default About;
