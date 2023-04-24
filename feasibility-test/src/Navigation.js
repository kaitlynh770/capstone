import 'bootstrap/dist/css/bootstrap.min.css';
import './Website.scss';
import NavBarItem from './NavBarItem';
import logo from './img/jewlery.gif';


const Navigation =  ({setHomeState, homeState, setProcessState, processState, setStoryState, storyState,  setReasonsState, reasonsState}) => {  
  function clickHome(){
      setHomeState(true);
      setProcessState(false);
      setReasonsState(false);
      setStoryState(false);
  }
  function clickProcess(){
      setHomeState(false);
      setProcessState(true);
      setReasonsState(false);
      setStoryState(false);
  }
  function clickReasons(){
      setHomeState(false);
      setProcessState(false);
      setReasonsState(true);
      setStoryState(false);
  }
  function clickStory(){
      setHomeState(false);
      setProcessState(false);
      setReasonsState(false);
      setStoryState(true);
  }
  let smallLogo = {
    width: '60px',
    height: '50px'
  }
    return(
      <div className = 'top-bar'>
        <NavBarItem text = "Home" active = {homeState} onClick = {clickHome} />
        <NavBarItem text = "About" active = {storyState} onClick = {clickStory} />
        <NavBarItem text = "Process" active = {processState} onClick = {clickProcess} />
        <NavBarItem text = "Our Story" active = {reasonsState} onClick = {clickReasons} />
      </div>
    );
}
export default Navigation;