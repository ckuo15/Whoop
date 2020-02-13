
import React from "react";
import { withRouter } from "react-router-dom";
import Business_searchCSS from '../../stylesheets/business_search.css';


class BusinessSearch extends React.Component {
    state = {
        searchValue: "",
        locationValue: "San Francisco, CA"
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.onChange(this.state.locationValue)
    };
    onSubmit = e => {
        e.preventDefault();
        const { push } = this.props.history;
        let { searchValue, locationValue } = this.state;
        locationValue = locationValue || "San Francisco, CA"
        push(`/search?businesses=${searchValue}&location=${locationValue}`)
    };

    render() {
        console.log(this.props.isMainPage);
        let myClass;
        if (this.props.isMainPage) myClass = "splash-searchbar";
        else myClass = "nav-searchbar";
        return (
            <div className={myClass}>
                <form onSubmit={this.onSubmit} className="form-inline">
                    <input
                        type="search"
                        className="form-control"
                        name="searchValue"
                        placeholder="Search for business"
                        value={this.state.searchValue}
                        onChange={this.onChange}
                        aria-label="Search"
                    />
                    <input 
                        type="search" 
                        className="map-search" 
                        name="locationValue" 
                        value={this.state.locationValue} 
                        onChange={this.onChange}
                    />
                    <button className='search' type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }
}
export default withRouter(BusinessSearch);