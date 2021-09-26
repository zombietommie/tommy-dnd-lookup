const FrontPage = (props) => {
    const display = props.link;

    console.log(display);

    const { name, range, attack_type, casting_time, components, level } =
        display;

    return (
        <div>
            <h3>spell name: {name}</h3>
            <h3>range: {range}</h3>
            <h3>attack type: {attack_type}</h3>
            <h3>casting time: {casting_time}</h3>
            <h3>components: {components}</h3>
            <h3>lever: {level}</h3>
        </div>
    );
};

export default FrontPage;
