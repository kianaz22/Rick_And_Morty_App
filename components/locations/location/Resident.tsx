import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { Stack, Typography } from "@mui/material";
import { Button } from "../../common";
import { useRouter } from "next/router";
import { ICharacterData } from "../../../types";

function Resident({ id }: { id: string }) {
  const [data, setData] = useState<ICharacterData | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(`character/${id}`)
      .then(res => {
        if (isApiSubscribed) setData(res.data);
      })
      .catch(err => console.log(err));

    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  return data ? (
    <Stack direction="row" alignItems="center">
      <Typography sx={{ mr: 8 }} variant="textMedium">
        {data.name}
      </Typography>
      <Button
        variant="text"
        size="small"
        onClick={() => {
          push(`/characters/${id}`);
        }}
      >
        Details
      </Button>
    </Stack>
  ) : null;
}

export default Resident;
