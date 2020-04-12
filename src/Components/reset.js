import React from "react";


function Reset(props) {
    return (
        <div>
            <form>
                {props.children}
                <button onClick={props.handleListReset}>
                    Reset
                </button>
            </form>
        </div>
    )
}




export default Reset;