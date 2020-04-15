import React from "react";


function Reset(props) {
    return (
        <div className="container">
            <form>
                {props.children}
                <button class="btn btn-danger" onClick={props.handleListReset}>
                    Reset List
                </button>
            </form>
            <span class="border border-bottom-5"></span>
        </div>
    )
}




export default Reset;