import React from "react";
import { Stack, Typography } from "@mui/material";
import { ILocationData } from "../../../types";
import getIdFromURL from "../../../utils/getIdFromURL";
import { Container } from "../../common";
import Resident from "./Resident";

function LocationData({ data }: { data: ILocationData }) {
  return (
    <Container>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Name:
        </Typography>
        <Typography variant="textMedium">{data.name}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Type:
        </Typography>
        <Typography variant="textMedium">{data.type}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Dimension:
        </Typography>
        <Typography variant="textMedium">{data.dimension}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Created:
        </Typography>
        <Typography variant="textMedium">{data.created}</Typography>
      </Stack>
      <Stack alignItems="flex-start">
        <Typography sx={{ mb: 16, mt: 32 }} variant="textSmall" color="primary">
          Residents:
        </Typography>
        {data.residents.map(resident => (
          <Typography key={resident} sx={{ mb: 8 }} variant="textMedium">
            <Resident id={getIdFromURL(resident)} />
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}

export default LocationData;
