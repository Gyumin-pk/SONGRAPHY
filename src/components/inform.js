import React, {Component, Fragment} from 'react'
import './inform.css';

class Inform extends Component {
    render(){
        return(
            <div className = "article">
                <div className = "popular">
                    <ol>
                        <h2>Popularity Ranking</h2>
                        <li>Most Popular Song - Singer</li>
                        <li>Second Most Popular Song - Singer</li>
                        <li>Third Most Popular Song - Singer</li>
                    </ol>
                </div>
                <div className = "unique">
                    <ol>
                        <h2>Unique Ranking</h2>
                        <li>Most Unique Song - Singer</li>
                        <li>Second Most Unique Song - Singer</li>
                        <li>Third Most Unique Song - Singer</li>
                    </ol>
                </div>
                <div className = "fashionable">
                    <ol>
                        <h2>Fashionate Ranking</h2>
                        <li>Most Fashionable Song - Singer</li>
                        <li>Second Most Fashionable Song - Singer</li>
                        <li>Third Most Fashionable Song - Singer</li>
                    </ol>
                </div>
           </div>
        )
    }
}

export default Inform;