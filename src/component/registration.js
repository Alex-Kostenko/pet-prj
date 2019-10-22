import React, { Component } from 'react';

const RenderRegistraion = () => {
  
  return (
    <form action="" method="POST" id="registrationform">
      <h1>Register</h1>
      <div class="alert">Message Sent</div>
      <fieldset>

      <legend><span class="section">1</span>Your Basic Info</legend>
        <label class="" for="name">Name:</label>
        <input type="text" name="name" value="" id="name" required />

        <label class="" for="email">Email:</label>
        <input type="email" name="email" value="" id="email" required />

        <label for="password">password:</label>
        <input type="password" name="password" value="" id="password" required />
      </fieldset>

      <fieldset>

      <legend><span class="section">2</span>Profile</legend>

        <label class="" for="bio">Bio:</label>
        <textarea name="bio" id="bio" required></textarea>

        <label for="job">Job Role:</label>
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


        <button type="submit" >Register</button>
        </fieldset>
    </form>
  )
}

export default RenderRegistraion;
