import "./players.css";

export const Players = ({count}) => {
    return (
        <>
            {count % 2 === 0 ? 
                <div id="players"> 
                    <div className="active">PLAYER 1</div>
                    <div className="inactive">PLAYER 2</div>
                </div> 
                :
                <div id="players"> 
                    <div className="inactive">PLAYER 1</div>
                    <div className="active">PLAYER 2</div>
                </div> 
            }
        </>
    )
}