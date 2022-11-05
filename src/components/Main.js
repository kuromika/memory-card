import React from "react";
import Card from "./Card";
import uniqid from "uniqid"

const Main = (props) => {

    return (
        <main>
            <div className="grid">
                {props.data.map((element) =>
                    <Card char={element}
                        shuffle={props.shuffle}
                        update={props.update}
                        key = {uniqid()}>
                    </Card>)
                }
            </div>
        </main>
    )
}

export default Main;