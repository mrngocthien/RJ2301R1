import { useState } from "react";

export default function CheckNumber(props) {
    if (props.number % 2 == 0) {
        return (
            <h1>{props.number} day la so chan</h1>
        )
    }
    return (
        <h1>{props.number} la so le</h1>
    )
}