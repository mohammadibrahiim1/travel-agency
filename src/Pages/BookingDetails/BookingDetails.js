import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './BookingDetails.css'

const BookingDetails = () => {
  const details = useLoaderData();
  // console.log(details);

  const {_id,name,price}= details
    return (
        <div>
          <section>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{name}</th>
      <th scope="col">Last</th>
      <th scope="col">{price}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{ price && !details.paid && <Link className='btn btn-light' to={`/paymentcard/${_id}`} > make a payment</Link>}
{ price && details.paid && <span className='btn btn-light' > payment complete</span>}
          </section>
        </div>
    );
};

export default BookingDetails;