import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component 
{
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my project",
            isLoading: false,
            data: [
                { title: "Red Paladin", category: "Managed Service", slug: 'red-paladin'},
                { title: "Frequency Electronics", category: "Corporate", slug: 'frequency-electronics'},
                { title: "USMC", category: "Military", slug: 'USMC'},
                { title: "LMS", category: "Managed Service", slug: 'LMS'},
            ]
        };
 
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data:  this.state.data.filter( item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(i => {
            return <PortfolioItem  title={i.title}  url={"google.com"} slug={item.slug} />;
        });
    }



    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Managed Service')}>Managed Service</button>
                <button onClick={() => this.handleFilter('Corporate')}>Corporate</button>
                <button onClick={() => this.handleFilter('Military')}>Military</button>

                {this.portfolioItems()}

            </div>
        )
    }
}