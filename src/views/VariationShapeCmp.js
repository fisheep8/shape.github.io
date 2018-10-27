import React,{ Component,PropTypes,PureComponent} from 'react';
import { connect } from 'react-redux';
import ShapeCmp from './ShapeCmp.js';
import './material.scss';
function VariationShapeCmp(WrappedComponent){
    class HOC extends Component{
        render(){
            return(
                <WrappedComponent {...this.props}>
                 <span className="arrowNoticebody">
                <span className="arrowNoticearrowOuter"></span>
                <span className="arrowText">try and click me!</span>
                </span>
                </WrappedComponent>
            )
        }
    }
    return HOC;
}
export default VariationShapeCmp(ShapeCmp);