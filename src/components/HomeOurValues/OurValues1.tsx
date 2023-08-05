import './Values.css';
import { Title } from '@mantine/core';

function OurValues1() {
  return (
    <div id="values">
      <div className="values-container">
      <Title
          order={1}
          size={45}
          weight="500"
          my={10}
          className="title value-heading"
        >
          Our Values
        </Title>
        
        <div className="values-box-1">
          <div className="values-content empowerment-section">
            <span className="empowerment-span"></span>
            <h1>Empowerment</h1>
            {/* <hr /> */}
            <p>
            We prioritize empowering individuals and communities to take control of their own lives and work towards positive change.
            </p>
          </div>
          <div className="values-content collab-section">
            <span className="collab-span"></span>
            <h1>Collaboration</h1>
            {/* <hr /> */}
            <p>
            Value of collaboration with other organizations and stakeholders to achieve shared goals and maximize impact is very important to us.
            </p>
          </div>

          <div className="values-content growth-section">
             <span className="growth-span"></span>
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
