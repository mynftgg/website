import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styled from "styled-components";


const Wrapper = styled.div`
  text-align: center;
`;


interface TitleProps {
    apiURL: string,
    title?: string;
    subtitle?: string;
  }

  interface LeaderboardState {
    list: any[],
    collectionList: any[],
  }

 class Leaderboard extends Component<TitleProps, LeaderboardState> {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        collectionList: []
      }
      this._clickAllTime = this._clickAllTime.bind(this);
      this._clickRecent = this._clickRecent.bind(this);
    }
  
    componentDidMount() {
      const fetchInit: any = {
        method: 'GET',
        mode: 'cors'
      };
  
      fetch(`${ this.props.apiURL }`, fetchInit)
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(data => {
          console.log(data)
          this.setState({
            list: data.accounts,
            collectionList: data.collections
          });
        })
        .catch(err => console.log('fetch error : ', err))
    }
  
    _clickAllTime(e: any) {
      let sorted = this.state.list.sort((a, b) => b.alltime - a.alltime);
      this.setState({list: sorted});
    }
  
    _clickRecent(e : any) {
      let sorted = this.state.list.sort((a, b) => b.recent - a.recent);
      this.setState({list: sorted});
    }
  
    render() {
      return (
        <>
          <Wrapper>
            <h1>Player Leaderboard</h1>
        </Wrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Elo Rank</strong></TableCell>
                <TableCell align="right"><strong>Address</strong></TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.list.map((row: any) => (
                <TableRow
                  key={row.rating}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.rating}</TableCell>                  
                  <TableCell align="right">{row.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Wrapper>
            <h1>Collection Leaderboard</h1>
        </Wrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Elo Rank</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Boost</strong></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.collectionList.map((collection: any) => (
                <TableRow
                  key={collection.rank}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{collection.rank}</TableCell>                  
                  <TableCell >{collection.name}</TableCell>
                  <TableCell >{collection.boost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>        
        </>
      );
    }
  }
  
  const User = ({ rank, img, username, recent, alltime }) => {
    return (
      <div className="row users  vcenter">
          <div className="col-xs-1 rank">
            <h4>{ rank }</h4>
          </div>
          <div className="col-xs-5 name">
            <img src={ img } alt='avatar' /> <a href={`https://www.freecodecamp.com/${username}`}  target="_blank">{ username }</a>
          </div>
          <div className="col-xs-3">
            <h4>{ recent }</h4>
          </div>
        <div className="col-xs-3">
            <h4>{ alltime }</h4>
          </div>
        </div>
    )
  }
  
  // User.propTypes = {
  //   rank: React.PropTypes.number.isRequired,
  //   img: React.PropTypes.string.isRequired,
  //   username: React.PropTypes.string.isRequired,
  //   recent: React.PropTypes.number.isRequired,
  //   alltime: React.PropTypes.number.isRequired
  // }
  

  export default Leaderboard;