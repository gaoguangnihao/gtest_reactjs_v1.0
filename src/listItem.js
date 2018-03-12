import React from 'react';
import BaseComponent from './base/baseComponent';
import '../scss/listItem.scss';
import Service from './base/service';

export default class ListItem extends BaseComponent {

	constructor(props) {
		super(props);
		this.DEBUG = true;
		this.prefix = 'ListItem';

		this.state = {
			index: this.props.index
		}
	}

	onKeyDown(e) {
		this.debug("onKeyDown key:" + e.key);
		Service.request('onKeyDown', e.key);

	}
	render() {
		this.debug("render");
	    return <div id="list" className='listItem navigable' tabindex="-1"
	   	onKeyDown={(e) => this.onKeyDown(e)}
	    >
	    			<div className="statusbar-placeholder">item {this.state.index}</div>
	    		</div>
	}
}