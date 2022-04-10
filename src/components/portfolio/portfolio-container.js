import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component 
{
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my project",
            data: [
                {title: "Red Paladin"},
                {title: "Frequency Electronics"},
                {title: "USMC"},
            ]
        };
    }

    portfolioItems() {

        return this.state.data.map(i => {
            return <PortfolioItem  title={i.title} />;
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>


                {this.portfolioItems()}
            </div>
        )
    }
}