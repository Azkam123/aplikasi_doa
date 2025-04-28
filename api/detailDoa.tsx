import { useState } from "react";

const [ID, setID] = useState("")

const fetchDetailDoa = async ({ id }: { id: string }) => {
  const response = await fetch(`https://open-api.my.id/api/doa/${id}`);
  const data = await response.json();
  return data;
};
