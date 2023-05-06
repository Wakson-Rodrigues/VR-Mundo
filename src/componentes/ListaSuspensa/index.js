import styles from "./ListaSuspensa.module.css";

const ListaSuspensa = ({
  text,
  name,
  options,
  handleOnChange,
  value,
}) => {
  return (
    <div className={styles.listasuspensa}>
      <label> {text}:</label>
      <select
        name={name}
        value={value || ""}
        id={name}
        onChange={handleOnChange} 
      >
        <option>selecione uma categoria</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
