import React from "react";
import { Component } from "react";

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entry: ""
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }

    render() { 
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input
                                type="text"
                                placeholder="search..."
                                onChange={(event) => this.setState({ entry: event.target.value.toUpperCase() })}
                                value={this.state.entry}
                            />
                            <i className="search icon"> </i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;