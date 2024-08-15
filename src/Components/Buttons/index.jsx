import PropTypes from 'prop-types';

const Button = ({ type, title, disable, onClick }) => {
  return (
    <button
      className={`px-4 py-2 w-full text-white rounded ${
        (type === "add" && "btn-success bg-blue-400") ||
        (type === "delete" && "btn-danger bg-red-400") ||
        (type === "edit" && "btn-warning bg-yellow-400")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;