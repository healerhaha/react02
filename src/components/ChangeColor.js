
import { Component } from 'react';
import './ChangeColor.css';


class ChangeColor extends Component {
    // getInitialState(){
    //     return{
    //         color:'',
    //         bgColor:''
    //     }
    // }
    constructor(props) {
        super(props)
        this.state = {
            color:'',
            bgColor:''
        }
        this.colorVaule = this.colorVaule.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
    }
    colorVaule(e){
        console.log('e',e.target.value)
        this.setState({
            color:e.target.value
        })
    }
    setNewColor(e){
        console.log('llll',this.state.color)
        this.setState({
            bgColor:this.state.color
        })
        this._input.value = "";
        this._input.focus();//使用原生的input获取焦点的属性
        e.preventDefault();//不用与后台服务器交互，不用把数据发送给http 服务器
    }
    render(){
        // let squareStyle ={
        //     backgroudColor:'red'
        // }
        let squareStyle ={
            backgroudColor:this.state.bgColor
        }
        console.log('squareStyle',squareStyle)
        let self = this;//这里的this指向的是组件本身
        //ref获取dom节点，ref内的函数会在渲染时直接执行，ref机制能获取到原生的html对象
        return (
          <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>
            <form onSubmit={this.setNewColor}>
              <input 
              ref={
                  el =>{
                      self._input = el;
                  }
              } 
              onChange={this.colorVaule } 
              placeholder="please enter a color"/>
              <button type="submit">Show</button>
            </form>
          </div>
        );
    }
   
}

export default ChangeColor;
