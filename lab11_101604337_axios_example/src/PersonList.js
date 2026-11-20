
import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Spinner, Alert } from 'react-bootstrap';

class PersonList extends Component {
  state = {
    persons: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons, loading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          error: 'Unable to load users.',
          loading: false
        });
      });
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    const { persons, loading, error } = this.state;

    if (loading) {
      return <div className="loading"><Spinner animation="border" /><p>Loading users...</p></div>;
    }

    if (error) {
      return <Alert variant="danger">{error}</Alert>;
    }

    return (
      <Container className="user-container">
        <h2 className="user-heading">User List</h2>

        {persons.map((person, index) => (
          <Card className="person-card" key={person.login.uuid}>
            <Card.Body>
              <div className="person-content">

                <div className="person-image">
                  <img src={person.picture.large} alt={person.name.first} />

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => this.deletePerson(index)}
                  >
                    Delete
                  </Button>
                </div>

                <div className="person-details">
                  <p><strong>First Name:</strong> {person.name.first}</p>
                  <p><strong>Last Name:</strong> {person.name.last}</p>
                  <p><strong>Gender:</strong> {person.gender}</p>
                  <p><strong>Title:</strong> {person.name.title}</p>
                  <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</p>
                  <p><strong>Email:</strong> {person.email}</p>
                  <p><strong>Date of Birth:</strong> {new Date(person.dob.date).toLocaleDateString()}</p>
                  <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
                  <p><strong>Phone:</strong> {person.phone}</p>
                  <p><strong>Cell:</strong> {person.cell}</p>
                </div>

              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default PersonList;
