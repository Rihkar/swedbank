/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTooltip from 'react-tooltip';

type AboutMeQuestionProps = {
    onAboutMeChange: (value: string) => void
    onSave: () => void
    AboutMeValue: string
    showError: string
  }

const AboutMeQuestion = ({
  onAboutMeChange, onSave, AboutMeValue, showError,
}: AboutMeQuestionProps) => (
  <section>
    <h1>Step 5</h1>
    <a data-tip="What are you interested in?"> ? </a>

    <ReactTooltip place="right" type="dark" effect="solid" />
    <div>
      <label htmlFor="aboutMe">
        <textarea
          className="form-control"
          value={AboutMeValue}
          id="aboutMe"
          onChange={(e) => onAboutMeChange(e.target.value)}
        />
      </label>
    </div>
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
export default AboutMeQuestion;
