import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { Button } from "./Button";
import { hasCookie, deleteCookie } from "cookies-next";

function Header({ faveChar }: { faveChar: string }) {
  const { push, reload } = useRouter();
  const [hasFaveChar, setHasFaveChar] = useState(false);

  const resetFaveChar = () => {
    deleteCookie("fave_char");
    reload();
  };

  useEffect(() => {
    setHasFaveChar(hasCookie("fave_char"));
  }, []);

  return (
    <Stack sx={{ mb: 64 }}>
      <Button
        variant="primary"
        size="small"
        sx={{ width: 100 }}
        onClick={() => push("/")}
      >
        Home
      </Button>
      <Stack direction="row" alignItems="center" sx={{ mt: 32 }}>
        <h1>Hello, {hasFaveChar ? faveChar : "Guest"}</h1>
        {hasFaveChar && (
          <Button
            variant="subtle"
            size="small"
            sx={{ ml: 16 }}
            onClick={resetFaveChar}
          >
            reset your character
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export { Header };
