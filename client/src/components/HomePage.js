import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardMedia
      overlay={
        <CardTitle title="Welcome to Project Rooster Crow!" subtitle="What does it do? Stay tuned!"/>
      }
    >
    {/* image here */}
    </CardMedia>
  </Card>
);

export default HomePage;