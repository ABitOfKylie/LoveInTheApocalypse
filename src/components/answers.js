import React, {PropTypes} from 'react';
import { Link } from "react-router"

const style = {
  margin: 12,
};

const Answers = () => (
  <div>
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
  <div>
     <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
  </div>
);

export default Answers;