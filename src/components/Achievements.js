const Achievements = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='achievements'></div>
      <div className='container card shadow p-4'>
        <h3 className='text-center'>Achievements</h3>
        <hr />
        <div className='row justify-content-center p-2'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <h4 className='text-center'>Certification</h4>
            <h6>MongoDB Essentials - Understand the Basics of MongoDB</h6>
            <p>
              Certified By: Udemy <br />
              Year of Completion: 2019
            </p>
            <h6>Workshop on Machine Learning</h6>
            <p>
              Certified By: College Campus <br />
              Year of Completion: 2020
            </p>
            <h6>Hadoop Basic Course for Beginners to Professionals</h6>
            <p>
              Certified By: Edulearners Technologies and Udemy <br />
              Year of Completion: 2019
            </p>
            <h6>Web Design with WordPress: Everything from Beginning to End</h6>
            <p>
              Certified By: Udemy <br />
              Year of Completion: 2019
            </p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <h4 className='text-center'>Event</h4>
            <h6>Workshop on Basic JavaScript, Node.js and Express.js</h6>
            <p>
              Held four-day workshop in College Campus for 40 participants.
              <br />
              Was Instructor for three days, taught JSON, Node.js and Express.js
              basics.
              <br />
              Got good feedbacks from participants.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
