
import React, {useState} from 'react'

const FormBox = (props) => {
    const {colorArray, setColorArray} = props;
    const [ color, setColor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setColorArray([ ...colorArray, color]);
}
    return (
    <div className='container'>
        <form onSubmit={ handleSubmit } className='row m-2 g-3 mx-auto'>
            <div className='col-auto'>
                <label className="form-control"htmlFor="color">Color</label>
            </div>
            <div className='col-auto'>
                <input className="form-control" name="color" type="text" onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div className='col-auto'>
                <input type="submit" value="Add" className='btn btn-primary'/>
            </div>
        </form>
    </div>
    );
};

export default FormBox;