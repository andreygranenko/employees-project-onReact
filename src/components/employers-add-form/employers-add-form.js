import './employers-add-form.css'
import {Component} from "react";

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        const {onAdd} = this.props;
        // console.log(onAdd, maxId);

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onValueChange}
                           name="name"
                           value={name} />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           name="salary"
                           value={salary} />

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => {
                                e.preventDefault();
                                if (this.state.name && this.state.salary) {
                                    onAdd(this.state.name, this.state.salary)
                                }
                            }}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;