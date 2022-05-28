type EmailQuestionProps = {
    onEmailChange: (value: string) => void,
    onSave: () => void,
    emailInput: string,
    showError: string
  }

const EmailQuestion = ({
  onEmailChange, onSave, emailInput, showError,
}: EmailQuestionProps) => (
  <section>
    <h1>Step 3</h1>
    <label htmlFor="email">
      <input
        className="form-control"
        name="email"
        id="email"
        type="email"
        placeholder="email"
        value={emailInput}
        onChange={(e) => {
          onEmailChange(e.target.value);
        }}
      />
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
export default EmailQuestion;
