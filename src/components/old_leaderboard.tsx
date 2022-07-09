import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./styles/LeaderboardStyles.sass";

interface TitleProps {
    apiURL: string,
    title?: string;
    subtitle?: string;
  }

  interface LeaderboardState {
    list: any[]
  }

 class OldLeaderboard extends Component<TitleProps, LeaderboardState> {
    constructor(props) {
      super(props);
      this.state = {
        list: []
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
            list: data.accounts
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
      let userlist = this.state.list.map((user, i) => <User username={ user.address } rank={ user.rating} img={ user.nfts[0].image } recent={ user.nfts.length } alltime={ user.rating } />);
  
      return (
        <div className="container">
          <LeaderboardHeader />
          <ColumnHeader onClickAll={this._clickAllTime} onClick={this._clickRecent}/>
          { userlist }
        </div>
      )
    }
  }
  
  const LeaderboardHeader = () => {
    return (
      <div className="leadheader">
          <h2>Leaderboard</h2>
      </div>
    )
  }
  
  const ColumnHeader = ({
    onClick,
    onClickAll
  }) => (
    <div className="row colheader">
        <div className="col-xs-1">
          <h4>#</h4>
        </div>
        <div className="col-xs-5">
          <h4>Name</h4>
        </div>
        <div className="col-xs-3 recent">
          <h4 onClick={onClick} >Last 30 days</h4>
        </div>
        <div className="col-xs-3 alltime">
          <h4 onClick={onClickAll} >All time</h4>
        </div>
      </div>
  );
  
  // ColumnHeader.propTypes = {
  //   onClick: React.PropTypes.func,
  //   onClickAll: React.PropTypes.func
  // }
  
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
  

  export default OldLeaderboard;