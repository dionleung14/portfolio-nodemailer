import PokeGoDex from "../components/photos/portfolio-photos/PokeGoDex.png";

const pokegodex = {
  name: "PokeGoDex",
  image: PokeGoDex,
  headline: `PokéGoDex: a one-stop application to figure out if your
    favorite Pokémon from the main games is available in the hit
    mobile game Pokémon GO!`,
  repo: "https://bit.ly/3fn6iUX",
  deployed: "https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/",
  description: [
    `This frontend application largely combined two external APIs that
    allows users to cross-reference which Pokémon are in the
    mobile app Pokémon GO.`,
    `Users can search for Pokémon by their names, types, or
    generation, since there are over 800 of them now, and then check to
    see if they are available in the mobile game with a click of a
    button.`,
    `The CSS framework used was Bulma CSS, with a web animations API used
    for the spinning Pokéball logo. I was a full-stack developer
    in this project, getting involved with backend logic for performance
    issues, setting up the search functions, as well as desgining the
    cards that get populated with Pokémon information. Also
    featured heavily in the code was jQuery, and using ajax for our
    requests.`,
  ],
  collaborators: [
    {
      name: "Louis Coleman",
      github: "https://github.com/coleloui",
      linkedIn: "https://www.linkedin.com/in/louis-coleman/",
    },
    {
      name: "Paul Lee",
      github: "https://github.com/vb27",
      linkedIn: "https://www.linkedin.com/in/paul-lee-1737821a2/",
    },
    {
      name: "Marlon Jones",
      github: "https://github.com/mjones-27",
    },
  ],
};

export default pokegodex;
