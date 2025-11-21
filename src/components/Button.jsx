

const Button = ({btnText , className}) => {
    return (
        <button className={`${className} bg-sky-400 mr-3 py-4 px-6 cursor-pointer text-2xl font-bold text-white rounded-lg hover:bg-gray-700 duration-300`}>{btnText}</button>
    )
}

export default Button




