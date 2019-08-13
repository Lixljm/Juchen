import {Drawer,List,NavBar,Icon} from 'antd-mobile'
import React,{Fragment} from "react"
import "../../../style/home/chouti.scss"
class Chouti extends React.Component{
      state={
          open:false,
          zIndex:10,
      }
    onOpenChange = (...args) => {
        console.log(args);
      this.setState({
         zIndex:9999999
      });
        this.setState({ open: !this.state.open });
    }
    render(){
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);
        return(
            <Fragment>
                <NavBar className={"tabl"} onLeftClick={this.onOpenChange}>筛选</NavBar>
                <Drawer
                    // width={"100px"}
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight,zIndex:this.state.zIndex}}
                    position={"right"}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop:100  }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    // dragHandleStyle={{width:"200px"}}
                >
                </Drawer>
            </Fragment>);
    }
}
export default Chouti;