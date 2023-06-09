import style from "./BookingForm.style";

const BookingForm = () => {
  return (
    <div className="bookingMenu pb-5">
      <form
        action="http://google.ro"
        className="form-menu d-flex align-items-center justify-content-center"
      >
        <div style={style.inputContainer}>
          <select
            id="my-selector"
            className="form-control"
            style={style.formSelect}
          >
            <option value="option1">2 adults</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <hr style={style.bookingHr} />
        <div style={style.inputContainer}>
          <select
            id="selector"
            className="form-control"
            style={style.formSelect}
          >
            <option value="option1">0 children (&lt;12 years)</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <hr style={style.bookingHr} />

        <div style={style.inputContainer}>
          <p
            style={{
              ...style.brBorderRight,
              ...style.centeredText,
              ...style.paragraph,
            }}
          >
            29-05-2023
          </p>
        </div>

        <div style={style.inputContainer}>
          <p style={{ ...style.centeredText, ...style.paragraph }}>
            30-05-2023
          </p>
        </div>
        <hr style={style.bookingHr} />

        <div style={style.inputContainer}>
          <input
            type="text"
            style={{ ...style.centerPlaceholder, ...style.formSelect }}
            placeholder="Promocode"
            className="form-control"
          />
        </div>
        <div style={{ ...style.inputContainer, ...style.buttonContainer }}>
          <button
            type="submit"
            className="form-control"
            style={style.formButton}
          >
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};
export default BookingForm;
