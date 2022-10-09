import React, { useEffect, useState } from "react";
import MuiPagination from "@mui/material/Pagination";
import { Icon, PaginationItem } from "@mui/material";
import { Button } from "../../common/Button";
import { IPagination } from "../../../types";

const PrevButton = () => (
  <Button
    variant="pagination"
    size="small"
    startIcon={<Icon className="icon-arrow-left" />}
  >
    Previous
  </Button>
);

const NextButton = () => (
  <Button
    variant="pagination"
    size="small"
    endIcon={<Icon className="icon-arrow-right" />}
  >
    Next
  </Button>
);

function Pagination({ page, setPage, count, pages }:IPagination) {
  const handleChange = (event:any, value:any) => {
    setPage(value);
  };

  return (
    <MuiPagination
      count={pages}
      page={page}
      onChange={handleChange}
      renderItem={item => (
        <PaginationItem
          components={{ previous: PrevButton, next: NextButton }}
          {...item}
        />
      )}
      sx={{
        "& li:first-child": {
          order: 1,
          ml: 60,
          mr: 8,
        },
        "& li:last-child": {
          order: 1,
        },
        "& .MuiPaginationItem-root": {
          color: "neutrals.titleActive",
          fontSize: 14,
          fontWeight: 700,
          borderRadius: "6px",
          backgroundColor: "transparent",
          px: 0,
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          color: "neutrals.white",
          backgroundColor: "neutrals.titleActive",
        },
      }}
    />
  );
}

export default Pagination;
