const Projects = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='projects'></div>
      <div className='container card shadow p-4'>
        <div className='row'>
          <div className='col px-4 justify-content-center'>
            <h3 className='text-center'>Experience</h3>
            <hr />
            <h5>Generali Central Insuarance (Future Generali India Insuarance)</h5>
            <hr />
            <h6>Jan 2022 to Nov 2025</h6>
            <ul>
  
              <br />
                 <li>Worked as Asp.net Developer</li> 
                  <br />
                  <li>Worked on VAPT's</li> 
                  <br />
                  <li>Worked on Asp.net Core </li>
                  <br />
                  <li>Worked on WSO2 - API Gateways</li>
            </ul>


            <hr />       
            {/* <p>
              Link for Repository:
              <a
                href='https://github.com/pra958/ToDo-App'
                target='_blank'
                rel='noopener noreferrer'
              >
                React Native Application,
              </a>{' '}

            </p> */
            }

 
            <div className='text-center p-2'>
              <button type='button' className='btn btn-primary rounded-0'>
                <a
                  href='https://github.com/pra958'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-decoration-none text-white'
                >
                  Visit GitHub Profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
