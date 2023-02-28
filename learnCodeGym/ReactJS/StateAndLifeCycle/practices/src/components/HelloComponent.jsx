export default function HelloComponent() {
    const componentWillUnmount = () => {
        alert('The component is going to be unmounted');
    }
    return (
        <h1>Hello Word!!!</h1>
        
    );
     
}