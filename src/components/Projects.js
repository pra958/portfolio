const Projects = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='projects'></div>
      <div className='container card shadow p-4'>
        <div className='row'>
          <div className='col px-4 justify-content-center'>
            <h3 className='text-center'>Experience</h3>
            <hr />
            <h6>Inspection Module</h6>
            <p>
              Generali Central Insuarance (Future Generali India Insuarance)
              <br />
              Jan 2022 to Apr 2020 (Full Time)
              <br />
                  Worked as Asp.net Developer
                  Worked on VAPT's 
                  Worked on Asp.net Core 
                  Worked on WSO2 - API Gateways
            </p>
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
