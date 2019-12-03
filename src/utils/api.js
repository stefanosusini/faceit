import { useEffect, useState } from "react";

const wait = (time = 500) => new Promise(resolve => setTimeout(resolve, time));

export const fetchChampionship = async (id = "abcd") => {
  await wait(2000 * Math.random());
  return {
    id,
    avatarUrl: "https://placekitten.com/100/100",
    name:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do " +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua",
    skillLevelMin: 1,
    skillLevelMax: 10,
    slotsTotal: 100,
    slotsTaken: 50,
    schedule: new Array(4)
      .fill(null)
      .map((_, i) => new Date().getTime() + 3600000 * (i + 1))
  };
};

export const useFetchChampionship = id => {
  const [championship, setChampionship] = useState(undefined);
  const [loading, setLoading] = useState(championship === null);

  const fetch = () => {
    setLoading(true);
    fetchChampionship(id).then(championship => {
      setChampionship({
        ...championship,
        schedule: championship.schedule.map(date => new Date(date)),
      });
      setLoading(false);
    });
  };

  useEffect(fetch, [id]);

  return [championship, loading, fetch];
};
