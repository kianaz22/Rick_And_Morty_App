import { Stack, Typography } from "@mui/material";
import React from "react";
import { IPagination } from "../../../types";
import Pagination from "./Pagination";

function index({ page, setPage, count, pages }: IPagination) {
  return (
    <Stack direction="row" sx={{ mb: 32 }}>
      <Typography
        variant="textMediumBold"
        color="neutrals.body"
        sx={{ mr: "auto", ml: 20 }}
      >
        {Math.min(20 * page, count)}
        {" of "} {count} Results
      </Typography>
      <Pagination page={page} setPage={setPage} count={count} pages={pages} />
    </Stack>
  );
}

export default index;
