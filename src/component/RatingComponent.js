import { Star, StarFill } from "react-bootstrap-icons";

const RatingComponent = (props) => {

    const mystyle = {
        color: "rgb(252, 186, 3)" ,
        fontSize: 25 
    };  
    
    if(props.data === 1) {
        return (
            <>
                <StarFill style={mystyle}></StarFill>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
            </>
        );
    } else if (props.data === 2) {
        return (
            <>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
            </>
        );
    } else if (props.data === 3) {
        return (
            <>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <Star style={mystyle}></Star>
                <Star style={mystyle}></Star>
            </>
        );
    } else if (props.data === 4) {
        return (
            <>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <Star style={mystyle}></Star>
            </>
        );
    } else if (props.data === 4) {
        return (
            <>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
                <StarFill style={mystyle}></StarFill>
            </>
        );
    } else {
        return (<>no ratings</>);
    }
};

export default RatingComponent;

