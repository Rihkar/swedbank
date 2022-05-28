import './App.scss';
import { useState } from 'react';
import GenderQuestion from './Components/GenderQuestion/GenderQuestion';
import EmailQuestion from './Components/EmailQuestion/EmailQuestion';
import CountryQuestion from './Components/CountryQuestion/CountryQuestion';
import AboutMeQuestion from './Components/AboutMeQuestion/AboutMeQuestion';

const initialFormData = {
  fullName: '',
  gender: '',
  email: '',
  country: '',
  aboutMe: '',
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [error, setError] = useState('');

  return (
    <div className="container">

      <button
        className="btn-primary"
        disabled={activeQuestion === 0}
        onClick={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
      >
        Back
      </button>
      <div>
        {activeQuestion === 0 && (
        <div>
          <h3> Form made by Rihards</h3>
          <h1>Answer Truthfully</h1>
          <button
            className="btn-primary"
            onClick={() => {
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            {'I\'m in '}
          </button>
        </div>

        )}
      </div>
      <div className="sub-container">
        {activeQuestion === 1 && (
        <section>
          <h1>Step 1</h1>
          <label htmlFor="fullname">
            Fullname
            <br />
            <input
              className="form-control"
              id="fullname"
              type="text"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
              }}
            />
            {error && <p className="error">{error}</p>}
          </label>
          <button
            className="btn-primary"
            onClick={() => {
              setError('');

              if (!formData.fullName) {
                setError('This field is mandatory');

                return;
              }

              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Save
          </button>
        </section>
        )}
        {activeQuestion === 2 && (
        <GenderQuestion
          onRadioChange={(value) => {
            setFormData({ ...formData, gender: value });
          }}
          showError={error}
          gender={formData.gender}
          onSave={() => {
            setError('');

            if (!formData.gender) {
              setError('This field is mandatory');

              return;
            }
            setActiveQuestion(activeQuestion + 1);
          }}
        />
        )}
        {activeQuestion === 3 && (
        <EmailQuestion
          onEmailChange={(value) => {
            setFormData({ ...formData, email: value });
          }}
          emailInput={formData.email}
          showError={error}
          onSave={() => {
            setError('');

            if (!formData.email) {
              setError('This field is mandatory');

              return;
            }
            setActiveQuestion(activeQuestion + 1);
          }}
        />
        )}
        {activeQuestion === 4 && (
        <CountryQuestion
          onCountryChange={(value) => {
            setFormData({ ...formData, country: value });
          }}
          countryValue={formData.country}
          showError={error}
          onSave={() => {
            setError('');

            if (!formData.country) {
              setError('This field is mandatory');

              return;
            }
            setActiveQuestion(activeQuestion + 1);
          }}
        />
        )}
        {activeQuestion === 5 && (
        <AboutMeQuestion
          onAboutMeChange={(value) => {
            setFormData({ ...formData, aboutMe: value });
          }}
          AboutMeValue={formData.aboutMe}
          showError={error}
          onSave={() => {
            setError('');

            if (!formData.aboutMe) {
              setError('This field is mandatory');

              return;
            }
            setActiveQuestion(activeQuestion + 1);
          }}
        />
        )}
        {activeQuestion === 6 && (
        <div>
          <div>
            { `Fullname: ${formData.fullName}`}
          </div>
          <div>
            { `Gender: ${formData.gender}`}
          </div>
          <div>
            { `Email: ${formData.email}`}
          </div>
          <div>
            { `Country: ${formData.country}`}
          </div>
          <div>
            { `Interests: ${formData.aboutMe}`}
          </div>
        </div>

        )}
      </div>

    </div>
  );
};

export default App;
