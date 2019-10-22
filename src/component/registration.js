import React from 'react';
import fireBiseApp from '../firebase/index';

// let formMessage = fireBiseApp.database().ref('register');

const RenderRegistraion = () => {
  console.log(fireBiseApp);
  

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   // Get Values from the DOM
  //   let name = document.querySelector('#name').value;
  //   let email = document.querySelector('#email').value;
  //   let password = document.querySelector('#password').value;
  //   let bio = document.querySelector('#bio').value;
  //   let job = document.querySelector('#job').value;
  //   let interest = document.querySelector('#interest').value;

  //   //send message values
  //   sendMessage(name, email, password, bio, job, interest);

  //   //Show Alert Message(5)
  //   document.querySelector('.alert').style.display = 'block';

  //   //Hide Alert Message After Seven Seconds(6)
  //   setTimeout(function () {
  //     document.querySelector('.alert').style.display = 'none';
  //   }, 7000);

  //   //Form Reset After Submission(7)
  //   document.getElementById('registrationform').reset();
  // }

  // function sendMessage(name, email, password, bio, job, interest) {
  //   let newFormMessage = formMessage.push();
  //   newFormMessage.set({
  //     name: name,
  //     email: email,
  //     password: password,
  //     bio: bio,
  //     job: job,
  //     Interest: interest
  //   });
  // }

  return (
    <form action="" method="POST" id="registrationform">
      <h1>Register</h1>
      <div className="alert">Message Sent</div>
      <fieldset>

      <legend><span className="section">1</span>Your Basic Info</legend>
        <label className="" htmlFor="name" >Name:</label>
        <input type="text" name="name" id="name" required />

        <label className="" htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">password:</label>
        <input type="password" name="password" id="password" required />
      </fieldset>

      <fieldset>

      <legend><span className="section">2</span>Profile</legend>

        <label className="" htmlFor="bio">Bio:</label>
        <textarea name="bio" id="bio" required></textarea>

        <label htmlFor="job">Job Role:</label>
        <select name="job" id="job" required>
          <optgroup label="Web">
            <option value="front_end_developer" id="frontend">Frontend Developer</option>
            <option value="back_end_developer" id="backend">Backend Developer</option>
            <option value="fullstack_developer" id="fullstack">Fullstack Developer</option>
          </optgroup>
          <optgroup label="Mobile">
            <option value="android" id="android">Android</option>
            <option value="ionic" id="ionic">Ionic</option>
            <option value="phonegap" id="phonegap">PhoneGap</option>
          </optgroup>
        </select>
        <br /><br />
        <label>Interest:</label>

        <select id="interest" required>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>


        <button type="submit">Register</button>
        </fieldset>
    </form>
  )
}
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(UserInfo);
export default RenderRegistraion;
