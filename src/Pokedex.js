import React, { Component } from 'react';
import Pokecard from './Pokecard';
import { Grid, Typography } from '@material-ui/core';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: '004', name: 'Charmander', type: 'fire', exp: 62 },
      { id: '007', name: 'Squirtle', type: 'water', exp: 63 },
      { id: '011', name: 'Metapod', type: 'bug', exp: 72 },
      { id: '004', name: 'Charmander', type: 'fire', exp: 62 },
      { id: '007', name: 'Squirtle', type: 'water', exp: 63 },
      { id: '011', name: 'Metapod', type: 'bug', exp: 72 },
      { id: '004', name: 'Charmander', type: 'fire', exp: 62 },
      { id: '007', name: 'Squirtle', type: 'water', exp: 63 },
      { id: '011', name: 'Metapod', type: 'bug', exp: 72 },
      { id: '004', name: 'Charmander', type: 'fire', exp: 62 },
      { id: '007', name: 'Squirtle', type: 'water', exp: 63 },
      { id: '011', name: 'Metapod', type: 'bug', exp: 72 }
    ]
  };
  render() {
    return (
      <Grid
        container
        justify="center"
        style={{ paddingBottom: '20px', background: '#eee' }}
      >
        <Grid
          item
          xs={8}
          container
          justify="center"
          style={{ padding: '40px' }}
        >
          <Typography variant="h4" color="primary">
            Pokedex
          </Typography>
        </Grid>
        <Grid item lg={8} md={6} container spacing={40}>
          {this.props.pokemon.map((p, i) => (
            <Grid item lg={4} md={6} container justify="center" key={i}>
              <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Pokedex;
