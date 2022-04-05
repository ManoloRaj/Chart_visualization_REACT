import React from "react";
import logo from './images/logo.jpg';
export default class Leftbar extends React.Component{
    render(){
        return (
            <div className="leftbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div class="sous_menu">
                    <div className="Texte_MIS_Dev">
                        Base MIS Developpement
                    </div>
                    <div className="titre">
                        Gestion Ticketing 
                    </div>
                    <div className="menu">
                        <ul>
                            <a href="">
                                <li>Liste des tickets</li>
                            </a>
                            
                            <a href="">
                                <li>Cloturé</li>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}