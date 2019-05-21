import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    const imgSrc = `${POKE_API}/${id}.png`;
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
            {name}
          </Typography>
          <img src={imgSrc} alt={name} height="150px" />
          <Typography variant="subtitle1" align="center">
            Type: {type}
            <br />
            Exp: {exp}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Pokecard;
