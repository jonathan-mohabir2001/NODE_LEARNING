import './App.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>TyDaBarber</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        accusantium quas voluptatum quidem. Quisquam, quae. Quisquam, quae.
        Quisquam, quae. Quisquam, quae.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        accusantium quas voluptatum quidem. Quisquam, quae. Quisquam, quae.
        Quisquam, quae. Quisquam, quae.
      </p>

      <div>
        <h2>Pricing</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        </p>

        <ul>
          <li>Shave</li>
          <li>Beard Trim</li>
          <li>Line Up</li>
          <li>Line Up & Beard Trim</li>
          <li>Line Up & Beard Trim & Shave</li>
        </ul>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Location</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
      </p>

      <h1>Hours</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        <ul>
          <li>Monday: 9am - 5pm</li>
          <li>Tuesday: 9am - 5pm</li>
          <li>Wednesday: 9am - 5pm</li>
          <li>Thursday: 9am - 5pm</li>
          <li>Friday: 9am - 5pm</li>
          <li>Saturday: 9am - 5pm</li>
          <li>Sunday: 9am - 5pm</li>
        </ul>
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Current Appoitments</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
      </p>

      <h1>Book an Appoitment</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
      </p>

      <h1>Leave a Review</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>

          <input type="email" id="email" name="email" />

          <label htmlFor="review">Review</label>

          <textarea id="review" name="review" rows="4" cols="50"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </p>

      <h1>Follow Me On Social Media</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </p>
    </div>
  );
}

export default App;
