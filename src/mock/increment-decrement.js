import React from 'react';
export function Buttons(props) {

    return (
        <div class="row">
            <button onClick={props.onInc} type="button" class="btn btn-primary"><span class="glyphicon glyphicon-plus" /></button>
            {props.value}
            <button onClick={props.onDec} type="button" class="btn btn-primary"><span class="glyphicon glyphicon-minus" /></button>
            &nbsp;
            &nbsp;
            {
                props.showRemoveBtn ? (<button onClick={props.remove} type="button" class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash" /></button>) : null
            }
        </div>
    )
}
