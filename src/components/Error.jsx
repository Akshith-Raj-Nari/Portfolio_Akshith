import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Occured</h1>
      <h3>
        {err.status} - {err.statusText}
      </h3>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
