
type GreetingProps = {
    name: string;
}
const Greeting : React.FC<GreetingProps> = ({name}) => {
    return <h2>Hello, {name}</h2>
}

export default Greeting;