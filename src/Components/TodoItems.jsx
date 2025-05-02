import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import untick from './Assets/untick.png'
import empty from './Assets/empty.png'


const TodoItems = ({no, display, text, setTodos}) => {

  const toggleTick = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos-data"))
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      
      if(data[index].no === no){
        if(data[index].display===""){
          data[index].display = "line-through"
        }
        else{
          data[index],display = "";
        }
        break;
      }
      
    }

    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className="todoitems-container" onClick={toggleTick(no)}>
        {display===""?<img className='image empty' src={empty} alt="" />:<img className='image tick' src={tick} alt="" />}

        <div className="todoitems-text">
          {text}
        </div>
        </div>
        <img className='image cross' src={untick} alt="" />
      
    </div>
  )
}

export default TodoItems
