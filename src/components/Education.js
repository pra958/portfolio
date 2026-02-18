const Education = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='education'></div>
      <div className='container card shadow'>
        <div className='row'>
          <div className='col p-4'>
            <h3 className='text-center'>Education</h3>
            <hr />
            <table className='table table-borderless'>
              <tbody>
                <tr>
                  <th colSpan='2'>Bachelor, Computer Engineering</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    Lokmanya Tilak College of Engineering, Koparkhairane, Navi Mumbai
                    <br />
                    (Mumbai University)
                    <br /> Navi Mumbai, Maharashtra
                  </td>
                  <td>
                    Graduated, November 2020
                    <br />
                    CGPI 6.62
                    <br />
                    Marks 63.00 %
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th colSpan='2'>Diploma</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    AIT Polytechnique, Ch. Sambhaji Nagar <br />
                    (Maharashtra State Board of Technical Education) <br />
                    Mumbai, Maharashtra
                  </td>
                  <td>
                    Passed, April 2016
                    <br />
                    Marks 72.42 %
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th colSpan='2'>HSC</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    D.D.M. Junior College, Charai, Thane (W) <br />
                    (Maharashtra State Board) <br />
                    Mumbai, Maharashtra
                  </td>
                  <td>
                    Passed, April 2012
                    <br />
                    Marks 49.00 %
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th colSpan='2'>SSC</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    Brahmin Shikshan Mandal's School, Vartak Nagar, Thane (W)
                    <br /> (Maharashtra State Board)
                    <br /> Thane, Maharashtra
                  </td>
                  <td>
                    Passed, March 2011 <br />
                    Marks 64.73 %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
