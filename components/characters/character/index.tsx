import React, { useState, useEffect } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Button, Container } from "../../common";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { ICharacterData } from "../../../types";
import getIdFromURL from "../../../utils/getIdFromURL";

function CharacterData({ data }: { data: ICharacterData }) {
  const { reload } = useRouter();
  const [isFaveChar, setIsFaveChar] = useState(false);

  const setFaveChar = (name: string) => {
    setCookie("fave_char", name, { maxAge: 60 * 60 * 24 });
    reload();
  };

  useEffect(() => {
    setIsFaveChar(getCookie("fave_char") === data.name);
  }, []);

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 16 }}>
        <Avatar
          alt="avatar"
          src={data.image}
          sx={{ width: 96, height: 96, mb: 16 }}
        />
        {!isFaveChar && (
          <Button
            variant="primary"
            size="medium"
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              setFaveChar(data.name)
            }
          >
            set as favorite character
          </Button>
        )}
      </Stack>

      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Name:
        </Typography>
        <Typography variant="textMedium">{data.name}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Status:
        </Typography>
        <Typography variant="textMedium">{data.status}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Species:
        </Typography>
        <Typography variant="textMedium">{data.species}</Typography>
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Location:
        </Typography>
        {data.location.url ? (
          <Link href={`/locations/${getIdFromURL(data.location.url)}`}>
            {data.location.name}
          </Link>
        ) : (
          <Typography variant="textMedium">{data.location.name}</Typography>
        )}
      </Stack>
      <Stack direction="row" sx={{ mb: 16 }}>
        <Typography sx={{ mr: 16 }} variant="textSmall" color="primary">
          Origin:
        </Typography>
        {data.origin.url ? (
          <Link href={`/locations/${getIdFromURL(data.origin.url)}`}>
            {data.origin.name}
          </Link>
        ) : (
          <Typography variant="textMedium">{data.origin.name}</Typography>
        )}
      </Stack>
      <Stack alignItems="flex-start">
        <Typography sx={{ mb: 8 }} variant="textSmall" color="primary">
          Episodes:
        </Typography>
        {data.episode.map(episode => (
          <Link href={episode} key={episode}>
            {episode}
          </Link>
        ))}
      </Stack>
    </Container>
  );
}

export default CharacterData;
