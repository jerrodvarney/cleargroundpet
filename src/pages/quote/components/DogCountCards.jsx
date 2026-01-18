import './cards.scss';

const DOG_OPTIONS = [
  { value: 1, title: '1 Dog', note: 'Standard yard' },
  { value: 2, title: '2 Dogs', note: 'Most common' },
  { value: 3, title: '3 Dogs', note: 'Higher load' },
  { value: 4, title: '4+ Dogs', note: 'May require custom quote' },
];

export default function DogCountCards({ value, onChange }) {
  return (
    <fieldset className="radio-cards">
      <legend>Number of Dogs*</legend>

      <div className="radio-card-grid">
        {DOG_OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className={`radio-card ${value === opt.value ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="numDogs"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />

            <div className="radio-card-content">
              <div className="radio-card-title">{opt.title}</div>
              <div className="radio-card-note">{opt.note}</div>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
