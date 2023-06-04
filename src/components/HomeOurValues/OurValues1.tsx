import './Values.css';

function OurValues1() {
  return (
    <div id="values">
      <div className="values-container">
        <h1 className="values-heading">OUR VALUES</h1>
        
        <div className="values-box-1">
          <div className="values-content empowerment-section">
            <h1>Empowerment</h1>
            {/* <hr /> */}
            <p>
            We prioritize empowering individuals and communities to take control of their own lives and work towards positive change.
            </p>
          </div>
          <div className="values-content collab-section">
            <h1>Collaboration</h1>
            {/* <hr /> */}
            <p>
            Value of collaboration with other organizations and stakeholders to achieve shared goals and maximize impact is very important to us.
            </p>
          </div>

          <div className="values-content growth-section">
            <h1>Growth</h1>
            {/* <hr /> */}
            <p>
            The most effective solutions to violence and exploitation will be
              crafted by a diverse and collaborative community, with those most
              affected by injustice at the head of the table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues1;
