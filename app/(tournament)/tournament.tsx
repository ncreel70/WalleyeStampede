import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getTournaments, seedTournaments } from "../../data/helpers";
import  TournamentModel  from "../../data/model/Tournament";
import { Model } from "@nozbe/watermelondb";

const Tournament: React.FC = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    seedTournaments();
    getTournaments().then((tournaments) => {
      setTournaments(tournaments);
    } );
  });
  
  

  return (
    <View>
      <Text>Tournament</Text>
      {tournaments.map((tournament) => (
        <Text key={tournament.id}>{tournament.name}</Text>
      ))}
    </View>
  );
};

export default Tournament;
