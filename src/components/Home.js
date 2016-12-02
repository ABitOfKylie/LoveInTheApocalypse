import React from 'react';
import {Card, CardTitle} from 'material-ui';


class Home extends React.Component {

  /**
   * Render the component.
   */
  render() {
    return (
      <Card className="container">
        <CardTitle title="Love In The Apocalypse" subtitle="This is the home page." />
      </Card>
    );
  }

}

export default Home;