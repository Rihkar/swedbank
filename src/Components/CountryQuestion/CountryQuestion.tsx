type CountryQuestionProps = {
    onCountryChange: (value: string) => void,
    onSave: () => void,
    countryValue: string,
    showError: string
  }

const CountryQuestion = ({
  onCountryChange, onSave, countryValue, showError,
}: CountryQuestionProps) => (
  <section>
    <h1>Step 4</h1>
    <select value={countryValue} onChange={(e) => onCountryChange(e.target.value)}>
      <option value="Choose Country">Choose Country</option>
      <option value="Latvia">Latvia</option>
      <option value="Estonia">Estonia</option>
      <option value="Lithuania">Lithuania</option>

    </select>
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
export default CountryQuestion;
