interface SelectProps {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => (
  <div className="select-wrapper">
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
