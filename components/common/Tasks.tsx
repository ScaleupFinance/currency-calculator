"use client";

import { useEffect, useState } from "react";
import { useLocalStorageValue } from "@react-hookz/web";

const tasks = (path: string) => [
  {
    title: "CSS Styling",
    link: {
      label: "Figma File",
      url: "https://www.figma.com/file/UP7twWG1B1iZgwyx2fstFl/Currency-Converter?type=design&mode=dev",
    },
    items: [
      `Center the <pre>Converter</pre> component on the page, <a href='vscode://file/${path}/app/page.module.css'>app/page.module.css</a>`,
      `Fix the <pre>Form</pre> component styling, <a href='vscode://file/${path}/components/Form.module.css'>components/Form.module.css</a>`,
    ],
  },
  {
    title: "Typescript",
    link: null,
    items: [
      "Fix all Typescript errors in the project.<br/><pre>npm run build</pre> or <pre>yarn build</pre> must pass without errors",
    ],
  },
  {
    title: "API",
    link: {
      label: "Fetch API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    },
    items: [
      `Replace hard coded currencies with data fetched from <pre>http://localhost:3000/api/currencies</pre> with Fetch API. <br/>Use either server side fetching on <a href='vscode://file/${path}/app/page.tsx'>app/page.tsx</a><br/>or client side fetching on <a href='vscode://file/${path}/components/Converter.tsx'>components/Converter.tsx</a>`,
    ],
  },
  {
    title: "Unit testing",
    link: {
      label: "Jest",
      url: "https://jestjs.io/docs/getting-started",
    },
    items: [
      `Write real unit tests to <a href='vscode://file/${path}/components/Form.test.tsx'>components/Form.test.tsx</a> file.<br/>Run tests with <pre>npm test</pre> or <pre>yarn test</pre> command`,
    ],
  },
  {
    title: "Bonus",
    link: null,
    items: ["Implement Swap button"],
  },
];

interface TasksProps {
  path: string;
}

export const Tasks = ({ path }: TasksProps) => {
  const [isClient, setIsClient] = useState(false);
  const { value: step, set: setStep } = useLocalStorageValue("tasks-step", {
    defaultValue: 0,
  });
  const { value: visible, set: setVisible } = useLocalStorageValue(
    "tasks-visible",
    {
      defaultValue: true,
    }
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const allTasks = tasks(path);
  const task = allTasks[step ?? 0];
  const show = visible ?? true;

  if (!isClient) return null;

  return (
    <div className={show ? "tasks" : "tasks no-width"}>
      {show ? (
        <>
          <button onClick={() => setVisible(false)}>X</button>
          <h1>{task.title}</h1>
          {task.link && (
            <p>
              <a target="_blank" href={task.link.url}>
                {task.link.label}
              </a>
            </p>
          )}
          <ol>
            {task.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
          {!!step && step > 0 && (
            <button className="left" onClick={() => setStep((step ?? 0) - 1)}>
              &larr;
            </button>
          )}
          {(step ?? 0) < allTasks.length - 1 && (
            <button onClick={() => setStep((step ?? 0) + 1)}>
              Task Complete &rarr;
            </button>
          )}
        </>
      ) : (
        <button onClick={() => setVisible(true)}>?</button>
      )}
    </div>
  );
};
