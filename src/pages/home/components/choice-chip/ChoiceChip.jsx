import './choice-chip.scss';

export default function ChoiceChip({ chipInfo }) {
  return (
    <div className="choice-chip">
      <div className="choice-chip-logo">
        {chipInfo.logo}
      </div>
      <h4>{chipInfo.title}</h4>
    </div>
  );
}
