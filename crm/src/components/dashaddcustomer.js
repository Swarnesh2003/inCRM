import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {addCustomerDetails} from '../services/ApiService'
function Dashaddcustomer() {
  useEffect(()=>{
    let mount= true
    getCustomer()
    .then(res => {
        setCustomers(res)
        return() => mount = false
    })
},[])
 const handleNewCustomer = (e) =>{
  addCustomerDetails(e.target).then(
    res => {
      window.alert('Successfully Inserted')
    }
  )
  }

  return (
    <Form onSubmit={handleNewCustomer}>
        <h3>Add Customer</h3>
        <br></br>
        <h4>Customer Details</h4>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='first_name' placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='last_name' placeholder="Last Name" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Contact</Form.Label>
          <Form.Control type="text" name='contact' placeholder="Contact" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name='address_1'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" name='address_2'/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name='city'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name='state'>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
            <option>Telungana</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pincode</Form.Label>
          <Form.Control name='pincode' />
        </Form.Group>
      </Row>
      <br></br>
      <h4>Model Details</h4>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control type='date' name='purchase_date'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Model</Form.Label>
          <Form.Select defaultValue="Choose..." name='model'>
            <option>Mustang GT</option>
            <option>Aspire</option>
            <option>Ecosport</option>
            <option>FreeStyle</option>
            <option>Endevor</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Serial Number
          </Form.Label>
          <Form.Control name='sr_number'/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <br></br>
    </Form>
    
  );
}

export default Dashaddcustomer;