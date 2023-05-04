import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Movie details:', { title, genre, director });
    console.log('Login details:', { username, password });
  };

  return (
    <Card className="w-50 mx-auto">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre:</Form.Label>
            <Form.Control type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Director:</Form.Label>
            <Form.Control type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MovieForm;  