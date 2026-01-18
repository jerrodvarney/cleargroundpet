import './cards.scss';

const FREQUENCIES = [
  { id: 'twice', label: 'Two Times a Week', note: 'Best for multiple dogs' },
  { id: 'weekly', label: 'Once a Week', note: 'Most popular' },
  { id: 'biweekly', label: 'Bi-Weekly', note: 'Light usage' },
  { id: 'monthly', label: 'Once a Month', note: 'Maintenance only' },
];

export default function FrequencyCards({ value, onChange }) {
  return (
    <fieldset className="radio-cards">
      <legend>Cleanup Frequency*</legend>

      <div className="radio-card-grid">
        {FREQUENCIES.map((opt) => (
          <label
            key={opt.id}
            className={`radio-card ${value === opt.id ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="frequency"
              value={opt.id}
              checked={value === opt.id}
              onChange={(e) => onChange(e.target.value)}
            />

            <div className="radio-card-content">
              <div className="radio-card-title">{opt.label}</div>
              <div className="radio-card-note">{opt.note}</div>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
