import Button from './Button'

const Main = ({onAdd, showAdd}) => {
    return (
        <div className='container p-3'>
            <h1>My First App</h1>
            {showAdd && <Button text='Modify' btnType='btn-outline-warning'/>}
            {showAdd && <Button text='Delete' btnType='btn-outline-danger'/>}
            <Button text={ showAdd ? 'Close' : 'Setup'} btnType={showAdd ? 'btn-outline-dark' : 'btn-outline-success'} onClick={onAdd}/>
        </div>
    )
}

export default Main
