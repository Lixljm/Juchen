import React from "react"
import { Drawer, Button, Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class Myphone extends React.Component {
    state = { visible: false, placement: 'bottom' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                </RadioGroup>
                <p
                    onClick={this.showDrawer}
                    style={{margin:"none"}}
                >
                    客服帮助
                </p>
                <Drawer
                    title="客服帮助"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}

                >
                    <p>在线客服</p>
                    <p>客服电话:   9555566</p>
                </Drawer>
            </div>
        );
    }
}