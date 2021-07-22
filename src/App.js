import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Products",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Category",
            accessor: "category",
            filter: 'includes',
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Created",
            accessor: "creationDate"
          },
          {
            Header: "Updated",
            accessor: "updateDate"
          },
          {
            Header: "Last purchased",
            accessor: "lastPurchasedDate"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://0.0.0.0:8080/products"); // Allow CORS in browser
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;