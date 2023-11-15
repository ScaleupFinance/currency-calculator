"use client";

import { Fragment, useEffect, useState } from "react";
import { useLocalStorageValue } from "@react-hookz/web";

const tasks = (path: string) => [
  {
    title: "CSS Styling",
    links: [
      {
        label: "Figma File",
        url: "https://www.figma.com/file/UP7twWG1B1iZgwyx2fstFl/Currency-Converter?type=design&mode=dev",
      },
      {
        label: "MDN CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    items: [
      `Center the content on the page, <a href='vscode://file/${path}/app/page.module.css'>app/page.module.css</a>`,
      `Fix the <pre>Form</pre> component styling, <a href='vscode://file/${path}/components/Form.module.css'>components/Form.module.css</a>`,
      `Fix the <pre>Separator</pre> component styling, <a href='vscode://file/${path}/components/Separator.module.css'>components/Separator.module.css</a>`,
    ],
  },
  {
    title: "Typescript",
    links: [
      {
        label: "Typescript",
        url: "https://www.typescriptlang.org/docs",
      },
    ],
    items: [
      "Fix all Typescript errors in the project.<br/><pre>npm run lint</pre> or <pre>yarn lint</pre> must pass without errors",
    ],
  },
  {
    title: "API",
    links: [
      {
        label: "Fetch API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
    ],
    items: [
      `Replace hard coded currencies with data fetched from <pre>http://localhost:3000/api/currencies</pre> with Fetch API.<br/>Use either server side fetching on <a href='vscode://file/${path}/app/page.tsx'>app/page.tsx</a><br/>or client side fetching on <a href='vscode://file/${path}/components/Converter.tsx'>components/Converter.tsx</a><br/>To see the response, you can open <a href='/api/currencies' target='_blank'>API in browser</a>`,
    ],
  },
  {
    title: "Unit testing",
    links: [
      {
        label: "Jest",
        url: "https://jestjs.io/docs/getting-started",
      },
      {
        label: "React Testing Library",
        url: "https://testing-library.com/docs/react-testing-library/intro",
      },
    ],
    items: [
      `Unit test in <a href='vscode://file/${path}/components/Form.test.tsx'>components/Form.test.tsx</a> has three placeholders for the tests for the <pre>Form</pre> component. What are the three most important things to test in this component?`,
      `Start the test runner with <pre>npm test</pre> or <pre>yarn test</pre> command and write the three tests you chose`,
    ],
  },
  {
    title: "Bonus",
    links: null,
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
          {task.links && (
            <p>
              {task.links.map((link, index) => (
                <Fragment key={link.url}>
                  <a target="_blank" href={link.url}>
                    {link.label}
                  </a>
                  {index < task.links.length - 1 && " | "}
                </Fragment>
              ))}
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
