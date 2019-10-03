import React, {Component} from 'react';
import './search-panel.css'

class SearchPanel extends Component {

    state = {
        condition: ''
    };

    onSearchChange = (e) => {
        const condition = e.target.value;
        this.setState({condition});
        this.props.onSearchChange(condition)
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={this.state.condition}
                   onChange={this.onSearchChange}
            />
        )
    };
}

export default SearchPanel;