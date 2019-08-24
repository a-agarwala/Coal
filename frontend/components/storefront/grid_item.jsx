import React, { useState } from 'react';

// class GridItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {

//         return (
//             <div className="grid-item-wrapper">

//                 <div className="grid-item">

//                     <div className="grid-item-game-picture">
//                         <img src="http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--43244da365ea4d036f96e1b285ace0a2ae00b45a/tod1.jpg"/>
//                     </div>
                    
//                     <div className="grid-item-lower-bar">

//                     </div>

//                 </div>

//             </div>
//         )
//     }

// }

export default function GridItem(props) {
    return (
        <div className="grid-item-wrapper">

            <div className="grid-item" onClick={()=> props.history.push(`/game/${props.gameId}`)}>

                <div className="grid-item-game-picture">
                    <img src={props.photoUrl} />
                </div>

                <div className="grid-item-lower-bar">
                    <div className="grid-item-price">
                        ${((props.price) / 100).toFixed(2)}
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

// export default function GridItem(props) {
//     const [name, setName] = useState('Michael')
    
//     return (
//         <div>
//             <h1> {name} </h1>
//             <input type='text' onChange={(e) => setName(e.target.value)} value={name}/>
//         </div>
//     )
// }

// export default GridItem;