import React from 'react'

const Boxes = (props) => {
    const { colorArray } = props;

    return (
        <div className='container'>
            {
                colorArray.map((color, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        height: '100px',
                        width: '100px',
                        margin: "10px",
                        background: color}}>
                    </div>))
            }
        </div>
    );
};

export default Boxes;