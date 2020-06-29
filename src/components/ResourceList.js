import React from "react";
import useResources from './useResources'
  
  const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
  
    return (
      <ul>
        {resources.map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    );
  };
  
  export default ResourceList;


/*
//this useResources function will act like a reusable component which contains all hook related logic
const useResources = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
*/


/* // using Function Based Components with Hooks by refactoring the class based components
const ResourceList = ({resource}) => {
    const [resources , setResources] = useState([]);

const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data)
};

useEffect( () => {
    fetchResource(resource)
}, [resource] )

return(<ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>);
}


export default ResourceList;
*/

/* Using Class Based components

class ResourceList extends React.Component{

    state= {resources:[]}
async componentDidMount(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({resources: response.data})
}
async componentDidUpdate(prevProps){
    if(prevProps.resource !== this.props.resource){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        this.setState({resources: response.data})
    }
}
    render(){

        return(<div>{this.state.resources.length}</div>);
    }
}

export default ResourceList
*/
