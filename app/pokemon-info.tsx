"use client";

import { pokemonOptions } from "@/app/pokemon";
import { useQuery } from "@tanstack/react-query";

export function PokemonInfo() {
  const { data } = useQuery(pokemonOptions);
  if (!data) return <div>No data</div>;
  return (
    <div>
      <figure>
        <img src={data.sprites.front_shiny} height={200} alt={data.name} />
        <h2>I'm {data.name}</h2>
      </figure>
    </div>
  );
}
