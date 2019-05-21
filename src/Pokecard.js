import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail';

class Pokecard extends Component {
  render() {
    const pokemon = { id: '004', name: 'Charmander', type: 'fire', exp: 62 };
    const imgSrc = `${POKE_API}/${pokemon.id}.png`;
    return (
      <Card style={{ maxWidth: '180px' }}>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="title" color="primary">
            {pokemon.name}
          </Typography>
          <img src={imgSrc} alt={pokemon.name} height="150px" />
          <Typography variant="subtitle1">
            Type: {pokemon.type}
            <br />
            Exp: {pokemon.exp}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Pokecard;
