import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component 
{
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my project",
            isLoading: false,
            data: []
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
    getPortfolioItems()  {
        // Make a request for a user with a given ID
        axios.get('https://keshawnsmith.devcamp.space/portfolio/portfolio_items')
        .then(response =>  {
      // handle success
        console.log("response data", response);
        this.setState({
            data: response.data.portfolio_items
        })
        })
        .catch(error =>  {
      // handle error
        console.log(error);
        })
        .then(function () {
      // always executed
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
                <PortfolioItem  key={item.id} item={item} />
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }


return (
      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("Managed Service")}>
          Managed Service
        </button>
        <button className="btn" onClick={() => this.handleFilter("Corporate")}>
          Corporate
        </button>
        <button className="btn" onClick={() => this.handleFilter("Military")}>
          Military
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}