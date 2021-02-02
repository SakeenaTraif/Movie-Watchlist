import { deleteMovie } from "../../store/actions"
import { useDispatch } from "react-redux";
// Styling
import { DeleteButtonStyled } from "../../styles";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteMovie(props.movieId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
