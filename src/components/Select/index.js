import './style.css'

const Select = (props) => {

    const times = [
        'Programação', 
        'Front-End', 
        'Data Science', 
        'Devops', 
        'UX e Design', 
        'Mobile', 
        'Inovação e Gestão'
    ]


    return (
        <div className="select">
            <label>{props.label}</label>
            <select>
                {times.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select