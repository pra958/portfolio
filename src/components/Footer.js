const Footer = () => {
  return (
    <>
      <div style={{ height: '65px' }}></div>
      <footer className='page-footer font-small shadow m-0 py-3'>
        <div className='footer-copyright text-center py-3'>
          <span> Designed using Bootstrap on React</span>
          <br />
          <span> Designed By </span>
          <a
            href='https://github.com/pra958'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-info'>pra958</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
