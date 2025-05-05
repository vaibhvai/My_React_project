const InputForm = (props) => {
    console.log(props.users, 'pop')
    const { FormData, errors, setErrors, handleChange, handleSubmit } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <input
                    type="text"
                    name="firstName"
                    value={FormData.firstName}
                    placeholder="Name"
                    onChange={handleChange}
                />

                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                <input
                    type="text"
                    name="email"
                    value={FormData.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <input
                    type="text"
                    name="mobile"
                    value={FormData.mobile}
                    placeholder="Mobile No."
                    onChange={handleChange}
                />
                {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
                <input
                    type="text"
                    name="password"
                    value={FormData.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <input
                    type="text"
                    name="confirmPassword"
                    value={FormData.confirmPassword}
                    placeholder="confirmPassword"
                    onChange={handleChange}
                />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
                <button>Submit</button>
            </form>
        </>
    )
}
export default InputForm