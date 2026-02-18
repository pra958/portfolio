import Photo from '../img/profilePhoto.jpg';

const Header = () => {
  return (
    <>
      <div id='home' style={{ height: '70px' }}></div>
      <div className='container card shadow mt-5'>
        <div className='row justify-content-center p-4'>
          <div className='col-sm-10 col-md-5 col-lg-4 text-center'>
            <img src={Photo} alt='Me' className='card-body img-fluid col' />
          </div>
          <div className='col-sm-10 col-md-6 col-lg-8 my-auto text-center'>
            <h4 className='card-title pt-4'>Prakash Phulchand Umbare</h4>
            <div>
              <a href='mailto:umbare.p95@gmail.com'>
                <p className='card-title '>umbare.p95@gmail.com</p>
              </a>
              <a href='tel:+918424802145'>
                <p className='card-title '>+91 8424802145</p>
              </a>
              <a
                href='http://github.com/pra958'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='card-title'>http://github.com/pra958</p>
              </a>
            </div>
            <button type='button' className='btn btn-primary rounded-0 m-2'>
              <a
                href='https://github.com/pra958/portfolio/raw/main/public/Resume_Prakash.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download='Resume_Prakash.pdf'
                className='text-decoration-none text-white'
              >
                Download My Resume!
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
