import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/q1" className="text-blue-500 hover:underline">
            Q1 - Find missing numbers
          </Link>
          <p>
            Given the array of n numbers find the missing number. Implement the
            `handleFindClick` function
          </p>
        </li>
        <li>
          <Link href="/q2" className="text-blue-500 hover:underline">
            Q2 - High Order Component
          </Link>
          <p>
            Write a high order component that shows a loading indicator while
            the component is loading.
            <br />
            1- Improve the code readability and maintainability.
            <br />
            2- Handle potential errors more gracefully.
          </p>
        </li>
        <li>
          <Link href="/q3" className="text-blue-500 hover:underline">
            Q3 - Class component or Functional component
          </Link>
          <p>
            Refactor the following code for -
            <br />
            1- Use functional components and hooks instead of class components.
            <br />
            2- Improve the code readability and maintainability.
            <br />
            3- Handle potential errors more gracefully.
            <br />
            4- Optimize the rendering of the user list.
          </p>
        </li>
        <li>
          <Link href="/q4" className="text-blue-500 hover:underline">
            Q4 - Sales Report
          </Link>
          <p>
            Implement the `generateReport` function to generate a sales report
            and complete the UI. Example data is given inside the component.
          </p>
        </li>
        <li>
          <Link href="/q5" className="text-blue-500 hover:underline">
            Q5 - Refactoring the code
          </Link>
          <p>
            Refactor the following code for -
            <br />
            1- Improve efficiency. <br />
            2- Make it more readable and maintainable. <br />
            3- Handle potential errors in data (e.g., negative stock). <br />
            4- Separate the logic into more modular and reusable functions.{" "}
            <br />
            5- Utilize ES6+ features where appropriate.
          </p>
        </li>
      </ul>
    </div>
  );
}
