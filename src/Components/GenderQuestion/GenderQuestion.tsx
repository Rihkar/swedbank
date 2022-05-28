type GenderQuestionProps = {
  onRadioChange: (value: string) => void
  onSave: () => void
  showError: string
  gender: string
}

const GenderQuestion = ({
  onRadioChange, onSave, showError, gender,
}: GenderQuestionProps) => (
  <section>
    <h1>Step 2</h1>
    <label htmlFor="male">
      <input
        checked={gender === 'male'}
        className="radio"
        name="gender"
        id="male"
        type="radio"
        value="male"
        onChange={(e) => {
          onRadioChange(e.target.value);
        }}
      />
      Male
    </label>
    <label htmlFor="female">
      <input
        checked={gender === 'female'}
        className="radio"
        name="gender"
        id="female"
        type="radio"
        value="female"
        onChange={(e) => {
          onRadioChange(e.target.value);
        }}
      />
      Female
    </label>
    {showError && <p className="error">{showError}</p>}
    <button
      className="btn-primary"
      onClick={() => {
        onSave();
      }}
    >
      Save
    </button>
  </section>
);
export default GenderQuestion;
