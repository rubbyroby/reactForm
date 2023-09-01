import React, { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const errors = { 
    uname: "Votre identifiant est incorrect.", 
    upass: "Votre mot de passe est incorrect." 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass } = document.forms[0];
    setName(uname.value);
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== upass.value) {
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleChange = (event) => {
    setMyCity(event.target.value)
  }
  const [myCity, setMyCity] = useState("Casablanca");
  const [loisirs, setloisirs] = useState("Sport");

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-form">
      <div className="title">Inscription</div>
      <div className="form">
        <form onSubmit={handleSubmit}>         
            <div>
            <label>L'identifiant </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
            </div>
          <br></br>
            <label>Mot de passe </label>
            <input type="password" name="upass" required />
            {renderErrorMessage("upass")}
            <br></br>
            <br></br>
            <label>Date de naissance </label>
            <input type="date" name="udate" required />
            {renderErrorMessage("upass")}
            <br></br>
            <br></br>
            
            <label>Ville </label>
            <select value={myCity} onChange={handleChange}>
              <option value="Casablanca">Casablanca</option>
              <option value="Agadir">Agadir</option>
              <option value="Fes">Fes</option>
            </select>
            
            <br></br>
            <br></br>
          <label>Genre</label>
          <input type="radio" id="checkbox"name="Homme" />
          <label for="Homme" id="checkbox">Homme</label>
          <input type="radio" id="checkbox" name="Femme" />
          <label for="Femme" id="checkbox">Femme</label>
          
          <br></br>
          <br></br>
          <label>loisirs</label>
          <span value={loisirs} onChange={handleChange}>
          <input type="checkbox" id="checkbox"name="Sport" />
          <label for="Sport" id="checkbox">Sport</label>
          <input type="checkbox" id="checkbox" name="Lecture" />
          <label for="Lecture" id="checkbox">Lecture</label>
          <input type="checkbox" id="checkbox" name="Musique" />
          <label for="Musique" id="checkbox">Musique</label>
          </span>
          <br></br>
          <br></br>

          <label for="avatar">Photo</label> 
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>

          <div className="button-container">
            <input type="submit" value="S'inscrire" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="app">
        {isSubmitted ? <div>
          <div className="title">Je suis {name} né à {myCity} et mes loisirs sont : {loisirs}</div>
          </div> : renderForm}
    </div>
  );
}

export default App;