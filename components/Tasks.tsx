import styles from "./Tasks.module.css";

export const Tasks = () => (
  <div className={styles.tasks}>
    <h1>TASKS</h1>
    <ol className={styles.list}>
      <li>
        Implement styles based on the{" "}
        <a
          target="_blank"
          href="https://www.figma.com/file/UP7twWG1B1iZgwyx2fstFl/Currency-Converter?type=design&node-id=0%3A1&mode=design&t=ewryWXTtk71DNang-1"
        >
          Figma design
        </a>
      </li>
      <li>
        {`Modify the code to ensure that the 'Converted Amount' input is updated with a delay of 500ms following the most recent change in the 'Amount' input.`}
      </li>
      <li>{`Fix all Typescript errors in the project, 'yarn build' must pass without errors`}</li>
      <li>{`Fetch currencies and rates from API instead of hard coded values. Needed clients are in 'Client' -folder`}</li>
      <li>{`Add unit test for 'Converter' component`}</li>
      <li>BONUS: Implement Swap button</li>
    </ol>
  </div>
);
