import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, TextField } from "../common";
import Pagination from "../common/Pagination";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Button } from "../common/Button";
import { debounce } from "lodash";
import { ILocationData, ILocations } from "../../types";

function LocationsList({ initialData }: { initialData: ILocations }) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [nameQuery, setNameQuery] = useState("");
  const { push } = useRouter();

  const debouncedSearchName = React.useRef(
    debounce((value: string) => {
      setNameQuery(value);
    }, 500)
  ).current;

  const goToLocation = (id: number) => {
    push(`locations/${id}`);
  };

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(`location/?name=${nameQuery}`, {
        params: {
          page,
        },
      })
      .then(res => {
        if (isApiSubscribed) {
          setData(res.data);
          setCount(data.info.count);
        }
      })
      .catch(err => console.log(err));

    return () => {
      isApiSubscribed = false;
    };
    // eslint-disable-next-line
  }, [page, nameQuery]);

  const headers = ["Name", "Action"];

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <TextField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            debouncedSearchName(e.target.value)
          }
          sx={{ mb: 12 }}
          placeholder="Search by name"
        />
      </Stack>

      <TableContainer
        component={Container}
        sx={{
          mb: 20,
          "& td, th": { borderBottom: "none" },
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th:last-child": { textAlign: "right", pr: 94 },
              }}
            >
              {headers.map(item => (
                <TableCell key={item}>
                  <Typography variant="textMedium">{item}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.results.map((item: ILocationData) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Typography variant="textMedium">{item.name}</Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    <Button
                      variant="subtle"
                      size="small"
                      onClick={() => goToLocation(item.id)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data?.info && (
        <Pagination
          count={count}
          page={page}
          setPage={setPage}
          pages={data.info.pages}
        />
      )}
    </>
  );
}

export { LocationsList };
