import Stack from "@mui/material/Stack";
import { Box, TextField } from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

export default function AutocompleteTag() {
  const top10Films = [
    {
      label: "The Shawshank Redemption",
      year: 1994,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
    },
    {
      label: "The Godfather",
      year: 1972,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      label: "The Godfather: Part II",
      year: 1974,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
    },
    {
      label: "The Dark Knight",
      year: 2008,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      label: "12 Angry Men",
      year: 1957,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
    },
    {
      label: "Schindler's List",
      year: 1993,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      label: "Pulp Fiction",
      year: 1994,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
    },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      label: "The Good, the Bad and the Ugly",
      year: 1966,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      label: "Fight Club",
      year: 1999,
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
    },
  ];

  const [currentValue, setCurrentValue] = useState<
    | {
        label: string;
        year: number;
      }[]
  >([{ label: "", year: -1 }]);

  const handleonSelectFilm = (event: any, value: string) => {
    const selectedFilm = top10Films.filter((el) => {
      return el.label == value;
    });

    setCurrentValue(selectedFilm as any);
  };

  const selectFistLetter = top100Films.map((item) => {
    const firstLetter = item.title[0].toUpperCase();

    return {
      ...item,
      ["firstLetter"]: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    };
  });

  return (
    <>
      {/* Basic Auto Complete */}

      <Box component="h2" textAlign="center">
        Basic Auto Complete
      </Box>
      <Box component="div" textAlign="center" mb="15px">
        {currentValue?.map((el) => {
          const { label, year } = el;
          return (
            <div key={el.label}>
              <Box component="span" color="blue">
                {label}
              </Box>

              <Box component="span" color="red">
                {" "}
                {year >= 0 && year}
              </Box>
            </div>
          );
        })}
      </Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Autocomplete
          options={top10Films.map((item) => {
            return item.label;
          })}
          sx={{ width: 300 }}
          renderInput={(params) => {
            return <TextField {...params} label="Movie" />;
          }}
          onChange={(event, value) => handleonSelectFilm(event, value as any)}
        ></Autocomplete>
      </Stack>
      <Divider sx={{ margin: "12px 12px" }}>
        <Chip label="Custom Options" color="primary" size="medium" />
      </Divider>

      {/* Custom Options */}
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Autocomplete
          options={top10Films}
          // open
          autoHighlight
          // fullWidth
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.label as any}
          getOptionDisabled={(option) => {
            return ["12 Angry Men", "The Godfather: Part II"].includes(
              option.label as any
            );
          }}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Stack spacing={1} direction="row" {...(optionProps as any)}>
                <Box>
                  <Avatar alt={option.label} src={option.img} />
                </Box>
                <Box> {option.label}</Box>
              </Stack>
            );
          }}
          renderInput={(params) => {
            return <TextField {...params} label="Custom Option" />;
          }}
          onOpen={(event) => {}}
        ></Autocomplete>
      </Stack>

      <Divider sx={{ margin: "12px 12px" }}>
        <Chip label="Group by Options" color="success" size="medium" />
      </Divider>
      {/* Group by Option */}
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Autocomplete
          multiple
          options={selectFistLetter.sort((a, b) =>
            a.title < b.title ? -1 : 1
          )}
          autoHighlight
          // fullWidth
          sx={{ width: 300 }}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title as any}
          renderInput={(params) => {
            return <TextField {...params} label="Custom Option" />;
          }}
          renderGroup={(params) => {
            return (
              <li key={params.key}>
                <h3
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "blue",
                  }}
                >
                  {params.group}
                </h3>
                <p>{params.children}</p>
              </li>
            );
          }}
        ></Autocomplete>
      </Stack>
    </>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
